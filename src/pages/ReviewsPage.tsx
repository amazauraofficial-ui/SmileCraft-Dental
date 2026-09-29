import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, Calendar, MessageSquareQuote } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.treatment.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Reviews' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Patient Reflections
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              Experiences of Thoughtful Care
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              Read how our focus on comfort, transparency, and clinical excellence resonates with individuals across New York.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="p-3 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-500">
          <strong>Portfolio Notice:</strong> The testimonials below are illustrative demo reviews created for this design portfolio showcase. External platform review numbers are not fabricated.
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'implants', label: 'Dental Implants' },
            { id: 'veneers', label: 'Cosmetic Veneers' },
            { id: 'invisalign', label: 'Invisalign' },
            { id: 'emergency', label: 'Emergency Care' },
            { id: 'exam', label: 'General & Hygiene' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                filter === tab.id
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-xl p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-4 h-4 text-slate-300" />
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center border border-slate-200">
                    {item.initials}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">{item.author}</span>
                    <span className="text-[11px] text-sky-800">{item.treatment}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xs">
          <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
            Experience the Difference
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-medium">
            Join Our Practice Family Today
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md mx-auto">
            We are welcoming new patients for comprehensive examinations, aesthetic consultations, and restorative care.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Your Appointment</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
