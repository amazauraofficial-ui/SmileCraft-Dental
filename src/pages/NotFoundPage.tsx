import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CLINIC_INFO } from '../data/clinicData';
import { Home, Sparkles, Calendar, Phone, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFDFF] min-h-[75vh] flex flex-col justify-center py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Brand Kicker */}
        <span className="font-mono text-xs font-semibold text-sky-800 uppercase tracking-widest block">
          Error 404 · Route Not Located
        </span>

        {/* Main H1 */}
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-medium tracking-tight">
          Page Not Found
        </h1>

        {/* Short Helpful Message */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          The page you are looking for may have moved, been renamed, or is temporarily unavailable. Let us help guide you back to our dental services and scheduling.
        </p>

        {/* Action Buttons as Required */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-sky-700" />
            <span>Explore Services</span>
          </button>

          <button
            onClick={() => onNavigate('book-appointment')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-sky-950 bg-sky-50 border border-sky-200 rounded-md hover:bg-sky-100 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-800" />
            <span>Book an Appointment</span>
          </button>
        </div>

        {/* Quick Phone Alternative */}
        <div className="pt-8 border-t border-slate-100 text-xs text-slate-500">
          <span>Need immediate assistance? Call our Madison Avenue clinic at </span>
          <a
            href={`tel:${CLINIC_INFO.phoneCall}`}
            className="font-semibold text-slate-900 hover:text-sky-900 underline"
          >
            {CLINIC_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </div>
  );
};
