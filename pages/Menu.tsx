import { WineStain } from "../components/WineStain";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { WineFlipbook } from "../components/WineFlipbook";


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
        <div className="min-h-screen pt-16 md:pt-24 bg-brand-cream fade-in transform-gpu">
            {/* Subtle Wine Stain Background */}
            <div className="fixed -right-[30%] md:-right-[15%] top-[10%] md:-top-[20%] w-[450px] h-[450px] md:w-[1200px] md:h-[1200px] pointer-events-none select-none opacity-[0.15] md:opacity-30 rotate-45 z-0 bg-[#370028]" style={{ WebkitMaskImage: "url('/wine-stain-25.png')", maskImage: "url('/wine-stain-25.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskPosition: "center", maskPosition: "center", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }} aria-hidden="true" />

            {/* Navigation Tabs */}
            <div className="bg-brand-cream border-b border-brand-contrast/20 shadow-sm sticky top-[72px] z-40 transform-gpu">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <button
                        onClick={() => setActiveTab("wijn")}
                        className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest transition-all relative ${activeTab === "wijn" ? "text-[#370028]" : "text-brand-grey/60 hover:text-[#370028]"}`}
                    >
                        Wijnkaart
                        {activeTab === "wijn" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("menu")}
                        className={`px-6 py-4 md:px-8 md:py-6 font-sans text-base md:text-lg tracking-widest transition-all relative ${activeTab === "menu" ? "text-[#370028]" : "text-brand-grey/60 hover:text-[#370028]"}`}
                    >
                        Menukaart
                        {activeTab === "menu" && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-contrast" />}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {activeTab === "wijn" ? (
                    <div className="animate-fade-in w-full text-[#370028] flex flex-col items-center gap-16 py-8">

                        {/* Wijnkaart Section (Embedded Flipbook) */}
                        <div className="w-full max-w-5xl flex flex-col items-center">
                            <WineFlipbook />
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in w-full flex flex-col items-center">
                        {/* Menukaart Image Viewer */}
                        <div className="w-full max-w-4xl bg-brand-cream flex flex-col items-center">

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
