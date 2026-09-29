import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ASSETS } from '../data/assets';
import { CLINIC_INFO } from '../data/clinicData';
import { LocationSection } from '../components/LocationSection';
import { ShieldCheck, Cpu, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white pt-10 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Our Practice Story
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-tight">
              Modern Dentistry With a Human Approach.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              SmileCraft Dental was founded on a simple principle: high-precision clinical dentistry should never come at the expense of patient warmth, open communication, and personal dignity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Clinic Philosophy & Environment */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block">
                The Care Philosophy
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
                A Calming Departure From Traditional Dentistry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For many, visiting the dentist elicits apprehension. The smells, the cold stainless steel, and the rushed consultations have left lasting impressions. We set out to rethink every moment of your visit.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located on the 6th floor of 1250 Madison Avenue, our operatory features abundant natural light, acoustic dampening, and warm architectural wood tones. Before any dental instrument is picked up, we discuss your goals and comfort preferences.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Transparent treatment explanations with digital photos and 3D models</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Conservative intervention: We preserve as much natural tooth structure as possible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Generous appointment times so questions are never rushed or dismissed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-md aspect-16/11 bg-slate-100">
                <img
                  src={ASSETS.clinicInterior}
                  alt="Modern serene dental clinic room with natural light"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Four Core Pillars */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Guiding Principles
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              How We Deliver Clinical Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Clinical Integrity',
                desc: 'We recommend only what is medically necessary and in the genuine long-term interest of your health.',
              },
              {
                icon: Cpu,
                title: 'Digital Accuracy',
                desc: 'Sub-millimeter 3D imaging, computer-guided implant planning, and digital impressions eliminate guesswork.',
              },
              {
                icon: Heart,
                title: 'Empathetic Comfort',
                desc: 'Gentle local anesthesia techniques and calm bedside manners designed to alleviate dental anxiety.',
              },
              {
                icon: Sparkles,
                title: 'Natural Aesthetics',
                desc: 'Custom restorations handcrafted to complement your unique facial proportions, never looking fake.',
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-sky-900 w-fit mb-4">
                      <Icon className="w-5 h-5 text-sky-800" />
                    </div>
                    <h3 className="font-editorial text-xl font-medium text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-4 pt-3 border-t border-slate-100">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Doctors Link Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Ivy League Trained
              </span>
              <h3 className="font-editorial text-3xl text-white font-medium">
                Meet the Doctors Behind Your Care
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Learn about Dr. Sarah Mitchell, Dr. James Carter, and Dr. Emily Parker — their education, clinical specialties, and collaborative approach.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => onNavigate('doctors')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>View Doctor Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Location Section */}
      <LocationSection />

    </div>
  );
};
