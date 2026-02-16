import React, { useState } from 'react';

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

const wineData: WineCategory[] = [
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

export const Menu: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'wijn' | 'menu'>('wijn');

    return (
        <div className="min-h-screen pt-20 bg-brand-cream fade-in">
            {/* Header */}
            <div className="bg-brand-green-dark py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots bg-repeat"></div>
                <h1 className="font-display text-5xl md:text-7xl text-brand-cream uppercase tracking-widest relative z-10 drop-shadow-md">Onze Kaart</h1>
                <p className="font-body text-brand-gold italic text-xl mt-4 relative z-10">Ontdek onze selectie</p>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-20 z-30 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-gold/20 shadow-sm">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <button
                        onClick={() => setActiveTab('wijn')}
                        className={`px-8 py-6 font-display text-lg tracking-widest uppercase transition-all relative ${activeTab === 'wijn' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Wijnkaart
                        {activeTab === 'wijn' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`px-8 py-6 font-display text-lg tracking-widest uppercase transition-all relative ${activeTab === 'menu' ? 'text-brand-green-dark' : 'text-brand-grey/40 hover:text-brand-green-dark'}`}
                    >
                        Menukaart
                        {activeTab === 'menu' && <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-gold"></span>}
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                {activeTab === 'wijn' ? (
                    <div className="animate-fade-in space-y-16">
                        {wineData.map((category, index) => (
                            <div key={index}>
                                <h3 className="font-display text-3xl text-brand-gold mb-8 text-center uppercase tracking-[0.2em] border-b-2 border-brand-gold/20 pb-4 inline-block w-full">{category.title}</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {category.wines.map((wine, wIndex) => (
                                        <WineItem key={wIndex} wine={wine} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 animate-fade-in">
                        <p className="font-body text-2xl text-brand-green-dark italic">Menukaart volgt binnenkort.</p>
                        <p className="font-sans text-brand-grey mt-4">Bekijk voor nu onze wijnkaart.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
