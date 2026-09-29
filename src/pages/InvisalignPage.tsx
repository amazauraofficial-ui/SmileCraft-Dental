import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQS } from '../data/clinicData';
import { Layers, CheckCircle2, ChevronDown, Calendar, Phone, Clock, Smile, ShieldCheck } from 'lucide-react';

interface InvisalignPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const InvisalignPage: React.FC<InvisalignPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('f8');

  const invisalignFaqs = FAQS.filter((f) => f.category === 'invisalign' || f.id === 'f1' || f.id === 'f11');

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white pt-10 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Services', route: 'services' }, { label: 'Invisalign' }]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Modern Orthodontics
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12]">
                A Clearer Path to a More Confident Smile
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Straighten your teeth discreetly with virtually unnoticeable custom clear aligners. Designed with digital 3D optical scanning to fit effortlessly into your professional lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('invisalign-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Invisalign Assessment</span>
                </button>
                <a
                  href="tel:+12125550188"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call +1 (212) 555-0188</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap gap-4">
                <span>· No Messy Putty Impressions</span>
                <span>· SmartTrack Flexible Material</span>
                <span>· Diamond-Level Orthodontist Oversight</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-4">
              <h3 className="font-editorial text-2xl text-white font-medium">Why Patients Choose Clear Aligners</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traditional orthodontic brackets can cause soft-tissue friction, require dietary restrictions, and demand frequent wire tightening. Invisalign provides a smoother, modern alternative with complete removability.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Remove aligners to eat all your favorite foods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Brush and floss normally without special threaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Smooth, laser-trimmed edges that won't irritate gums</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. How Clear Aligner Treatment Works */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              The Journey
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              How Invisalign Treatment Unfolds
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Guided by Dr. Emily Parker, Board-Certified Orthodontic Specialist, every stage is calibrated for biological comfort and steady alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '3D Optical iTero Scan',
                desc: 'In under five minutes, our optical scanner creates a high-accuracy 3D digital model of your teeth. No uncomfortable putty impressions.',
              },
              {
                step: '02',
                title: 'ClinCheck Digital Simulation',
                desc: 'Dr. Parker calculates the exact path each tooth will travel and presents a 3D animated preview of your smile transformation.',
              },
              {
                step: '03',
                title: 'Wear Your Aligners',
                desc: 'Wear each set of clear aligners for 20–22 hours per day, transitioning to your next tray set every 7 to 14 days as instructed.',
              },
              {
                step: '04',
                title: 'Retain & Protect',
                desc: 'Once ideal alignment is achieved, custom clear Vivera retainers keep your newly aligned teeth secure and stable.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-slate-50/70 border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-sky-800 block mb-2">{s.step}.</span>
                  <h4 className="font-editorial text-lg font-medium text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-700" />
                  <span>Orthodontist Supervised</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Who May Be a Candidate */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
                Suitability
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium mb-4">
                Who Is a Good Candidate for Invisalign?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Invisalign is suitable for teens and adults addressing a wide spectrum of orthodontic considerations. Common candidates include:
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 flex items-start gap-3">
                  <span className="text-sky-800 font-bold">·</span>
                  <div>
                    <strong className="text-slate-900">Crowded Teeth:</strong> Overlapping or twisted teeth that trap plaque and make flossing challenging.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 flex items-start gap-3">
                  <span className="text-sky-800 font-bold">·</span>
                  <div>
                    <strong className="text-slate-900">Diastemas (Gaps):</strong> Unwanted spaces between teeth that affect appearance or speech clarity.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 flex items-start gap-3">
                  <span className="text-sky-800 font-bold">·</span>
                  <div>
                    <strong className="text-slate-900">Adult Orthodontic Relapse:</strong> Patients who had braces earlier in life and have experienced gradual tooth shifting.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 flex items-start gap-3">
                  <span className="text-sky-800 font-bold">·</span>
                  <div>
                    <strong className="text-slate-900">Mild to Moderate Bite Issues:</strong> Overbite, underbite, or crossbite configurations affecting chewing efficiency.
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Note */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-4 shadow-xs">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block">
                Treatment Expectations
              </span>
              <h3 className="font-editorial text-2xl text-slate-900 font-medium">
                Realistic Timelines & Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Treatment duration varies widely depending on initial tooth positioning and complexity. Typical adult cases range between 6 to 18 months.
              </p>
              <div className="p-4 rounded-lg bg-sky-50/50 border border-sky-100 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-800 shrink-0" />
                  <span className="font-medium text-slate-900">Wear Consistency: 20–22 hours/day</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Because aligners are removable, steady adherence is key to maintaining predicted milestones without extended treatment timelines.
                </p>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                *Treatment timelines presented are illustrative examples. Actual durations are established following clinical examination and digital bite analysis.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Orthodontic Guidance
            </span>
            <h2 className="font-editorial text-3xl text-slate-900 font-medium">
              Common Questions About Clear Aligners
            </h2>
          </div>

          <div className="space-y-3">
            {invisalignFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border border-slate-200/90 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between text-xs font-semibold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Booking Lead Capture Form */}
      <section id="invisalign-consultation-form" className="py-16 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm initialService="Invisalign" onNavigate={onNavigate} />
        </div>
      </section>

    </div>
  );
};
