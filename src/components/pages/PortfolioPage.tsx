import React, { useState } from 'react';
import { RouteId, ProjectRecord } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPLETED_PROJECTS, SUPPORTING_RECORDS, PHOTO_ONLY_ARCHIVES } from '@/src/data/portfolioData';
import { AssetImage } from '@/src/components/common/AssetImage';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import {
  Search,
  Filter,
  Calendar,
  Building,
  FileText,
  AlertTriangle,
  Info,
  CheckCircle2,
  ExternalLink,
  Eye,
  Images
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (route: RouteId) => void;
  onOpenLightbox: (assetId: string, assetList?: string[]) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const { language, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<'completed' | 'supporting' | 'photos'>('completed');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Translate display text only; retain original document date strings in data.
  const displayDate = (date: string) => language === 'ms' ? date : date.replace(
    /\b(Januari|Februari|Feb|Mac|Mei|Jun|Julai|Ogos|Oktober|Disember)\b/g,
    (month) => ({ Januari: 'January', Februari: 'February', Feb: 'February', Mac: 'March', Mei: 'May', Jun: 'June', Julai: 'July', Ogos: 'August', Oktober: 'October', Disember: 'December' }[month] || month)
  );

  // Filter completed projects
  const filteredCompleted = COMPLETED_PROJECTS.filter((proj) => {
    const matchesSearch =
      searchTerm === '' ||
      proj.titleMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.scopeMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.scopeEn.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Filter supporting records (only isPublic: true)
  const filteredSupporting = SUPPORTING_RECORDS.filter((rec) => {
    if (!rec.isPublic) return false;
    return (
      searchTerm === '' ||
      rec.titleMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.scopeMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.scopeEn.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Filter photo-only archives
  const filteredPhotos = PHOTO_ONLY_ARCHIVES.filter((g) => {
    return (
      searchTerm === '' ||
      g.titleMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.descMs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.descEn.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="portfolio" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Pengalaman & Rekod Kerja' : 'Project Experience & Register'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] tracking-tight mt-2">
            {t.portfolio.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mt-3 leading-relaxed">
            {t.portfolio.subtitle}
          </p>

          <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed max-w-4xl">
            <span className="font-bold text-slate-800">
              {language === 'ms' ? 'Nota Ketepatan Rekod:' : 'Record Accuracy Note:'}
            </span>{' '}
            {language === 'ms'
              ? 'Tarikh projek yang dipaparkan adalah tarikh dokumen/kontrak rasmi berpandukan dokumen sokongan, dan penyiapan adalah sepertimana dibentangkan dalam "List of Finished Project" profil syarikat.'
              : 'Stated project dates represent official document/contract dates referenced from source paperwork; project completions are presented as recorded in the company profile.'}
          </div>
        </div>
      </section>

      {/* Tabs & Search Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Main Category Tabs */}
          <div className="flex border-b border-slate-200 overflow-x-auto gap-2 sm:gap-4 pb-px">
            <button
              onClick={() => setActiveTab('completed')}
              className={`min-h-[48px] px-5 py-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'completed'
                  ? 'border-[#102749] text-[#102749]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {t.portfolio.tabCompleted}
            </button>

            <button
              onClick={() => setActiveTab('supporting')}
              className={`min-h-[48px] px-5 py-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'supporting'
                  ? 'border-[#102749] text-[#102749]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {t.portfolio.tabSupporting}
            </button>

            <button
              onClick={() => setActiveTab('photos')}
              className={`min-h-[48px] px-5 py-3 text-sm sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'photos'
                  ? 'border-[#102749] text-[#102749]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {t.portfolio.tabPhotos}
            </button>
          </div>

          {/* Search Bar & Category Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.portfolio.searchPlaceholder}
                className="w-full min-h-[48px] pl-11 pr-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749] bg-white"
              />
            </div>

            {activeTab === 'completed' && (
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-xs font-bold text-slate-500 shrink-0 uppercase">{language === 'ms' ? 'Kategori:' : 'Category:'}</span>
                {[
                  { id: 'all', label: t.portfolio.filterAll },
                  { id: 'road', label: language === 'ms' ? 'Jalan Raya' : 'Roads' },
                  { id: 'drainage', label: language === 'ms' ? 'Saliran' : 'Drainage' },
                  { id: 'maintenance', label: language === 'ms' ? 'Penyelenggaraan' : 'Maintenance' },
                  { id: 'building', label: language === 'ms' ? 'Bangunan' : 'Buildings' },
                  { id: 'supply', label: language === 'ms' ? 'Pembekalan' : 'Supply' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedCategory === c.id
                        ? 'bg-[#102749] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TAB 1: COMPLETED PROJECTS (P01–P07) */}
      {activeTab === 'completed' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCompleted.length === 0 ? (
            <div className="p-12 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
              {t.portfolio.noResults}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCompleted.map((project) => {
                const title = language === 'ms' ? project.titleMs : project.titleEn;
                const scope = language === 'ms' ? project.scopeMs : project.scopeEn;
                const hasPhotos = project.assetIds && project.assetIds.length > 0;

                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Left Info (Cols 8) */}
                      <div className="lg:col-span-8 space-y-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="px-3.5 py-1 rounded-md bg-[#102749] text-white font-mono font-bold text-sm">
                            {project.code}
                          </span>
                          <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-sm font-semibold">
                            {project.client}
                          </span>
                          <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-sm font-semibold border border-amber-200">
                            {displayDate(project.dateStr)}
                          </span>
                          {project.category === 'supply' && (
                            <span className="px-3 py-1 rounded-md bg-purple-50 text-purple-800 text-sm font-semibold">
                              {language === 'ms' ? 'Pembekalan (Bukan Pembinaan)' : 'Supply (Non-construction)'}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#102749]">
                          {title}
                        </h3>

                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                          {scope}
                        </p>

                        {/* Attribution Notes (e.g. for P07) */}
                        {project.attributionNoteMs && (
                          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-sm text-blue-900 flex items-start gap-2.5">
                            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                              {language === 'ms'
                                ? project.attributionNoteMs
                                : project.attributionNoteEn}
                            </span>
                          </div>
                        )}


                      </div>

                      {/* Right Project Photos Gallery if available (Cols 4) */}
                      {hasPhotos ? (
                        <div className="lg:col-span-4 space-y-3">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                            {t.portfolio.viewPhotos} ({project.assetIds!.length}):
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {project.assetIds!.slice(0, 4).map((id) => (
                              <div
                                key={id}
                                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 cursor-pointer group bg-slate-900"
                                onClick={() => onOpenLightbox(id, project.assetIds)}
                              >
                                <AssetImage assetId={id} aspectRatio="aspect-[4/3]" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                  <Eye className="w-5 h-5 text-white" />
                                </div>
                                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-white font-mono text-[10px]">
                                  {id}
                                </span>
                              </div>
                            ))}
                          </div>
                          {project.assetIds!.length > 4 && (
                            <button
                              onClick={() => onOpenLightbox(project.assetIds![0], project.assetIds)}
                              className="text-xs font-bold text-[#102749] hover:underline"
                            >
                              + {project.assetIds!.length - 4} {language === 'ms' ? 'foto lagi dalam pemapar imej' : 'more photos in viewer'}
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="lg:col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
                          <p className="font-semibold text-slate-700 mb-1">
                            {language === 'ms' ? 'Rekod Bertulis Profil' : 'Documented Profile Record'}
                          </p>
                          <p>
                            {language === 'ms'
                              ? 'Direkodkan dalam daftar projek profil syarikat. Tiada lampiran foto berasingan.'
                              : 'Documented in company profile project register. No separate image tile.'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* TAB 2: SUPPORTING APPOINTMENT RECORDS (R01–R03) */}
      {activeTab === 'supporting' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-sm">
            <p className="font-bold mb-1">
              {language === 'ms' ? 'Kategori Rekod Sokongan:' : 'Supporting Records Category:'}
            </p>
            <p>
              {language === 'ms'
                ? 'Rekod ini diasingkan daripada projek siap. Dokumen atas nama BMJ MAJU 77 ENTERPRISE bukan kontrak BMJ Energy dan tidak membuktikan hubungan antara kedua-dua entiti. Surat pelantikan pula bukan bukti penyiapan projek fizikal.'
                : 'These records are separate from completed projects. The document addressed to BMJ MAJU 77 ENTERPRISE is not a BMJ Energy contract and does not establish a relationship between the entities. An appointment letter is not evidence of a completed physical project.'}
            </p>
          </div>

          <div className="space-y-6">
            {filteredSupporting.map((record) => (
              <div
                key={record.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded bg-slate-800 text-white font-mono font-bold text-xs">
                      {record.code}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold">
                      {record.client}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-semibold">
                      {displayDate(record.dateStr)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#102749]">
                    {language === 'ms' ? record.titleMs : record.titleEn}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {language === 'ms' ? record.scopeMs : record.scopeEn}
                  </p>

                  {record.attributionNoteMs && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <strong>{language === 'ms' ? 'Nota Pengesahan:' : 'Verification Note:'}</strong>{' '}
                      {language === 'ms' ? record.attributionNoteMs : record.attributionNoteEn}
                    </div>
                  )}


                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: PHOTO-ONLY VISUAL ARCHIVES (A042–A061) */}
      {activeTab === 'photos' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm">
            <p>
              {language === 'ms'
                ? 'Rekod foto kerja tapak ini dipaparkan berasingan daripada kontrak bertarikh. Tarikh dan nilai kontrak tidak dinyatakan.'
                : 'These field photo records are presented separately from dated contracts. Contract dates and values are not stated.'}
            </p>
          </div>

          <div className="space-y-12">
            {filteredPhotos.map((gallery) => (
              <div
                key={gallery.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C81D25]">
                    {language === 'ms' ? gallery.category : ({ 'Jalan Raya': 'Roads', 'Penyelenggaraan': 'Maintenance', 'Keselamatan Jalan': 'Road Safety' }[gallery.category] || gallery.category)}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102749] mt-1">
                    {language === 'ms' ? gallery.titleMs : gallery.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {language === 'ms' ? gallery.descMs : gallery.descEn}
                  </p>
                </div>

                {/* 4 Photo Tiles Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {gallery.assetIds.map((id) => (
                    <div
                      key={id}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xs cursor-pointer group bg-slate-900"
                      onClick={() => onOpenLightbox(id, gallery.assetIds)}
                    >
                      <AssetImage assetId={id} aspectRatio="aspect-[4/3]" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-xs">
                        {id}
                      </span>
                    </div>
                  ))}
                </div>


              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
