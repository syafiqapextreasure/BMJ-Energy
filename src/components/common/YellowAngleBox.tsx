import React from 'react';

interface YellowAngleBoxProps {
  children: React.ReactNode;
  className?: string;
  angleSize?: 'sm' | 'md' | 'lg';
  showNavyBackdrop?: boolean;
}

/**
 * YellowAngleBox:
 * Recreates the architectural framed image effect requested by the user:
 * - A solid dark navy backdrop extending behind top-right
 * - The primary image in the foreground
 * - A solid warm golden-yellow rectangle accent block offset at the bottom-right corner
 */
export const YellowAngleBox: React.FC<YellowAngleBoxProps> = ({
  children,
  className = '',
  angleSize = 'md',
  showNavyBackdrop = true,
}) => {
  const yellowSizes = {
    sm: 'w-12 sm:w-16 h-16 sm:h-20 -bottom-3 -right-3',
    md: 'w-16 sm:w-24 h-24 sm:h-32 -bottom-4 sm:-bottom-5 -right-4 sm:-right-5',
    lg: 'w-20 sm:w-32 h-28 sm:h-40 -bottom-5 sm:-bottom-6 -right-5 sm:-right-6',
  };

  const navySizes = {
    sm: '-top-3 -right-3 -left-1 -bottom-1',
    md: '-top-4 sm:-top-5 -right-4 sm:-right-6 -left-2 -bottom-2',
    lg: '-top-6 sm:-top-8 -right-6 sm:-right-8 -left-3 -bottom-3',
  };

  return (
    <div className={`relative ${className}`}>
      {/* 1. Navy Backdrop Accent (Top & Right extension matching Image 1) */}
      {showNavyBackdrop && (
        <div
          className={`absolute ${navySizes[angleSize]} bg-[#102749] rounded-2xl z-0 pointer-events-none transition-all duration-300 shadow-lg`}
          aria-hidden="true"
        />
      )}

      {/* 2. Golden Yellow Edge Angle Accent (Bottom-Right vertical solid block matching Image 1) */}
      <div
        className={`absolute ${yellowSizes[angleSize]} bg-[#F5A623] rounded-lg z-0 shadow-lg pointer-events-none transition-all duration-300`}
        aria-hidden="true"
      />

      {/* 3. Foreground Content with clean borders */}
      <div className="relative z-10 overflow-hidden rounded-xl bg-slate-900 border-2 border-white/20 shadow-2xl">
        {children}
      </div>
    </div>
  );
};
