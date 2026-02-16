import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInput = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-2 mb-4">
        <label className="font-display text-brand-dark text-sm tracking-widest uppercase">{label}</label>
        <input
            {...props}
            className="bg-white/40 border-b border-brand-dark/20 p-3 font-body text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30"
        />
    </div>
);

const ContactTextArea = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-2 mb-4">
        <label className="font-display text-brand-dark text-sm tracking-widest uppercase">{label}</label>
        <textarea
            {...props}
            className="bg-white/40 border-b border-brand-dark/20 p-3 font-body text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 min-h-[120px]"
        />
    </div>
);

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 md:pt-32 bg-brand-cream/30 relative">
            <div className="max-w-7xl mx-auto px-6 pb-24">

                <h1 className="font-display text-5xl md:text-6xl text-brand-green-dark mb-16 text-center">Contact</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">

                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="font-display text-2xl text-brand-green-dark mb-6">Gegevens</h3>
                            <div className="space-y-6 font-body text-brand-grey text-lg">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-brand-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-brand-green-dark">Wijnbar Clos</p>
                                        <p>Beukenplein 50</p>
                                        <p>1091 KH Amsterdam</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-brand-gold shrink-0" />
                                    <a href="tel:+31201234567" className="hover:text-brand-gold transition-colors">020 123 45 67</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-brand-gold shrink-0" />
                                    <a href="mailto:info@wijnbarclos.nl" className="hover:text-brand-gold transition-colors">info@wijnbarclos.nl</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl text-brand-green-dark mb-6">Openingstijden</h3>
                            <div className="space-y-3 font-body text-brand-grey text-lg">
                                <div className="flex justify-between max-w-md border-b border-brand-gold/10 pb-2">
                                    <span>Maandag - Dinsdag</span>
                                    <span className="font-bold text-brand-green-dark">Gesloten</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-gold/10 pb-2">
                                    <span>Woensdag - Donderdag</span>
                                    <span className="font-bold text-brand-green-dark">16:00 - 00:00</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-gold/10 pb-2">
                                    <span>Vrijdag - Zaterdag</span>
                                    <span className="font-bold text-brand-green-dark">15:00 - 01:00</span>
                                </div>
                                <div className="flex justify-between max-w-md border-b border-brand-gold/10 pb-2">
                                    <span>Zondag</span>
                                    <span className="font-bold text-brand-green-dark">15:00 - 00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-8 md:p-10 border border-brand-gold/20 shadow-xl bg-white/40 backdrop-blur-sm">
                        <h3 className="font-display text-2xl text-brand-green-dark mb-6">Stuur een bericht</h3>
                        <form className="flex flex-col">
                            <ContactInput label="Naam" id="name" type="text" placeholder="Uw naam" />
                            <ContactInput label="Email" id="email" type="email" placeholder="email@adres.nl" />
                            <ContactTextArea label="Bericht" id="message" placeholder="Waar kunnen we u mee helpen?" />
                            <Button type="submit" variant="primary" className="mt-4 w-full justify-center bg-brand-green-dark text-brand-cream hover:bg-brand-gold hover:text-brand-green-dark border-brand-green-dark hover:border-brand-gold">
                                Versturen
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <section className="w-full h-[400px] border-t border-brand-gold/20 grayscale hover:grayscale-0 transition-all duration-700">
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
