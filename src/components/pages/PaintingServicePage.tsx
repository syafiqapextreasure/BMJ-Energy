import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import { PAINTING_CATALOG_PROJECTS, PAINTING_SCOPE_EN, PAINTING_SCOPE_MS, PAINTING_SERVICE_IMAGES } from '@/src/data/paintingServiceData';
import { Brush, CheckCircle2, Droplets, MessageSquare, PaintBucket, ShieldCheck, Sparkles } from 'lucide-react';

interface PaintingServicePageProps {
  onNavigate: (route: RouteId) => void;
}

const gallery = [
  PAINTING_SERVICE_IMAGES.ceilingSteel,
  PAINTING_SERVICE_IMAGES.ceilingFinished,
  PAINTING_SERVICE_IMAGES.waterproofingRoof,
  PAINTING_SERVICE_IMAGES.wallExterior,
  PAINTING_SERVICE_IMAGES.apartmentFacade,
  PAINTING_SERVICE_IMAGES.toiletRepair,
];

export const PaintingServicePage: React.FC<PaintingServicePageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const label = (ms: string, en: string) => (language === 'ms' ? ms : en);
  const scopes = language === 'ms' ? PAINTING_SCOPE_MS : PAINTING_SCOPE_EN;

  const whatsappText = encodeURIComponent(
    language === 'ms'
      ? 'Salam BMJ Energy, saya ingin bertanyakan sebut harga untuk Painting Services / kerja mengecat dan coating.'
      : 'Hello BMJ Energy, I would like to request a quotation for Painting Services / painting and coating works.'
  );

  return (
    <div className="pb-20">
      <Breadcrumbs currentRoute="painting" subTitle={label('Painting Services', 'Painting Services')} onNavigate={onNavigate} />

      <section className="relative overflow-hidden bg-[#102749]">
        <div className="absolute inset-0 opacity-30">
          <img src={PAINTING_SERVICE_IMAGES.hero} alt="BMJ Energy painting service" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#102749] via-[#102749]/90 to-[#102749]/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623] text-[#102749] font-extrabold text-sm uppercase tracking-wider">
              <Brush className="w-4 h-4" />
              {label('Perkhidmatan Baharu', 'New Service Collection')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {label('Painting Services & Protective Coating', 'Painting Services & Protective Coating')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-3xl">
              {label(
                'BMJ Energy menyediakan kerja mengecat dalaman, luaran, siling, dinding, epoxy floor coating dan PU waterproofing untuk bangunan kediaman, komersial, sekolah dan fasiliti awam.',
                'BMJ Energy provides interior, exterior, ceiling, wall, epoxy floor coating and PU waterproofing works for residential, commercial, school and public-facility buildings.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] px-7 py-3.5 rounded-xl bg-[#F5A623] text-[#102749] font-extrabold shadow-lg hover:bg-[#E09419] transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                {label('Minta Sebut Harga Mengecat', 'Request Painting Quote')}
              </a>
              <button
                onClick={() => onNavigate('portfolio')}
                className="min-h-[54px] px-7 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white font-bold hover:bg-white/15 transition-colors"
              >
                {label('Lihat Projek Berkaitan', 'View Related Projects')}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-3 shadow-2xl rotate-1">
              <img src={PAINTING_SERVICE_IMAGES.tools} alt="Paint roller and wall finish" className="rounded-2xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#F5A623] px-5 py-4 shadow-xl text-[#102749] max-w-[230px]">
                <div className="font-extrabold text-lg">{label('Dalaman + Luaran', 'Interior + Exterior')}</div>
                <div className="text-sm font-semibold opacity-80">{label('Cat, epoxy & waterproofing', 'Paint, epoxy & waterproofing')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Skop Perkhidmatan', 'Service Scope')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102749]">
            {label('Kemasan cat profesional untuk rumah, bangunan dan fasiliti.', 'Professional paint finishes for homes, buildings and facilities.')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {label(
              'BMJ Energy menyediakan kerja cat dalaman dan luaran, waterproofing PU, epoxy floor coating serta kemasan touch-up dengan persediaan permukaan yang teliti untuk hasil yang kemas, tahan lama dan sesuai dengan keadaan tapak.',
              'BMJ Energy provides interior and exterior painting, PU waterproofing, epoxy floor coating and touch-up finishing with careful surface preparation for clean, durable results suited to each site condition.'
            )}
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {[
            { icon: PaintBucket, titleMs: 'Cat Dalaman & Luaran', titleEn: 'Interior & Exterior Painting' },
            { icon: Droplets, titleMs: 'Waterproofing PU', titleEn: 'PU Waterproofing' },
            { icon: ShieldCheck, titleMs: 'Epoxy Floor Coating', titleEn: 'Epoxy Floor Coating' },
            { icon: Sparkles, titleMs: 'Kemasan & Touch-Up', titleEn: 'Finishing & Touch-Up' },
          ].map((item) => (
            <div key={item.titleEn} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
              <item.icon className="w-8 h-8 text-[#F5A623] mb-4" />
              <h3 className="text-xl font-extrabold text-[#102749]">{label(item.titleMs, item.titleEn)}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-2xl font-extrabold text-[#102749] mb-5">{label('Apa yang BMJ boleh buat', 'What BMJ can deliver')}</h2>
          <ul className="space-y-4">
            {scopes.map((scope) => (
              <li key={scope} className="flex gap-3 text-slate-700 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-1" />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`BMJ painting service gallery ${index + 1}`}
              className={`rounded-2xl object-cover w-full shadow-sm border border-slate-200 ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto h-full' : 'aspect-[4/3]'}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Projek Katalog Sebelum & Selepas', 'Before & After Catalog Projects')}</span>
            <h2 className="text-3xl font-extrabold text-[#102749] mt-1">{label('Semua 11 projek painting daripada katalog', 'All 11 painting projects from the catalog')}</h2>
            <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">
              {label(
                'Dikemas kini dengan gambar individu yang diekstrak daripada katalog asal — bukan poster PDF penuh. Setiap kad memaparkan foto projek sebenar yang dikumpulkan mengikut projek masing-masing.',
                'Updated with individual photos extracted from the original catalog — not full PDF poster pages. Each card shows real project photos grouped under the correct project.'
              )}
            </p>
          </div>
          <button onClick={() => onNavigate('contact')} className="px-5 py-3 rounded-xl bg-[#102749] text-white font-bold hover:bg-[#0b1b33]">
            {label('Hubungi BMJ', 'Contact BMJ')}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PAINTING_CATALOG_PROJECTS.map((item, index) => (
            <article key={item.titleEn} className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase tracking-widest text-[#C81D25]">{label('Projek Katalog', 'Catalog Project')}</span>
                  <span className="rounded-full bg-[#102749] px-3 py-1 text-xs font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-2 text-lg sm:text-xl font-extrabold leading-snug text-[#102749]">{label(item.titleMs, item.titleEn)}</h3>
              </div>
              <div className="grid md:grid-cols-[2fr_1fr] gap-px bg-slate-200">
                <div className="bg-white p-3">
                  <div className="mb-3 inline-flex rounded-full bg-slate-950/85 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                    {label('Sebelum / Proses', 'Before / Process')}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {item.beforeImages.map((src, photoIndex) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${label(item.titleMs, item.titleEn)} — ${label('foto proses', 'process photo')} ${photoIndex + 1}`}
                        className="aspect-[4/3] w-full rounded-xl border border-slate-200 object-cover bg-slate-100"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3">
                  <div className="mb-3 inline-flex rounded-full bg-[#F5A623] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#102749]">
                    {label('Selepas / Hasil', 'After / Result')}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {item.afterImages.map((src, photoIndex) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${label(item.titleMs, item.titleEn)} — ${label('foto hasil', 'result photo')} ${photoIndex + 1}`}
                        className="aspect-[16/9] w-full rounded-xl border border-slate-200 object-cover bg-slate-100"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-[#102749]">
          {label(
            `${PAINTING_CATALOG_PROJECTS.length} projek katalog dipaparkan menggunakan gambar individu yang diekstrak daripada katalog asal.`,
            `${PAINTING_CATALOG_PROJECTS.length} catalog projects are shown using individual photos extracted from the original catalog.`
          )}
        </div>
      </section>
    </div>
  );
};
