import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white-outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase font-sans font-medium";
  
  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-wine-800 border border-stone-900 hover:border-wine-800",
    outline: "bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-stone-50",
    "white-outline": "bg-transparent text-white border border-white hover:bg-white hover:text-stone-900",
    text: "bg-transparent text-stone-900 underline underline-offset-4 hover:text-wine-800 px-0 py-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};