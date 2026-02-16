import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

const StaticWineStains = () => (
  <div className="absolute left-[10%] top-[40%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none select-none opacity-40 mix-blend-screen">
    {/* Main Ring - Irregular */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[16px] border-[#591c35] rounded-full blur-[2px]"
      style={{ borderRadius: '45% 55% 40% 60% / 50% 60% 30% 70%' }}></div>

    {/* Inner Ring - Fainter */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[4px] border-[#591c35] rounded-full opacity-60 blur-[1px]"
      style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', transform: 'translate(-55%, -45%) rotate(20deg)' }}></div>

    {/* Splatters */}
    <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-[#591c35] rounded-full blur-[1px]"></div>
    <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-[#591c35] rounded-full"></div>
    <div className="absolute bottom-[30%] right-[30%] w-6 h-6 bg-[#591c35] rounded-full blur-[2px] opacity-80"></div>
    <div className="absolute bottom-[28%] right-[25%] w-3 h-3 bg-[#591c35] rounded-full opacity-60"></div>
  </div>
);

const VeneurMenu = () => (
  <div className="absolute top-1/3 left-8 md:left-24 flex flex-col items-start gap-6 z-30">
    <Link to="/menu" className="font-display text-brand-cream text-lg md:text-xl tracking-[0.2em] transform -rotate-2 hover:rotate-0 transition-transform duration-300 hover:text-brand-gold">
      MENU
    </Link>
    <Link to="/menu" className="font-display text-brand-cream text-lg md:text-xl tracking-[0.2em] transform rotate-1 hover:rotate-0 transition-transform duration-300 hover:text-brand-gold ml-4">
      WIJN
    </Link>
    <Link to="/vacatures" className="font-display text-brand-cream text-lg md:text-xl tracking-[0.2em] transform -rotate-1 hover:rotate-0 transition-transform duration-300 hover:text-brand-gold ml-2">
      VACATURES
    </Link>
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-brand-cream text-2xl hover:text-brand-gold transition-colors mt-4 ml-6">
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] w-full bg-[#370028] overflow-hidden flex flex-col items-center justify-center p-6">

    {/* Static Wine Stains (Left) */}
    <StaticWineStains />

    {/* Veneur Style Menu (Left, Stacked) */}
    <div className="hidden md:block">
      <VeneurMenu />
    </div>

    {/* Centered Logo (Bright, Small, Center) */}
    <div className="z-20 flex flex-col items-center text-center">
      <Logo className="w-[50vw] md:w-[250px] h-auto text-white brightness-200 drop-shadow-lg opacity-90" />
      <span className="font-display text-brand-gold text-sm md:text-lg tracking-[0.5em] uppercase mt-4">
        Gastro Wijnbar
      </span>

      {/* Reserve Button (Center Bottom) */}
      <div className="mt-16">
        <Link to="#reserve">
          <Button variant="primary" className="bg-brand-gold text-brand-dark hover:bg-brand-cream hover:text-brand-dark border-none py-3 px-8 text-base rounded-full shadow-lg transition-all duration-300">
            Reserveren
          </Button>
        </Link>
      </div>
    </div>

    {/* Mobile Links (Bottom - Keeping fallback for mobile) */}
    <div className="md:hidden absolute bottom-12 left-0 w-full flex justify-center gap-8 z-30 text-brand-cream/80">
      <Link to="/menu" className="font-display uppercase tracking-widest text-xs border-b border-transparent pb-1">Menu</Link>
      <Link to="/menu" className="font-display uppercase tracking-widest text-xs border-b border-transparent pb-1">Wijn</Link>
      <Link to="/contact" className="font-display uppercase tracking-widest text-xs border-b border-transparent pb-1">Contact</Link>
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