import React, { useState, useEffect, useRef } from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { BmjLogo } from '@/src/components/common/BmjLogo';
import { SERVICES_DATA } from '@/src/data/servicesData';
import { COMPANY_DATA } from '@/src/data/companyData';
import { Menu, X, ChevronDown, MessageSquare, Globe } from 'lucide-react';

interface HeaderProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onSelectService
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for shadow increase
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks: { id: RouteId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'rental', label: t.nav.rental },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (route: RouteId) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onNavigate('services');
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ONE SINGLE ROW: flex-nowrap to keep all elements strictly on 1 row */}
        <div className="flex items-center justify-between h-20 gap-3 lg:gap-4 xl:gap-6 flex-nowrap">
          {/* ZONE 1: BRAND LOGO (A001 proportions & colors, shrink-0) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left py-1 shrink-0 focus-visible:outline-2 focus-visible:outline-[#102749] rounded-lg cursor-pointer"
            aria-label="BMJ Energy Service And Trading - Laman Utama"
          >
            <BmjLogo className="h-12 sm:h-14" />
          </button>

          {/* ZONE 2: ALL NAVIGATION LABELS ON 1 ROW */}
          <nav className="hidden xl:flex items-center gap-1 flex-nowrap shrink-0">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;

              if (link.id === 'services') {
                return (
                  <div key={link.id} className="relative shrink-0" ref={dropdownRef}>
                    <button
                      onClick={() => handleNavClick('services')}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      className={`h-11 px-3 text-base font-semibold transition-colors rounded-lg flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'text-[#102749] bg-slate-100 font-bold'
                          : 'text-slate-700 hover:text-[#102749] hover:bg-slate-100/70'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setServicesDropdownOpen(!servicesDropdownOpen);
                        }}
                      />
                    </button>

                    {/* Compact Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      >
                        <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {t.nav.servicesDropdown}
                          </span>
                          <span className="text-xs text-[#C81D25] font-semibold">12 Skop</span>
                        </div>
                        <div className="max-h-[380px] overflow-y-auto py-1">
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleServiceSelect(srv.id)}
                              className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700 hover:text-[#102749] cursor-pointer"
                            >
                              <span className="text-xs font-mono font-bold text-slate-400 shrink-0">
                                {srv.num}
                              </span>
                              <span className="font-medium truncate">
                                {language === 'ms' ? srv.titleMs : srv.titleEn}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`h-11 px-3 text-base font-semibold transition-colors rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#102749] bg-slate-100 font-bold'
                      : 'text-slate-700 hover:text-[#102749] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS ON SAME ROW (Language switch) */}
          <div className="hidden xl:flex items-center gap-2 xl:gap-3 shrink-0 flex-nowrap">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="h-10 px-3 flex items-center gap-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold transition-colors focus-visible:outline-[#102749] cursor-pointer shrink-0"
              aria-label={`Tukar bahasa kepada ${language === 'ms' ? 'English' : 'Bahasa Melayu'}`}
              title="Tukar Bahasa / Switch Language"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{language === 'ms' ? 'EN' : 'BM'}</span>
            </button>
          </div>

          {/* At constrained widths, keep the logo and menu on one readable row. */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-700 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <button
              onClick={toggleLanguage}
              className="min-h-[44px] px-4 rounded-lg border border-slate-300 text-slate-700 text-base font-bold"
              aria-label="Tukar Bahasa"
            >
              {language === 'ms' ? 'English' : 'Bahasa Melayu'}
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left min-h-[48px] px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between cursor-pointer ${
                  currentRoute === link.id
                    ? 'bg-[#102749] text-white font-bold'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'services' && (
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 font-mono">
                    12 Skop
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
