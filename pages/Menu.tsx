import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";



export const Menu: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<"wijn" | "menu">("wijn");

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab === "menu") {
            setActiveTab("menu");
        } else if (tab === "wijn") {
            setActiveTab("wijn");
        }
    }, [searchParams]);

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
                        {/* Wijnkaart PDF Viewer */}
                        <div className="w-full max-w-4xl bg-[#370028] flex flex-col items-center">

                            <div className="w-full border border-brand-contrast/30 mb-8 overflow-hidden bg-brand-cream/5 flex flex-col items-center">
                                {/* Fallback/Mobile download link above iframe for convenience */}
                                <div className="p-4 md:hidden w-full text-center border-b border-brand-contrast/20">
                                    <a href="/wijnkaart-clos.pdf" target="_blank" className="font-sans text-brand-cream uppercase tracking-widest text-xs border border-brand-contrast px-4 py-2 hover:bg-brand-contrast hover:text-[#370028] transition-colors inline-block">
                                        Open Wijnkaart PDF
                                    </a>
                                </div>
                                <iframe
                                    src="/wijnkaart-clos.pdf#view=FitH"
                                    className="w-full h-[70vh] min-h-[600px]"
                                    title="Wijnkaart PDF"
                                ></iframe>
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
                    <div className="animate-fade-in w-full text-brand-cream flex flex-col items-center">
                        {/* Menukaart PDF Viewer */}
                        <div className="w-full max-w-4xl bg-[#370028] flex flex-col items-center">

                            <div className="w-full border border-brand-contrast/30 overflow-hidden bg-brand-cream/5 flex flex-col items-center">
                                {/* Fallback/Mobile download link */}
                                <div className="p-4 md:hidden w-full text-center border-b border-brand-contrast/20">
                                    <a href="/menukaart-clos.pdf" target="_blank" className="font-sans text-brand-cream uppercase tracking-widest text-xs border border-brand-contrast px-4 py-2 hover:bg-brand-contrast hover:text-[#370028] transition-colors inline-block">
                                        Open Menukaart PDF
                                    </a>
                                </div>
                                <iframe
                                    src="/menukaart-clos.pdf#view=FitH"
                                    className="w-full h-[70vh] min-h-[600px]"
                                    title="Menukaart PDF"
                                ></iframe>
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
