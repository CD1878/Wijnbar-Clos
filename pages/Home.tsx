import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

const WineRings = () => (
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none overflow-visible hidden md:block">
    <style>{`
      @keyframes ripple {
        0% { transform: scale(0.8); opacity: 0.8; }
        100% { transform: scale(2); opacity: 0; }
      }
      .wine-ring {
        position: absolute;
        top: 50%;
        left: 20%; /* Shifted left */
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid rgba(74, 28, 47, 0.6); /* Wine color */
        box-shadow: 0 0 10px rgba(74, 28, 47, 0.3);
        animation: ripple 4s infinite linear;
      }
    `}</style>
    {/* Multiple rings with delays */}
    <div className="wine-ring w-32 h-32" style={{ animationDelay: '0s' }}></div>
    <div className="wine-ring w-32 h-32" style={{ animationDelay: '1.3s' }}></div>
    <div className="wine-ring w-32 h-32" style={{ animationDelay: '2.6s' }}></div>

    {/* Static "stain" base */}
    <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#4a1c2f] opacity-20 blur-xl rounded-full mix-blend-screen"></div>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] w-full bg-[#1a0510] overflow-hidden flex flex-col items-center justify-center p-6">

    {/* Wine Ring Animation (Left) */}
    <WineRings />

    {/* Centered Logo (Brighter, Smaller, Center) */}
    <div className="z-20 flex flex-col items-center text-center animate-fade-in-up">
      <Logo className="w-[60vw] md:w-[350px] h-auto text-white brightness-200 drop-shadow-2xl" />
      <span className="font-display text-brand-gold text-lg md:text-2xl tracking-[0.4em] uppercase mt-6 opacity-90">
        Gastro Wijnbar
      </span>

      {/* CTA Button */}
      <div className="mt-12">
        <Link to="#reserve">
          <Button variant="primary" className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark border-none py-4 px-10 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Reserveren
          </Button>
        </Link>
      </div>
    </div>

    {/* Mobile Links (Bottom) */}
    <div className="md:hidden absolute bottom-8 left-0 w-full flex justify-center gap-6 z-30 text-brand-cream/60">
      <Link to="/menu" className="font-display uppercase tracking-widest text-xs border-b border-transparent hover:border-brand-gold hover:text-brand-gold transition-colors pb-1">Menu</Link>
      <Link to="/menu" className="font-display uppercase tracking-widest text-xs border-b border-transparent hover:border-brand-gold hover:text-brand-gold transition-colors pb-1">Wijn</Link>
      <Link to="/contact" className="font-display uppercase tracking-widest text-xs border-b border-transparent hover:border-brand-gold hover:text-brand-gold transition-colors pb-1">Contact</Link>
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