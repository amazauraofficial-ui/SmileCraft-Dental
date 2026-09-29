import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { LocationSection } from '../components/LocationSection';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Calendar } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

const encodeFormData = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
    .join('&');
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    message: '',
  });

  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please enter a valid full name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number';
    } else if (digitsOnly.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message or question';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Please provide a little more detail in your inquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (botField) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contact',
          'bot-field': botField,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });
    } catch {
      // Graceful fallback for offline, preview, or static dev sandbox environments
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FCFDFF] min-h-screen pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact & Location' }]} onNavigate={onNavigate} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
              Get In Touch
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-white font-medium leading-tight">
              We Look Forward to Speaking With You
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
              Reach out for appointment inquiries, general questions, or directions to our Upper East Side practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-editorial text-2xl text-slate-900 font-medium">Practice Contact</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-slate-50 border border-slate-200 text-sky-800 shrink-0">
                    <MapPin className="w-4 h-4 text-sky-700" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">{CLINIC_INFO.address.street}</span>
                    <span className="text-slate-600 block">{CLINIC_INFO.address.suite}</span>
                    <span className="text-slate-500 block">
                      {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      ({CLINIC_INFO.address.crossStreet})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-slate-50 border border-slate-200 text-sky-800 shrink-0">
                    <Phone className="w-4 h-4 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Front Desk Phone</span>
                    <a href={`tel:${CLINIC_INFO.phoneCall}`} className="font-semibold text-slate-900 hover:text-sky-900">
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-slate-50 border border-slate-200 text-sky-800 shrink-0">
                    <Mail className="w-4 h-4 text-sky-700" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Direct Inquiries</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-slate-900 hover:text-sky-900">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2 rounded-md bg-slate-50 border border-slate-200 text-sky-800 shrink-0">
                    <Clock className="w-4 h-4 text-sky-700" />
                  </div>
                  <div className="w-full">
                    <span className="text-slate-500 block text-[11px] mb-1">Hours of Operation</span>
                    <div className="space-y-1">
                      {CLINIC_INFO.hours.map((h) => (
                        <div key={h.days} className="flex justify-between text-xs">
                          <span className="font-medium text-slate-700">{h.days}</span>
                          <span className="text-slate-500">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request an Appointment Instead</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-xs text-center animate-in fade-in-50 duration-200">
                <div className="w-12 h-12 bg-sky-50 text-sky-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-slate-900 font-medium">Message Received</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you for contacting SmileCraft Dental. Our front desk coordinator will review your note and respond via email or phone shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', service: 'General Dentistry', message: '' });
                    setBotField('');
                  }}
                  className="mt-6 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4"
                noValidate
              >
                {/* Hidden form identifier */}
                <input type="hidden" name="form-name" value="contact" />

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

                <div>
                  <h3 className="font-editorial text-2xl text-slate-900 font-medium">Send a Message</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Have questions about services, insurance, or clinic protocols? Leave your information below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      maxLength={80}
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                        errors.name ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      maxLength={20}
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(212) 555-0100"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                        errors.phone ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      maxLength={100}
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane.doe@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                        errors.email ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="contact-service"
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
                      <option value="General Question">General Practice Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Question <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our clinical or concierge team help you today?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`w-full px-3 py-2 text-xs rounded-md border bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-700 transition-colors ${
                      errors.message ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-[11px] text-rose-500 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Location & Map */}
      <LocationSection />

    </div>
  );
};
