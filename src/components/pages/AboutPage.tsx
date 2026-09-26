import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { ORG_CHART_DIRECTOR, ORG_BRANCHES } from '@/src/data/teamData';
import { ABOUT_PORTRAITS } from '@/src/data/aboutPortraits';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (route: RouteId) => void;
  onOpenLightbox: (assetId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const ms = language === 'ms';
  const label = (malay: string, english: string) => ms ? malay : english;
  const facts = [
    [label('No. Pendaftaran Perniagaan', 'Business Registration Number'), COMPANY_DATA.registration],
    [label('Tarikh Penubuhan', 'Established'), ms ? COMPANY_DATA.establishedMs : COMPANY_DATA.establishedEn],
    [label('Alamat Pejabat', 'Office Address'), COMPANY_DATA.address],
    [label('Bank Urusan', 'Banker'), ms ? COMPANY_DATA.bankerMs : COMPANY_DATA.bankerEn],
  ];
  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="about" onNavigate={onNavigate} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Maklumat Syarikat', 'Company Information')}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] mt-2">{t.about.pageTitle}</h1>
          <p className="text-lg text-slate-700 max-w-3xl mt-3 leading-relaxed">{ms ? COMPANY_DATA.aboutMs : COMPANY_DATA.aboutEn}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 min-w-0">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
              <h2 className="text-2xl font-extrabold text-[#102749]">{t.about.ourStoryTitle}</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{label('BMJ Energy Service And Trading ditubuhkan pada 9 Mac 2021 dan berpangkalan di Manjung, Perak.', 'BMJ Energy Service And Trading was established on 9 March 2021 and is based in Manjung, Perak.')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                [t.about.missionTitle, ms ? COMPANY_DATA.missionMs : COMPANY_DATA.missionEn],
                [t.about.visionTitle, ms ? COMPANY_DATA.visionMs : COMPANY_DATA.visionEn],
              ].map(([title, text]) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                  <h3 className="text-xl font-bold text-[#102749]">{title}</h3>
                  <p className="text-base text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 min-w-0 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-2xl font-extrabold">{t.about.companyInfoTitle}</h2>
            <p className="text-lg font-bold">{COMPANY_DATA.name}</p>
            <dl className="space-y-5">
              {facts.map(([title, value]) => <div key={title}><dt className="text-slate-300 text-sm">{title}</dt><dd className="mt-1 text-base font-semibold break-words">{value}</dd></div>)}
              <div><dt className="text-slate-300 text-sm">{label('Telefon', 'Phone')}</dt><dd><a className="inline-flex items-center min-h-11 text-[#F5A623] font-bold hover:underline" href={`tel:${COMPANY_DATA.phoneRaw}`}>{COMPANY_DATA.phone}</a></dd></div>
              <div><dt className="text-slate-300 text-sm">{label('E-mel Rasmi', 'Official Email')}</dt><dd className="break-all mt-1">{COMPANY_DATA.email}</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-12 border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mb-8">{t.about.objectivesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(ms ? COMPANY_DATA.objectivesMs : COMPANY_DATA.objectivesEn).map((obj) => <div key={obj.title} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3"><h3 className="font-bold text-lg text-[#102749]">{obj.title}</h3><p className="text-base text-slate-700 leading-relaxed">{obj.desc}</p></div>)}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mb-8">{t.about.leadershipTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABOUT_PORTRAITS.map((portrait) => {
            const leader = COMPANY_DATA.leadership[portrait.leader];
            const role = ms ? leader.roleMs : leader.roleEn;
            return <figure key={portrait.leader} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 text-center">
              <a href={portrait.src} target="_blank" rel="noopener noreferrer" className="block max-w-xs mx-auto rounded-2xl border-4 border-[#F5A623] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#102749] overflow-hidden bg-slate-50" aria-label={`${label('Lihat foto penuh', 'View full portrait')}: ${leader.displayName} (${label('tab baharu', 'new tab')})`}>
                <img src={portrait.src} alt={`${leader.displayName} — ${role}`} width={301} height={301} loading="lazy" className="w-full aspect-square object-cover rounded-xl" />
              </a>
              <figcaption className="space-y-2 text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-[#C81D25]">{role}</p>
                <h3 className="text-2xl font-extrabold text-[#102749]">{leader.displayName}</h3>
                {leader.fullName !== leader.displayName && <p className="text-base text-slate-700">{leader.fullName}</p>}
              </figcaption>
            </figure>;
          })}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-2 bg-[#F5A623]" aria-hidden="true" />
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Struktur Pasukan', 'Team Structure')}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mt-2">{t.about.orgChartTitle}</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{t.about.orgChartSubtitle}</p>
          </div>

          <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#102749] text-white text-center shadow-lg ring-4 ring-[#F5A623]/30">
            <h3 className="text-xl font-bold">{ms ? ORG_CHART_DIRECTOR.roleMs : ORG_CHART_DIRECTOR.roleEn}</h3>
            <p className="text-lg mt-2">{ORG_CHART_DIRECTOR.name}</p>
          </div>
          <div aria-hidden="true" className="h-10 w-1 bg-[#F5A623] mx-auto" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:pt-10">
            <div aria-hidden="true" className="hidden md:block absolute top-0 left-[16.666%] right-[16.666%] h-1 bg-[#F5A623] rounded-full" />
            {ORG_BRANCHES.map((branch) => <section key={branch.head.name} className="relative min-w-0">
              <div aria-hidden="true" className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 h-10 w-1 bg-[#F5A623]" />
              <div className="h-full bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs border-t-4 border-t-[#F5A623]">
                <div className="text-center pb-4 border-b border-slate-200">
                  <p className="text-xs uppercase tracking-wide text-slate-500 font-bold">{label('Melapor kepada', 'Reports to')}: {ORG_CHART_DIRECTOR.name}</p>
                  <h3 className="text-lg font-extrabold text-[#102749] mt-2">{branch.head.name}</h3>
                  <p className="text-base text-slate-700">{ms ? branch.head.roleMs : branch.head.roleEn}</p>
                </div>
                {branch.secondary && <div className="mt-5 space-y-4">
                  <div className="rounded-xl bg-white p-4 border border-slate-200 text-center">
                    <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{label('Melapor kepada', 'Reports to')}: {branch.head.name}</p>
                    <h4 className="text-base font-bold text-[#102749] mt-1">{branch.secondary.name}</h4>
                    <p className="text-base text-slate-700">{ms ? branch.secondary.roleMs : branch.secondary.roleEn}</p>
                  </div>
                  <ul className="grid gap-3">
                    {branch.staff.map(member => <li key={member.name} className="rounded-xl bg-white p-4 border-l-4 border-[#F5A623] border-y border-r border-slate-200"><p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{label('Melapor kepada', 'Reports to')}: {branch.secondary!.name}</p><p className="font-bold text-base text-[#102749] mt-1">{member.name}</p><p className="text-base text-slate-700">{ms ? member.roleMs : member.roleEn}</p></li>)}
                  </ul>
                </div>}
              </div>
            </section>)}
          </div>
        </div>
      </section>
    </div>
  );
};
