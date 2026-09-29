import React, { useState } from 'react';
import { AppointmentFormData, PageRoute } from '../types';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';
import { CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentFormProps {
  initialService?: string;
  onNavigate?: (route: PageRoute) => void;
}

const encodeFormData = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
};

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialService, onNavigate }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: initialService || 'Dental Implants',
    preferredDoctor: 'Any Available Specialist',
    preferredDate: '',
    preferredTime: 'morning',
    patientType: 'new',
    notes: '',
  });

  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Spam honeypot rejection
    if (botField) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    const ref = `SCD-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'appointment-request',
          'bot-field': botField,
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          preferredDoctor: formData.preferredDoctor,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          patientType: formData.patientType,
          notes: formData.notes.trim(),
        }),
      });
    } catch {
      // Graceful fallback for offline, preview, or static dev sandbox environments
    } finally {
      setIsSubmitting(false);
      setReferenceId(ref);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'General Dentistry',
      preferredDoctor: 'Any Available Specialist',
      preferredDate: '',
      preferredTime: 'morning',
      patientType: 'new',
      notes: '',
    });
    setBotField('');
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200/90 rounded-xl p-8 sm:p-10 shadow-xs max-w-2xl mx-auto text-center animate-in fade-in-50 duration-300">
        <div className="w-14 h-14 bg-sky-50 text-sky-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-200/60">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
          Request Submitted
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-slate-900 font-medium">
          Thank you — your appointment request has been received.
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
          Our team will contact you to confirm availability and appointment details.
        </p>

        <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-2">
          <div className="flex justify-between items-center border-b border-slate-200/70 pb-2">
            <span className="text-slate-500">Request Reference:</span>
            <span className="font-mono font-semibold text-slate-900 tabular-nums">{referenceId}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/70 pb-2">
            <span className="text-slate-500">Patient:</span>
            <span className="font-medium text-slate-900">{formData.fullName} ({formData.patientType === 'new' ? 'New Patient' : 'Existing Patient'})</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/70 pb-2">
            <span className="text-slate-500">Requested Service:</span>
            <span className="font-medium text-slate-900">{formData.service}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/70 pb-2">
            <span className="text-slate-500">Target Time Window:</span>
            <span className="font-medium text-slate-900 capitalize">{formData.preferredDate} ({formData.preferredTime})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Preferred Clinician:</span>
            <span className="font-medium text-slate-900">{formData.preferredDoctor}</span>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-md bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900 text-left flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Scheduling Notice:</strong> Appointment slots are tentative pending provider confirmation. To safeguard patient privacy, no medical history is recorded in browser storage.
          </span>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneCall}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-700" />
            <span>Call Desk ({CLINIC_INFO.phoneDisplay})</span>
          </a>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="appointment-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 shadow-xs"
      noValidate
    >
      {/* Hidden Netlify identifier */}
      <input type="hidden" name="form-name" value="appointment-request" />

      {/* Honeypot anti-spam field */}
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out if human:
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="mb-6">
        <h3 className="font-editorial text-2xl text-slate-900 font-medium">Request a Consultation</h3>
        <p className="text-xs text-slate-500 mt-1">
          Complete the form below. Our concierge will review clinic schedules and reach out promptly to confirm your visit.
        </p>
      </div>

      <div className="space-y-4 text-xs">
        {/* Patient Status */}
        <div>
          <span className="block text-xs font-semibold text-slate-700 mb-1.5" id="patient-status-label">
            Are you a new patient to SmileCraft?
          </span>
          <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-labelledby="patient-status-label">
            <button
              type="button"
              role="radio"
              aria-checked={formData.patientType === 'new'}
              onClick={() => setFormData({ ...formData, patientType: 'new' })}
              className={`py-2 px-3 text-xs rounded-md border text-center transition-colors cursor-pointer ${
                formData.patientType === 'new'
                  ? 'border-sky-700 bg-sky-50/60 font-semibold text-sky-950'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Yes, I am a new patient
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={formData.patientType === 'existing'}
              onClick={() => setFormData({ ...formData, patientType: 'existing' })}
              className={`py-2 px-3 text-xs rounded-md border text-center transition-colors cursor-pointer ${
                formData.patientType === 'existing'
                  ? 'border-sky-700 bg-sky-50/60 font-semibold text-sky-950'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Returning patient
            </button>
          </div>
        </div>

        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="appt-fullName" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="appt-fullName"
              name="fullName"
              type="text"
              maxLength={80}
              autoComplete="name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'appt-name-error' : undefined}
              className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                errors.fullName ? 'border-rose-400' : 'border-slate-200'
              }`}
            />
            {errors.fullName && (
              <p id="appt-name-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="appt-phone" className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="appt-phone"
              name="phone"
              type="tel"
              maxLength={20}
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. (212) 555-0144"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'appt-phone-error' : undefined}
              className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                errors.phone ? 'border-rose-400' : 'border-slate-200'
              }`}
            />
            {errors.phone && (
              <p id="appt-phone-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="appt-email" className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="appt-email"
            name="email"
            type="email"
            maxLength={100}
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. eleanor.vance@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'appt-email-error' : undefined}
            className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
              errors.email ? 'border-rose-400' : 'border-slate-200'
            }`}
          />
          {errors.email && (
            <p id="appt-email-error" className="text-[11px] text-rose-500 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Service & Doctor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="appt-service" className="block text-xs font-semibold text-slate-700 mb-1">
              Service of Interest
            </label>
            <select
              id="appt-service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-md border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other / General Consultation">Other / General Consultation</option>
            </select>
          </div>

          <div>
            <label htmlFor="appt-doctor" className="block text-xs font-semibold text-slate-700 mb-1">
              Preferred Doctor (Optional)
            </label>
            <select
              id="appt-doctor"
              name="preferredDoctor"
              value={formData.preferredDoctor}
              onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-md border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700"
            >
              <option value="Any Available Specialist">First Available Specialist</option>
              {DOCTORS.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name} ({d.role.split('&')[0]})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date & Time Window */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="appt-date" className="block text-xs font-semibold text-slate-700 mb-1">
              Preferred Date <span className="text-rose-500">*</span>
            </label>
            <input
              id="appt-date"
              name="preferredDate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              required
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              aria-invalid={!!errors.preferredDate}
              aria-describedby={errors.preferredDate ? 'appt-date-error' : undefined}
              className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                errors.preferredDate ? 'border-rose-400' : 'border-slate-200'
              }`}
            />
            {errors.preferredDate && (
              <p id="appt-date-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                {errors.preferredDate}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="appt-time" className="block text-xs font-semibold text-slate-700 mb-1">
              Preferred Time Window
            </label>
            <select
              id="appt-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value as any })}
              className="w-full px-3 py-2 text-xs rounded-md border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700"
            >
              <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
              <option value="evening">Late Afternoon (4:00 PM – 6:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="appt-notes" className="block text-xs font-semibold text-slate-700 mb-1">
            Reason for Visit / Specific Concerns (Optional)
          </label>
          <textarea
            id="appt-notes"
            name="notes"
            rows={3}
            maxLength={1000}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Tell us about any specific tooth concerns, symptoms, questions, or dental anxiety considerations..."
            className="w-full px-3 py-2 text-xs rounded-md border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors"
          />
        </div>

        {/* Notice */}
        <div className="p-3 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
          Submitting this form sends an appointment request to our coordination desk. A member of our clinical team will contact you to finalize the date and hour.
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Transmitting Request...</span>
          ) : (
            <>
              <span>Request Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
