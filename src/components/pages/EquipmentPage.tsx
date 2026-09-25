import React, { useState } from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { COMPANY_DATA } from '@/src/data/companyData';
import { RENTAL_EQUIPMENT } from '@/src/data/rentalData';
import { AssetImage } from '@/src/components/common/AssetImage';
import { Breadcrumbs } from '@/src/components/common/Breadcrumbs';
import {
  Truck,
  Calendar,
  MapPin,
  Clock,
  Layers,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Send,
  HelpCircle
} from 'lucide-react';

interface EquipmentPageProps {
  onNavigate: (route: RouteId) => void;
  onOpenLightbox: (assetId: string) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const { language, t } = useLanguage();

  // Rental Form State
  const [selectedEquip, setSelectedEquip] = useState<string>(RENTAL_EQUIPMENT[0].id);
  const [siteLocation, setSiteLocation] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1 Unit');
  const [operatorNeeded, setOperatorNeeded] = useState<'with' | 'without'>('with');
  const [notes, setNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  const currentEquipObj = RENTAL_EQUIPMENT.find((e) => e.id === selectedEquip) || RENTAL_EQUIPMENT[0];

  const handleRentalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteLocation.trim()) {
      setFormError(
        language === 'ms'
          ? 'Sila masukkan lokasi tapak projek di Perak.'
          : 'Please specify the project site location in Perak.'
      );
      return;
    }
    setFormError('');

    const equipName = language === 'ms' ? currentEquipObj.nameMs : currentEquipObj.nameEn;
    const operatorText =
      operatorNeeded === 'with'
        ? language === 'ms'
          ? 'Bersama Operator Mahir'
          : 'With Skilled Operator'
        : language === 'ms'
          ? 'Jentera Sahaja (Dry Hire)'
          : 'Machine Only (Dry Hire)';

    const message =
      language === 'ms'
        ? `*PERMOHONAN SEWAAN JENTERA — BMJ ENERGY*\n\n` +
          `• *Jentera:* ${equipName}\n` +
          `• *Kuantiti:* ${quantity}\n` +
          `• *Lokasi Tapak:* ${siteLocation}\n` +
          `• *Tarikh Mula:* ${startDate || 'Akan disahkan'}\n` +
          `• *Tarikh Tamat:* ${endDate || 'Akan disahkan'}\n` +
          `• *Anggaran Tempoh:* ${duration || 'Mengikut keperluan'}\n` +
          `• *Keperluan Operator:* ${operatorText}\n` +
          (notes ? `• *Catatan Tapak:* ${notes}\n\n` : `\n`) +
          `Mohon pihak BMJ Energy membuat semakan jadual ketersediaan, pengangkutan lowloader dan sebut harga rasmi. Terima kasih.`
        : `*EQUIPMENT RENTAL ENQUIRY — BMJ ENERGY*\n\n` +
          `• *Machinery:* ${equipName}\n` +
          `• *Quantity:* ${quantity}\n` +
          `• *Site Location:* ${siteLocation}\n` +
          `• *Start Date:* ${startDate || 'To be confirmed'}\n` +
          `• *End Date:* ${endDate || 'To be confirmed'}\n` +
          `• *Duration:* ${duration || 'As required'}\n` +
          `• *Operator Requirement:* ${operatorText}\n` +
          (notes ? `• *Site Notes:* ${notes}\n\n` : `\n`) +
          `Kindly verify machine availability schedule, lowloader mobilisation and provide an official quotation. Thank you.`;

    const url = `https://wa.me/${COMPANY_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs currentRoute="rental" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border-b border-slate-200 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
            {language === 'ms' ? 'Penyewaan Jentera Pembinaan' : 'Construction Machinery Hire'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102749] tracking-tight mt-2">
            {t.rental.pageTitle}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mt-3 leading-relaxed">
            {t.rental.subtitle}
          </p>
        </div>
      </section>

      {/* Important Disclaimer Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base leading-relaxed">
            <span className="font-bold block mb-1">
              {language === 'ms' ? 'Syarat & Garis Panduan Sewaan:' : 'Rental Guidelines:'}
            </span>
            <p>{t.rental.importantNotice}</p>
          </div>
        </div>
      </section>

      {/* Equipment Fleet Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {language === 'ms' ? 'Inventori Fizikal' : 'Physical Fleet'}
            </span>
            <h2 className="text-2xl font-bold text-[#102749] mt-1">
              {language === 'ms' ? 'Senarai Jentera Binaan BMJ' : 'BMJ Machinery Catalog'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RENTAL_EQUIPMENT.map((equip) => {
              const name = language === 'ms' ? equip.nameMs : equip.nameEn;
              const type = language === 'ms' ? equip.typeMs : equip.typeEn;
              const desc = language === 'ms' ? equip.descriptionMs : equip.descriptionEn;
              const highlights = language === 'ms' ? equip.highlightsMs : equip.highlightsEn;
              const terms = language === 'ms' ? equip.termsMs : equip.termsEn;

              return (
                <div
                  key={equip.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Primary Photo */}
                    <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                      <AssetImage
                        assetId={equip.primaryAssetId}
                        alt={name}
                        aspectRatio="aspect-[4/3]"
                        onClick={() => onOpenLightbox(equip.primaryAssetId)}
                        className="cursor-pointer"
                      />
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/70 text-white font-mono text-xs">
                        {equip.primaryAssetId}
                      </span>
                    </div>

                    {/* Secondary Thumbnails */}
                    {equip.assetIds.length > 1 && (
                      <div className="p-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto">
                        {equip.assetIds.map((id) => (
                          <div
                            key={id}
                            className="w-16 h-12 rounded overflow-hidden border border-slate-300 cursor-pointer shrink-0"
                            onClick={() => onOpenLightbox(id)}
                          >
                            <AssetImage assetId={id} aspectRatio="aspect-auto" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {type}
                        </span>
                        <h3 className="text-xl font-bold text-[#102749] mt-0.5">{name}</h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 mb-4 font-medium">
                      <strong className="text-slate-900">{language === 'ms' ? 'Nota Tapak:' : 'Site Term:'}</strong> {terms}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedEquip(equip.id);
                        const formEl = document.getElementById('rental-form');
                        if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#102749] hover:bg-[#1B4D89] text-white font-bold text-sm sm:text-base text-center transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>{language === 'ms' ? 'Pilih untuk Sebut Harga' : 'Select for Quote'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote-based Rental Enquiry Form */}
      <section id="rental-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-slate-200 shadow-lg">
          <div className="border-b border-slate-200 pb-6 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81D25]">
              {language === 'ms' ? 'Semakan Ketersediaan' : 'Direct Booking Inquiry'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102749] mt-1">
              {t.rental.enquiryFormTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {language === 'ms'
                ? 'Isi butiran sewaan jentera anda untuk membuka mesej WhatsApp tersusun ke pihak pengurusan BMJ Energy.'
                : 'Fill out your equipment hire requirements to initiate a pre-formatted WhatsApp chat with BMJ Energy.'}
            </p>
          </div>

          <form onSubmit={handleRentalSubmit} className="space-y-6">
            {formError && (
              <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                {formError}
              </div>
            )}

            {/* Equipment Dropdown */}
            <div>
              <label className="block text-sm font-bold text-[#102749] mb-2">
                {t.rental.formEquipment} *
              </label>
              <select
                value={selectedEquip}
                onChange={(e) => setSelectedEquip(e.target.value)}
                className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#102749] font-medium"
              >
                {RENTAL_EQUIPMENT.map((equip) => (
                  <option key={equip.id} value={equip.id}>
                    {language === 'ms' ? equip.nameMs : equip.nameEn} ({language === 'ms' ? equip.typeMs : equip.typeEn})
                  </option>
                ))}
              </select>
            </div>

            {/* Site Location & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#102749] mb-2">
                  {t.rental.formLocation} *
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={siteLocation}
                    onChange={(e) => setSiteLocation(e.target.value)}
                    placeholder={language === 'ms' ? 'Contoh: Lumut, Sitiawan, Seri Manjung' : 'e.g. Lumut, Sitiawan'}
                    className="w-full min-h-[48px] pl-11 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102749] mb-2">
                  {t.rental.formQuantity}
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="1 Unit"
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>
            </div>

            {/* Dates & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#102749] mb-2">
                  {t.rental.formStartDate}
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102749] mb-2">
                  {t.rental.formEndDate}
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102749] mb-2">
                  {t.rental.formDuration}
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder={language === 'ms' ? 'Contoh: 3 Hari / 1 Minggu' : 'e.g. 3 Days / 1 Week'}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
                />
              </div>
            </div>

            {/* Operator Requirement Radio */}
            <div>
              <label className="block text-sm font-bold text-[#102749] mb-2">
                {t.rental.formOperator}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`min-h-[48px] p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                    operatorNeeded === 'with'
                      ? 'border-[#102749] bg-blue-50/50 text-[#102749] font-bold'
                      : 'border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="operator"
                    checked={operatorNeeded === 'with'}
                    onChange={() => setOperatorNeeded('with')}
                    className="w-4 h-4 text-[#102749]"
                  />
                  <span>{t.rental.operatorWith}</span>
                </label>

                <label
                  className={`min-h-[48px] p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-colors ${
                    operatorNeeded === 'without'
                      ? 'border-[#102749] bg-blue-50/50 text-[#102749] font-bold'
                      : 'border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="operator"
                    checked={operatorNeeded === 'without'}
                    onChange={() => setOperatorNeeded('without')}
                    className="w-4 h-4 text-[#102749]"
                  />
                  <span>{t.rental.operatorWithout}</span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-[#102749] mb-2">
                {t.rental.formNotes}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  language === 'ms'
                    ? 'Keterangan tambahan mengenai keadaan tanah, akses laluan atau skop kerja...'
                    : 'Additional notes regarding site terrain, access route, or work scope...'
                }
                className="w-full p-4 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#102749]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full min-h-[54px] py-4 px-6 rounded-xl bg-[#F5A623] hover:bg-[#E09419] text-[#0F1E36] font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-[#F5A623] cursor-pointer transform hover:scale-[1.01]"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#0F1E36]" />
                <span>{t.rental.submitRental}</span>
              </button>
              <p className="text-sm text-slate-600 font-medium text-center mt-3">
                {language === 'ms'
                  ? 'Borang ini akan membuka WhatsApp rasmi BMJ Energy (+60 10-368 9689) dengan data tersusun.'
                  : 'This button directly opens BMJ Energy WhatsApp (+60 10-368 9689) with formatted details.'}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
