import React, { useEffect } from 'react';
import { ASSETS_BY_ID, ASSET_SHEET_WIDTH, ASSET_SHEET_HEIGHT } from '@/src/data/assets';
import { useAssets } from '@/src/context/AssetContext';
import { getPhotoForAsset, ILLUSTRATION_ASSETS } from '@/src/data/imageAssets';
import { ORIGINAL_PHOTO_OVERRIDES } from '@/src/data/originalPhotoOverrides';
import { SERVICE_IMAGE_OVERRIDES } from '@/src/data/serviceImageOverrides';
import { EQUIPMENT_IMAGE_OVERRIDES } from '@/src/data/equipmentImageOverrides';
import { PROJECT_PHOTO_OVERRIDES } from '@/src/data/projectPhotoOverrides';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { useLanguage } from '@/src/context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  currentAssetId: string | null;
  assetList?: string[];
  onClose: () => void;
  onNavigate?: (assetId: string) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  currentAssetId,
  assetList = [],
  onClose,
  onNavigate
}) => {
  const { sheetUrl, isSheetAvailable } = useAssets();
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && assetList.length > 1 && onNavigate && currentAssetId) {
        const currentIndex = assetList.indexOf(currentAssetId);
        const prevIndex = (currentIndex - 1 + assetList.length) % assetList.length;
        onNavigate(assetList[prevIndex]);
      } else if (e.key === 'ArrowRight' && assetList.length > 1 && onNavigate && currentAssetId) {
        const currentIndex = assetList.indexOf(currentAssetId);
        const nextIndex = (currentIndex + 1) % assetList.length;
        onNavigate(assetList[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentAssetId, assetList, onClose, onNavigate]);

  if (!currentAssetId) return null;

  const isIllustration = Boolean(ILLUSTRATION_ASSETS[currentAssetId]);
  const asset = ASSETS_BY_ID[currentAssetId] || ((isIllustration || PROJECT_PHOTO_OVERRIDES[currentAssetId]) ? { id: currentAssetId, title: language === 'ms' ? 'Foto projek BMJ Energy' : 'BMJ Energy project photo', category: 'project', x: 0, y: 0, w: 0, h: 0, profileRef: '', notes: '' } : null);
  if (!asset) return null;

  const currentIndex = assetList.indexOf(currentAssetId);
  const hasNav = assetList.length > 1 && onNavigate;
  const photoSrc = SERVICE_IMAGE_OVERRIDES[asset.id] || EQUIPMENT_IMAGE_OVERRIDES[asset.id] || PROJECT_PHOTO_OVERRIDES[asset.id] || getPhotoForAsset(asset.id, asset.category);
  const isService = Boolean(SERVICE_IMAGE_OVERRIDES[asset.id]) || isIllustration;
  const service = SERVICES_DATA.find(s => s.primaryAssetId === asset.id || s.assetIds.includes(asset.id));
  const title = !isIllustration && isService && service ? (language === 'ms' ? service.titleMs : service.titleEn) : asset.title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Modal"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-white cursor-pointer"
        aria-label="Tutup Paparan (Close)"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {hasNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            const prevIndex = (currentIndex - 1 + assetList.length) % assetList.length;
            onNavigate(assetList[prevIndex]);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-white cursor-pointer"
          aria-label="Sebelumnya (Previous Image)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Next button */}
      {hasNav && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            const nextIndex = (currentIndex + 1) % assetList.length;
            onNavigate(assetList[nextIndex]);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-white cursor-pointer"
          aria-label="Seterusnya (Next Image)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Main Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950 border border-white/10 shadow-2xl">
          {!isService && !ORIGINAL_PHOTO_OVERRIDES[asset.id] && isSheetAvailable ? (
            <svg
              viewBox={`${asset.x} ${asset.y} ${asset.w} ${asset.h}`}
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
              preserveAspectRatio="xMidYMid meet"
            >
              <image
                href={sheetUrl}
                width={ASSET_SHEET_WIDTH}
                height={ASSET_SHEET_HEIGHT}
              />
            </svg>
          ) : (
            <img
              src={photoSrc}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl"
            />
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 px-6 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-center max-w-2xl w-full text-white backdrop-blur-md">
          {!isService && <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-400 mb-1">
            <span>ID: {asset.id}</span>
            {hasNav && <span>{currentIndex + 1} / {assetList.length}</span>}
            {asset.profileRef && <span>{asset.profileRef}</span>}
          </div>}
          <h4 className="text-base font-semibold text-slate-100">{title}</h4>
          {!isService && asset.notes && <p className="text-xs text-slate-300 mt-1">{asset.notes}</p>}
        </div>
      </div>
    </div>
  );
};
