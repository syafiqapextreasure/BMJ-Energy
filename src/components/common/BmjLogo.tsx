import React from 'react';
import symbol from '@/src/assets/branding/bmj-energy-symbol.png';
import wordmark from '@/src/assets/branding/bmj-energy-wordmark.png';

interface BmjLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  /** Retained for caller compatibility; the artwork lockup has no subtitle. */
  showSubtitle?: boolean;
}

export const BmjLogo: React.FC<BmjLogoProps> = ({
  className = 'h-12 sm:h-14',
  variant = 'full',
}) => (
  <div
    className={`inline-flex max-w-full flex-nowrap items-center gap-2 select-none ${variant === 'white' ? 'rounded-md bg-white p-1.5' : ''} ${className}`}
    role="img"
    aria-label="BMJ Energy Service And Trading"
    data-brand-logo
  >
    {/* Lossless crops of the supplied artwork: original colours and proportions. */}
    <img
      src={symbol}
      alt=""
      aria-hidden="true"
      width={293}
      height={257}
      className="h-full w-auto shrink-0 object-contain"
      data-brand-symbol
    />
    <img
      src={wordmark}
      alt=""
      aria-hidden="true"
      width={429}
      height={49}
      className="h-auto w-[200px] min-w-0 sm:w-[224px] object-contain"
      data-brand-label
    />
  </div>
);
