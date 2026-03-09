import React from 'react';
import { WineStain } from '../components/WineStain';
import { Link } from 'react-router-dom';

export const HighWine: React.FC = () => {
    return (
        <div className="min-h-screen pt-16 md:pt-24 bg-brand-cream fade-in transform-gpu relative overflow-hidden flex flex-col items-center">

            {/* Top Right Background Stain */}
            <div className="fixed -right-[30%] md:-right-[15%] top-[10%] md:-top-[20%] w-[450px] h-[450px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-[0.15] md:opacity-30 rotate-45 z-0 bg-[#370028]" style={{ WebkitMaskImage: "url('/wine-stain-25.png')", maskImage: "url('/wine-stain-25.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskPosition: "center", maskPosition: "center", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }} aria-hidden="true" />

            <div className="w-full max-w-7xl mx-auto px-6 pt-16 md:pt-24 z-10 flex flex-col items-center text-center">

                <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl text-[#370028] mb-8 font-normal tracking-wide drop-shadow-sm">
                    High Wine
                </h1>

                <p className="font-serif text-lg leading-relaxed text-brand-grey max-w-2xl mb-12">
                    Of het nu iets te vieren is, je gewoon zin hebt in wat extra's, of als perfecte start van de avond:
                    onze High Wine verrast je met bijzondere gerechten en zorgvuldig geselecteerde wijnen.
                </p>

                <div className="w-full max-w-3xl bg-transparent p-6 md:p-12 border border-[#370028]/10 shadow-sm relative overflow-hidden bg-white/50 backdrop-blur-sm">
                    <h2 className="font-sans text-2xl text-[#370028] tracking-widest mb-6 font-bold">ONTDEK & PROEF</h2>

                    <p className="font-serif text-brand-grey text-lg leading-relaxed mb-6">
                        Laat je meenemen op een culinaire reis waarbij elke gang wordt begeleid door een perfect passend glas wijn,
                        met liefde ingeschonken en toegelicht door onze sommeliers.
                    </p>

                    <div className="mb-8 space-y-3 border-t border-b border-[#370028]/10 py-6 my-8">
                        <div className="flex justify-between items-center text-[#370028]">
                            <p className="font-sans text-sm tracking-widest font-bold">3 Gangen</p>
                            <p className="font-sans text-sm tracking-widest font-bold text-brand-grey/80">Incl. bijpassende wijnen</p>
                        </div>
                        <div className="flex justify-between items-center text-[#370028]">
                            <p className="font-sans text-sm tracking-widest font-bold">4 Gangen</p>
                            <p className="font-sans text-sm tracking-widest font-bold text-brand-grey/80">Incl. bijpassende wijnen</p>
                        </div>
                        <div className="flex justify-between items-center text-[#370028]">
                            <p className="font-sans text-sm tracking-widest font-bold">5 Gangen</p>
                            <p className="font-sans text-sm tracking-widest font-bold text-brand-grey/80">Incl. bijpassende wijnen</p>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <p className="font-sans text-xs tracking-widest text-brand-grey/80 uppercase mb-2">Aanvangstijden High Wine</p>
                        <p className="font-sans text-sm tracking-widest text-brand-grey"><span className="text-[#370028] mr-2">Weekend:</span> 12:00 – 16:30 uur</p>
                        <p className="font-sans text-sm tracking-widest text-brand-grey"><span className="text-[#370028] mr-2">Doordeweeks:</span> 17:00 – 18:00 uur</p>
                    </div>

                    <p className="font-sans text-lg font-bold tracking-widest text-[#370028] mb-8">Schuif aan.</p>

                    {/* Reserveren Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                        <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=3-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-contrast px-8 py-3 text-[#FBF9F6] hover:opacity-80 transition-opacity font-sans tracking-[0.2em] text-xs md:text-sm font-bold shadow-sm">
                            3 GANGEN
                        </a>
                        <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=4-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-contrast px-8 py-3 text-[#FBF9F6] hover:opacity-80 transition-opacity font-sans tracking-[0.2em] text-xs md:text-sm font-bold shadow-sm">
                            4 GANGEN
                        </a>
                        <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=5-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-contrast px-8 py-3 text-[#FBF9F6] hover:opacity-80 transition-opacity font-sans tracking-[0.2em] text-xs md:text-sm font-bold shadow-sm">
                            5 GANGEN
                        </a>
                    </div>
                </div>

            </div>
            {/* Spacer for bottom */}
            <div className="h-32"></div>
        </div>
    );
};
