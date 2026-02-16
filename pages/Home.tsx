import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative min-h-[90vh] w-full bg-[#f4f1ea] overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 md:p-12">

    {/* Large Background Typography */}
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
      <h1 className="font-display text-[25vw] leading-none text-[#dcb880] opacity-30 mix-blend-multiply tracking-tighter">
        CLOS
      </h1>
    </div>

    {/* Playful Floating Links (Desktop & Tablet) */}
    <div className="absolute left-8 top-32 z-20 hidden md:flex flex-col gap-8 text-brand-dark">
      <Link to="/menu" className="group">
        <span className="font-display text-xl md:text-2xl tracking-widest uppercase hover:text-brand-red transition-colors duration-300 block -rotate-6 group-hover:rotate-0 transform transition-transform">
          Menu
        </span>
      </Link>
      <Link to="/menu" className="group pl-12">
        <span className="font-display text-xl md:text-2xl tracking-widest uppercase hover:text-brand-red transition-colors duration-300 block rotate-3 group-hover:rotate-0 transform transition-transform">
          Wijn
        </span>
      </Link>
      <Link to="/jobs" className="group">
        <span className="font-display text-xl md:text-2xl tracking-widest uppercase hover:text-brand-red transition-colors duration-300 block -rotate-3 group-hover:rotate-0 transform transition-transform">
          Vacatures
        </span>
      </Link>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-8 text-2xl hover:text-brand-red transition-colors pl-6">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>

    {/* Hero Image with Organic Shape */}
    <div className="relative z-10 w-full max-w-[500px] md:max-w-[700px] aspect-[4/5] md:aspect-[5/4] animate-fade-in-up">
      <div
        className="w-full h-full overflow-hidden shadow-2xl transition-all duration-1000 hover:scale-[1.02]"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      >
        <img
          src="/images/hero-update.jpg"
          alt="Sfeervolle wijnbar"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark overlay for text contrast if needed, but here we want clarity */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-8 -right-4 md:right-12 z-30">
        <Link to="#reserve">
          <Button variant="primary" className="shadow-xl bg-brand-green-dark border-none hover:bg-brand-red py-4 px-8 text-lg rounded-full">
            Reserveer een tafel
          </Button>
        </Link>
      </div>
    </div>

    {/* Mobile Links (Bottom) */}
    <div className="md:hidden absolute bottom-8 left-0 w-full flex justify-center gap-6 z-30">
      <Link to="/menu" className="font-display text-brand-dark uppercase tracking-widest text-sm border-b border-brand-dark pb-1">Menu</Link>
      <Link to="/menu" className="font-display text-brand-dark uppercase tracking-widest text-sm border-b border-brand-dark pb-1">Wijn</Link>
    </div>
  </section>
);

const PhotoGrid = () => {
  const images = [
    '/images/gallery-update.jpg',
    '/images/gallery-update-2.jpg',
    '/images/gallery-update-3.jpg',
    '/images/gallery-update-4.jpg',
    '/images/gallery-update-5.jpg',
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-brand-cream">
      {/* Mobile Carousel */}
      <h2 className="md:hidden font-display text-3xl text-brand-green-dark mb-6 text-center">Sfeerimpressie</h2>
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
              src="/images/gallery-update.jpg"
              alt="Sfeerbeeld 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-update-2.jpg"
              alt="Sfeerbeeld 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Col 2 (Tall/Center) */}
        <div className="group overflow-hidden relative h-[400px] md:h-auto border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
          <img
            src="/images/gallery-update-5.jpg"
            alt="Sfeerbeeld 5"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-update-3.jpg"
              alt="Sfeerbeeld 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
          <div className="group overflow-hidden relative h-[300px] border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
            <img
              src="/images/gallery-update-4.jpg"
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
  <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-brand-beige">
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
    { title: 'Wijnkaart', img: '/images/link-wijnkaart.jpg', action: 'Bekijk', link: '/menu' },
    { title: 'Menukaart', img: '/images/link-menukaart.png', action: 'Bekijk', link: '/menu' },
    { title: 'Reserveren', img: '/images/link-reserveren.jpg', action: 'Boek nu', link: '#reserve' },
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-brand-sand">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link to={link.link} key={link.title} className="relative group cursor-pointer h-[300px] overflow-hidden border border-brand-green-dark/10 hover:border-brand-gold/40 transition-colors shadow-sm hover:shadow-xl">
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
          </Link>
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