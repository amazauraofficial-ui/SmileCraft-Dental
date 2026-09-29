import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, Lock, FileText, Info } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Website Information Governance
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              Privacy Policy &amp; Portfolio Notice
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              Last updated: September 2026. Review how inquiry information is handled on this demonstration website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          
          {/* Portfolio Clarification Banner */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-3 text-sky-950">
            <Info className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs uppercase tracking-wider text-sky-900 mb-1">
                Portfolio Presentation Notice
              </strong>
              <p className="text-xs leading-relaxed text-sky-800">
                SmileCraft Dental is a fictional dental practice created for professional web engineering, design, and SEO portfolio showcase. While the forms and navigation are functional, no real patient accounts or actual medical records are retained.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
              1. Information Collection &amp; Use
            </h2>
            <p className="mb-3">
              When you submit an appointment request or contact inquiry on this website, we collect only the necessary contact details you voluntarily provide:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>Full Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>General dental service of interest (e.g. Implants, Cosmetic, Invisalign)</li>
              <li>Preferred appointment window (day and time of day)</li>
              <li>General questions or notes provided voluntarily</li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
              2. Healthcare Data &amp; No Sensitive Records
            </h2>
            <p className="mb-3">
              This public website is designed strictly as a patient contact and lead-generation portal. It is <strong>not</strong> an Electronic Health Record (EHR) system and does not store patient medical charts, clinical treatment histories, dental radiographs, or billing account details.
            </p>
            <p>
              Please do not transmit sensitive personal health details, medical histories, or social security numbers through the online contact or appointment request forms.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
              3. Data Retention &amp; Local Storage Safety
            </h2>
            <p className="mb-3">
              To respect your digital privacy, this website enforces strict client-side data hygiene:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>No personal information or form submissions are stored in browser localStorage or sessionStorage.</li>
              <li>Form submissions are transmitted directly and securely via HTTPS.</li>
              <li>We do not sell, rent, or trade your inquiry information to third-party marketing brokers.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
              4. Third-Party Links &amp; Map Services
            </h2>
            <p>
              Our website provides links to external transit directions and map navigation (such as Google Maps). We do not control and are not responsible for the privacy practices or content of third-party external mapping or transit websites.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-slate-900 font-medium mb-3">
              5. Questions Regarding This Policy
            </h2>
            <p className="mb-2">
              If you have any questions or feedback regarding this policy or the structure of this website, you may reach our practice administration at:
            </p>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Practice:</strong> {CLINIC_INFO.name}</p>
              <p><strong>Address:</strong> {CLINIC_INFO.address.street}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}</p>
              <p><strong>Email:</strong> {CLINIC_INFO.email}</p>
              <p><strong>Phone:</strong> {CLINIC_INFO.phoneDisplay}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs font-semibold text-slate-800 hover:text-sky-900 cursor-pointer"
            >
              ← Return to Homepage
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold text-sky-900 hover:text-sky-950 cursor-pointer"
            >
              Contact Clinic Desk →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
