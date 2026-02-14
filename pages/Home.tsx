import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
        alt="Sfeervolle wijnbar" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/40"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide">
        Wijnbar Clos
      </h1>
      <p className="font-serif text-lg md:text-2xl text-stone-100 italic mb-10 max-w-2xl font-light">
        “Een plek voor goede wijn, aandacht en tijd.”
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button variant="white-outline" onClick={() => console.log('Wijnkaart PDF')}>
          Bekijk Wijnkaart
        </Button>
        <Button variant="white-outline" onClick={() => console.log('Menu PDF')}>
          Bekijk Menukaart
        </Button>
      </div>
       <div className="mt-6">
        <Button variant="primary" className="bg-white text-stone-900 border-white hover:bg-stone-200 hover:border-stone-200">
            Direct Reserveren
        </Button>
       </div>
    </div>
  </section>
);

const PhotoGrid = () => (
  <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 h-auto">
      
      {/* Tall image */}
      <div className="group overflow-hidden relative h-[400px] md:h-[600px] lg:col-span-1">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Interieur detail" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-8 lg:col-span-2">
        {/* Wide image */}
        <div className="group overflow-hidden relative h-[250px] md:h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Wijn inschenken" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8 flex-1">
             <div className="group overflow-hidden relative h-[250px] md:h-auto">
                <img 
                src="https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Gezelschap" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
             <div className="group overflow-hidden relative h-[250px] md:h-auto">
                <img 
                src="https://images.unsplash.com/photo-1466978913421-dad93866c6e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Eten" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-24 px-6 bg-stone-50">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8 italic">Over Clos</h2>
      <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed font-light">
        “Clos is een wijnbar waar aandacht centraal staat. Voor het glas, het moment en de mensen aan tafel. Geen haast, alleen pure kwaliteit.”
      </p>
      <div className="mt-12 w-24 h-px bg-wine-800 mx-auto opacity-50"></div>
    </div>
  </section>
);

const QuickLinks = () => {
  const links = [
    { title: 'Wijnkaart', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', action: 'Bekijk' },
    { title: 'Menukaart', img: 'https://images.unsplash.com/photo-1546549010-63b5dd2d8fb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', action: 'Bekijk' },
    { title: 'Reserveren', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', action: 'Boek nu' },
  ];

  return (
    <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => (
          <div key={link.title} className="relative group cursor-pointer h-[300px] overflow-hidden">
            <img 
              src={link.img} 
              alt={link.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/50 transition-colors duration-300 flex flex-col items-center justify-center text-white">
              <h3 className="font-serif text-3xl italic mb-2">{link.title}</h3>
              <span className="font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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