/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RouteId } from '@/src/types';
import { LanguageProvider, useLanguage } from '@/src/context/LanguageContext';
import { AssetProvider, useAssets } from '@/src/context/AssetContext';
import { Header } from '@/src/components/common/Header';
import { Footer } from '@/src/components/common/Footer';
import { FloatingWhatsApp } from '@/src/components/common/FloatingWhatsApp';
import { ImageLightbox } from '@/src/components/common/ImageLightbox';
import { AssetUploadModal } from '@/src/components/common/AssetUploadModal';

import { HomePage } from '@/src/components/pages/HomePage';
import { AboutPage } from '@/src/components/pages/AboutPage';
import { ServicesPage } from '@/src/components/pages/ServicesPage';
import { PaintingServicePage } from '@/src/components/pages/PaintingServicePage';
import { EquipmentPage } from '@/src/components/pages/EquipmentPage';
import { PortfolioPage } from '@/src/components/pages/PortfolioPage';
import { ContactPage } from '@/src/components/pages/ContactPage';
import { Image as ImageIcon } from 'lucide-react';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { RENTAL_EQUIPMENT } from '@/src/data/rentalData';

function MainApp() {
  const { language } = useLanguage();
  const { isSheetAvailable } = useAssets();

  // Route management based on URL hash or path
  const [currentRoute, setCurrentRoute] = useState<RouteId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Lightbox State
  const [lightboxAssetId, setLightboxAssetId] = useState<string | null>(null);
  const [lightboxAssetList, setLightboxAssetList] = useState<string[]>([]);

  // Asset Upload Modal State
  const [assetModalOpen, setAssetModalOpen] = useState(false);

  // Parse route from URL hash or pathname
  const getRouteFromUrl = (): RouteId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes: RouteId[] = ['home', 'about', 'services', 'painting', 'portfolio', 'rental', 'contact'];
    if (validRoutes.includes(hash as RouteId)) {
      return hash as RouteId;
    }
    const path = window.location.pathname.replace(/^\//, '');
    if (validRoutes.includes(path as RouteId)) {
      return path as RouteId;
    }
    return 'home';
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const route = getRouteFromUrl();
      setCurrentRoute(route);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateTo = (route: RouteId) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (assetId: string, assetList?: string[]) => {
    setLightboxAssetId(assetId);
    const service = SERVICES_DATA.find(s => s.assetIds.includes(assetId));
    const equipment = RENTAL_EQUIPMENT.find(e => e.assetIds.includes(assetId));
    setLightboxAssetList(assetList || service?.assetIds || equipment?.assetIds || [assetId]);
  };

  const handleCloseLightbox = () => {
    setLightboxAssetId(null);
    setLightboxAssetList([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#102749] selection:text-white">
      {/* Sticky Header with Navigation & Brand Logo */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onSelectService={(srvId) => setSelectedServiceId(srvId)}
      />

      {/* Main Distinct Page Content Area */}
      <main className="flex-1 w-full" id="main-content">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={(srvId) => {
              setSelectedServiceId(srvId);
              navigateTo('services');
            }}
            onOpenLightbox={(id) => handleOpenLightbox(id)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenLightbox={(id) => handleOpenLightbox(id)}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceId}
            onOpenLightbox={(id) => handleOpenLightbox(id)}
          />
        )}

        {currentRoute === 'painting' && (
          <PaintingServicePage onNavigate={navigateTo} />
        )}

        {currentRoute === 'rental' && (
          <EquipmentPage
            onNavigate={navigateTo}
            onOpenLightbox={(id) => handleOpenLightbox(id)}
          />
        )}

        {currentRoute === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigateTo}
            onOpenLightbox={(id, list) => handleOpenLightbox(id, list)}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Full-Screen Image Lightbox Modal */}
      <ImageLightbox
        currentAssetId={lightboxAssetId}
        assetList={lightboxAssetList}
        onClose={handleCloseLightbox}
        onNavigate={(newId) => setLightboxAssetId(newId)}
      />

      {/* Sheet Upload Tool Modal */}
      <AssetUploadModal
        isOpen={assetModalOpen}
        onClose={() => setAssetModalOpen(false)}
      />

      {/* Discreet Sheet Loader Floating Pill */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={() => setAssetModalOpen(true)}
          className={`px-3 py-2 rounded-full text-xs font-semibold shadow-md border flex items-center gap-2 backdrop-blur-md transition-all ${
            isSheetAvailable
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50 hover:bg-emerald-900'
              : 'bg-slate-900/80 text-slate-300 border-slate-700/60 hover:bg-slate-800'
          }`}
          title="Urus Lembaran Imej BMJ (BMJ_Website_Images.png)"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">
            {isSheetAvailable ? 'Imej Asal Aktif (109 Foto)' : 'Lembaran Imej'}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AssetProvider>
        <MainApp />
      </AssetProvider>
    </LanguageProvider>
  );
}
