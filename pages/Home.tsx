import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
import { WineStain } from '../components/WineStain';



const HeroSection = () => (
    <section className="relative min-h-screen w-full bg-brand-cream overflow-hidden flex flex-col items-center justify-center p-6 pb-24">

        {/* Wine Stain (Behind Left) */}
        <div className="absolute left-[-120px] md:left-[-15%] top-1/2 -translate-y-[55%] md:-translate-y-1/2 w-[450px] h-[450px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-90 z-0 bg-[#370028]" style={{ WebkitMaskImage: "url('/wine-stain-25.png')", maskImage: "url('/wine-stain-25.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskPosition: "center", maskPosition: "center", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }} aria-hidden="true" />

        {/* Centered Logo */}
        <div className="z-20 flex flex-col items-center text-center mt-[-5%]">
            <Logo className="w-[80vw] md:w-[600px] drop-shadow-lg" />
        </div>

        {/* Mobile Links (Bottom) */}
        <div className="md:hidden absolute bottom-12 left-0 w-full flex justify-center gap-8 z-30 text-brand-grey">
            <Link to="/menu?tab=menu" className="font-sans tracking-widest text-xs border-b border-white/10 pb-1">Menu</Link>
            <Link to="/menu?tab=wijn" className="font-sans tracking-widest text-xs border-b border-white/10 pb-1">Wijn</Link>
            <Link to="/contact" className="font-sans tracking-widest text-xs border-b border-white/10 pb-1">Contact</Link>
        </div>
    </section>
);







export const Home: React.FC = () => {
    return (
        <div className="fade-in">
            <HeroSection />

            {/* Instagram Section Placeholder */}
            <section className="bg-brand-cream border-t border-[#370028]/10 py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <p className="font-sans text-xs tracking-widest text-[#370028] uppercase mb-2">Sfeer & Gezelligheid</p>
                    <h2 className="font-sans text-2xl md:text-3xl text-[#370028] tracking-widest mb-10 flex items-center gap-3">
                        <Instagram size={28} strokeWidth={1.5} />
                        @wijnbarclos
                    </h2>

                    {/* Placeholder Grid using existing local images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        <img src="/images/gallery-update-4.jpg" alt="Instagram preview" className="w-full aspect-square object-cover transition-transform hover:scale-105 duration-300 shadow-sm" />
                        <img src="/images/272928076_240040804952134_5258158475876734953_n.jpg" alt="Instagram preview" className="w-full aspect-square object-cover transition-transform hover:scale-105 duration-300 shadow-sm" />
                        <img src="/images/270227255_257367406350177_1100061905620617192_n.jpg" alt="Instagram preview" className="w-full aspect-square object-cover transition-transform hover:scale-105 duration-300 shadow-sm" />
                        <img src="/images/273850683_491420409202332_6921264627057698718_n.jpg" alt="Instagram preview" className="w-full aspect-square object-cover transition-transform hover:scale-105 duration-300 shadow-sm" />
                    </div>

                    <a href="https://www.instagram.com/closamsterdam/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block border border-[#370028] text-[#370028] px-8 py-3 font-sans font-bold tracking-[0.2em] text-xs hover:bg-[#370028] hover:text-brand-cream transition-colors">
                        VOLG ONS
                    </a>
                </div>
            </section>
        </div>
    );
};