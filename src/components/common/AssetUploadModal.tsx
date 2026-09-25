import React, { useState } from 'react';
import { useAssets } from '@/src/context/AssetContext';
import { Image as ImageIcon, Upload, CheckCircle, RefreshCw, X } from 'lucide-react';

interface AssetUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssetUploadModal: React.FC<AssetUploadModalProps> = ({ isOpen, onClose }) => {
  const { isSheetAvailable, hasCustomSheet, loadCustomSheet, resetToDefault } = useAssets();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      const ok = await loadCustomSheet(file);
      setLoading(false);
      if (ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1200);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setLoading(true);
      const ok = await loadCustomSheet(file);
      setLoading(false);
      if (ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1200);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-2xl p-6 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-blue-50 text-[#102749]">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Pengurus Fail Lembaran Imej BMJ
            </h3>
            <p className="text-xs text-slate-500">BMJ_Website_Images.png (5600×9220px)</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          Semua 109 koordinat potongan jubin foto asal BMJ Energy dipetakan secara matematik.
          Muat naik fail <strong>BMJ_Website_Images.png</strong> untuk melihat paparan fotografi resolusi penuh secara langsung.
        </p>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border-2 border-dashed border-slate-300 hover:border-[#102749] rounded-xl p-8 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-slate-100"
        >
          <input
            type="file"
            id="sheet-upload"
            accept="image/png,image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="sheet-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="w-10 h-10 text-slate-400 mb-2" />
            <span className="text-sm font-bold text-slate-800">
              Klik atau Seret Fail Imej ke Sini
            </span>
            <span className="text-xs text-slate-500 mt-1">
              BMJ_Website_Images.png (Sheet 5600x9220 px)
            </span>
          </label>
        </div>

        {loading && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#102749]">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Memproses potongan koordinat...</span>
          </div>
        )}

        {success && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-50 text-emerald-700 text-sm flex items-center gap-2 font-medium">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Lembaran imej berjaya dimuatkan ke dalam memori aplikasi!</span>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Status Semasa:{' '}
            <strong className={isSheetAvailable ? 'text-emerald-600' : 'text-amber-600'}>
              {isSheetAvailable ? 'Aktif (109 Foto Dipaparkan)' : 'Fallback Vektor Aktif'}
            </strong>
          </span>
          {hasCustomSheet && (
            <button
              onClick={resetToDefault}
              className="text-red-600 hover:underline font-medium"
            >
              Reset Lembaran
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
