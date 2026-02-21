import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Background logic: Transparent at top of homepage, Solid Dark Green elsewhere or when scrolled
  const isHome = location.pathname === '/';
  const navBackground = (isHome && !scrolled && !isOpen)
    ? 'bg-transparent text-brand-cream'
    : 'bg-brand-green-dark/95 backdrop-blur-sm text-brand-cream shadow-md border-b border-brand-contrast/20';

  const logoColor = 'text-brand-cream'; // Always cream as logo is white/light image

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground} px-6 py-4 flex justify-center`}>
        <div className="w-full max-w-7xl flex items-center justify-between relative">

          {/* Mobile: Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -ml-2 hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} className="text-brand-cream" /> : <Menu size={28} className="text-brand-cream" />}
          </button>

          {/* Desktop Left (Empty space to balance if needed, but flex-1 balances center automatically) */}
          <div className="hidden md:flex flex-1"></div>

          {/* Desktop Center Nav */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-12">
            <Link to="/menu?tab=menu" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-brand-contrast transition-colors">Menu</Link>
            <Link to="/menu?tab=wijn" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-brand-contrast transition-colors">Wijn</Link>
            <Link to="/contact" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-brand-contrast transition-colors">Contact</Link>
            <a href="#reserve" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-brand-contrast transition-colors">Reserveren</a>
          </div>

          {/* Desktop Right Nav (Socials in Corner) */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <a href="https://www.instagram.com/closamsterdam/" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-contrast transition-colors">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Reserve (Visible only on Mobile if needed, but usually we hide it in favor of hamburger or keep it small) */}
          <Link
            to="/reserveren"
            className="px-6 py-2 border transition-all duration-300 text-xs tracking-[0.2em] uppercase font-body font-bold border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-[#370028]"
          >
            Reserveren
          </Link>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-8 text-center">

          <Link to="/groepen" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-contrast transition-all hover:scale-105 duration-300">Groepen</Link>
          <Link to="/wijnproeven" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-contrast transition-all hover:scale-105 duration-300">Wijnproeven</Link>
          <Link to="/vacatures" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-contrast transition-all hover:scale-105 duration-300">Vacatures</Link>

          <div className="w-12 h-px bg-brand-sand mx-auto my-8"></div>

          <div className="flex flex-col space-y-4 font-body text-sm tracking-widest text-brand-grey/70">
            <Link to="/menu?tab=wijn" onClick={toggleMenu} className="hover:text-brand-contrast transition-colors">Wijnkaart</Link>
            <Link to="/menu?tab=menu" onClick={toggleMenu} className="hover:text-brand-contrast transition-colors">Menukaart</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-brand-contrast transition-colors">Contact</Link>

            <div className="pt-4">
              <Link to="/reserveren" onClick={toggleMenu} className="px-8 py-3 bg-[#370028] text-brand-cream border border-[#370028] uppercase tracking-widest font-bold text-xs hover:bg-brand-contrast hover:border-brand-contrast hover:text-brand-cream transition-all inline-block">
                Reserveren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};