import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import { PAINTING_PROJECTS, PAINTING_SCOPE_EN, PAINTING_SCOPE_MS, PAINTING_SERVICE_IMAGES } from '@/src/data/paintingServiceData';
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
    <div className="space-y-16 pb-20">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Skop Perkhidmatan', 'Service Scope')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102749]">
            {label('Cantik, kemas dan tahan lama — tanpa perlu visual AI baharu.', 'Beautiful, clean and durable — no new AI visual is required.')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {label(
              'Lampiran katalog yang diberi sudah mempunyai foto kerja sebenar yang mencukupi. Laman ini direka semula dengan layout moden, warna jenama BMJ dan galeri projek supaya nampak lebih premium daripada PDF asal.',
              'The supplied catalog already contains enough real work photos. This page repackages them with a modern layout, BMJ brand colours and project galleries so it looks more premium than the original PDF.'
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-6 flex-wrap">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Projek Dalam Katalog', 'Catalog Project Examples')}</span>
            <h2 className="text-3xl font-extrabold text-[#102749] mt-1">{label('Contoh kerja berkaitan mengecat', 'Related painting work examples')}</h2>
          </div>
          <button onClick={() => onNavigate('contact')} className="px-5 py-3 rounded-xl bg-[#102749] text-white font-bold hover:bg-[#0b1b33]">
            {label('Hubungi BMJ', 'Contact BMJ')}
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAINTING_PROJECTS.map((project) => (
            <article key={project.titleEn} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <img src={project.image} alt={label(project.titleMs, project.titleEn)} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-[#102749] leading-snug">{label(project.titleMs, project.titleEn)}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
