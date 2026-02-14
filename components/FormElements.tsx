import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className="flex flex-col mb-6">
    <label htmlFor={id} className="mb-2 text-xs uppercase tracking-widest text-stone-500 font-sans">
      {label}
    </label>
    <input
      id={id}
      className="bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-wine-800 transition-colors duration-300 placeholder-stone-300 font-serif"
      {...props}
    />
  </div>
);

export const TextArea: React.FC<TextAreaProps> = ({ label, id, ...props }) => (
  <div className="flex flex-col mb-6">
    <label htmlFor={id} className="mb-2 text-xs uppercase tracking-widest text-stone-500 font-sans">
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      className="bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-wine-800 transition-colors duration-300 resize-none font-serif"
      {...props}
    />
  </div>
);