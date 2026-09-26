import React from 'react';
import { RouteId } from '@/src/types';
import { useLanguage } from '@/src/context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentRoute: RouteId;
  subTitle?: string;
  onNavigate: (route: RouteId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentRoute,
  subTitle,
  onNavigate
}) => {
  const { t } = useLanguage();

  if (currentRoute === 'home') return null;

  const getPageTitle = (route: RouteId) => {
    switch (route) {
      case 'about':
        return t.about.breadcrumbs;
      case 'services':
        return t.services.breadcrumbs;
      case 'painting':
        return 'Painting Services';
      case 'portfolio':
        return t.portfolio.breadcrumbs;
      case 'rental':
        return t.rental.breadcrumbs;
      case 'contact':
        return t.contact.breadcrumbs;
      default:
        return '';
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-100/80 border-b border-slate-200/80 py-3 px-4 sm:px-6 lg:px-8 text-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-600 flex-wrap">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 hover:text-[#102749] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#102749] rounded"
        >
          <Home className="w-4 h-4 text-slate-400" />
          <span>{t.nav.home}</span>
        </button>

        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <span
          className={`${subTitle ? 'text-slate-600 hover:text-[#102749] cursor-pointer' : 'text-[#102749] font-bold'}`}
          onClick={subTitle ? () => onNavigate(currentRoute) : undefined}
        >
          {getPageTitle(currentRoute)}
        </span>

        {subTitle && (
          <>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-[#102749] font-bold truncate max-w-xs sm:max-w-md">
              {subTitle}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
