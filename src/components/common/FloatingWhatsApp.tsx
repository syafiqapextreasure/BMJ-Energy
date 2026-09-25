import React, { useState } from 'react';
import { COMPANY_DATA } from '@/src/data/companyData';
import { useLanguage } from '@/src/context/LanguageContext';
import { MessageSquare, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const defaultMsg =
    language === 'ms'
      ? 'Salam BMJ Energy, saya ingin bertanyakan mengenai perkhidmatan kerja jalan / sewaan jentera.'
      : 'Hello BMJ Energy, I would like to enquire about road works / machinery rental.';

  const handleSend = () => {
    const textToSend = quickMsg.trim() || defaultMsg;
    const url = `https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[#102749] text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-[#F5A623] text-[#0F1E36] flex items-center justify-center font-extrabold text-base shadow-inner">
                  BMJ
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#F5A623] border-2 border-[#102749]" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">BMJ Energy WhatsApp</h4>
                <p className="text-xs sm:text-sm text-slate-200">
                  {language === 'ms' ? 'Sedia membantu di Manjung, Perak' : 'Ready to assist in Perak'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
              aria-label="Tutup Popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-slate-700 space-y-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-xs">
              <p className="font-medium text-sm sm:text-base leading-relaxed">
                {language === 'ms'
                  ? 'Salam sejahtera! Ada sebarang projek jalan raya, pembinaan atau sewaan jentera yang boleh kami bantu?'
                  : 'Hello! How can we assist you with road works, civil construction, or machinery rental today?'}
              </p>
              <span className="block text-xs text-slate-500 font-semibold text-right mt-2 font-mono">
                BMJ Energy Service And Trading
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              placeholder={language === 'ms' ? 'Taip mesej anda...' : 'Type your enquiry...'}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 text-sm sm:text-base rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
            />
            <button
              onClick={handleSend}
              className="min-h-[44px] px-4 rounded-lg bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-bold flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="Hantar WhatsApp"
            >
              <Send className="w-4 h-4 text-[#0F1E36]" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill / Circular Button: Yellow matching Image 1 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-[54px] min-w-[54px] px-5 py-3.5 rounded-full bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] shadow-xl hover:shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5A623] cursor-pointer"
        aria-label="Buka WhatsApp BMJ Energy"
      >
        <MessageSquare className="w-6 h-6 fill-current text-[#0F1E36]" />
        <span className="hidden sm:inline font-extrabold text-base tracking-wide text-[#0F1E36]">
          WhatsApp BMJ
        </span>
      </button>
    </div>
  );
};
