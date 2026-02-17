import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
import { WineStain } from '../components/WineStain';

const VeneurMenu = () => (
  <div className="absolute top-1/3 left-8 md:left-24 flex flex-col items-start gap-8 z-30">
    <Link to="/menu?tab=menu" className="group flex items-center gap-3">
      <span className="font-display text-brand-cream text-lg md:text-2xl tracking-[0.2em] group-hover:text-brand-gold transition-colors duration-300">MENU</span>
    </Link>
    <Link to="/menu?tab=wijn" className="group flex items-center gap-3 ml-6">
      <span className="font-display text-brand-cream text-lg md:text-2xl tracking-[0.2em] group-hover:text-brand-gold transition-colors duration-300 transform -rotate-1">WIJN</span>
    </Link>
    <Link to="/vacatures" className="group flex items-center gap-3 ml-2">
      <span className="font-display text-brand-cream text-lg md:text-2xl tracking-[0.2em] group-hover:text-brand-gold transition-colors duration-300 transform rotate-1">VACATURES</span>
    </Link>
    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-brand-cream text-2xl hover:text-brand-gold transition-colors mt-4 ml-8 opacity-80 hover:opacity-100">
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] w-full bg-[#370028] overflow-hidden flex flex-col items-center justify-center p-6">

    {/* Realistic SVG Wine Stains (Left) */}
    <div className="absolute left-[5%] top-[45%] -translate-y-1/2 w-[700px] h-[700px] pointer-events-none select-none">
      {/* Layered stains for depth */}
      <WineStain className="w-[500px] h-[500px] top-0 left-0" color="#591c35" opacity={0.6} rotation={15} scale={1.2} />
      <WineStain className="w-[400px] h-[400px] top-[100px] left-[100px]" color="#591c35" opacity={0.4} rotation={-20} scale={0.8} />
      <WineStain className="w-[200px] h-[200px] top-[300px] left-[-50px]" color="#591c35" opacity={0.3} rotation={45} scale={1.5} />

      {/* Extra splatters */}
      <div className="absolute top-[20%] left-[40%] text-[#591c35] opacity-50 text-4xl blur-[1px]">•</div>
      <div className="absolute bottom-[30%] right-[40%] text-[#591c35] opacity-60 text-2xl">•</div>
    </div>

    {/* Veneur Style Menu (Left, Stacked) */}
    <div className="hidden md:block">
      <VeneurMenu />
    </div>

    {/* Centered Logo */}
    <div className="z-20 flex flex-col items-center text-center">
      <Logo className="w-[50vw] md:w-[280px] h-auto text-white brightness-200 drop-shadow-2xl opacity-95" />
      <span className="font-display text-brand-gold/80 text-sm md:text-lg tracking-[0.6em] uppercase mt-6 ml-2">
        Gastro Wijnbar
      </span>

      {/* Reserve Button */}
      <div className="mt-16">
        <Link to="#reserve">
          <Button variant="primary" className="bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark border-none py-3 px-10 text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            Reserveren
          </Button>
        </Link>
      </div>
    </div>

    {/* Mobile Links (Bottom) */}
    <div className="md:hidden absolute bottom-12 left-0 w-full flex justify-center gap-8 z-30 text-brand-cream/80">
      <Link to="/menu?tab=menu" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Menu</Link>
      <Link to="/menu?tab=wijn" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Wijn</Link>
      <Link to="/contact" className="font-display uppercase tracking-widest text-xs border-b border-white/10 pb-1">Contact</Link>
    </div>
  </section>
);



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

      <AboutSection />
      <QuickLinks />
    </div>
  );
};