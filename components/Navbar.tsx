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

 // Background logic: Always use the consistent #370028 background 
 const isHome = location.pathname === '/';
 const navBackground = (isHome && !scrolled && !isOpen)
 ? 'bg-transparent text-brand-cream'
 : 'bg-[#370028] text-brand-cream shadow-md border-b border-brand-contrast/20';

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
 <Link to="/" className="text-sm font-bold tracking-[0.2em] hover:text-brand-contrast transition-colors">Home</Link>
 <Link to="/menu?tab=menu" className="text-sm font-bold tracking-[0.2em] hover:text-brand-contrast transition-colors">Menu</Link>
 <Link to="/menu?tab=wijn" className="text-sm font-bold tracking-[0.2em] hover:text-brand-contrast transition-colors">Wijn</Link>
 <Link to="/contact" className="text-sm font-bold tracking-[0.2em] hover:text-brand-contrast transition-colors">Contact</Link>
 <Link to="/reserveren" className="text-sm font-bold tracking-[0.2em] hover:text-brand-contrast transition-colors">Reserveren</Link>
 </div>

 {/* Desktop Right Nav (Socials in Corner) */}
 <div className="hidden md:flex flex-1 justify-end items-center mr-4">
 <a href="https://www.instagram.com/closamsterdam/" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-contrast transition-colors p-2">
 <Instagram size={24} strokeWidth={1.5} />
 </a>
 </div>
 </div>
 </nav>

 {/* Fullscreen Overlay Menu */}
 <div
 className={`fixed inset-0 bg-brand-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
 }`}
 >
 <div className="flex flex-col space-y-10 text-center">

 <Link to="/" onClick={toggleMenu} className="font-display text-4xl text-[#370028] hover:text-brand-contrast transition-all hover:scale-105 duration-300">Home</Link>
 <Link to="/menu?tab=menu" onClick={toggleMenu} className="font-display text-4xl text-[#370028] hover:text-brand-contrast transition-all hover:scale-105 duration-300">Menu</Link>
 <Link to="/menu?tab=wijn" onClick={toggleMenu} className="font-display text-4xl text-[#370028] hover:text-brand-contrast transition-all hover:scale-105 duration-300">Wijn</Link>
 <Link to="/contact" onClick={toggleMenu} className="font-display text-4xl text-[#370028] hover:text-brand-contrast transition-all hover:scale-105 duration-300">Contact</Link>

 <div className="pt-8">
 <Link to="/reserveren" onClick={toggleMenu} className="px-10 py-4 bg-[#744365] text-brand-cream border-none tracking-[0.2em] font-sans font-bold text-sm hover:bg-[#370028] hover:text-brand-cream transition-colors shadow-lg inline-block">
 Reserveren
 </Link>
 </div>

 </div>
 </div>
 </>
 );
};