import React from 'react';
import { Button } from '../components/Button';
import { Input, TextArea } from '../components/FormElements';

export const Jobs: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 fade-in max-w-3xl mx-auto">
       <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6 italic">Werken bij Clos</h1>
        <p className="font-sans text-stone-600 max-w-xl mx-auto leading-relaxed font-light">
          We zoeken altijd naar mensen met passie voor gastvrijheid en wijn. 
          Heb jij oog voor detail en maak je het mensen graag naar de zin?
        </p>
      </header>

      <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-sm">
        <form className="flex flex-col">
          <Input label="Naam" id="name" type="text" />
          <Input label="Email" id="email" type="email" />
          <Input label="Telefoon" id="phone" type="tel" />
          
          <TextArea label="Motivatie" id="motivation" placeholder="Waarom wil je bij Clos werken?" />
          
          <div className="flex flex-col mb-8">
            <label className="mb-2 text-xs uppercase tracking-widest text-stone-500 font-sans">CV Uploaden</label>
            <input type="file" className="block w-full text-sm text-stone-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-none file:border-0
              file:text-xs file:font-semibold file:uppercase file:tracking-widest
              file:bg-stone-100 file:text-stone-700
              hover:file:bg-stone-200
            "/>
          </div>

          <Button type="submit">Solliciteren</Button>
        </form>
      </div>
    </div>
  );
};