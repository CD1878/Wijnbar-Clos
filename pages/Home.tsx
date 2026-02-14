import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/hero.jpg"
        alt="Sfeervolle wijnbar"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in pt-20 md:pt-0">
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brand-cream mb-6 tracking-wide drop-shadow-2xl animate-fade-in">
        Wijnbar Clos
      </h1>
      <p className="font-body text-lg md:text-2xl text-brand-cream/90 italic mb-10 max-w-2xl font-light drop-shadow-lg tracking-wide">
        “Een plek voor goede wijn, aandacht en tijd.”
      </p>

      <div className="flex flex-col items-center w-full mt-24 md:mt-0">
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="white-outline" onClick={() => console.log('Wijnkaart PDF')}>
            Bekijk Wijnkaart
          </Button>
          <Button variant="white-outline" onClick={() => console.log('Menu PDF')}>
            Bekijk Menukaart
          </Button>
        </div>
        <div className="mt-6">
          <Button variant="primary" className="bg-brand-gold text-brand-forest border-brand-gold hover:bg-brand-cream hover:text-brand-forest hover:border-brand-cream">
            Direct Reserveren
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const PhotoGrid = () => {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-brand-cream">
      {/* Mobile Carousel */}
      <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4 pb-4 no-scrollbar">
        {images.map((img, index) => (
          <div key={index} className="flex-none w-[85vw] h-[400px] snap-center relative border border-brand-gold/20">
            <img
              src={img}
              alt={`Sfeerbeeld ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto">

        {/* Col 1 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-1.jpg"
              alt="Sfeerbeeld 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-2.jpg"
              alt="Sfeerbeeld 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Col 2 (Tall/Center) */}
        <div className="group overflow-hidden relative h-[400px] md:h-auto border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
          <img
            src="/images/gallery-5.jpg"
            alt="Sfeerbeeld 5"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-3.jpg"
              alt="Sfeerbeeld 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-4.jpg"
              alt="Sfeerbeeld 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 px-6 relative overflow-hidden bg-brand-beige">
    {/* Decorative gradient blob */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-sand/50 to-transparent pointer-events-none"></div>

    <div className="max-w-2xl mx-auto text-center relative z-10 glass p-8 rounded-none border border-brand-gold/10 shadow-xl backdrop-blur-sm">
      <h2 className="font-display text-3xl md:text-4xl text-brand-green-dark mb-8 uppercase tracking-widest drop-shadow-sm">Over Clos</h2>
      <p className="font-body text-xl md:text-2xl text-brand-grey leading-relaxed font-light italic">
        “Clos is een wijnbar waar aandacht centraal staat. Voor het glas, het moment en de mensen aan tafel. Geen haast, alleen pure kwaliteit.”
      </p>
      <div className="mt-12 w-24 h-px bg-brand-gold mx-auto opacity-70"></div>
    </div>
  </section>
);

const QuickLinks = () => {
  const links = [
    { title: 'Wijnkaart', img: '/images/link-wijnkaart.jpg', action: 'Bekijk' },
    { title: 'Menukaart', img: '/images/link-menukaart.png', action: 'Bekijk' },
    { title: 'Reserveren', img: '/images/link-reserveren.jpg', action: 'Boek nu' },
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-brand-sand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => (
          <div key={link.title} className="relative group cursor-pointer h-[300px] overflow-hidden border border-brand-green-dark/10 hover:border-brand-gold/40 transition-colors shadow-sm hover:shadow-xl">
            <img
              src={link.img}
              alt={link.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all"
            />
            {/* Overlay: Subtle dark overlay as requested */}
            <div className="absolute inset-0 bg-[rgba(20,20,20,0.35)] transition-all duration-500 flex flex-col items-center justify-center">
              <h3 className="font-display text-3xl mb-4 tracking-widest drop-shadow-md text-brand-cream transition-colors duration-500 transform group-hover:-translate-y-2">{link.title}</h3>
              <span className="font-body text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-brand-cream text-brand-cream px-6 py-3 hover:bg-brand-cream hover:text-brand-dark">
                {link.action}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="fade-in">
      <HeroSection />
      <PhotoGrid />
      <AboutSection />
      <QuickLinks />
    </div>
  );
};