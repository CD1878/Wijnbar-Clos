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
    primary: "bg-brand-contrast text-brand-green-dark hover:bg-brand-cream hover:text-brand-green-dark border border-brand-contrast hover:border-brand-cream",
    outline: "bg-transparent text-brand-green-dark border border-brand-green-dark hover:bg-brand-green-dark hover:text-brand-cream",
    "white-outline": "bg-transparent text-brand-cream border border-brand-cream hover:bg-brand-cream hover:text-brand-green-dark",
    text: "bg-transparent text-brand-green-dark underline underline-offset-4 hover:text-brand-contrast px-0 py-0",
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