import React, { useState, useEffect } from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { SERVICE_IMAGE_OVERRIDES } from '@/src/data/serviceImageOverrides';
import { SERVICE_THUMBNAILS } from '@/src/data/serviceThumbnails';
import { getPhotoForAsset } from '@/src/data/imageAssets';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import { YellowAngleBox } from '@/src/components/common/YellowAngleBox';
import {
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: RouteId) => void;
  selectedServiceId?: string | null;
  onOpenLightbox: (assetId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId,
  onOpenLightbox
}) => {
  const { language, t } = useLanguage();
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || SERVICES_DATA[0].id
  );

  useEffect(() => {
    if (selectedServiceId) {
      setActiveServiceId(selectedServiceId);
      const el = document.getElementById(`service-${selectedServiceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedServiceId]);

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="services" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Kepakaran Kejuruteraan' : 'Engineering Capabilities'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] tracking-tight mt-2">
            {t.services.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mt-3 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Service Anchor Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-sm font-bold uppercase tracking-wider text-slate-700 block mb-3">
            {language === 'ms' ? 'Pilih Skop Perkhidmatan (12 Bidang):' : 'Select Service Category (12 Scopes):'}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => {
                  setActiveServiceId(srv.id);
                  const el = document.getElementById(`service-${srv.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-3.5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                  activeServiceId === srv.id
                    ? 'bg-[#102749] text-white shadow-sm font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="font-mono text-xs sm:text-sm opacity-80">{srv.num}.</span>
                <span>{language === 'ms' ? srv.titleMs : srv.titleEn}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Cards List (1 to 12) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {SERVICES_DATA.map((service, index) => {
          const title = language === 'ms' ? service.titleMs : service.titleEn;
          const desc = language === 'ms' ? service.shortDescMs : service.shortDescEn;
          const scopes = language === 'ms' ? service.scopeMs : service.scopeEn;

          return (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Content (Cols 7) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-md bg-[#102749] text-white font-mono font-bold text-base">
                      {service.num}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#C81D25]">
                      {language === 'ms' ? 'Perkhidmatan BMJ' : 'BMJ Services'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] leading-snug">
                    {title}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {desc}
                  </p>

                  {/* Technical Scope Checklist */}
                  <div className="space-y-3.5 pt-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#102749] uppercase tracking-wider">
                      {t.services.technicalScope}:
                    </h3>
                    <ul className="space-y-3">
                      {scopes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-1" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Specific Yellow WhatsApp CTA matching Image 1 */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(
                        language === 'ms'
                          ? `Salam BMJ Energy, saya ingin bertanyakan sebut harga untuk perkhidmatan: ${service.titleMs}`
                          : `Hello BMJ Energy, I would like to request a quotation for: ${service.titleEn}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[52px] px-7 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
                      <span>{t.services.enquireForService}</span>
                    </a>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="min-h-[52px] px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#102749] font-bold text-base transition-colors text-center cursor-pointer"
                    >
                      {language === 'ms' ? 'Hubungi Pejabat BMJ' : 'Contact BMJ Office'}
                    </button>
                  </div>
                </div>

                {/* Right Visuals (Cols 5) with Yellow Edge Angle frame for prominent services */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Primary original project/service photograph */}
                  <div className="p-2 sm:p-3">
                    <YellowAngleBox angleSize="md" className="w-full">
                      <button data-asset-id={service.assetIds[0] || service.primaryAssetId} type="button" className="block w-full aspect-[4/3] bg-slate-50 cursor-pointer" aria-label={title} onClick={() => onOpenLightbox(service.assetIds[0] || service.primaryAssetId)}>
                        <img src={SERVICE_THUMBNAILS[service.assetIds[0]] || SERVICE_IMAGE_OVERRIDES[service.assetIds[0]] || getPhotoForAsset(service.assetIds[0] || service.primaryAssetId)} alt={title} loading="lazy" className="w-full h-full object-cover" />
                      </button>
                    </YellowAngleBox>
                  </div>

                  {/* Supporting Photos Gallery */}
                  {service.assetIds.length > 0 && (
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {service.assetIds.map((id) => (
                        <button
                          type="button"
                          data-asset-id={id}
                          aria-label={`${title} — ${service.assetIds.indexOf(id) + 1}`}
                          key={id}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 cursor-pointer bg-white shadow-sm hover:border-[#F5A623] transition-colors"
                          onClick={() => onOpenLightbox(id)}
                        >
                          <img data-service-thumbnail={index < 8 ? id : undefined} src={SERVICE_THUMBNAILS[id] || SERVICE_IMAGE_OVERRIDES[id]} alt={title} loading="lazy" className={`w-full h-full ${index < 8 ? 'object-cover' : 'object-contain p-3'}`} />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 flex items-center justify-between">
                    <span>
                      {language === 'ms'
                        ? 'Skop, bahan dan kaedah tertakluk kepada reka bentuk, spesifikasi projek dan kelulusan berkaitan.'
                        : 'Scope, materials and methods are subject to the design, project specifications and relevant approvals.'}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-500">BMJ Energy</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
