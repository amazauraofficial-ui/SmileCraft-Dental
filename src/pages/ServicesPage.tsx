import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICES } from '../data/clinicData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, ShieldCheck, Sparkles, Layers, AlertCircle, CheckCircle2, HeartPulse, Calendar } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Restorative', 'Cosmetic', 'Orthodontics', 'Preventive', 'Urgent'];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-800" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-800" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-amber-700" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-sky-800" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-sky-800" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-800" />;
    }
  };

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} onNavigate={onNavigate} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Comprehensive Care
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              Clinical Dentistry Grounded in Precision & Artistry
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              From routine preventative maintenance to transformative implant surgery and smile makeovers, our Upper East Side practice delivers tailored dental treatments in a peaceful, modern setting.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Interactive Segmented Filter Control */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-2 shadow-xs mb-10 overflow-x-auto flex items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Services' : cat}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/90 rounded-xl p-7 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-sky-50 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-slate-900 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.fullDesc}
                </p>

                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    {service.keyBenefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-700 font-bold shrink-0">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                {service.route ? (
                  <button
                    onClick={() => service.route && onNavigate(service.route)}
                    className="text-xs font-semibold text-sky-900 hover:text-sky-950 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Detailed Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-slate-400">In-Office Service</span>
                )}

                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Strip */}
        <div className="mt-16 bg-sky-50/60 border border-sky-100 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-editorial text-2xl text-slate-900 font-medium">
            Not Sure Which Treatment Is Right For You?
          </h3>
          <p className="text-xs text-slate-600 mt-2 max-w-lg mx-auto">
            Schedule a comprehensive examination with our clinical team. We will review your oral health status, discuss your aesthetic goals, and provide transparent treatment alternatives.
          </p>
          <div className="mt-5">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Initial Consultation</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
