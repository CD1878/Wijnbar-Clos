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
            className={`absolute pointer-events-none select-none ${className}`}
            style={{
                transform: `rotate(${rotation}deg) scale(${scale})`,
                opacity: opacity
            }}
        >
            <img
                src="/wine-stain-25.png"
                alt=""
                className="w-full h-full object-contain"
            />
        </div>
    );
};
