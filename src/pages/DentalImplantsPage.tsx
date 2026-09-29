import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import { FAQS } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, ChevronDown, Calendar, Phone, Clock, ArrowRight } from 'lucide-react';

interface DentalImplantsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DentalImplantsPage: React.FC<DentalImplantsPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('f4');

  const implantFaqs = FAQS.filter((f) => f.category === 'implants' || f.id === 'f1' || f.id === 'f11');

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white pt-10 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Services', route: 'services' }, { label: 'Dental Implants' }]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Restorative Dentistry
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12]">
                Restore Your Smile With Modern Dental Implants
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                A permanent, biocompatible solution engineered to look, feel, and function like your natural teeth. Designed with computer-guided 3D precision on Madison Avenue.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('implant-consultation-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Implant Consultation</span>
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
                <span>· High-Resolution 3D CBCT Imaging</span>
                <span>· Biocompatible Titanium Posts</span>
                <span>· Hand-Shaded Zirconia Crowns</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-4">
              <h3 className="font-editorial text-2xl text-white font-medium">Why Consider Implants?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When a natural tooth is lost, the surrounding jawbone gradually recedes due to lack of stimulation. Dental implants are the only restoration method that integrates directly with the bone structure, preserving facial contours and preventing shifts in neighboring teeth.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Restores natural bite force & food choices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Protects adjacent healthy tooth structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Avoids slipping, clicks, or messy adhesives</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Candidate Overview & Benefits */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
                Clinical Candidacy
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium mb-4">
                Who May Benefit From Dental Implants?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Most adults with one or more missing teeth are potential candidates for dental implants. Ideal candidates possess good overall health, healthy gum tissues, and adequate jawbone density to support the implant foundation.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Even if you have experienced bone loss over time, modern bone grafting and sinus elevation techniques can often rebuild a robust foundation prior to implant placement.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <span className="text-sky-800 font-bold">1.</span>
                  <div>
                    <strong className="text-slate-900">Single Tooth Loss:</strong> Replaces the root and crown without compromising the integrity of adjacent enamel.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <span className="text-sky-800 font-bold">2.</span>
                  <div>
                    <strong className="text-slate-900">Multiple Missing Teeth:</strong> Implant-supported bridges replace multiple consecutive teeth stably.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <span className="text-sky-800 font-bold">3.</span>
                  <div>
                    <strong className="text-slate-900">Full Arch Restoration:</strong> Secures complete lower or upper dental arches with fixed, permanent stability.
                  </div>
                </div>
              </div>
            </div>

            {/* Precision & Technology Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-5">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block">
                Diagnostic Precision
              </span>
              <h3 className="font-editorial text-2xl text-slate-900 font-medium">
                Computer-Guided Surgical Planning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                At SmileCraft Dental, guesswork is eliminated through state-of-the-art 3D cone-beam computed tomography (CBCT). This allows our team to visualize your anatomical structures in sub-millimeter detail.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Custom CAD/CAM Surgical Guides:</span> Placed directly over the gums to ensure exact angle and depth.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Medical-Grade Titanium & Zirconia:</span> Highly biocompatible materials engineered to integrate naturally.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Gentle Sedation Options:</span> Designed to make your appointment calm, predictable, and relaxed.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-md text-[11px] text-amber-900 leading-relaxed">
                <strong>Responsible Clinical Notice:</strong> Every surgical procedure carries potential risks. Healing times and treatment suitability vary based on bone anatomy, medical history, and oral hygiene habits.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Step-by-Step Treatment Process */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Treatment Protocol
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              What the Process Generally Involves
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              A carefully staged treatment pathway designed to ensure patient comfort, meticulous placement, and long-term restorative success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Comprehensive 3D Evaluation',
                desc: 'Digital CBCT scans, periodontal assessment, and a detailed review of medical history to establish clinical candidacy.',
              },
              {
                step: '02',
                title: 'Guided Placement',
                desc: 'Precise placement of the biocompatible post using 3D surgical guides with local anesthetic for complete patient comfort.',
              },
              {
                step: '03',
                title: 'Osseointegration',
                desc: 'Natural healing period (typically 8–16 weeks) during which the jawbone integrates firmly with the implant post.',
              },
              {
                step: '04',
                title: 'Custom Crown Delivery',
                desc: 'Design, hand-shading, and permanent placement of your bespoke ceramic crown, matching your natural dentition.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-sky-800 block mb-2">{s.step}.</span>
                  <h4 className="font-editorial text-lg font-medium text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Clock className="w-3 h-3 text-sky-700" />
                  <span>Guided Clinical Phase</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Implant Inquiries
            </span>
            <h2 className="font-editorial text-3xl text-slate-900 font-medium">
              Common Questions About Dental Implants
            </h2>
          </div>

          <div className="space-y-3">
            {implantFaqs.map((faq) => {
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
      <section id="implant-consultation-form" className="py-16 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm initialService="Dental Implants" onNavigate={onNavigate} />
        </div>
      </section>

    </div>
  );
};
