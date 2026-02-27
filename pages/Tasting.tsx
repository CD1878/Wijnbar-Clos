import { WineStain } from "../components/WineStain";
import React from 'react';
import { Button } from '../components/Button';

const GlassInput = ({ label, ...props }: any) => (
 <div className="flex flex-col gap-2 mb-4">
 <label className="font-display text-brand-dark text-sm tracking-widest ">{label}</label>
 <input
 {...props}
 className="bg-white/40 border-b border-brand-dark/20 py-3 px-0 w-full font-body text-brand-dark focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/30"
 />
 </div>
);

const GlassTextArea = ({ label, ...props }: any) => (
 <div className="flex flex-col gap-2 mb-4">
 <label className="font-display text-brand-dark text-sm tracking-widest ">{label}</label>
 <textarea
 {...props}
 className="bg-white/40 border-b border-brand-dark/20 py-3 px-0 w-full font-body text-brand-dark focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/30 min-h-[120px]"
 />
 </div>
);

export const Tasting: React.FC = () => {
 return (
 <div className="min-h-screen pt-32 pb-24 px-6 fade-in bg-brand-cream/30 relative overflow-hidden">
                                                                                                {/* Subtle Wine Stain Background */}
            <div className="fixed -right-[30%] md:-right-[15%] top-[10%] md:-top-[20%] w-[450px] h-[450px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-[0.15] md:opacity-30 rotate-45 z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />

 {/* Background blobs for depth */}
 <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-brand-rose/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
 <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-brand-cream rounded-full blur-3xl -z-10"></div>

 <div className="max-w-7xl mx-auto">
 <h1 className="font-display text-4xl md:text-6xl text-brand-dark mb-8 md:mb-12 drop-shadow-sm text-center lg:text-left">Wijnproeven</h1>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

 {/* Info Side */}
 <div className="space-y-12 lg:sticky lg:top-32">
 <div className="space-y-16">
 <div className="glass p-8 border border-white/20 shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-500">
 <h3 className="font-display text-2xl text-brand-dark mb-4 tracking-wider">High Wine</h3>
 <div className="font-body text-brand-dark/80 leading-relaxed font-light space-y-4 mb-6">
 <p>
 Tijdens de High Wine verrassen we je met bijzondere wijnen van kleine wijnboeren en matchen deze met de lekkerste gerechtjes. Kies voor drie, vier of vijf gangen en wij nemen je mee op een reis door verschillende smaken. We leggen je uit waarom de wijn uniek is en waarom deze aansluit bij de gerechtjes.
 </p>
 <p>
 Een smaakvolle en gezellige ervaring te reserveren tussen 15:00 uur en 16:30 uur in het weekend en doordeweeks tussen 17:00 uur en 18:00 uur.
 </p>
 </div>
 <div className="flex flex-wrap gap-3">
 <Button variant="primary" className="text-xs py-3 px-4 tracking-widest">
 Reserveer 3 Gangen
 </Button>
 <Button variant="primary" className="text-xs py-3 px-4 tracking-widest">
 Reserveer 4 Gangen
 </Button>
 <Button variant="primary" className="text-xs py-3 px-4 tracking-widest">
 Reserveer 5 Gangen
 </Button>
 </div>
 </div>

 <div className="glass p-8 border border-white/20 shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-500">
 <h3 className="font-display text-2xl text-brand-red mb-4">Privé Proeverij</h3>
 <p className="font-body text-lg text-brand-dark/80 leading-relaxed font-light">
 Voor groepen vanaf 6 personen organiseren we proeverijen op maat, begeleid door onze sommelier.
 Leer over de herkomst, druiven en het verhaal achter de fles.
 </p>
 <div className="mt-4 pt-4 border-t border-brand-dark/10 flex justify-between items-center text-brand-dark/60 italic font-body">
 <span>Prijs op aanvraag</span>
 <span>Vanaf 6 personen</span>
 </div>
 </div>
 </div>

 <div className="rounded-none overflow-hidden h-[300px] shadow-xl relative group">
 <img
 src="/images/273850683_491420409202332_6921264627057698718_n.jpg"
 alt="Wine tasting"
 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
 </div>
 </div>

 {/* Form Side */}
 <div className="glass p-8 md:p-12 border border-white/20 shadow-2xl backdrop-blur-md bg-white/20">
 <h3 className="font-display text-2xl md:text-3xl text-brand-dark mb-8">Reserveer een proeverij</h3>
 <form className="flex flex-col">
 <GlassInput label="Naam" id="name" type="text" placeholder="Uw naam" />
 <GlassInput label="Email" id="email" type="email" placeholder="email@adres.nl" />

 <div className="grid grid-cols-2 gap-6">
 <GlassInput label="Aantal" id="guests" type="number" placeholder="2" />
 <GlassInput label="Datum" id="date" type="date" />
 </div>

 <div className="flex flex-col mb-6 gap-2">
 <label htmlFor="type" className="font-display text-brand-dark text-sm tracking-widest ">Type Proeverij</label>
 <div className="relative">
 <select id="type" className="w-full bg-white/40 border-b border-brand-dark/20 p-3 font-body text-brand-dark focus:outline-none focus:border-brand-red appearance-none cursor-pointer">
 <option value="high-wine">High Wine</option>
 <option value="prive">Privé Proeverij</option>
 <option value="other">Maatwerk / Anders</option>
 </select>
 <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/50">▼</div>
 </div>
 </div>

 <GlassTextArea label="Opmerkingen / Dieetwensen" id="message" placeholder="Allergieën?" />

 <div className="mt-6">
 <Button type="submit" variant="primary" className="w-full justify-center bg-brand-dark text-brand-cream hover:bg-brand-red border-brand-dark hover:border-brand-red">
 Aanvragen
 </Button>
 </div>
 </form>
 </div>

 </div>
 </div>
 </div>
 );
};