import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { RENTAL_EQUIPMENT } from '@/src/data/rentalData';
import { COMPLETED_PROJECTS } from '@/src/data/portfolioData';
import { AssetImage } from '@/src/components/common/AssetImage';
import { PHOTO_REGISTRY } from '@/src/data/imageAssets';
import { YellowAngleBox } from '@/src/components/common/YellowAngleBox';
import {
  Shield,
  Clock,
  Award,
  ArrowRight,
  MessageSquare,
  HardHat,
  Check
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: RouteId) => void;
  onSelectService: (serviceId: string) => void;
  onOpenLightbox: (assetId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onOpenLightbox
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION: Full-width Authentic Equipment Hero with Transparent Image Background */}
      <section className="relative bg-[#0d1f38] text-white overflow-hidden">
        {/* Full-width transparent image background relevant to this project */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={PHOTO_REGISTRY.heroBg}
            alt="BMJ Energy Construction and Road Works"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Transparent gradient scrim allowing the road works & equipment to be seen clearly while maintaining crisp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a182c]/95 via-[#0e2547]/85 to-[#0a182c]/65" />
          <div className="absolute inset-0 bg-[#102749]/20 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (Cols 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Subtitle Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/15 text-slate-100 text-sm sm:text-base font-bold border border-white/20 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
                <span>{COMPANY_DATA.name} · {COMPANY_DATA.location}</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.headline}
              </h1>

              {/* Subheadline (Body 18-20px for high readability) */}
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
                {t.hero.subheadline}
              </p>

              {/* CTAs with Golden Yellow WhatsApp button matching Image 1 */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(
                    language === 'ms'
                      ? 'Salam BMJ Energy, saya ingin meminta sebut harga bagi projek / sewaan jentera.'
                      : 'Hello BMJ Energy, I would like to request a quotation for a project / machinery rental.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] px-8 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
                  <span>{t.hero.ctaQuote}</span>
                </a>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="min-h-[52px] px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.hero.ctaProjects}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Factual Trust Indicators */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-[#F5A623] shrink-0" />
                  <span className="font-semibold">No. SSM: {COMPANY_DATA.registration}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-[#F5A623] shrink-0" />
                  <span className="font-semibold">{language === 'ms' ? 'Ditubuhkan: 9 Mac 2021 di Manjung' : 'Established: 9 March 2021'}</span>
                </div>
              </div>
            </div>

            {/* Right Featured Authentic Equipment Visual with Image 1 Yellow Edge Angle (Cols 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-2 sm:p-4">
                <YellowAngleBox angleSize="lg" className="w-full">
                  <AssetImage
                    assetId="A014"
                    alt="Asphalt Paver BMJ Energy"
                    aspectRatio="aspect-[4/3]"
                    onClick={() => onOpenLightbox('A014')}
                    className="cursor-pointer"
                  />
                </YellowAngleBox>
              </div>

              <div className="p-3.5 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md text-sm sm:text-base text-slate-200 flex items-center justify-between">
                <span className="font-bold text-white">Asphalt Paver (Kuning) BMJ</span>
                <span className="font-mono text-xs sm:text-sm text-[#F5A623] font-bold">Ref: Profile p.9 (A014)</span>
              </div>

              {/* Micro-thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  className="cursor-pointer rounded-xl overflow-hidden border border-white/20 shadow-md hover:border-[#F5A623] transition-colors"
                  onClick={() => onOpenLightbox('A015')}
                >
                  <AssetImage assetId="A015" aspectRatio="aspect-[4/3]" />
                </div>
                <div
                  className="cursor-pointer rounded-xl overflow-hidden border border-white/20 shadow-md hover:border-[#F5A623] transition-colors"
                  onClick={() => onOpenLightbox('A016')}
                >
                  <AssetImage assetId="A016" aspectRatio="aspect-[4/3]" />
                </div>
                <div
                  className="cursor-pointer rounded-xl overflow-hidden border border-white/20 shadow-md hover:border-[#F5A623] transition-colors"
                  onClick={() => onOpenLightbox('A068')}
                >
                  <AssetImage assetId="A068" aspectRatio="aspect-[4/3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & STORY NARRATIVE with Framed Image matching Image 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
                {language === 'ms' ? 'Pengenalan Syarikat' : 'Company Overview'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102749] tracking-tight">
                {t.home.introTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {language === 'ms' ? COMPANY_DATA.aboutMs : COMPANY_DATA.aboutEn}
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal pt-1">
                {language === 'ms' ? COMPANY_DATA.storyMs : COMPANY_DATA.storyEn}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2.5 text-[#102749] hover:text-[#1B4D89] font-extrabold text-base sm:text-lg transition-colors cursor-pointer"
                >
                  <span>{language === 'ms' ? 'Baca Profil Penuh & Maklumat Pasukan' : 'Read Our Full Profile & Team'}</span>
                  <ArrowRight className="w-5 h-5 text-[#C81D25]" />
                </button>
              </div>
            </div>

            {/* Featured Excavator / Heavy Machinery framed with Yellow Edge Angle matching Image 1 */}
            <div className="lg:col-span-5 flex justify-center py-4 px-2">
              <YellowAngleBox angleSize="lg" className="w-full max-w-md">
                <AssetImage
                  assetId="A017"
                  alt="Excavator & Civil Works BMJ Energy"
                  aspectRatio="aspect-[4/3]"
                  onClick={() => onOpenLightbox('A017')}
                  className="cursor-pointer"
                />
              </YellowAngleBox>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW (12 Specialized Capabilities) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
              {language === 'ms' ? 'Keupayaan Teknikal' : 'Technical Capabilities'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
              {t.home.servicesTitle}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">
              {t.home.servicesSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-base font-bold text-[#102749] hover:text-[#1B4D89] whitespace-nowrap cursor-pointer"
          >
            <span>{t.home.viewAllServices}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Grid: 6 marquee services highlighted with authentic photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <AssetImage
                  assetId={service.primaryAssetId}
                  alt={language === 'ms' ? service.titleMs : service.titleEn}
                  aspectRatio="aspect-[16/10]"
                  onClick={() => onOpenLightbox(service.primaryAssetId)}
                  className="cursor-pointer"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#102749]/90 text-white font-mono text-sm font-bold backdrop-blur-xs">
                  {service.num}
                </span>
              </div>

              <p className="px-4 pt-3 text-xs text-slate-500">{language === 'ms' ? 'Ilustrasi AI • Foto asal di bawah' : 'AI illustration • Original photos below'}</p>
              <div className="grid grid-cols-3 gap-2 p-3">
                {service.assetIds.map(id => <AssetImage key={id} assetId={id} alt={language === 'ms' ? service.titleMs : service.titleEn} onClick={() => onOpenLightbox(id)} className="w-full" />)}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#102749] leading-snug group-hover:text-[#1B4D89] transition-colors">
                    {language === 'ms' ? service.titleMs : service.titleEn}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed line-clamp-3">
                    {language === 'ms' ? service.shortDescMs : service.shortDescEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      onNavigate('services');
                    }}
                    className="text-sm font-bold text-[#102749] hover:text-[#1B4D89] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{language === 'ms' ? 'Skop Terperinci' : 'View Scope'}</span>
                    <ArrowRight className="w-4 h-4 text-[#C81D25]" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(
                      language === 'ms'
                        ? `Salam BMJ Energy, saya berminat untuk sebut harga: ${service.titleMs}`
                        : `Hello BMJ Energy, I would like to request a quote for: ${service.titleEn}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#0F1E36] bg-[#F5A623] hover:bg-[#E09419] px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-[#0F1E36]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HEAVY EQUIPMENT RENTAL PREVIEW */}
      <section className="bg-slate-100 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-300/80">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
                {language === 'ms' ? 'Jentera Sebenar BMJ' : 'Authentic Fleet'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
                {t.home.rentalTitle}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-1">
                {t.home.rentalSubtitle}
              </p>
            </div>
            <button
              onClick={() => onNavigate('rental')}
              className="min-h-[50px] px-6 py-3 rounded-xl bg-[#102749] hover:bg-[#1B4D89] text-white font-bold text-base transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{t.home.checkAvailability}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENTAL_EQUIPMENT.slice(0, 4).map((equip) => (
              <div
                key={equip.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-900">
                  <AssetImage
                    assetId={equip.primaryAssetId}
                    alt={language === 'ms' ? equip.nameMs : equip.nameEn}
                    aspectRatio="aspect-[4/3]"
                    onClick={() => onOpenLightbox(equip.primaryAssetId)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {language === 'ms' ? equip.typeMs : equip.typeEn}
                    </span>
                    <h3 className="text-lg font-bold text-[#102749]">
                      {language === 'ms' ? equip.nameMs : equip.nameEn}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {language === 'ms' ? equip.descriptionMs : equip.descriptionEn}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate('rental')}
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#102749] text-sm font-bold text-center transition-colors cursor-pointer"
                    >
                      {language === 'ms' ? 'Borang Semakan Sewa' : 'Rental Check'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERIFIED PROJECT HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
              {language === 'ms' ? 'Pengalaman Terbukti' : 'Proven Track Record'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
              {t.home.portfolioTitle}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">
              {t.home.portfolioSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 text-base font-bold text-[#102749] hover:text-[#1B4D89] cursor-pointer"
          >
            <span>{t.home.viewFullPortfolio}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPLETED_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              <div className={`relative bg-slate-900 ${project.assetIds?.length ? 'aspect-[16/10]' : 'h-12'}`}>
                {project.assetIds?.[0] && (
                  <AssetImage
                    assetId={project.assetIds[0]}
                    alt={language === 'ms' ? project.titleMs : project.titleEn}
                    aspectRatio="aspect-[16/10]"
                    onClick={() => onOpenLightbox(project.assetIds![0])}
                    className="cursor-pointer"
                  />
                )}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 text-white font-mono text-xs sm:text-sm font-bold">
                  {project.code}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-white/95 text-[#102749] text-xs sm:text-sm font-bold">
                  {project.dateStr}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#102749] line-clamp-2">
                    {language === 'ms' ? project.titleMs : project.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {language === 'ms' ? project.scopeMs : project.scopeEn}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-mono text-xs">{project.pdfRef}</span>
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="font-bold text-[#102749] hover:underline cursor-pointer"
                  >
                    {language === 'ms' ? 'Perincian ›' : 'Details ›'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WORKING VALUES PILLARS (Factual & Professional) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Komitmen Kami' : 'Our Commitments'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
            {t.home.valuesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(language === 'ms' ? COMPANY_DATA.valuesMs : COMPANY_DATA.valuesEn).map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#102749] flex items-center justify-center font-bold">
                {idx === 0 && <Shield className="w-6 h-6 text-[#102749]" />}
                {idx === 1 && <HardHat className="w-6 h-6 text-amber-600" />}
                {idx === 2 && <Award className="w-6 h-6 text-[#C81D25]" />}
                {idx === 3 && <Clock className="w-6 h-6 text-emerald-600" />}
              </div>
              <h3 className="font-bold text-lg text-[#102749]">{val.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ENQUIRY CALL TO ACTION BANNER with Yellow WhatsApp CTA matching Image 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#102749] to-[#1B4D89] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t.home.ctaBannerTitle}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {t.home.ctaBannerDesc}
            </p>
            <div className="flex items-center gap-4 pt-1 justify-center md:justify-start text-sm text-slate-300 font-mono">
              <span className="font-bold text-white">Tel: {COMPANY_DATA.phone}</span>
              <span>·</span>
              <span>Manjung, Perak</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(
                language === 'ms'
                  ? 'Salam BMJ Energy, saya ingin berurusan mengenai projek pembinaan / sewaan jentera.'
                  : 'Hello BMJ Energy, I would like to discuss a construction project / machinery hire.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] px-8 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base text-center flex items-center justify-center gap-2.5 shadow-xl transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
              <span>{t.home.ctaWhatsappBtn}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="min-h-[52px] px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base text-center border border-white/25 transition-colors whitespace-nowrap cursor-pointer"
            >
              {language === 'ms' ? 'Borang Hubungi' : 'Contact Form'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
