import React from 'react';
import { Button } from '../components/Button';
import { Phone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reserveren: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 bg-[#370028] relative transform-gpu">
            <div className="max-w-4xl mx-auto px-6 pb-24 text-brand-cream">

                <h1 className="font-sans text-5xl md:text-6xl tracking-widest font-bold mb-16 text-center uppercase drop-shadow-sm">
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
                        <a href="#reserve" className="inline-block border border-[#744365] bg-[#744365] text-brand-cream px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-[#370028] hover:border-[#370028] hover:text-brand-cream transition-colors shadow-lg">
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
                                <h2 className="font-sans text-2xl font-bold uppercase tracking-widest text-brand-contrast mb-4">Ben je met een groep?</h2>
                                <p className="font-serif text-lg leading-relaxed mb-4">
                                    Vanaf 8 personen nemen we de organisatie van de middag of avond uit handen. Vul het formulier in voor een groepsreservering.
                                </p>
                                <p className="font-serif text-lg leading-relaxed mb-8">
                                    We nemen contact op over de samenstelling van het menu en de selectie cuvées. Zo staat de eerste fles koud en de keuken klaar zodra jullie binnenstappen.
                                </p>
                                <p className="font-sans font-bold uppercase tracking-widest mb-8 text-brand-contrast">
                                    Schuif aan.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block border border-[#744365] bg-[#744365] text-brand-cream px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-[#370028] hover:border-[#370028] hover:text-brand-cream transition-colors shadow-lg"
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
