import React, { useState } from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { FAQS_DATA } from '@/src/data/portfolioData';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  MessageSquare,
  Clock,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: RouteId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceOrEquip, setServiceOrEquip] = useState('');
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg(language === 'ms' ? 'Sila masukkan nama anda.' : 'Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg(language === 'ms' ? 'Sila masukkan nombor telefon anda.' : 'Please enter your phone number.');
      return;
    }
    if (!serviceOrEquip.trim()) {
      setErrorMsg(
        language === 'ms'
          ? 'Sila nyatakan perkhidmatan atau jentera yang diperlukan.'
          : 'Please specify the service or equipment required.'
      );
      return;
    }

    setErrorMsg('');

    // Construct formatted text for WhatsApp
    const waText =
      language === 'ms'
        ? `*PERTANYAAN / SEBUT HARGA — BMJ ENERGY*\n\n` +
          `• *Nama:* ${name.trim()}\n` +
          `• *Telefon:* ${phone.trim()}\n` +
          `• *Perkhidmatan / Jentera:* ${serviceOrEquip.trim()}\n` +
          (location.trim() ? `• *Lokasi Projek:* ${location.trim()}\n` : '') +
          (dates.trim() ? `• *Cadangan Tarikh/Tempoh:* ${dates.trim()}\n` : '') +
          (message.trim() ? `• *Catatan:* ${message.trim()}\n\n` : '\n') +
          `Salam, mohon semakan dan maklum balas pihak BMJ Energy. Terima kasih.`
        : `*ENQUIRY / QUOTATION REQUEST — BMJ ENERGY*\n\n` +
          `• *Name:* ${name.trim()}\n` +
          `• *Phone:* ${phone.trim()}\n` +
          `• *Service / Equipment:* ${serviceOrEquip.trim()}\n` +
          (location.trim() ? `• *Project Location:* ${location.trim()}\n` : '') +
          (dates.trim() ? `• *Proposed Dates/Duration:* ${dates.trim()}\n` : '') +
          (message.trim() ? `• *Message:* ${message.trim()}\n\n` : '\n') +
          `Hello, please advise on quotation and feasibility. Thank you.`;

    const waUrl = `https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="contact" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Hubungi Kami' : 'Get In Touch'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] tracking-tight mt-2">
            {t.contact.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mt-3 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info & Address Cards (Cols 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Notice Callout */}
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-[#102749] text-sm sm:text-base leading-relaxed">
              <span className="font-bold block mb-1">
                {language === 'ms' ? 'Liputan Operasi:' : 'Operational Base:'}
              </span>
              <p>{t.contact.locationNotice}</p>
            </div>

            {/* Address Card with Google Maps Link */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#102749] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#102749]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#102749] uppercase tracking-wider">
                  {t.contact.addressTitle}
                </h3>
                <p className="text-base sm:text-lg text-slate-800 font-medium mt-1 leading-relaxed">
                  {COMPANY_DATA.address}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-5 py-2.5 rounded-lg bg-[#102749] hover:bg-[#1B4D89] text-white text-sm font-bold inline-flex items-center gap-2 transition-colors shadow-xs"
                >
                  <span>{t.contact.openInMaps}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2">
                <Phone className="w-6 h-6 text-[#F5A623]" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.phoneTitle}
                </h4>
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="text-lg sm:text-xl font-extrabold text-[#102749] hover:text-[#F5A623] block tracking-wide transition-colors"
                >
                  {COMPANY_DATA.phone}
                </a>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block">
                  {language === 'ms' ? 'WhatsApp & Panggilan Langsung' : 'WhatsApp & Calls'}
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2">
                <Mail className="w-6 h-6 text-blue-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.emailTitle}
                </h4>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-sm sm:text-base font-bold text-slate-800 hover:text-blue-700 break-all block font-mono"
                >
                  {COMPANY_DATA.email}
                </a>
                <span className="text-xs sm:text-sm text-slate-500 font-medium block">
                  {language === 'ms' ? 'Surat-menyurat rasmi' : 'Official correspondence'}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Validated WhatsApp Enquiry Form (Cols 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-200 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
                {language === 'ms' ? 'Perhubungan Pantas' : 'Rapid Connect'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mt-1">
                {t.contact.formTitle}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#102749] mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'ms' ? 'Contoh: Encik Ahmad / Syarikat ABC' : 'e.g. John Doe / ABC Ent.'}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#102749] mb-1.5">
                    {t.contact.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="012-345 6789"
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102749] mb-1.5">
                  {t.contact.serviceLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={serviceOrEquip}
                  onChange={(e) => setServiceOrEquip(e.target.value)}
                  placeholder={
                    language === 'ms'
                      ? 'Contoh: Turapan Premix Jalan / Sewa Paver / Kerja Gabion'
                      : 'e.g. Premix Resurfacing / Paver Rental / Gabion Works'
                  }
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#102749] mb-1.5">
                    {t.contact.locationLabel}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={language === 'ms' ? 'Kawasan Projek di Perak' : 'Project Area in Perak'}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#102749] mb-1.5">
                    {t.contact.datesLabel}
                  </label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder={language === 'ms' ? 'Contoh: Bulan Depan / 5 Hari' : 'e.g. Next Month / 5 Days'}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102749] mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'ms'
                      ? 'Huraikan secara ringkas skop kerja, anggaran keluasan, atau sebarang pertanyaan khusus...'
                      : 'Briefly describe your project scope, approximate area, or questions...'
                  }
                  className="w-full p-4 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[54px] py-4 px-6 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#F5A623] cursor-pointer transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
                  <span>{t.contact.submitBtn}</span>
                </button>
                <p className="text-sm text-slate-600 font-medium text-center mt-3">
                  {language === 'ms'
                    ? 'Borang ini akan membuka WhatsApp secara automatik dengan mesej yang tersusun.'
                    : 'This form will automatically open WhatsApp with your pre-formatted message.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Meaningful FAQs) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
              {language === 'ms' ? 'Maklumat Tambahan' : 'Common Inquiries'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mt-1">
              {t.contact.faqsTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#102749] hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">
                      {language === 'ms' ? faq.qMs : faq.qEn}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {language === 'ms' ? faq.aMs : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
