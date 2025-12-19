'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-koel-neutral-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-6 py-3 rounded-full
          border-2 border-koel-neutral-200
          focus:border-koel-blue focus:outline-none
          transition-all duration-300
          text-koel-neutral-900 placeholder:text-koel-neutral-400
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
