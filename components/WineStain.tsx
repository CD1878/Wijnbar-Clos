import React from 'react';

interface WineStainProps {
    className?: string;
    color?: string;
    opacity?: number;
    rotation?: number;
    scale?: number;
}

export const WineStain: React.FC<WineStainProps> = ({
    className = "",
    color = "#591c35",
    opacity = 1,
    rotation = 0,
    scale = 1
}) => {
    return (
        <div
            className={`absolute w-full h-full pointer-events-none select-none ${className} bg-[url('/wine-stain-25.png')] bg-contain bg-center bg-no-repeat`}
            style={{
                transform: `rotate(${rotation}deg) scale(${scale})`,
                opacity: opacity
            }}
            aria-hidden="true"
        />
    );
};
