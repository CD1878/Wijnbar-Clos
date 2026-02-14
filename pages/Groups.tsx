import React from 'react';
import { Button } from '../components/Button';
import { Input, TextArea } from '../components/FormElements';

export const Groups: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 fade-in max-w-4xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6 italic">Groepen & Privé</h1>
        <p className="font-sans text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
          Of het nu gaat om een zakelijke borrel, een verjaardag of een intiem diner met een grote groep; bij Clos verzorgen we graag een middag of avond op maat.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1519671482538-518b5c2a9d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Groepsdiner" 
            className="w-full h-64 md:h-full object-cover mb-6 md:mb-0 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <form className="flex flex-col">
          <h3 className="font-serif text-2xl text-stone-900 mb-8">Aanvraag doen</h3>
          
          <Input label="Naam" id="name" type="text" placeholder="Uw volledige naam" />
          <Input label="Email" id="email" type="email" placeholder="uw@email.com" />
          <div className="grid grid-cols-2 gap-4">
             <Input label="Telefoon" id="phone" type="tel" placeholder="06 12345678" />
             <Input label="Aantal Personen" id="guests" type="number" placeholder="Bv. 12" />
          </div>
          <Input label="Datum" id="date" type="date" />
          <TextArea label="Bericht / Wensen" id="message" placeholder="Vertel ons meer over uw wensen..." />

          <Button type="submit" className="mt-4">Verstuur Aanvraag</Button>
        </form>
      </div>
    </div>
  );
};