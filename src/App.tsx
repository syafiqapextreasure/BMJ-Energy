/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RouteId } from '@/src/types';
import { LanguageProvider, useLanguage } from '@/src/context/LanguageContext';
import { AssetProvider } from '@/src/context/AssetContext';
import { Header } from '@/src/components/common/Header';
import { Footer } from '@/src/components/common/Footer';
import { FloatingWhatsApp } from '@/src/components/common/FloatingWhatsApp';
import { ImageLightbox } from '@/src/components/common/ImageLightbox';

import { HomePage } from '@/src/components/pages/HomePage';
import { AboutPage } from '@/src/components/pages/AboutPage';
import { ServicesPage } from '@/src/components/pages/ServicesPage';
import { PaintingServicePage } from '@/src/components/pages/PaintingServicePage';
import { EquipmentPage } from '@/src/components/pages/EquipmentPage';
import { PortfolioPage } from '@/src/components/pages/PortfolioPage';
import { ContactPage } from '@/src/components/pages/ContactPage';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { RENTAL_EQUIPMENT } from '@/src/data/rentalData';

function MainApp() {
  const { language } = useLanguage();

  // Route management based on URL hash or path
  const [currentRoute, setCurrentRoute] = useState<RouteId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Lightbox State
  const [lightboxAssetId, setLightboxAssetId] = useState<string | null>(null);
  const [lightboxAssetList, setLightboxAssetList] = useState<string[]>([]);

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
