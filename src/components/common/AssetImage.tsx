import React, { useState } from 'react';
import { ASSETS_BY_ID, ASSET_SHEET_WIDTH, ASSET_SHEET_HEIGHT } from '@/src/data/assets';
import { useAssets } from '@/src/context/AssetContext';
import { getPhotoForAsset } from '@/src/data/imageAssets';
import { SERVICE_IMAGE_OVERRIDES } from '@/src/data/serviceImageOverrides';
import { ORIGINAL_PHOTO_OVERRIDES } from '@/src/data/originalPhotoOverrides';
import { SERVICE_THUMBNAILS } from '@/src/data/serviceThumbnails';
import { Eye } from 'lucide-react';

interface AssetImageProps {
  assetId: string;
  alt?: string;
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-[4/3]' or 'aspect-[16/9]'
  objectFit?: 'contain' | 'cover';
  onClick?: () => void;
  showBadge?: boolean;
}

export const AssetImage: React.FC<AssetImageProps> = ({
  assetId,
  alt,
  className = "w-full h-full",
  aspectRatio = "aspect-[4/3]",
  objectFit = "cover",
  onClick,
  showBadge = false
}) => {
  const { sheetUrl, isSheetAvailable } = useAssets();
  const [spriteError, setSpriteError] = useState(false);
  const asset = ASSETS_BY_ID[assetId];

  const label = alt || asset?.title || 'BMJ Energy Engineering & Machinery';
  const realPhotoSrc = SERVICE_THUMBNAILS[assetId] || getPhotoForAsset(assetId, asset?.category);
  const isClickable = Boolean(onClick);

  return (
    <div
      data-asset-id={assetId}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } } : undefined}
      className={`group relative overflow-hidden rounded-xl bg-slate-900 border border-slate-200/80 shadow-xs transition-all duration-300 ${
        isClickable ? 'cursor-pointer hover:shadow-lg hover:border-slate-400 focus-visible:ring-2 focus-visible:ring-[#102749]' : ''
      } ${aspectRatio} ${className}`}
      aria-label={label}
    >
      {/* 1. Spritesheet clipping IF spritesheet is explicitly uploaded & available */}
      {!ORIGINAL_PHOTO_OVERRIDES[assetId] && !SERVICE_IMAGE_OVERRIDES[assetId] && isSheetAvailable && !spriteError && asset ? (
        <svg
          viewBox={`${asset.x} ${asset.y} ${asset.w} ${asset.h}`}
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 ${isClickable ? 'group-hover:scale-105' : ''}`}
          preserveAspectRatio={objectFit === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'}
          aria-hidden="true"
        >
          <image
            href={sheetUrl}
            width={ASSET_SHEET_WIDTH}
            height={ASSET_SHEET_HEIGHT}
            onError={() => setSpriteError(true)}
          />
        </svg>
      ) : (
        /* 2. Authentic High-Resolution Photographic Asset */
        <img
          src={realPhotoSrc}
          alt={label}
          referrerPolicy="no-referrer"
          className={`w-full h-full ${
            objectFit === 'contain' ? 'object-contain bg-slate-900' : 'object-cover'
          } transition-transform duration-500 ${isClickable ? 'group-hover:scale-105' : ''}`}
          loading="lazy"
        />
      )}

      {/* Subtle bottom shadow vignette for contrast & realism */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

      {/* Hover Lightbox Indicator if clickable */}
      {isClickable && (
        <div className="absolute inset-0 bg-[#102749]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="p-2.5 rounded-full bg-white/95 text-[#102749] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* Asset ID Reference Badge */}
      {showBadge && asset && (
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/20 shadow-xs">
          {asset.id}
        </div>
      )}
    </div>
  );
};
