import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { X } from "lucide-react";



export const Menu: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<"wijn" | "menu">("wijn");
    const [currentWinePage, setCurrentWinePage] = useState(1);
    const totalWinePages = 25;
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
            {/* Navigation Tabs */}
            <div className="bg-[#370028] border-b border-brand-contrast/20 shadow-sm sticky top-[72px] z-40 transform-gpu">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <button
                        onClick={() => setActiveTab("wijn")}
                        className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === "wijn" ? "text-brand-cream" : "text-brand-cream/40 hover:text-brand-cream"}`}
                    >
                        Wijnkaart
                        {activeTab === "wijn" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("menu")}
                        className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === "menu" ? "text-brand-cream" : "text-brand-cream/40 hover:text-brand-cream"}`}
                    >
                        Menukaart
                        {activeTab === "menu" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {activeTab === "wijn" ? (
                    <div className="animate-fade-in w-full text-brand-cream flex flex-col items-center">
                        {/* Wijnkaart Pagination Viewer */}
                        <div className="w-full max-w-4xl bg-[#370028] flex flex-col items-center">

                            <div
                                className="w-full mb-8 flex flex-col items-center overflow-hidden drop-shadow-sm min-h-[500px]"
                                ref={menuContainerRef}
                            >
                                {/* Menukaart Current Image */}
                                <img
                                    key={`wijnkaart-${currentWinePage}`}
                                    src={`/wijnkaart-pages/wijnkaart-${currentWinePage}.png`}
                                    alt={`Wijnkaart Clos Pagina ${currentWinePage}`}
                                    className="w-full max-w-3xl h-auto object-contain bg-white cursor-pointer hover:opacity-95 transition-opacity"
                                    onClick={() => setLightboxImage(`/wijnkaart-pages/wijnkaart-${currentWinePage}.png`)}
                                />

                                {/* Pagination Controls */}
                                <div className="mt-8 flex items-center justify-between w-full max-w-3xl px-4 py-4 border-t border-brand-contrast/20">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={currentWinePage === 1}
                                        className={`font-sans tracking-[0.2em] uppercase text-xs md:text-sm font-bold flex items-center gap-2 transition-colors ${currentWinePage === 1 ? 'text-brand-cream/30 cursor-not-allowed' : 'text-brand-contrast hover:text-brand-cream'}`}
                                    >
                                        &larr; Vorige
                                    </button>

                                    <span className="font-serif italic text-brand-cream/70 text-sm md:text-base">
                                        Pagina {currentWinePage} van {totalWinePages}
                                    </span>

                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentWinePage === totalWinePages}
                                        className={`font-sans tracking-[0.2em] uppercase text-xs md:text-sm font-bold flex items-center gap-2 transition-colors ${currentWinePage === totalWinePages ? 'text-brand-cream/30 cursor-not-allowed' : 'text-brand-contrast hover:text-brand-cream'}`}
                                    >
                                        Volgende &rarr;
                                    </button>
                                </div>
                            </div>

                            {/* High Wine Section */}
                            <div className="max-w-3xl text-center space-y-6 mb-12">
                                <h2 className="font-sans text-2xl md:text-3xl uppercase tracking-widest text-brand-contrast mb-4">High Wine</h2>
                                <p className="font-serif text-lg leading-relaxed text-brand-cream/90">
                                    Kleine boeren. Bijzondere cuvées. Gerechten uit de open keuken. We schenken drie, vier of vijf glazen en serveren daarbij een serie kleine gerechten.
                                </p>
                                <p className="font-serif text-lg leading-relaxed text-brand-cream/90">
                                    De focus ligt op terroir en de juiste cuisson. We lichten toe wat er in het glas zit en waarom de combinatie op het bord klopt. De techniek is de basis, de wijn de leidraad.
                                </p>

                                <div className="py-6 border-y border-brand-contrast/20 my-8">
                                    <h3 className="font-sans text-brand-contrast uppercase tracking-widest text-sm mb-4">Tijden</h3>
                                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
                                        <p className="font-sans text-sm tracking-widest uppercase text-brand-cream/80"><span className="text-brand-contrast mr-2">Weekend:</span> 15:00 – 16:30 uur</p>
                                        <p className="font-sans text-sm tracking-widest uppercase text-brand-cream/80"><span className="text-brand-contrast mr-2">Doordeweeks:</span> 17:00 – 18:00 uur</p>
                                    </div>
                                </div>

                                <p className="font-sans text-lg font-bold uppercase tracking-widest text-brand-cream">Schuif aan.</p>
                            </div>

                            {/* Reserveren Link / Bar */}
                            <div className="w-full bg-[#744365] py-8 px-6 text-center mt-8">
                                <a href="#reserve" className="inline-block border border-brand-cream px-10 py-3 text-brand-cream hover:bg-brand-cream hover:text-[#744365] transition-colors font-sans uppercase tracking-[0.2em] text-sm font-bold">
                                    Reserveren
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
                                    className="w-full max-w-3xl h-auto object-contain drop-shadow-sm bg-white cursor-pointer hover:opacity-95 transition-opacity"
                                    onClick={() => setLightboxImage("/menukaart-clos.png")}
                                />
                            </div>

                        </div>
                    </div>
                )}
            </div>

            {/* Spacer for bottom */}
            <div className="h-24"></div>

            {/* Lightbox Overlay */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
                        onClick={() => setLightboxImage(null)}
                        aria-label="Close fullscreen"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Fullscreen Menu"
                        className="max-w-full max-h-[90vh] object-contain bg-white rounded-sm drop-shadow-2xl scale-in-center"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    />
                </div>
            )}
        </div>
    );
};
