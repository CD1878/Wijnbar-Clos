import { WineStain } from "../components/WineStain";
import React from 'react';
import { Button } from '../components/Button';
import { Input, TextArea } from '../components/FormElements';

export const Jobs: React.FC = () => {
 return (
 <div className="min-h-screen pt-24 md:pt-32 pb-12 px-6 fade-in max-w-3xl mx-auto bg-brand-cream">
                                                {/* Premium Abstract Wine Stain Texture (Top Right) */}
            <div className="fixed -right-[30%] md:-right-[15%] -top-[10%] md:-top-[20%] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-10 rotate-45 z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            
            {/* Premium Abstract Wine Stain Texture (Bottom Left) */}
            <div className="fixed -left-[30%] md:-left-[15%] -bottom-[10%] md:-bottom-[20%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] pointer-events-none select-none opacity-5 -rotate-12 scale-x-[-1] z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />
            <div className="fixed left-[-15%] bottom-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none select-none opacity-10 -rotate-45 z-0">
                <WineStain />
            </div>

 <header className="mb-10 md:mb-16 text-center">
 <h1 className="font-display text-3xl md:text-6xl text-brand-green-dark mb-4 md:mb-6">Werken bij Clos</h1>
 <p className="font-sans text-brand-grey max-w-xl mx-auto leading-relaxed font-light text-sm md:text-base">
 We zoeken altijd naar mensen met passie voor gastvrijheid en wijn.
 Heb jij oog voor detail en maak je het mensen graag naar de zin?
 </p>
 </header>

 <div className="bg-white p-6 md:p-12 border border-brand-sand/30 shadow-sm">
 <form className="flex flex-col space-y-5 md:space-y-6">
 <Input label="Naam" id="name" type="text" />
 <Input label="Email" id="email" type="email" />
 <Input label="Telefoon" id="phone" type="tel" />

 <div className="flex flex-col">
 <label htmlFor="job-select" className="mb-2 text-xs tracking-widest text-brand-grey/70 font-sans font-bold">Functie</label>
 <div className="relative">
 <select
 id="job-select"
 className="w-full bg-brand-cream/20 border-b border-brand-grey/30 py-3 text-brand-grey font-serif focus:outline-none focus:border-brand-contrast transition-colors appearance-none rounded-none"
 defaultValue=""
 >
 <option value="" disabled>Kies een functie...</option>
 <option value="bediening">Medewerker Bediening</option>
 <option value="manager">Restaurant Manager</option>
 <option value="chef">Chef de Partie</option>
 <option value="afwasser">Afwasser Gezocht</option>
 <option value="open">Open Sollicitatie</option>
 </select>
 <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-brand-grey/50">
 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
 <path d="M6 9l6 6 6-6" />
 </svg>
 </div>
 </div>
 </div>

 <TextArea label="Motivatie" id="motivation" placeholder="Waarom wil je bij Clos werken?" />

 <div className="flex flex-col mb-6 md:mb-8">
 <label className="mb-2 text-xs tracking-widest text-brand-grey/70 font-sans font-bold">CV Uploaden</label>
 <input type="file" className="block w-full text-sm text-brand-grey
 file:mr-4 file:py-2 file:px-4
 file:rounded-none file:border-0
 file:text-xs file:font-bold file: file:tracking-widest
 file:bg-brand-green-dark file:text-brand-cream
 hover:file:bg-brand-contrast hover:file:text-brand-green-dark
 file:transition-colors cursor-pointer
 "/>
 </div>

 <Button type="submit">Solliciteren</Button>
 </form>
 </div>
 </div>
 );
};