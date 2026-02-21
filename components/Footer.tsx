import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: '#744365' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-brand-cream gap-8 font-sans">

        {/* Address & Contact */}
        <div className="flex flex-col items-center md:items-start text-sm space-y-1">
          <p className="font-bold tracking-widest uppercase mb-2">Clos Amsterdam</p>
          <p>Beukenplein 50, Amsterdam-Oost</p>
          <a href="tel:0207733043" className="hover:text-brand-contrast transition-colors">T: 020-7733043</a>
          <a href="mailto:social@closamsterdam.nl" className="hover:text-brand-contrast transition-colors">E: social@closamsterdam.nl</a>
        </div>

        {/* Social */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/closamsterdam/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
        </div>

        {/* Reserveren link/button */}
        <div className="flex flex-col items-center md:items-end text-sm">
          <p className="font-bold tracking-widest uppercase mb-2">Reserveren</p>
          <a href="#reserve" className="px-6 py-2 border border-brand-cream hover:bg-brand-cream hover:text-[#744365] transition-all tracking-widest uppercase text-xs">
            Reserveer Direct
          </a>
        </div>

      </div>

      <div className="mt-12 text-center text-xs text-brand-cream/60 font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Wijnbar Clos</p>
      </div>
    </footer>
  );
};