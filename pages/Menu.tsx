import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

export type FoodItem = {
    name: string;
    description?: string;
    price: number;
};

export type FoodCategory = {
    title: string;
    description?: string;
    items: FoodItem[];
};

const foodData: FoodCategory[] = [
    {
        title: "Winter menu",
        description: "vast menu | per tafel te bestellen",
        items: [
            { name: "Winter menu 3 gangen", price: 45 },
            { name: "Winter menu 4 gangen", price: 55 },
            { name: "Winter menu 5 gangen (inclusief kaas)", price: 65 },
        ]
    },
    {
        title: "Fingerfoods",
        items: [
            { name: "Oesters per stuk", price: 4.5 },
            { name: "Ierse oester", description: "schuim van gerookte paling", price: 7 },
            { name: "Jamón Ibérico", description: "cebo de campo", price: 17 },
            { name: "Rillettes van makreel", description: "lavas, granny smith", price: 10 },
            { name: "Kaaskroketjes van L'Etivaz", description: "4 stuks, bieslookmayonaise", price: 11 },
            { name: "Mantequilla olijven", price: 5 },
            { name: "Zuurdesem met boter", price: 6 },
            { name: "Kazen van Eriks", price: 16 },
        ]
    },
    {
        title: "Voorgerechten",
        items: [
            { name: "Gele biet", description: "spinazie créme, Colombo kerrie, krokante mais", price: 16 },
            { name: "Crudo van zeebaars", description: "duindoornbes, jalapeño, koriander", price: 17 },
            { name: "Steak tartaar", description: "tomatenkroepoek, mierikswortel", price: 16 },
            { name: "BBQ Spitskool", description: "Duxelles, hazelnoot, oude Stolwijker, beurre noisette dressing", price: 17 },
        ]
    },
    {
        title: "Hoofdgerechten",
        items: [
            { name: "Kabeljauw", description: "gestoofde prei, Hollandaise van zuurkool", price: 28 },
            { name: "Wilde paddenstoelen", description: "schorseneren, Belper Knolle, saus van gepofte knoflook", price: 26 },
            { name: "Kalfssukade", description: "gekarameliseerde sjalot , knolselderij créme, jus de veau", price: 28 },
        ]
    },
    {
        title: "Bijgerechten",
        items: [
            { name: "Little gem salade", description: "Dressing van dragon", price: 5 },
            { name: "Pommes frites", description: "huisgemaakte mayonaise", price: 6 },
        ]
    },
    {
        title: "Dessert",
        items: [
            { name: "Chocolade taartje", description: "amarena kersen, pecannoot, kersen sorbet", price: 12 },
            { name: "Kaas van buurman Erik’s", description: "4 kazen | rozijnenbrood", price: 16 },
            { name: "Wisselende crème brûlée", price: 10 },
        ]
    }
];

const WineItem = ({ wine }: { wine: Wine }) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-green-dark/10 pb-4 mb-6 group hover:bg-brand-contrast/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
                {wine.vintage && <span className="text-brand-contrast font-body text-sm font-bold">{wine.vintage}</span>}
                <h4 className="font-display text-xl text-brand-green-dark uppercase tracking-wide group-hover:text-brand-contrast transition-colors">{wine.name}</h4>
            </div>
            <p className="font-body text-brand-grey/80 italic text-sm mt-1">{wine.grapes}</p>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0 font-display text-lg text-brand-green-dark">
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-contrast uppercase tracking-widest mb-1">Glas</span>
                <span>€ {typeof wine.priceGlass === 'number' ? wine.priceGlass.toFixed(2) : wine.priceGlass}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-contrast uppercase tracking-widest mb-1">Fles</span>
                <span>€ {wine.priceBottle.toFixed(2)}</span>
            </div>
        </div>
    </div>
);

const FoodItemRow = ({ item }: { item: FoodItem }) => (
    <div className="flex justify-between items-baseline border-b border-brand-green-dark/10 pb-4 mb-4 group hover:bg-brand-contrast/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col max-w-[80%]">
            <h4 className="font-display text-xl text-brand-green-dark group-hover:text-brand-contrast transition-colors">{item.name}</h4>
            {item.description && <p className="font-body text-brand-grey/80 italic text-sm mt-1">{item.description}</p>}
        </div>
        <div className="font-display text-lg text-brand-green-dark">
            € {item.price.toFixed(2)}
        </div>
    </div>
);

import { useSearchParams } from 'react-router-dom';
import { WineFlipbook } from '../components/WineFlipbook';


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
                        {/* PDF / Image Viewer Placeholder */}
                        <div className="w-full max-w-4xl bg-[#370028] flex flex-col items-center">
                            <div className="w-full min-h-[600px] border border-brand-contrast/30 flex items-center justify-center p-8 text-center text-brand-cream/50 mb-16">
                                <p className="font-sans tracking-widest uppercase">[Wijnkaart PDF/Afbeeldingen worden hier getoond zodra aangeleverd]</p>
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
                    <div className="animate-fade-in space-y-20 max-w-5xl mx-auto">
                        {foodData.map((category, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16">
                                {/* Left Column: Vertical Title */}
                                <div className="md:w-1/4 flex md:justify-end">
                                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-brand-contrast uppercase tracking-[0.3em] text-center md:text-right border-b-2 md:border-b-0 md:border-r-2 border-brand-contrast/30 pb-2 md:pb-0 md:pr-4">
                                        {category.title === "Voorgerechten" ? "VOOR" :
                                            category.title === "Hoofdgerechten" ? "HOOFD" :
                                                category.title === "Bijgerechten" ? "ERBIJ" :
                                                    category.title === "Tussengerechten" ? "TUSSEN" :
                                                        category.title === "Dessert" ? "NA" :
                                                            category.title.toUpperCase()}
                                    </h3>
                                </div>

                                {/* Right Column: Items */}
                                <div className="md:w-3/4 flex flex-col gap-6 pt-2">
                                    {category.items.map((item, iIndex) => (
                                        <div key={iIndex} className="group cursor-default">
                                            <div className="flex justify-between items-baseline border-b border-brand-cream/10 pb-3">
                                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 max-w-[90%]">
                                                    <h4 className="font-sans text-lg md:text-xl text-brand-cream font-bold tracking-wide group-hover:text-brand-contrast transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    {item.description && (
                                                        <span className="hidden md:inline text-brand-contrast/50">•</span>
                                                    )}
                                                    {item.description && (
                                                        <p className="font-serif text-brand-cream/80 italic text-sm md:text-base font-light">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="font-sans text-lg text-brand-contrast font-bold whitespace-nowrap ml-4">
                                                    {item.price % 1 === 0 ? item.price : item.price.toFixed(1)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Spacer for bottom */}
            <div className="h-24"></div>
        </div>
    );
};
