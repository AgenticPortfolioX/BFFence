import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-md shrink-0">
        {/* Pickets */}
        <path d="M15 40 L25 25 L35 40 V90 H15 Z" fill="var(--color-accent)" />
        <path d="M40 30 L50 15 L60 30 V90 H40 Z" fill="var(--color-secondary)" />
        <path d="M65 40 L75 25 L85 40 V90 H65 Z" fill="var(--color-accent)" />
        {/* Horizontal Rails */}
        <rect x="5" y="50" width="90" height="12" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="5" y="75" width="90" height="12" rx="2" fill="currentColor" opacity="0.2" />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-black tracking-wider leading-none">
          BF FENCE
        </span>
        <span className="text-[0.65rem] font-bold text-secondary tracking-[0.2em] uppercase leading-none mt-1.5">
          Contracting
        </span>
      </div>
    </div>
  );
};
