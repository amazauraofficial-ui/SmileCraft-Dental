import React from 'react';
import { PageRoute } from '../types';
import { DOCTORS } from '../data/clinicData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GraduationCap, Award, CheckCircle2, Calendar, Phone } from 'lucide-react';

interface DoctorsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Doctors' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Clinical Leadership
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              Meet Our Dental Specialists
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              Every member of our clinical team combines Ivy League medical education with a deep commitment to gentle, unhurried patient care. We take the time to listen, explain, and tailor treatment to you.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="p-3 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-500">
          <strong>Portfolio Notice:</strong> Clinician biographies, photographs, and credential profiles are demo representations created for this portfolio website.
        </div>
      </div>

      {/* Doctor Detailed Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {DOCTORS.map((doc, idx) => (
          <div
            key={doc.id}
            className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Portrait Column */}
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden border border-slate-200/90 aspect-4/3 sm:aspect-square bg-slate-100 shadow-xs">
                <img
                  src={doc.image}
                  alt={`${doc.name} - ${doc.role}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="mt-5 space-y-2">
                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>

            {/* Profile Info Column */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h2 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-medium">
                    {doc.name}
                  </h2>
                  <span className="font-mono text-xs text-sky-900 font-semibold">{doc.credentials}</span>
                </div>
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{doc.role}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {doc.fullBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 text-xs">
                {/* Education */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <GraduationCap className="w-4 h-4 text-sky-700" />
                    <span>Education & Residency</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-500 pl-6">
                    {doc.education.map((edu, i) => (
                      <li key={i} className="list-disc">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Award className="w-4 h-4 text-sky-700" />
                    <span>Specialties & Clinical Focus</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-500 pl-6">
                    {doc.specialties.map((spec, i) => (
                      <li key={i} className="list-disc">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Memberships */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Professional Memberships & Accreditations
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                  {doc.memberships.map((m) => (
                    <span key={m} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-8">
          <h3 className="font-editorial text-2xl text-slate-900 font-medium">
            Personalized Care Designed for Your Comfort
          </h3>
          <p className="text-xs text-slate-600 mt-2 max-w-lg mx-auto">
            Ready to meet our dental team? We invite you to schedule a relaxed initial consultation to discuss your smile goals and oral health.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Request an Appointment Online
            </button>
            <a
              href="tel:+12125550188"
              className="px-6 py-3 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-700" />
              <span>Call Front Desk: +1 (212) 555-0188</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
