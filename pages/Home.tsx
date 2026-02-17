import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
import { WineStain } from '../components/WineStain';



const HeroSection = () => (
  <section className="relative min-h-[90vh] w-full bg-[#370028] overflow-hidden flex flex-col items-center justify-center p-6">

    {/* Realistic SVG Wine Stains (Left) */}
    <div className="absolute left-[5%] top-[45%] -translate-y-1/2 w-[700px] h-[700px] pointer-events-none select-none">
      {/* Layered stains for depth */}
      <WineStain className="w-[500px] h-[500px] top-0 left-0" color="#591c35" opacity={0.6} rotation={15} scale={1.2} />
      <WineStain className="w-[400px] h-[400px] top-[100px] left-[100px]" color="#591c35" opacity={0.4} rotation={-20} scale={0.8} />
      <WineStain className="w-[200px] h-[200px] top-[300px] left-[-50px]" color="#591c35" opacity={0.3} rotation={45} scale={1.5} />

      {/* Extra splatters */}
      <div className="absolute top-[20%] left-[40%] text-[#591c35] opacity-50 text-4xl blur-[1px]">•</div>
      <div className="absolute bottom-[30%] right-[40%] text-[#591c35] opacity-60 text-2xl">•</div>
    </div>



    {/* Centered Logo */}
    <div className="z-20 flex flex-col items-center text-center">
      <Logo className="w-[50vw] md:w-[280px] h-auto text-white brightness-200 drop-shadow-2xl opacity-95" />
      <span className="font-display text-brand-gold/80 text-sm md:text-lg tracking-[0.6em] uppercase mt-6 ml-2">
        Gastro Wijnbar
      </span>

      {/* Reserve Button */}
      <div className="mt-16">
        <Link to="#reserve">
          <Button variant="primary" className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark border-none py-3 px-10 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            Reserveren
          </Button>
        </Link>
      </div>
    </div>

    {/* Mobile Links (Bottom) */}
    <div className="md:hidden absolute bottom-12 left-0 w-full flex justify-center gap-8 z-30 text-brand-cream/80">
      <Link to="/menu?tab=menu" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Menu</Link>
      <Link to="/menu?tab=wijn" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Wijn</Link>
      <Link to="/contact" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Contact</Link>
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