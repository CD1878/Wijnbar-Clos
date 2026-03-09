import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div
            className={`bg-[#370028] aspect-[2/1] ${className}`}
            style={{
                WebkitMaskImage: "url('/logo-tro-wijba.png')",
                maskImage: "url('/logo-tro-wijba.png')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat"
            }}
            aria-label="Wijnbar Clos Logo"
            role="img"
        />
    );
};
