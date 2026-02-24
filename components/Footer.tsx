import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-[#370028] border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-brand-cream">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left">
          <div className="flex justify-center items-center">
            <Logo className="w-32 md:w-48 filter brightness-0 invert" />
          </div>

          <div className="flex flex-col border-t-2 md:border-t-0 md:border-l-2 border-brand-cream/60 pt-4 md:pt-0 md:pl-6 space-y-1">
            <span className="font-sans text-sm md:text-base tracking-widest uppercase font-bold text-brand-cream/90">
              Dinsdag - Zondag
            </span>
            <span className="font-sans text-sm md:text-base tracking-widest uppercase font-bold text-brand-cream/90">
              Beukenplein 50
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};