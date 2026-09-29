import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CLINIC_INFO, FAQS } from '../data/clinicData';
import { AppointmentForm } from '../components/AppointmentForm';
import { LocationSection } from '../components/LocationSection';
import { Phone, AlertCircle, Clock, CheckCircle2, ChevronDown, Calendar, ShieldAlert } from 'lucide-react';

interface EmergencyDentistryPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const EmergencyDentistryPage: React.FC<EmergencyDentistryPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('f9');

  const emergencyFaqs = FAQS.filter((f) => f.category === 'emergency' || f.id === 'f1');

  const emergencySituations = [
    {
      title: 'Knocked-Out (Avulsed) Tooth',
      action: 'Handle only by the crown, do not scrape the root. Rinse gently with milk or saline if dirty. Keep moist in cold whole milk and seek immediate dental treatment within 60 minutes.',
      urgency: 'Immediate (Within 1 Hour)',
    },
    {
      title: 'Severe, Throbbing Toothache',
      action: 'Rinse mouth with warm water. Gently floss around the tooth to dislodge trapped food. Avoid placing aspirin directly against gums, and call for emergency diagnostic relief.',
      urgency: 'Same-Day Evaluation',
    },
    {
      title: 'Broken or Fractured Tooth',
      action: 'Rinse with warm water to cleanse the area. Apply a cold compress to your cheek to reduce swelling. Save any detached fragments in clean milk or saline.',
      urgency: 'Same-Day Evaluation',
    },
    {
      title: 'Dislodged Crown or Lost Filling',
      action: 'Keep the crown safe if recovered. Avoid chewing on the exposed sensitive tooth. Over-the-counter temporary dental cement may protect it temporarily until in-office recementation.',
      urgency: 'Prompt Appointment (24–48 Hrs)',
    },
  ];

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* 1. High-Urgency Hero */}
      <section className="bg-slate-900 text-white pt-10 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Services', route: 'services' }, { label: 'Emergency Dentistry' }]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 items-center">
            <div className="lg:col-span-8 space-y-6">
              
              {/* Emergency Banner Alert */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Same-Day Emergency Dental Appointments Available Daily</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.12]">
                Dental Emergency? We're Here to Help.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Acute dental pain and sudden trauma require prompt, compassionate care. Our Madison Avenue clinic reserves priority triage appointments each morning and afternoon to alleviate pain and safeguard your oral health.
              </p>

              {/* Direct Urgent Call CTA - Prominent */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.phoneCall}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-md transition-all shadow-lg text-center"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Call Emergency Desk: {CLINIC_INFO.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('emergency-request-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-md transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Same-Day Visit</span>
                </button>
              </div>

              <div className="pt-3 text-xs text-slate-400 flex flex-wrap gap-4">
                <span>· 1250 Madison Avenue (Upper East Side)</span>
                <span>· Rapid Digital X-Ray Triage</span>
                <span>· Gentle Pain Alleviation</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                Urgent Response Triage
              </span>
              <h3 className="font-editorial text-2xl text-white font-medium">When to Call Right Now</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you are suffering from severe throbbing tooth pain, persistent bleeding from dental trauma, or a knocked-out tooth, time is of the essence. Call our front desk directly for priority same-day scheduling.
              </p>
              <div className="pt-3 border-t border-slate-700/70 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white">Direct Line:</p>
                <a href={`tel:${CLINIC_INFO.phoneCall}`} className="text-sm font-bold text-sky-300 hover:underline">
                  +1 (212) 555-0188
                </a>
                <p className="text-[11px] text-slate-400 pt-1">Mon–Fri: 8am–6pm · Sat: 9am–2pm</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Critical Safety Disclaimer (Hospital ER note) */}
      <section className="bg-amber-50/80 border-b border-amber-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-amber-950">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Important Safety Notice:</strong> If you are experiencing difficulty breathing, severe bleeding that will not stop, difficulty swallowing, or facial trauma involving suspected broken bones, please dial <strong>911</strong> or visit the nearest hospital emergency room immediately.
          </p>
        </div>
      </section>

      {/* 3. Common Emergencies & What You Should Do */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              First-Aid Guidance
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              Common Dental Emergencies & Immediate Steps
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Knowing what actions to take in the first 30 minutes can significantly improve tooth salvage and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencySituations.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50/70 border border-slate-200/90 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-editorial text-xl font-medium text-slate-900">{item.title}</h3>
                    <span className="text-[11px] font-mono font-semibold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded">
                      {item.urgency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.action}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <a
                    href={`tel:${CLINIC_INFO.phoneCall}`}
                    className="text-xs font-semibold text-sky-900 hover:text-sky-950 inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-sky-700" />
                    <span>Call Clinic for Advice</span>
                  </a>
                  <span className="text-[11px] text-slate-400">Do not apply heat</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Emergency FAQ */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Urgent FAQs
            </span>
            <h2 className="font-editorial text-3xl text-slate-900 font-medium">
              Emergency Care Questions
            </h2>
          </div>

          <div className="space-y-3">
            {emergencyFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border border-slate-200/90 rounded-lg overflow-hidden bg-white">
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

      {/* 5. Location Section with Directions */}
      <LocationSection />

      {/* 6. Emergency Request Form */}
      <section id="emergency-request-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
            <span><strong>Urgent Note:</strong> For quickest triage, please call <strong>+1 (212) 555-0188</strong> directly. You can also submit this online request and our team will call you back immediately.</span>
          </div>
          <AppointmentForm initialService="Emergency Dentistry" onNavigate={onNavigate} />
        </div>
      </section>

    </div>
  );
};
