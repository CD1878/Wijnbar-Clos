import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 px-6 bg-[#370028] border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-brand-cream gap-8 font-sans">

        {/* Copyright/Left side */}
        <div className="flex-1 flex justify-center md:justify-start">
          <p className="text-xs tracking-widest uppercase text-brand-cream/60">
            &copy; {new Date().getFullYear()} Wijnbar Clos
          </p>
        </div>

        {/* Right Action Block (Instagram + Reserveren) */}
        <div className="flex-1 flex justify-center md:justify-end items-center gap-4">
          <a
            href="https://www.instagram.com/closamsterdam/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-[#370028] transition-colors flex items-center justify-center rounded-md"
          >
            <Instagram size={20} strokeWidth={2} />
          </a>
          <Link
            to="/reserveren"
            className="px-8 py-3 border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-[#370028] transition-all tracking-[0.2em] uppercase text-xs md:text-sm font-bold"
          >
            Reserveren
          </Link>
        </div>

      </div>
    </footer>
  );
};