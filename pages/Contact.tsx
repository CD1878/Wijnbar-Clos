import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInput = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-2 mb-4">
        <label className="font-sans text-[#370028] text-sm tracking-[0.2em] font-bold uppercase">{label}</label>
        <input
            {...props}
            className="bg-transparent border-b border-[#370028]/50 p-3 font-serif text-[#370028] focus:outline-none focus:border-[#370028] transition-colors placeholder:text-[#370028]/60"
        />
    </div>
);

const ContactTextArea = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-2 mb-4">
        <label className="font-sans text-[#370028] text-sm tracking-[0.2em] font-bold uppercase">{label}</label>
        <textarea
            {...props}
            className="bg-transparent border-b border-[#370028]/50 p-3 font-serif text-[#370028] focus:outline-none focus:border-[#370028] transition-colors placeholder:text-[#370028]/60 min-h-[120px]"
        />
    </div>
);

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 bg-[#370028] relative transform-gpu">
            <div className="max-w-7xl mx-auto px-6 pb-24">

                <h1 className="font-sans text-5xl md:text-6xl tracking-widest text-brand-cream font-bold mb-16 text-center uppercase drop-shadow-sm">Contact</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">

                    {/* Contact Details */}
                    <div className="space-y-12">
                        {/* Address */}
                        <div>
                            <h3 className="font-sans text-brand-contrast font-bold text-lg uppercase tracking-widest mb-4">Adres</h3>
                            <div className="font-serif text-brand-cream text-lg leading-relaxed">
                                <p>Beukenplein 50</p>
                                <p>Amsterdam-Oost</p>
                            </div>
                        </div>

                        {/* Reservations */}
                        <div>
                            <h3 className="font-sans text-brand-contrast font-bold text-lg uppercase tracking-widest mb-4">Reserveren</h3>
                            <div className="font-serif text-brand-cream text-lg leading-relaxed space-y-4">
                                <p>Tafels tot 8 personen reserveer je direct via de widget.</p>
                                <p>Ben je met een grotere groep? Vul dan ons formulier in over de samenstelling van het menu en de selectie cuvées. Zo staat de eerste fles koud en de keuken klaar zodra jullie binnenstappen.</p>
                            </div>
                        </div>

                        {/* Direct Contact */}
                        <div>
                            <h3 className="font-sans text-brand-contrast font-bold text-lg uppercase tracking-widest mb-4">Direct Contact</h3>
                            <p className="font-serif text-brand-cream text-lg leading-relaxed mb-4">Voor vragen over vandaag of last-minute wijzigingen:</p>
                            <div className="space-y-4 font-serif text-brand-cream text-lg">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-brand-contrast shrink-0" />
                                    <a href="tel:0207733043" className="hover:text-brand-contrast transition-colors">020-7733043</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-brand-contrast shrink-0" />
                                    <a href="mailto:Social@closamsterdam.nl" className="hover:text-brand-contrast transition-colors">Social@closamsterdam.nl</a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div>
                            <h3 className="font-sans text-brand-contrast font-bold text-lg uppercase tracking-widest mb-6">Openingstijden</h3>
                            <div className="space-y-3 font-serif text-brand-cream text-lg">
                                <div className="flex justify-between max-w-md border-b border-brand-contrast/20 pb-2">
                                    <span>Maandag</span>
                                    <span className="text-brand-contrast font-sans tracking-widest uppercase text-sm font-bold mt-1">Gesloten</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-contrast/20 pb-2">
                                    <span>Dinsdag t/m Donderdag</span>
                                    <span className="text-brand-cream font-sans tracking-widest text-sm mt-1">17:00 - 00:00</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-contrast/20 pb-2">
                                    <span>Vrijdag</span>
                                    <span className="text-brand-cream font-sans tracking-widest text-sm mt-1">15:00 - 01:00</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-contrast/20 pb-2">
                                    <span>Zaterdag</span>
                                    <span className="text-brand-cream font-sans tracking-widest text-sm mt-1">15:00 - 01:00</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-contrast/20 pb-2">
                                    <span>Zondag</span>
                                    <span className="text-brand-cream font-sans tracking-widest text-sm mt-1">15:00 - 23:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Groepsreservering) */}
                    <div className="border border-[#744365]/20 p-8 md:p-10 bg-brand-cream shadow-xl relative overflow-hidden">
                        <h3 className="font-sans text-2xl text-[#370028] font-bold tracking-widest uppercase mb-2">Groepsreservering</h3>
                        <p className="font-serif text-[#370028]/80 mb-8 italic">Vanaf 8 personen nemen we de organisatie uit handen.</p>
                        <form className="flex flex-col z-10 relative">
                            <ContactInput label="Naam" id="name" type="text" placeholder="Uw naam" />
                            <ContactInput label="Email" id="email" type="email" placeholder="email@adres.nl" />
                            <ContactInput label="Aantal Personen" id="persons" type="number" placeholder="Bv. 10" />
                            <ContactTextArea label="Bijzonderheden" id="message" placeholder="Dieetwensen of andere opmerkingen?" />
                            <Button type="submit" variant="primary" className="mt-8 w-full justify-center bg-[#744365] text-brand-cream hover:bg-[#370028] hover:text-brand-cream uppercase tracking-[0.2em] font-sans font-bold border-none py-4 text-sm transition-colors">
                                Schuif aan
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <section className="w-full h-[300px] border-t border-brand-contrast/20 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.596077363457!2d4.920404976673556!3d52.35967847202029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ec84555555%3A0x1234567890abcdef!2sWijnbar%20Clos!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location Wijnbar Clos"
                ></iframe>
            </section>
        </div>
    );
};

