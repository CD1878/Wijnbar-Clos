import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b373e] py-12 md:py-16 px-6 border-t border-brand-gold/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">

        {/* Address */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">Contact</h4>
          <p className="font-serif text-brand-cream">Beukenplein 50</p>
          <p className="font-serif text-brand-cream">1091 ML Amsterdam</p>

          <div className="flex flex-col mt-4">
            <a href="mailto:social@closamsterdam.nl" className="font-sans text-sm text-brand-cream/80 hover:text-brand-gold"><span className="text-brand-cream">E:</span> <span className="underline decoration-brand-cream/50">social@closamsterdam.nl</span></a>
            <a href="tel:0207733043" className="font-sans text-sm text-brand-cream/80 hover:text-brand-gold"><span className="text-brand-cream">T:</span> <span className="underline decoration-brand-cream/50">020-7733043</span></a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">Openingstijden</h4>
          <div className="grid grid-cols-[100px_1fr] gap-4 font-sans text-sm text-brand-cream/80 text-left">
            <span>Maandag</span>
            <span>Gesloten</span>

            <span>Dinsdag</span>
            <span>17:00 - 23:00</span>

            <span>Woensdag</span>
            <span>17:00 - 23:00</span>

            <span>Donderdag</span>
            <span>17:00 - 00:00</span>

            <span>Vrijdag</span>
            <span>15:00 - 01:00</span>

            <span>Zaterdag</span>
            <span>15:00 - 01:00</span>

            <span>Zondag</span>
            <span>15:00 - 22:00</span>
          </div>
        </div>

        {/* Social & CTA */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <a href="https://www.instagram.com/closamsterdam/" target="_blank" rel="noopener noreferrer" className="text-brand-cream hover:text-brand-gold transition-colors">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
          <Button variant="outline" className="min-w-[160px] border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green-dark">
            Reserveer Tafel
          </Button>
        </div>

      </div>
      <div className="mt-8 md:mt-16 text-center">
        <p className="text-brand-gold/50 text-xs font-sans tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Wijnbar Clos. All rights reserved | Made by <a href="https://chefdigital.nl" target="_blank" className="hover:text-brand-gold transition-colors underline decoration-brand-gold/50 hover:decoration-brand-gold">Chef Digital</a>
        </p>
      </div>
    </footer>
  );
};