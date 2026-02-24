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
 <svg
 viewBox="0 0 200 200"
 xmlns="http://www.w3.org/2000/svg"
 className="w-full h-full overflow-visible"
 >
 <defs>
 <filter id="rough-edge">
 <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
 <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
 </filter>
 <filter id="liquid-texture">
 <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
 <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="4" xChannelSelector="R" yChannelSelector="G" />
 </filter>
 </defs>

 {/* Main Ring - Irregular stroke */}
 <path
 d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
 fill="none"
 stroke={color}
 strokeWidth="12"
 strokeLinecap="round"
 filter="url(#rough-edge)"
 opacity="0.8"
 />

 {/* Inner thin ring for "dried edge" effect */}
 <path
 d="M 100, 100 m -73, 0 a 73,73 0 1,0 146,0 a 73,73 0 1,0 -146,0"
 fill="none"
 stroke={color}
 strokeWidth="2"
 filter="url(#liquid-texture)"
 opacity="0.9"
 />

 {/* Splatter droplets */}
 <circle cx="180" cy="110" r="4" fill={color} filter="url(#rough-edge)" opacity="0.7" />
 <circle cx="20" cy="80" r="3" fill={color} filter="url(#rough-edge)" opacity="0.6" />
 <circle cx="160" cy="170" r="5" fill={color} filter="url(#rough-edge)" opacity="0.8" />
 <circle cx="50" cy="160" r="2" fill={color} filter="url(#rough-edge)" opacity="0.5" />
 </svg>
 </div>
 );
};
