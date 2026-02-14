import React from 'react';
import { Button } from '../components/Button';
import { Input, TextArea } from '../components/FormElements';

export const Tasting: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 fade-in max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <div className="order-2 lg:order-1">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 italic">Wijnproeven</h1>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-wine-800 mb-3">High Wine</h3>
              <p className="font-serif text-stone-600 font-light leading-relaxed">
                Geniet van een selectie van 4 glazen wijn, elk begeleid door een bijpassend gerechtje uit onze keuken. 
                De ideale manier om nieuwe smaken te ontdekken in een ontspannen setting.
                <br/><span className="italic block mt-2 text-stone-400">€ 45,00 p.p. | Vanaf 2 personen</span>
              </p>
            </div>

            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-wine-800 mb-3">Privé Proeverij</h3>
              <p className="font-serif text-stone-600 font-light leading-relaxed">
                Voor groepen vanaf 6 personen organiseren we proeverijen op maat, begeleid door onze sommelier.
                Leer over de herkomst, druiven en het verhaal achter de fles.
                <br/><span className="italic block mt-2 text-stone-400">Prijs op aanvraag</span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Wine tasting"
              className="w-full h-64 object-cover filter contrast-75"
            />
          </div>
        </div>

        {/* Form Side */}
        <div className="order-1 lg:order-2 bg-white p-8 md:p-12 border border-stone-100 h-fit sticky top-24">
          <h3 className="font-serif text-2xl text-stone-900 mb-8">Reserveer een proeverij</h3>
          <form className="flex flex-col">
            <Input label="Naam" id="name" type="text" />
            <Input label="Email" id="email" type="email" />
            
            <div className="grid grid-cols-2 gap-4">
               <Input label="Aantal" id="guests" type="number" />
               <Input label="Datum" id="date" type="date" />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="type" className="mb-2 text-xs uppercase tracking-widest text-stone-500 font-sans">Type Proeverij</label>
              <select id="type" className="bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-wine-800 font-serif">
                <option value="high-wine">High Wine</option>
                <option value="prive">Privé Proeverij</option>
                <option value="other">Maatwerk / Anders</option>
              </select>
            </div>

            <TextArea label="Opmerkingen / Dieetwensen" id="message" />

            <Button type="submit" className="mt-4">Aanvragen</Button>
          </form>
        </div>

      </div>
    </div>
  );
};