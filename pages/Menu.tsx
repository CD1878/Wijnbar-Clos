import { WineStain } from "../components/WineStain";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";



export const Menu: React.FC = () => {
 const [searchParams] = useSearchParams();
 const [activeTab, setActiveTab] = useState<"wijn" | "menu">("wijn");
 const [currentWinePage, setCurrentWinePage] = useState(1);
 const totalWinePages = 25;
 const menuContainerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const tab = searchParams.get("tab");
 if (tab === "menu") {
 setActiveTab("menu");
 } else if (tab === "wijn") {
 setActiveTab("wijn");
 }
 }, [searchParams]);

 const scrollToTop = () => {
 if (menuContainerRef.current) {
 // Calculate position with offset for the sticky header tabs (72px + padding)
 const y = menuContainerRef.current.getBoundingClientRect().top + window.scrollY - 140;
 window.scrollTo({ top: y, behavior: 'smooth' });
 }
 };

 const handleNextPage = () => {
 if (currentWinePage < totalWinePages) {
 setCurrentWinePage(prev => prev + 1);
 scrollToTop();
 }
 };

 const handlePrevPage = () => {
 if (currentWinePage > 1) {
 setCurrentWinePage(prev => prev - 1);
 scrollToTop();
 }
 };

 return (
 <div className="min-h-screen pt-16 md:pt-24 bg-[#370028] fade-in transform-gpu">
                                                                                                {/* Subtle Wine Stain Background */}
            <div className="fixed -right-[30%] md:-right-[15%] top-[10%] md:-top-[20%] w-[450px] h-[450px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-[0.15] md:opacity-30 rotate-45 z-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/wine-stain-25.png')" }} aria-hidden="true" />

 {/* Navigation Tabs */}
 <div className="bg-[#370028] border-b border-brand-contrast/20 shadow-sm sticky top-[72px] z-40 transform-gpu">
 <div className="max-w-4xl mx-auto flex justify-center">
 <button
 onClick={() => setActiveTab("wijn")}
 className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest transition-all relative ${activeTab === "wijn" ? "text-brand-cream" : "text-brand-cream/40 hover:text-brand-cream"}`}
 >
 Wijnkaart
 {activeTab === "wijn" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
 </button>
 <button
 onClick={() => setActiveTab("menu")}
 className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest transition-all relative ${activeTab === "menu" ? "text-brand-cream" : "text-brand-cream/40 hover:text-brand-cream"}`}
 >
 Menukaart
 {activeTab === "menu" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
 </button>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-6 py-16">
 {activeTab === "wijn" ? (
 <div className="animate-fade-in w-full text-brand-cream flex flex-col items-center gap-16 py-8">

 {/* Wijnkaart Section */}
 <div className="w-full max-w-3xl text-center flex flex-col items-center">
 <h2 className="font-sans text-3xl md:text-4xl tracking-widest text-brand-contrast mb-6">Wijnkaart</h2>
 <p className="font-serif text-lg leading-relaxed text-brand-cream/90 max-w-2xl mb-10">
 Ontdek onze uitgebreide selectie of bijzondere cuvées. Van frisse klassiekers tot complexe en verrassende vondsten, onze wijnkaart biedt voor ieder wat wils.
 </p>
 <a
 href="/wijnkaart-clos.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-block border border-brand-cream px-10 py-4 text-brand-cream hover:bg-brand-cream hover:text-[#370028] transition-colors font-sans tracking-[0.2em] text-sm font-bold shadow-lg"
 >
 Bekijk Wijnkaart
 </a>
 </div>

 {/* Divider */}
 <div className="w-24 h-px bg-brand-contrast/30"></div>

 {/* High Wine Section */}
 <div className="w-full max-w-3xl text-center flex flex-col items-center">
 <h2 className="font-sans text-3xl md:text-4xl tracking-widest text-brand-contrast mb-6">High Wine</h2>

 <div className="space-y-4 max-w-2xl mb-8">
 <p className="font-serif text-lg leading-relaxed text-brand-cream/90">
 Kleine boeren. Bijzondere cuvées. Gerechten uit de open keuken. We schenken drie, vier of vijf glazen en serveren daarbij een serie kleine gerechten.
 </p>
 <p className="font-serif text-lg leading-relaxed text-brand-cream/90">
 De focus ligt op terroir en de juiste cuisson. We lichten toe wat er in het glas zit en waarom de combinatie op het bord klopt. De techniek is de basis, de wijn de leidraad.
 </p>
 </div>

 <div className="py-6 border-y border-brand-contrast/20 w-full max-w-xl mb-10">
 <h3 className="font-sans text-brand-contrast tracking-widest text-sm mb-4">Tijden</h3>
 <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
 <p className="font-sans text-sm tracking-widest text-brand-cream/80"><span className="text-brand-contrast mr-2">Weekend:</span> 15:00 – 16:30 uur</p>
 <p className="font-sans text-sm tracking-widest text-brand-cream/80"><span className="text-brand-contrast mr-2">Doordeweeks:</span> 17:00 – 18:00 uur</p>
 </div>
 </div>

 <p className="font-sans text-lg font-bold tracking-widest text-brand-cream mb-6">Schuif aan.</p>

 {/* Reserveren Buttons */}
 <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
 <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=3-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#744365] px-10 py-4 text-brand-cream hover:bg-[#370028] transition-colors font-sans tracking-[0.2em] text-sm font-bold shadow-lg border border-[#744365] hover:border-[#370028]">
 3 Gangen
 </a>
 <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=4-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#744365] px-10 py-4 text-brand-cream hover:bg-[#370028] transition-colors font-sans tracking-[0.2em] text-sm font-bold shadow-lg border border-[#744365] hover:border-[#370028]">
 4 Gangen
 </a>
 <a href="https://reservations.formitable.com/clos-amsterdam/high-wine?tag=5-gangen" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#744365] px-10 py-4 text-brand-cream hover:bg-[#370028] transition-colors font-sans tracking-[0.2em] text-sm font-bold shadow-lg border border-[#744365] hover:border-[#370028]">
 5 Gangen
 </a>
 </div>

 </div>
 </div>
 ) : (
 <div className="animate-fade-in w-full flex flex-col items-center">
 {/* Menukaart Image Viewer */}
 <div className="w-full max-w-4xl bg-[#370028] flex flex-col items-center">

 <div className="w-full flex justify-center">
 <img
 src="/menukaart-clos.png"
 alt="Menukaart Wijnbar Clos"
 className="w-full max-w-3xl h-auto object-contain drop-shadow-sm"
 />
 </div>

 </div>
 </div>
 )}
 </div>

 {/* Spacer for bottom */}
 <div className="h-24"></div>
 </div>
 );
};
