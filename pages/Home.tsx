import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
import { WineStain } from '../components/WineStain';



const HeroSection = () => (
  <section className="relative min-h-screen w-full bg-[#370028] overflow-hidden flex flex-col items-center justify-center p-6 pb-24">

    {/* Wine Stain (Left) */}
    <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none select-none opacity-80">
      <img src="/Ontwerp zonder titel (24).png" alt="" className="w-full h-full object-contain drop-shadow-2xl" />
    </div>

    {/* Centered Logo */}
    <div className="z-20 flex flex-col items-center text-center mt-[-5%]">
      <img src="/logo-tro-wijba.png" alt="Clos Gastro Wijnbar" className="w-[80vw] md:w-[600px] h-auto object-contain drop-shadow-lg" />
    </div>

    {/* Mobile Links (Bottom) */}
    <div className="md:hidden absolute bottom-12 left-0 w-full flex justify-center gap-8 z-30 text-brand-cream/80">
      <Link to="/menu?tab=menu" className="font-sans uppercase tracking-widest text-xs border-b border-white/10 pb-1">Menu</Link>
      <Link to="/menu?tab=wijn" className="font-sans uppercase tracking-widest text-xs border-b border-white/10 pb-1">Wijn</Link>
      <Link to="/contact" className="font-sans uppercase tracking-widest text-xs border-b border-white/10 pb-1">Contact</Link>
    </div>
  </section>
);







export const Home: React.FC = () => {
  return (
    <div className="fade-in">
      <HeroSection />



    </div>
  );
};