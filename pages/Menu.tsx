import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Wine = {
    name: string;
    grapes: string;
    priceGlass: number | string;
    priceBottle: number;
    vintage?: string;
    origin?: string; // Optional if we want to add later
};

type WineCategory = {
    title: string;
    wines: Wine[];
};

export const wineData: WineCategory[] = [
    {
        title: "Mousserend",
        wines: [
            {
                name: "Blankenhorn Crémant",
                grapes: "Auxerrois, Chardonnay, Weissburgunder",
                priceGlass: 10,
                priceBottle: 60,
            },
            {
                name: "Champagne André Chemin “Blanc des Noirs”",
                grapes: "Pinot Noir",
                priceGlass: 14.4,
                priceBottle: 85,
            }
        ]
    },
    {
        title: "Wit",
        wines: [
            {
                vintage: "2024",
                name: "Quinta Porrais Douro Branco",
                grapes: "Códega do Larinho, Rabigato, Verdelho, Viosinho",
                priceGlass: 6.2,
                priceBottle: 31,
            },
            {
                vintage: "2023",
                name: "François Chidaine Touraine",
                grapes: "Sauvignon Blanc",
                priceGlass: 9.4,
                priceBottle: 47,
            },
            {
                vintage: "2018",
                name: "Von Oetinger Riesling Alte Reben",
                grapes: "Riesling",
                priceGlass: 13.4,
                priceBottle: 67,
            },
            {
                vintage: "2024",
                name: "Stahlnagel Silvaner",
                grapes: "Silvaner",
                priceGlass: 7.4,
                priceBottle: 37,
            },
            {
                vintage: "2024",
                name: "Verus Furmint",
                grapes: "Furmint",
                priceGlass: 8.8,
                priceBottle: 44,
            },
            {
                vintage: "2024",
                name: "Fabrizio Vella Catarratto Orange",
                grapes: "Catarratto",
                priceGlass: 10.2,
                priceBottle: 51,
            },
            {
                vintage: "2024",
                name: "Leonardo Bussoletti Colle Ozio Grechetto",
                grapes: "Grechetto",
                priceGlass: 11.8,
                priceBottle: 58,
            },
            {
                vintage: "2023",
                name: "Cellier des Chartreux Côtes du Rhone",
                grapes: "Clairette, Grenache Blanc, Roussanne, Viognier",
                priceGlass: 8.4,
                priceBottle: 42,
            },
            {
                vintage: "2024",
                name: "I Pentri l’Amore della Api",
                grapes: "Fiano",
                priceGlass: 11.8,
                priceBottle: 59,
            },
            {
                vintage: "2023",
                name: "Sebastien Giroux Macon- Fuissé",
                grapes: "Chardonnay",
                priceGlass: 13.6,
                priceBottle: 68,
            }
        ]
    },
    {
        title: "Coravin Wit",
        wines: [
            {
                vintage: "2022",
                name: "Loïc Mahé Savennières Fougerais",
                grapes: "Chenin Blanc",
                priceGlass: 17.6,
                priceBottle: 88,
            },
            {
                vintage: "2023",
                name: "Domaine Séguinot Bordet Chablis 1er Cru Fourchaume",
                grapes: "Chardonnay",
                priceGlass: 17,
                priceBottle: 85,
            },
            {
                vintage: "2022",
                name: "Maison Bruyere et David Condrieu",
                grapes: "Viognier",
                priceGlass: 17.8,
                priceBottle: 89,
            },
            {
                vintage: "2020",
                name: "Domaine Vincent Latour Meursault",
                grapes: "Chardonnay",
                priceGlass: 24.8,
                priceBottle: 124,
            }
        ]
    },
    {
        title: "Rosé",
        wines: [
            {
                vintage: "2024",
                name: "Pfannebecker Rosé",
                grapes: "Cabernet Sauvignon, Schwarzriesling, Spätburgunder",
                priceGlass: 8.2,
                priceBottle: 42,
            }
        ]
    }
];

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
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-brand-green-dark/10 pb-4 mb-6 group hover:bg-brand-gold/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
                {wine.vintage && <span className="text-brand-gold font-body text-sm font-bold">{wine.vintage}</span>}
                <h4 className="font-display text-xl text-brand-green-dark uppercase tracking-wide group-hover:text-brand-gold transition-colors">{wine.name}</h4>
            </div>
            <p className="font-body text-brand-grey/80 italic text-sm mt-1">{wine.grapes}</p>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0 font-display text-lg text-brand-green-dark">
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-gold uppercase tracking-widest mb-1">Glas</span>
                <span>€ {typeof wine.priceGlass === 'number' ? wine.priceGlass.toFixed(2) : wine.priceGlass}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xs text-brand-gold uppercase tracking-widest mb-1">Fles</span>
                <span>€ {wine.priceBottle.toFixed(2)}</span>
            </div>
        </div>
    </div>
);

const FoodItemRow = ({ item }: { item: FoodItem }) => (
    <div className="flex justify-between items-baseline border-b border-brand-green-dark/10 pb-4 mb-4 group hover:bg-brand-gold/5 transition-colors p-3 -mx-3 rounded-lg">
        <div className="flex flex-col max-w-[80%]">
            <h4 className="font-display text-xl text-brand-green-dark group-hover:text-brand-gold transition-colors">{item.name}</h4>
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
    const [activeTab, setActiveTab] = useState<'wijn' | 'menu'>('wijn');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'menu') {
            setActiveTab('menu');
        } else if (tab === 'wijn') {
            setActiveTab('wijn');
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen pt-16 md:pt-20 bg-brand-cream fade-in">
            {/* Header */}
            <div className="bg-brand-green-dark py-12 md:py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots bg-repeat"></div>
                <h1 className="font-display text-4xl md:text-7xl text-brand-cream uppercase tracking-widest relative z-10 drop-shadow-md">Onze Kaart</h1>
                <p className="font-body text-brand-gold italic text-lg md:text-xl mt-3 md:mt-4 relative z-10">Ontdek onze selectie</p>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-20 z-30 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-gold/20 shadow-sm">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <button
                        onClick={() => setActiveTab('wijn')}
                        className={`px-6 py-4 md:px-8 md:py-6 font-display text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === 'wijn' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Wijnkaart
                        {activeTab === 'wijn' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`px-6 py-4 md:px-8 md:py-6 font-display text-base md:text-lg tracking-widest uppercase transition-all relative ${activeTab === 'menu' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Menukaart
                        {activeTab === 'menu' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {activeTab === 'wijn' ? (
                    <div className="animate-fade-in w-full">
                        <WineFlipbook />
                    </div>
                ) : (
                    <div className="animate-fade-in space-y-20">

                        {/* Intro / Chef's Note (Optional, keeping it if desired or removing for pure minimalism) */}
                        <div className="glass p-8 border border-brand-gold/20 bg-brand-gold/5 mb-16 text-center rounded-sm max-w-3xl mx-auto">
                            <h3 className="font-display text-2xl text-brand-green-dark mb-4 uppercase tracking-[0.2em]">Diner</h3>
                            <p className="font-body text-brand-grey/90 leading-relaxed italic font-light">
                                "Net als bij wijn vinden we het belangrijk om nieuwe smaken te ontdekken. Het steeds wisselende menu is geïnspireerd op de wijngebieden van onze wijnboeren."
                            </p>
                        </div>

                        {foodData.map((category, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16">
                                {/* Left Column: Vertical Title */}
                                <div className="md:w-1/4 flex md:justify-end">
                                    <h3 className="font-display text-2xl md:text-3xl text-brand-green-dark uppercase tracking-[0.3em] text-center md:text-right border-b-2 md:border-b-0 md:border-r-2 border-brand-gold/30 pb-2 md:pb-0 md:pr-4">
                                        {/* Auto-shorten specific titles for the aesthetic if needed, or use full title */}
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
                                            <div className="flex justify-between items-baseline border-b border-brand-sand/30 pb-3">
                                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 max-w-[90%]">
                                                    <h4 className="font-display text-lg md:text-xl text-brand-green-dark font-bold tracking-wide group-hover:text-brand-gold transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    {item.description && (
                                                        <span className="hidden md:inline text-brand-gold/50">•</span>
                                                    )}
                                                    {item.description && (
                                                        <p className="font-body text-brand-grey/70 italic text-sm md:text-base font-light">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="font-display text-lg text-brand-green-dark font-medium whitespace-nowrap ml-4">
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
        </div>
    );
};
