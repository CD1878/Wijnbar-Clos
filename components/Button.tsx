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
    const baseStyles = "px-8 py-3 transition-all duration-300 text-sm tracking-widest font-sans font-medium";

    const variants = {
        primary: "bg-brand-contrast text-brand-cream hover:opacity-80 border border-brand-contrast",
        outline: "bg-transparent text-brand-contrast border border-brand-contrast hover:bg-brand-contrast hover:text-brand-cream",
        "white-outline": "bg-transparent text-[#370028] border border-brand-cream hover:opacity-80 hover:text-[#370028]",
        text: "bg-transparent text-[#370028] underline underline-offset-4 hover:opacity-80 px-0 py-0",
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