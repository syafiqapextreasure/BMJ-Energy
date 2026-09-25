import React, { createContext, useContext, useState, useEffect } from 'react';
import { ASSET_SHEET_PATH } from '@/src/data/assets';

interface AssetContextType {
  sheetUrl: string;
  isSheetAvailable: boolean;
  hasCustomSheet: boolean;
  loadCustomSheet: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

const DB_NAME = 'bmj_assets_db';
const STORE_NAME = 'assets';
const SHEET_KEY = 'bmj_sheet_blob';

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sheetUrl, setSheetUrl] = useState<string>(ASSET_SHEET_PATH);
  const [isSheetAvailable, setIsSheetAvailable] = useState<boolean>(false);
  const [hasCustomSheet, setHasCustomSheet] = useState<boolean>(false);

  // Initialize and check IndexedDB or static file
  useEffect(() => {
    let active = true;

    const checkStaticSheet = () => {
      const img = new Image();
      img.onload = () => {
        if (active) {
          setIsSheetAvailable(true);
        }
      };
      img.onerror = () => {
        if (active) {
          // Check if custom uploaded sheet exists in IndexedDB
          checkIndexedDB();
        }
      };
      img.src = ASSET_SHEET_PATH;
    };

    const checkIndexedDB = () => {
      if (typeof window === 'undefined' || !window.indexedDB) return;
      try {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        };
        req.onsuccess = () => {
          const db = req.result;
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const getReq = store.get(SHEET_KEY);
          getReq.onsuccess = () => {
            if (getReq.result && active) {
              const url = URL.createObjectURL(getReq.result);
              setSheetUrl(url);
              setIsSheetAvailable(true);
              setHasCustomSheet(true);
            }
          };
        };
      } catch {
        // Ignore fallback
      }
    };

    checkStaticSheet();

    return () => {
      active = false;
    };
  }, []);

  const loadCustomSheet = async (file: File): Promise<boolean> => {
    try {
      const url = URL.createObjectURL(file);
      setSheetUrl(url);
      setIsSheetAvailable(true);
      setHasCustomSheet(true);

      // Persist to IndexedDB
      if (typeof window !== 'undefined' && window.indexedDB) {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        };
        req.onsuccess = () => {
          const db = req.result;
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(file, SHEET_KEY);
        };
      }
      return true;
    } catch (err) {
      console.error('Failed to load asset sheet:', err);
      return false;
    }
  };

  const resetToDefault = () => {
    if (typeof window !== 'undefined' && window.indexedDB) {
      const req = indexedDB.open(DB_NAME, 1);
      req.onsuccess = () => {
        const db = req.result;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.delete(SHEET_KEY);
      };
    }
    setSheetUrl(ASSET_SHEET_PATH);
    setHasCustomSheet(false);
  };

  return (
    <AssetContext.Provider
      value={{
        sheetUrl,
        isSheetAvailable,
        hasCustomSheet,
        loadCustomSheet,
        resetToDefault,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export const useAssets = () => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssets must be used within an AssetProvider');
  }
  return context;
};
