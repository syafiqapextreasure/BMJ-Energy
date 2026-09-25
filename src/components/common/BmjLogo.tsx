import React from 'react';
import originalLogo from '@/src/assets/branding/bmj-energy-display.png';

interface BmjLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BmjLogo: React.FC<BmjLogoProps> = ({
  className = 'h-12 sm:h-14',
  variant = 'full',
  showSubtitle = true
}) => (
  <div className={`inline-flex flex-nowrap items-center gap-2 select-none max-w-full ${className}`} data-brand-logo>
    {/* Exact supplied artwork, including its embedded lettering; no redraw or colour filter. */}
    <img
      src={originalLogo}
      alt="BMJ Energy original logo"
      width={430}
      height={344}
      className="h-full w-auto shrink-0 object-contain bg-white rounded-sm"
    />
    <div className="flex flex-col justify-center leading-tight whitespace-nowrap" data-brand-label>
      <span className={`font-extrabold tracking-tight text-base sm:text-lg ${variant === 'white' ? 'text-white' : 'text-[#102749]'}`}>
        BMJ ENERGY
      </span>
      {showSubtitle && (
        <span className={`font-bold text-[9.5px] sm:text-[10px] tracking-[0.06em] mt-1 ${variant === 'white' ? 'text-red-300' : 'text-[#C81D25]'}`}>
          SERVICE AND TRADING
        </span>
      )}
    </div>
  </div>
);
