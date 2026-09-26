import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { BmjLogo } from '@/src/components/common/BmjLogo';
import { MapPin, Phone, Mail, ExternalLink, Shield, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNav = (route: RouteId) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102749] text-white border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company Profile & Reg */}
          <div className="space-y-4">
            <BmjLogo variant="white" className="h-12" />
            <div className="pt-2 text-slate-200 leading-relaxed space-y-2">

              <p className="text-sm font-mono text-slate-300 font-medium">
                {language === 'ms' ? 'No. Pendaftaran:' : 'Registration No.:'} {COMPANY_DATA.registration}
              </p>
              <p className="text-sm text-slate-300">
                {language === 'ms' ? `Ditubuhkan: ${COMPANY_DATA.establishedMs}` : `Established: ${COMPANY_DATA.establishedEn}`}
              </p>
              <p className="mt-3 text-base text-slate-200 leading-relaxed">
                {t.footer.companySummary}
              </p>
            </div>
            <div className="pt-2 text-sm text-slate-300">
              <span className="font-bold text-white">
                {language === 'ms' ? 'Bank Urusan:' : 'Banker:'}
              </span>{' '}
              <span className="text-slate-200 font-medium">
                {language === 'ms' ? COMPANY_DATA.bankerMs : COMPANY_DATA.bankerEn}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (Enlarged secondary/tertiary text) */}
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-700/60">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.services}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rental')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.rental}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.portfolio}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 py-1 cursor-pointer"
                >
                  <span className="text-[#C81D25] font-bold text-lg">›</span>
                  <span>{t.nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Operating Base */}
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-700/60">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-5 text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5A623] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-base text-white">{language === 'ms' ? 'Pejabat Pengurusan:' : 'Management Office:'}</p>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-1 font-normal">
                    {COMPANY_DATA.address}
                  </p>
                  <a
                    href={COMPANY_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#F5A623] hover:text-amber-300 font-bold mt-2 underline"
                  >
                    <span>{language === 'ms' ? 'Peta Google' : 'Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] shrink-0" />
                <div>
                  <p className="text-sm text-slate-300 font-medium">{language === 'ms' ? 'Telefon / WhatsApp:' : 'Phone / WhatsApp:'}</p>
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="text-lg sm:text-xl text-white hover:text-[#F5A623] font-extrabold tracking-wide transition-colors"
                  >
                    {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <p className="text-sm text-slate-300 font-medium">{language === 'ms' ? 'E-mel Rasmi:' : 'Official Email:'}</p>
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="text-sm sm:text-base text-slate-200 hover:text-white break-all font-mono font-medium underline transition-colors"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Note & Golden Yellow WhatsApp CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-700/60">
              {language === 'ms' ? 'Kawasan Projek' : 'Project Coverage'}
            </h4>
            <div className="p-4 sm:p-5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 leading-relaxed space-y-2">
              <p className="font-bold text-base text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#F5A623]" />
                <span>Manjung, Perak</span>
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {language === 'ms'
                  ? 'Berpangkalan di Manjung, Perak; hubungi kami mengenai lokasi projek anda. Liputan tertakluk kepada pengesahan.'
                  : 'Based in Manjung, Perak; enquire about your project location. Coverage is subject to confirmation.'}
              </p>
            </div>

            {/* Golden Yellow WhatsApp CTA matching Image 1 */}
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(
                language === 'ms'
                  ? 'Salam BMJ Energy, saya ingin berurusan mengenai projek / sewaan jentera.'
                  : 'Hello BMJ Energy, I would like to connect regarding a project / equipment rental.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[52px] px-5 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base text-center flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
              <span>WhatsApp: +60 10-368 9689</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Privacy */}
      <div className="border-t border-slate-800/90 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p className="text-center md:text-left font-medium">
            © {currentYear} {COMPANY_DATA.name} ({COMPANY_DATA.registration}). {t.footer.copyright}
          </p>
          <p className="text-center md:text-right text-sm text-slate-400 font-medium">
            {t.footer.privacyNotice}
          </p>
        </div>
      </div>
    </footer>
  );
};
