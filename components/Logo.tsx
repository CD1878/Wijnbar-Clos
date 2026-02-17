import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            {/* Main CLOS text with Brush Font */}
            <h1 className="font-brush text-5xl md:text-6xl text-brand-cream relative z-10 leading-none mb-1 md:mb-2 transform -rotate-2">
                CLOS
            </h1>

            {/* Subtext 1: WIJNBAR & RESTAURANT */}
            <h2 className="font-sans text-[10px] md:text-xs text-brand-cream uppercase tracking-[0.3em] font-medium leading-tight mb-2 md:mb-3">
                Wijnbar & Restaurant
            </h2>

            {/* Subtext 2: GASTRO WIJNBAR (Gold) */}
            <h3 className="font-serif text xs md:text-sm text-brand-gold uppercase tracking-[0.4em] font-bold">
                Gastro Wijnbar
            </h3>
        </div>
    );
};
