import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  // Background logic: Transparent at top of homepage, Solid cream elsewhere or when scrolled
  const isHome = location.pathname === '/';
  const navBackground = (isHome && !scrolled && !isOpen) ? 'bg-transparent text-white' : 'bg-stone-50 text-stone-900 shadow-sm';
  const logoColor = (isHome && !scrolled && !isOpen) ? 'text-white' : 'text-stone-900';
  const buttonColor = (isHome && !scrolled && !isOpen) ? 'white-outline' : 'outline';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackground} px-6 py-4 flex items-center justify-between`}>
        {/* Left: Hamburger */}
        <button 
          onClick={toggleMenu} 
          className="p-2 -ml-2 hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} className="text-stone-900" /> : <Menu size={28} />}
        </button>

        {/* Center: Logo */}
        <Link to="/" className={`absolute left-1/2 transform -translate-x-1/2 font-serif text-2xl tracking-widest font-bold uppercase ${isOpen ? 'text-stone-900' : logoColor}`}>
          Clos
        </Link>

        {/* Right: Reserve */}
        <a 
          href="#reserve" 
          className={`hidden sm:inline-block px-6 py-2 border transition-all duration-300 text-xs tracking-widest uppercase font-medium ${
            (isHome && !scrolled && !isOpen) 
              ? 'border-white text-white hover:bg-white hover:text-stone-900' 
              : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50'
          }`}
        >
          Reserveren
        </a>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          <Link to="/" className="font-serif text-4xl text-stone-900 hover:text-wine-800 transition-colors">Home</Link>
          <Link to="/groepen" className="font-serif text-4xl text-stone-900 hover:text-wine-800 transition-colors">Groepen</Link>
          <Link to="/wijnproeven" className="font-serif text-4xl text-stone-900 hover:text-wine-800 transition-colors">Wijnproeven</Link>
          <Link to="/vacatures" className="font-serif text-4xl text-stone-900 hover:text-wine-800 transition-colors">Vacatures</Link>
          
          <div className="w-12 h-px bg-stone-300 mx-auto my-8"></div>
          
          <div className="flex flex-col space-y-4 font-sans text-sm tracking-widest text-stone-500">
            <a href="#" className="hover:text-stone-900">Wijnkaart</a>
            <a href="#" className="hover:text-stone-900">Menukaart</a>
            <a href="#" className="hover:text-stone-900">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};