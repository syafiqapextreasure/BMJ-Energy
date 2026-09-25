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
          <span className="text-sm font-bold uppercase tracking-widest text-[#C81D25]">{label('Profil Korporat', 'Corporate Profile')}</span>
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
            return <figure key={portrait.leader} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
              <a href={portrait.src} target="_blank" rel="noopener noreferrer" className="block max-w-xs mx-auto rounded-xl border-4 border-[#F5A623] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#102749]" aria-label={`${label('Lihat foto penuh', 'View full portrait')}: ${leader.displayName} (${label('tab baharu', 'new tab')})`}>
                <img src={portrait.src} alt={`${leader.displayName} — ${role}`} width={301} height={301} loading="lazy" className="w-full h-auto object-contain rounded-lg" />
              </a>
              <figcaption className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-wide text-[#C81D25]">{role}</p>
                <h3 className="text-2xl font-extrabold text-[#102749]">{leader.displayName}</h3>
                {leader.fullName !== leader.displayName && <p className="text-base text-slate-700">{leader.fullName}</p>}
                <a href={portrait.src} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-base text-[#102749] underline font-semibold">{label('Lihat foto penuh (tab baharu)', 'View full portrait (new tab)')}</a>
              </figcaption>
            </figure>;
          })}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mb-8">{t.about.orgChartTitle}</h2>
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#102749] text-white text-center">
            <h3 className="text-xl font-bold">{ms ? ORG_CHART_DIRECTOR.roleMs : ORG_CHART_DIRECTOR.roleEn}</h3>
            <p className="text-lg mt-2">{ORG_CHART_DIRECTOR.name}</p>
          </div>
          <div aria-hidden="true" className="h-8 w-px bg-slate-400 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-400">
            {ORG_BRANCHES.map((branch) => <section key={branch.head.name} className="min-w-0">
              <div aria-hidden="true" className="h-6 w-px bg-slate-400 mx-auto" />
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600 mb-3">{label('Melapor kepada', 'Reports to')}: {ORG_CHART_DIRECTOR.name}</p>
                <h3 className="text-lg font-bold text-[#102749]">{branch.head.name}</h3>
                <p className="text-base text-slate-700">{ms ? branch.head.roleMs : branch.head.roleEn}</p>
                {branch.secondary && <div className="mt-4 pl-4 border-l-2 border-slate-300 space-y-2">
                  <p className="text-sm text-slate-600">{label('Melapor kepada', 'Reports to')}: {branch.head.name}</p>
                  <h4 className="text-base font-bold text-[#102749]">{branch.secondary.name}</h4>
                  <p className="text-base text-slate-700">{ms ? branch.secondary.roleMs : branch.secondary.roleEn}</p>
                  <ul className="mt-4 space-y-4 pl-4 border-l-2 border-slate-300">
                    {branch.staff.map(member => <li key={member.name} className="pt-2"><p className="text-sm text-slate-600">{label('Melapor kepada', 'Reports to')}: {branch.secondary!.name}</p><p className="font-bold text-base text-[#102749] mt-1">{member.name}</p><p className="text-base text-slate-700">{ms ? member.roleMs : member.roleEn}</p></li>)}
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
