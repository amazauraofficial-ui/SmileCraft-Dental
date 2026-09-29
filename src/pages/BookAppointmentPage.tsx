import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Clock, ShieldCheck, MapPin, Calendar } from 'lucide-react';

interface BookAppointmentPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Book Appointment' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Appointment Scheduling
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              Request Your Visit at SmileCraft Dental
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              We look forward to welcoming you to our Upper East Side practice. Choose your service, select a preferred day, and our care concierge will handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form (Lead Generation Experience) */}
          <div className="lg:col-span-8">
            <AppointmentForm onNavigate={onNavigate} />
          </div>

          {/* Right Reassurance & Contact Information */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Urgent Booking Callout */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 text-xs text-amber-950">
              <div className="flex items-center gap-2 mb-2 text-amber-800 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Need Same-Day Emergency Care?</span>
              </div>
              <p className="leading-relaxed mb-3">
                If you are suffering from acute toothache or trauma, call our front desk directly for priority same-day scheduling.
              </p>
              <a
                href={`tel:${CLINIC_INFO.phoneCall}`}
                className="inline-flex items-center gap-2 font-bold text-amber-900 hover:text-amber-950 underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* What to Expect Card */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="font-editorial text-xl font-medium text-slate-900">What to Expect Next</h3>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">1.</span>
                  <div>
                    <strong className="text-slate-900">Concierge Verification:</strong> Our patient coordinator reviews provider schedules and contacts you within 2 business hours.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">2.</span>
                  <div>
                    <strong className="text-slate-900">Digital Paperwork:</strong> We send secure digital registration forms so you won't need to spend time filling out forms in our waiting lounge.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-sky-800 shrink-0">3.</span>
                  <div>
                    <strong className="text-slate-900">Insurance Verification:</strong> If utilizing dental insurance, our billing specialist coordinates benefit coverage ahead of your visit.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>No automated surprise bookings · 100% human coordination</span>
              </div>
            </div>

            {/* Clinic Details */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs space-y-3 text-xs text-slate-600">
              <h4 className="font-semibold text-slate-900">Practice Location & Hours</h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-700 mt-0.5 shrink-0" />
                <span>
                  1250 Madison Avenue, Suite 600<br />
                  New York, NY 10028
                </span>
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <div className="flex justify-between">
                  <span>Mon–Thu:</span>
                  <span className="text-slate-900 font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span className="text-slate-900 font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-slate-900 font-medium">9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
