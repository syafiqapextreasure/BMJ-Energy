import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { ORG_CHART_DIRECTOR, ORG_BRANCHES } from '@/src/data/teamData';
import { AssetImage } from '@/src/components/common/AssetImage';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import { YellowAngleBox } from '@/src/components/common/YellowAngleBox';
import {
  Building2,
  Calendar,
  MapPin,
  Landmark,
  Target,
  Compass,
  CheckCircle,
  Users,
  Shield,
  Phone,
  Mail,
  Network
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: RouteId) => void;
  onOpenLightbox: (assetId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="about" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Profil Korporat' : 'Corporate Profile'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] tracking-tight mt-2">
            {t.about.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mt-3 leading-relaxed">
            {language === 'ms' ? COMPANY_DATA.aboutMs : COMPANY_DATA.aboutEn}
          </p>
        </div>
      </section>

      {/* Official Company Facts & Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Our Story Narrative (Cols 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
              <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
                {t.about.ourStoryTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749]">
                {language === 'ms' ? 'Komitmen Membina Bersama Pelanggan' : 'Building Progress with Discipline'}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {language === 'ms' ? COMPANY_DATA.storyMs : COMPANY_DATA.storyEn}
              </p>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg pt-1">
                {language === 'ms'
                  ? 'Kami memegang teguh kepada falsafah kejuruteraan yang berorientasikan hasil berkualiti, mematuhi jadual kerja, dan sentiasa menyediakan jentera serta tenaga mahir yang mematuhi garis panduan keselamatan tapak.'
                  : 'We adhere firmly to a results-driven engineering discipline, honoring delivery milestones, maintaining prime equipment, and observing stringent site safety standards.'}
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#102749] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#102749]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102749]">{t.about.missionTitle}</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {language === 'ms' ? COMPANY_DATA.missionMs : COMPANY_DATA.missionEn}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#102749] flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#C81D25]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#102749]">{t.about.visionTitle}</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {language === 'ms' ? COMPANY_DATA.visionMs : COMPANY_DATA.visionEn}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Company Data Table (Cols 5) with larger readable typography */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-6">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#F5A623]">
                {t.about.companyInfoTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-1 text-white">{COMPANY_DATA.name}</h3>
            </div>

            <div className="space-y-4 divide-y divide-slate-800 pt-2">
              <div className="pt-3.5 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">No. Pendaftaran Perniagaan:</span>
                  <span className="font-mono font-bold text-base text-white">{COMPANY_DATA.registration}</span>
                </div>
              </div>

              <div className="pt-3.5 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">Tarikh Penubuhan:</span>
                  <span className="font-bold text-base text-white">
                    {language === 'ms' ? COMPANY_DATA.establishedMs : COMPANY_DATA.establishedEn}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">Alamat Pejabat Semasa:</span>
                  <span className="text-slate-200 text-sm sm:text-base leading-relaxed block font-medium">
                    {COMPANY_DATA.address}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 flex items-start gap-3">
                <Landmark className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">Bank Urusan (Profil):</span>
                  <span className="text-slate-200 text-sm sm:text-base font-semibold">
                    {language === 'ms' ? COMPANY_DATA.bankerMs : COMPANY_DATA.bankerEn}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">Hubungan Langsung:</span>
                  <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-[#F5A623] text-lg font-extrabold hover:underline">
                    {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3.5 flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm text-slate-300 font-medium block">E-mel Rasmi:</span>
                  <span className="text-slate-200 font-mono text-sm sm:text-base break-all font-medium">{COMPANY_DATA.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
              {language === 'ms' ? 'Prinsip Pelaksanaan' : 'Core Focus'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
              {t.about.objectivesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(language === 'ms' ? COMPANY_DATA.objectivesMs : COMPANY_DATA.objectivesEn).map((obj, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#102749] text-white text-sm font-bold flex items-center justify-center font-mono">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-lg text-[#102749]">{obj.title}</h3>
                </div>
                <p className="text-base text-slate-600 leading-relaxed pl-11">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Portraits with YellowAngleBox framing matching Image 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Pengurusan Tertinggi' : 'Executive Management'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
            {t.about.leadershipTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Managing Director: Mohammad Zahid Bin Ahmad Nawawi (A011) */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col p-6 sm:p-8 space-y-6">
            <div className="flex justify-center p-2">
              <YellowAngleBox angleSize="md" className="w-full max-w-xs">
                <AssetImage
                  assetId="A011"
                  alt="Zahid Nawawi - Managing Director"
                  aspectRatio="aspect-square"
                  onClick={() => onOpenLightbox('A011')}
                  className="cursor-pointer"
                />
              </YellowAngleBox>
            </div>
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-[#C81D25]">
                {COMPANY_DATA.leadership.managingDirector.roleMs}
              </span>
              <h3 className="text-2xl font-extrabold text-[#102749]">
                {COMPANY_DATA.leadership.managingDirector.displayName}
              </h3>
              <p className="text-sm font-mono text-slate-600 font-semibold">
                {COMPANY_DATA.leadership.managingDirector.fullName}
              </p>
              <p className="text-base text-slate-700 leading-relaxed pt-2">
                {language === 'ms'
                  ? COMPANY_DATA.leadership.managingDirector.bioMs
                  : COMPANY_DATA.leadership.managingDirector.bioEn}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-mono">
              <span className="font-semibold">Foto Profil A011</span>
              <span>Manjung, Perak</span>
            </div>
          </div>

          {/* Assistant Manager: Zaihidah Nawawi (A012) */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs flex flex-col p-6 sm:p-8 space-y-6">
            <div className="flex justify-center p-2">
              <YellowAngleBox angleSize="md" className="w-full max-w-xs">
                <AssetImage
                  assetId="A012"
                  alt="Zaihidah Nawawi - Assistant Manager"
                  aspectRatio="aspect-square"
                  onClick={() => onOpenLightbox('A012')}
                  className="cursor-pointer"
                />
              </YellowAngleBox>
            </div>
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-[#C81D25]">
                {COMPANY_DATA.leadership.assistantManager.roleMs}
              </span>
              <h3 className="text-2xl font-extrabold text-[#102749]">
                {COMPANY_DATA.leadership.assistantManager.displayName}
              </h3>
              <p className="text-sm font-mono text-slate-600 font-semibold">
                {COMPANY_DATA.leadership.assistantManager.fullName}
              </p>
              <p className="text-base text-slate-700 leading-relaxed pt-2">
                {language === 'ms'
                  ? COMPANY_DATA.leadership.assistantManager.bioMs
                  : COMPANY_DATA.leadership.assistantManager.bioEn}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-mono">
              <span className="font-semibold">Foto Profil A012</span>
              <span>Manjung, Perak</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Responsive HTML Organisation Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C81D25]">
              <Network className="w-5 h-5" />
              <span>{t.about.orgChartTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] tracking-tight mt-1">
              {language === 'ms' ? 'Struktur Operasi & Pengurusan Tapak' : 'Management & Field Operational Hierarchy'}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Top Level: Managing Director Node */}
            <div className="flex justify-center">
              <div className="w-full max-w-md p-6 rounded-2xl bg-[#102749] text-white text-center shadow-lg border-2 border-white/20">
                <span className="px-3 py-1 rounded-full bg-[#F5A623] text-[#0F1E36] text-xs sm:text-sm font-extrabold uppercase tracking-wider inline-block mb-3">
                  Peringkat Pengurusan Tertinggi
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  {language === 'ms' ? ORG_CHART_DIRECTOR.roleMs : ORG_CHART_DIRECTOR.roleEn}
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-semibold mt-1">{ORG_CHART_DIRECTOR.name}</p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {language === 'ms'
                    ? 'Pengawasan keseluruhan dasar korporat, pematuhan keselamatan dan keputusan strategik tender.'
                    : 'Overall oversight of corporate policies, site safety, and strategic project bidding.'}
                </p>
              </div>
            </div>

            {/* Department Operational Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {ORG_BRANCHES.map((branch, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-[#102749] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C81D25] block">
                      Cawangan Operasi {i + 1}
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#102749]">
                      {language === 'ms' ? branch.branchTitleMs : branch.branchTitleEn}
                    </h4>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                      <span className="text-xs text-slate-500 font-bold uppercase block">Ketua Cawangan:</span>
                      <p className="text-base font-bold text-slate-900">{branch.head.name}</p>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {language === 'ms' ? branch.head.roleMs : branch.head.roleEn}
                      </p>
                    </div>

                    {branch.secondary && (
                      <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200 text-xs sm:text-sm">
                        <span className="font-bold text-slate-800">{branch.secondary.name}</span> —{' '}
                        <span className="text-slate-600">
                          {language === 'ms' ? branch.secondary.roleMs : branch.secondary.roleEn}
                        </span>
                      </div>
                    )}

                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-500 uppercase block mb-1.5">Anggota Pasukan:</span>
                      <div className="space-y-1">
                        {branch.staff.map((s, idx) => (
                          <div key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                            <span className="font-semibold text-slate-800">{s.name}</span>
                            <span className="text-slate-500">({language === 'ms' ? s.roleMs : s.roleEn})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-500 font-medium">
                    <span>Tenaga Mahir BMJ</span>
                    <span>Perak Darul Ridzuan</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
