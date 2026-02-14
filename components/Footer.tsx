import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-16 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Address */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Locatie</h4>
          <p className="font-serif text-stone-800">Kerkstraat 24</p>
          <p className="font-serif text-stone-800">1017 GM Amsterdam</p>
          <a href="mailto:info@wijnbarclos.nl" className="font-sans text-sm text-stone-600 hover:text-wine-800 mt-2">info@wijnbarclos.nl</a>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Openingstijden</h4>
          <div className="flex justify-between w-full max-w-[200px] font-sans text-sm text-stone-600">
            <span>Wo - Do</span>
            <span>16:00 - 00:00</span>
          </div>
          <div className="flex justify-between w-full max-w-[200px] font-sans text-sm text-stone-600">
            <span>Vr - Za</span>
            <span>15:00 - 01:00</span>
          </div>
          <div className="flex justify-between w-full max-w-[200px] font-sans text-sm text-stone-600">
            <span>Zo</span>
            <span>15:00 - 23:00</span>
          </div>
        </div>

        {/* Social & CTA */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:text-wine-800 transition-colors">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
          <Button variant="outline" className="min-w-[160px]">
            Reserveer Tafel
          </Button>
        </div>

      </div>
      <div className="mt-16 text-center">
        <p className="text-stone-400 text-xs font-sans tracking-widest uppercase">© {new Date().getFullYear()} Wijnbar Clos</p>
      </div>
    </footer>
  );
};