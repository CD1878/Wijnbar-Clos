import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    : 'bg-brand-green-dark/95 backdrop-blur-sm text-brand-cream shadow-md border-b border-brand-gold/20';

  const logoColor = 'text-brand-cream'; // Always cream as logo is white/light image

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground} px-6 py-4 flex items-center justify-between`}>
        {/* Left: Hamburger */}
        <button
          onClick={toggleMenu}
          className="p-2 -ml-2 hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} className="text-brand-gold" /> : <Menu size={28} className="text-brand-cream" />}
        </button>

        {/* Center: Logo */}
        <Link to="/" className={`absolute left-1/2 transform -translate-x-1/2`}>
          <Logo className={`h-12 w-auto transition-colors duration-300 ${isOpen ? 'text-brand-green-dark' : logoColor}`} />
        </Link>

        {/* Right: Reserve */}
        <a
          href="#reserve"
          className={`hidden sm:inline-block px-6 py-2 border transition-all duration-300 text-xs tracking-widest uppercase font-body font-bold border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-green-dark`}
        >
          Reserveren
        </a>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-8 text-center">

          <Link to="/groepen" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-gold transition-all hover:scale-105 duration-300">Groepen</Link>
          <Link to="/wijnproeven" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-gold transition-all hover:scale-105 duration-300">Wijnproeven</Link>
          <Link to="/vacatures" onClick={toggleMenu} className="font-display text-4xl text-brand-green-dark hover:text-brand-gold transition-all hover:scale-105 duration-300">Vacatures</Link>

          <div className="w-12 h-px bg-brand-sand mx-auto my-8"></div>

          <div className="flex flex-col space-y-4 font-body text-sm tracking-widest text-brand-grey/70">
            <Link to="/menu" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Wijnkaart</Link>
            <Link to="/menu" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Menukaart</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Contact</Link>

            <div className="pt-4">
              <Link to="/contact" onClick={toggleMenu} className="px-8 py-3 bg-brand-green-dark text-brand-cream border border-brand-green-dark uppercase tracking-widest font-bold text-xs hover:bg-brand-gold hover:border-brand-gold hover:text-brand-green-dark transition-all">
                Reserveren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};