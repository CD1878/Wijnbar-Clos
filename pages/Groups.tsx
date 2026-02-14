import React from 'react';
import { Button } from '../components/Button';

// Simple Input component internal to Groups page for quick styling control or could reuse if flexible
const GlassInput = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2 mb-4">
    <label className="font-display text-brand-dark text-sm tracking-widest uppercase">{label}</label>
    <input
      {...props}
      className="bg-white/40 border-b border-brand-dark/20 p-3 font-body text-brand-dark focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/30"
    />
  </div>
);

const GlassTextArea = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2 mb-4">
    <label className="font-display text-brand-dark text-sm tracking-widest uppercase">{label}</label>
    <textarea
      {...props}
      className="bg-white/40 border-b border-brand-dark/20 p-3 font-body text-brand-dark focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-dark/30 min-h-[120px]"
    />
  </div>
);

export const Groups: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 fade-in bg-brand-cream/30 relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-rose/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cream rounded-full blur-3xl -z-10"></div>

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-display text-5xl md:text-7xl text-brand-dark mb-6 drop-shadow-sm">Groepen & Privé</h1>
        <p className="font-body text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto leading-relaxed font-light">
          Of het nu gaat om een zakelijke borrel, een verjaardag of een intiem diner met een grote groep; bij Clos verzorgen we graag een middag of avond op maat.
        </p>
        <div className="mt-8 w-16 h-[2px] bg-brand-red mx-auto"></div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch">
        <div className="relative h-[400px] md:h-auto rounded-none overflow-hidden group shadow-xl">
          <img
            src="/images/groups-hero-2.jpg"
            alt="Groepsdiner bij Clos"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        <div className="glass p-10 md:p-12 border border-white/20 shadow-2xl backdrop-blur-md bg-white/20">
          <h3 className="font-display text-3xl text-brand-dark mb-8">Aanvraag doen</h3>

          <form className="flex flex-col">
            <GlassInput label="Naam" id="name" type="text" placeholder="Uw volledige naam" />
            <GlassInput label="Email" id="email" type="email" placeholder="uw@email.com" />
            <div className="grid grid-cols-2 gap-6">
              <GlassInput label="Telefoon" id="phone" type="tel" placeholder="06.." />
              <GlassInput label="Aantal" id="guests" type="number" placeholder="12" />
            </div>
            <GlassInput label="Datum" id="date" type="date" />
            <GlassTextArea label="Wensen" id="message" placeholder="Vertel ons meer..." />

            <div className="mt-6">
              <Button variant="primary" className="w-full justify-center bg-brand-dark text-brand-cream hover:bg-brand-red border-brand-dark hover:border-brand-red">
                Verstuur Aanvraag
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};