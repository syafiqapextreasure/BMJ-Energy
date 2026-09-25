import React from 'react';

interface BmjLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BmjLogo: React.FC<BmjLogoProps> = ({
  className = "h-12 w-auto",
  variant = 'full',
  showSubtitle = true
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#102749';
  const subtextColor = isWhite ? '#F87171' : '#C81D25';
  const blueColor = isWhite ? '#60A5FA' : '#1B4D89';
  const redColor = '#D72638';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem matching A001 */}
      <svg
        viewBox="0 0 160 120"
        className="h-full w-auto max-h-16 shrink-0 aspect-[4/3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BMJ Energy Emblem"
      >
        {/* Dynamic Royal Blue Arc/Swoosh */}
        <path
          d="M 28 92 C 24 70, 36 38, 68 22 C 92 10, 118 14, 134 26 C 144 34, 146 44, 138 52 C 128 62, 110 64, 96 66 C 114 68, 136 74, 138 90 C 140 102, 126 112, 108 114 C 74 116, 40 108, 28 92 Z"
          fill={blueColor}
        />
        {/* Dynamic Inner Red Flame / Ribbon */}
        <path
          d="M 58 84 C 54 66, 64 48, 86 36 C 104 26, 120 28, 122 36 C 124 44, 110 50, 94 56 C 80 62, 72 72, 70 82 C 68 88, 62 88, 58 84 Z"
          fill={redColor}
        />
        {/* White Negative Space / Dynamic cutouts to shape the B monogram */}
        <path
          d="M 72 40 C 84 34, 100 36, 104 44 C 108 52, 96 56, 82 58 C 76 56, 72 48, 72 40 Z"
          fill={isWhite ? '#102749' : '#FFFFFF'}
        />
        <path
          d="M 68 68 C 82 66, 102 68, 106 78 C 110 88, 94 94, 78 94 C 70 94, 66 82, 68 68 Z"
          fill={isWhite ? '#102749' : '#FFFFFF'}
        />
      </svg>

      {/* Typography: BMJ ENERGY / SERVICE AND TRADING */}
      <div className="flex flex-col justify-center leading-none">
        <div
          className="font-extrabold tracking-tight text-lg md:text-xl lg:text-2xl"
          style={{ color: textColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          BMJ ENERGY
        </div>
        {showSubtitle && (
          <div
            className="font-bold tracking-widest text-[9px] md:text-[10.5px] uppercase mt-0.5"
            style={{ color: subtextColor, letterSpacing: '0.18em' }}
          >
            SERVICE AND TRADING
          </div>
        )}
      </div>
    </div>
  );
};
