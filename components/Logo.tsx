import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
 return (
 <img
 src="/logo.png"
 alt="Wijnbar Clos Logo"
 className={`object-contain ${className}`}
 />
 );
};
