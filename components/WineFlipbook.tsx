import React, { forwardRef } from 'react';
// @ts-ignore
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';
import { wineData } from '../pages/Menu';
import { useState, useEffect } from 'react';

interface PageProps {
    children: React.ReactNode;
    number?: number;
    className?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className={`demoPage bg-white shadow-lg p-8 md:p-12 border border-gray-100 flex flex-col h-full ${props.className}`} ref={ref}>
            <div className="flex-grow">
                {props.children}
            </div>
            {props.number && (
                <div className="mt-4 text-center text-xs font-serif text-brand-grey/40">
                    - {props.number} -
                </div>
            )}
        </div>
    );
});

export const WineFlipbook: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full flex justify-center py-12 bg-brand-sand/10">
            {/* @ts-ignore */}
            <HTMLFlipBook
                width={isMobile ? 320 : 450}
                height={isMobile ? 500 : 650}
                size="stretch"
                minWidth={300}
                maxWidth={isMobile ? 400 : 500}
                minHeight={400}
                maxHeight={700}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                usePortrait={isMobile}
                className="shadow-2xl"
            >
                {/* Cover */}
                <Page className="bg-[#fafaf9]">
                    <div className="h-full flex flex-col items-center justify-center border-4 border-double border-brand-green-dark/20 m-4">
                        <div className="text-brand-green-dark mb-8">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 22h8M12 22v-8m0 0c2.5 0 4-1.5 4-4V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5c0 2.5 1.5 4 4 4zm0 0v-8" />
                            </svg>
                        </div>
                        <h1 className="font-display text-4xl text-brand-green-dark uppercase tracking-[0.3em] mb-4">Wijnkaart</h1>
                        <div className="w-16 h-px bg-brand-gold"></div>
                        <p className="font-body text-brand-grey/60 italic mt-4 text-sm">Wijnbar Clos</p>
                    </div>
                </Page>

                {/* Content Pages */}
                {wineData.flatMap((category) => {
                    // Split wines into chunks of ~5-6 items per page to fit comfortably
                    const itemsPerPage = 5;
                    const chunks = [];
                    for (let i = 0; i < category.wines.length; i += itemsPerPage) {
                        chunks.push(category.wines.slice(i, i + itemsPerPage));
                    }

                    return chunks.map((chunk, chunkIndex) => (
                        <Page key={`${category.title}-${chunkIndex}`}>
                            <div className="h-full flex flex-col">
                                <h3 className="font-display text-2xl text-brand-green-dark mb-6 uppercase tracking-widest text-center border-b border-brand-gold/30 pb-4">
                                    {category.title} {chunks.length > 1 && <span className="text-sm align-middle opacity-50">({chunkIndex + 1}/{chunks.length})</span>}
                                </h3>
                                <div className="space-y-4 pr-2 custom-scrollbar flex-grow">
                                    {chunk.map((wine, wIndex) => (
                                        <div key={wIndex} className="mb-4 pb-4 border-b border-dashed border-gray-200 last:border-0 last:pb-0 last:mb-0">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="font-display text-base font-bold text-brand-green-dark">{wine.name}</h4>
                                                <span className="font-body text-xs font-bold text-brand-green-dark space-x-2 whitespace-nowrap ml-2">
                                                    {/* Conditional formatting for glass/bottle prices */}
                                                    {typeof wine.priceGlass === 'string' ? (
                                                        <span>{wine.priceGlass}</span>
                                                    ) : (
                                                        wine.priceGlass > 0 && <span>€{wine.priceGlass.toFixed(1)}</span>
                                                    )}
                                                    {typeof wine.priceGlass === 'number' && wine.priceGlass > 0 && <span className="text-gray-300">|</span>}
                                                    <span>€{wine.priceBottle.toFixed(1)}</span>
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-start text-xs text-brand-grey/70 italic font-body">
                                                <span>{wine.grapes}</span>
                                                {wine.vintage && <span className="ml-2">{wine.vintage}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Page>
                    ));
                })}

                {/* Back Cover */}
                <Page className="bg-[#fafaf9]">
                    <div className="h-full flex flex-col items-center justify-center">
                        <h3 className="font-display text-xl text-brand-green-dark uppercase tracking-widest mb-2">Wijnbar Clos</h3>
                        <p className="font-body text-brand-grey/60 text-sm">Amsterdam</p>
                    </div>
                </Page>
            </HTMLFlipBook>
        </div>
    );
};
