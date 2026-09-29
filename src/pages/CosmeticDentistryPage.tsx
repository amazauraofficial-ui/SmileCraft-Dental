import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQS } from '../data/clinicData';
import { Sparkles, CheckCircle2, ChevronDown, Calendar, Phone, ArrowRight, Eye } from 'lucide-react';

interface CosmeticDentistryPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CosmeticDentistryPage: React.FC<CosmeticDentistryPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('f6');

  const cosmeticFaqs = FAQS.filter((f) => f.category === 'cosmetic' || f.id === 'f1' || f.id === 'f11');

  const treatments = [
    {
      title: 'Porcelain Veneers & Laminates',
      desc: 'Ultra-thin, custom-crafted ceramic shells bonded to the front of teeth to address chips, gaps, deep stains, or slight misalignment.',
      idealFor: 'Durable, stain-resistant transformation with natural translucency.',
    },
    {
      title: 'In-Office Enamel Whitening',
      desc: 'Professional-grade whitening safely lifts years of coffee, tea, and aging discoloration in a single controlled 60-minute session.',
      idealFor: 'Immediate radiant brightening without compromising enamel integrity.',
    },
    {
      title: 'Cosmetic Composite Bonding',
      desc: 'Artistic sculpting using tooth-colored composite resin to repair small chips, fill small spaces, or smooth uneven edges in one visit.',
      idealFor: 'Conservative, budget-conscious touch-ups requiring minimal enamel preparation.',
    },
    {
      title: 'Aesthetic Gum Contouring',
      desc: 'Gentle laser recontouring of excessive or asymmetrical gum tissue to create balanced tooth exposure and an even smile line.',
      idealFor: 'Addressing "gummy" smiles and framing natural teeth symmetrically.',
    },
  ];

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white pt-10 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Services', route: 'services' }, { label: 'Cosmetic Dentistry' }]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Aesthetic Mastery
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12]">
                A Smile Designed Around You
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Natural elegance over artificial perfection. Our aesthetic treatments harmonize with your facial structure, lip movement, and personal goals for a confident, genuine smile.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('cosmetic-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Smile Design Consultation</span>
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
                <span>· Digital Smile Mockup Preview</span>
                <span>· Minimally Invasive Preparation</span>
                <span>· Master Ceramist Collaboration</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-sky-400">
                <Eye className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">The SmileCraft Philosophy</span>
              </div>
              <h3 className="font-editorial text-2xl text-white font-medium">Bespoke Facial Harmony</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We reject the "one-size-fits-all" blinding white veneer trend. True cosmetic artistry requires evaluating the curve of the lower lip, skin undertones, and tooth proportions so your smile looks naturally gifted, never manufactured.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Custom shade graduation mimicking natural dentin & enamel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Preview your results in 3D prior to any treatment</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Treatment Possibilities */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Treatment Modalities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              Aesthetic Possibilities For Every Goal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Whether you desire subtle refinement or a comprehensive aesthetic renewal, we tailor each procedure conservatively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((t, idx) => (
              <div
                key={t.title}
                className="bg-slate-50/70 border border-slate-200/90 rounded-xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-sky-800 font-semibold">0{idx + 1}</span>
                    <Sparkles className="w-4 h-4 text-sky-700" />
                  </div>
                  <h3 className="font-editorial text-xl font-medium text-slate-900 mb-2">{t.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{t.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
                  <strong className="text-slate-800">Ideal Outcome:</strong> {t.idealFor}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. The 3D Preview Consultation Process */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block">
                The Consultative Approach
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
                Test-Drive Your Smile Before Starting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                One of the greatest hesitations patients feel about cosmetic dentistry is fear of the unknown. At SmileCraft Dental, we formulate a digital trial simulation.
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">·</span>
                  <div>
                    <strong className="text-slate-900">High-Resolution Facial Analysis:</strong> We photograph your smile from multiple conversational angles and lighting.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">·</span>
                  <div>
                    <strong className="text-slate-900">Physical Intraoral Mock-Up:</strong> In many cases, we place temporary aesthetic resin over your teeth so you can see shape and length in the mirror before committing.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">·</span>
                  <div>
                    <strong className="text-slate-900">Collaborative Refinement:</strong> You give feedback on tooth width, corner contouring, and brightness before final fabrication.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-xl p-8 shadow-xs">
              <h3 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
                Questions to Ask at Your Cosmetic Visit
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                We believe educated patients make the most confident choices. Consider discussing:
              </p>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <span>How much natural enamel needs to be shaped for my desired outcome?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <span>Would clear aligners or whitening first reduce the number of veneers needed?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <span>What daily maintenance is needed to preserve porcelain lustre long-term?</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Cosmetic Clarity
            </span>
            <h2 className="font-editorial text-3xl text-slate-900 font-medium">
              Common Cosmetic Dentistry Questions
            </h2>
          </div>

          <div className="space-y-3">
            {cosmeticFaqs.map((faq) => {
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
      <section id="cosmetic-consultation-form" className="py-16 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm initialService="Cosmetic Dentistry" onNavigate={onNavigate} />
        </div>
      </section>

    </div>
  );
};
