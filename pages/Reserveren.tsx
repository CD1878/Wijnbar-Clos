import { WineStain } from "../components/WineStain";
import React from 'react';
import { Button } from '../components/Button';
import { Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reserveren: React.FC = () => {
 return (
 <div className="min-h-screen pt-24 md:pt-32 bg-[#370028] relative transform-gpu">
                                                                                    {/* Premium Abstract Wine Stain Texture (Top Right) */}
            <div className="fixed -right-[30%] md:-right-[15%] top-[10%] md:-top-[20%] w-[450px] h-[450px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-[0.15] md:opacity-30 rotate-45 z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            
            {/* Premium Abstract Wine Stain Texture (Bottom Left) */}
            <div className="fixed -left-[30%] md:-left-[15%] bottom-[0%] md:-bottom-[20%] w-[450px] h-[450px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-10 md:opacity-20 -rotate-12 scale-x-[-1] z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            
            {/* Premium Abstract Wine Stain Texture (Bottom Left) */}
            <div className="fixed -left-[30%] md:-left-[15%] bottom-[0%] md:-bottom-[20%] w-[450px] h-[450px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-10 md:opacity-[0.15] -rotate-12 scale-x-[-1] z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            
            {/* Premium Abstract Wine Stain Texture (Bottom Left) */}
            <div className="fixed -left-[30%] md:-left-[15%] bottom-[0%] md:-bottom-[20%] w-[450px] h-[450px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-10 md:opacity-5 -rotate-12 scale-x-[-1] z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            
            {/* Premium Abstract Wine Stain Texture (Bottom Left) */}
            <div className="fixed -left-[30%] md:-left-[15%] -bottom-[10%] md:-bottom-[20%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-5 -rotate-12 scale-x-[-1] z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            <div className="fixed left-[-15%] bottom-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none select-none opacity-10 -rotate-45 z-0">
                <WineStain />
            </div>

 <div className="max-w-4xl mx-auto px-6 pb-24 text-brand-cream">

 <h1 className="font-sans text-5xl md:text-6xl tracking-widest font-bold mb-16 text-center drop-shadow-sm">
 Reserveren
 </h1>

 <div className="space-y-16">

 {/* Direct Reservation */}
 <div className="text-center md:text-left border border-brand-contrast/30 p-8 md:p-12 shadow-xl bg-white/5 backdrop-blur-sm">
 <p className="font-serif text-lg md:text-xl leading-relaxed mb-6">
 Kies voor een plek aan de bar of een tafel in het restaurant. Je reserveert direct via de widget. We houden de focus op het product en schenken wijnen van kleine boeren die we zelf selecteren.
 </p>
 <p className="font-serif text-lg mb-8 italic text-brand-cream/80">
 Wil je vandaag nog langskomen? Bel ons voor de actuele beschikbaarheid.
 <span className="block mt-2 font-sans not-italic">
 <a href="tel:0207733043" className="inline-flex items-center gap-2 text-brand-contrast hover:text-white transition-colors">
 <Phone size={18} />
 020-7733043
 </a>
 </span>
 </p>
 <a href="#reserve" className="inline-block border border-[#744365] bg-[#744365] text-brand-cream px-10 py-4 font-sans font-bold tracking-[0.2em] hover:bg-[#370028] hover:border-[#370028] hover:text-brand-cream transition-colors shadow-lg">
 Direct Reserveren
 </a>
 </div>

 {/* Groups */}
 <div className="text-center md:text-left border border-brand-contrast/30 p-8 md:p-12 shadow-xl bg-white/5 backdrop-blur-sm">
 <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
 <div className="bg-[#744365] p-4 text-brand-cream rounded-full shrink-0">
 <Users size={32} />
 </div>
 <div>
 <h2 className="font-sans text-2xl font-bold tracking-widest text-brand-contrast mb-4">Ben je met een groep?</h2>
 <p className="font-serif text-lg leading-relaxed mb-4">
 Vanaf 8 personen nemen we de organisatie van de middag of avond uit handen. Vul het formulier in voor een groepsreservering.
 </p>
 <p className="font-serif text-lg leading-relaxed mb-8">
 We nemen contact op over de samenstelling van het menu en de selectie cuvées. Zo staat de eerste fles koud en de keuken klaar zodra jullie binnenstappen.
 </p>
 <p className="font-sans font-bold tracking-widest mb-8 text-brand-contrast">
 Schuif aan.
 </p>
 <Link
 to="/contact"
 className="inline-block border border-[#744365] bg-[#744365] text-brand-cream px-10 py-4 font-sans font-bold tracking-[0.2em] hover:bg-[#370028] hover:border-[#370028] hover:text-brand-cream transition-colors shadow-lg"
 >
 Groepsreservering
 </Link>
 </div>
 </div>
 </div>

 </div>
 </div>
 </div>
 );
};
