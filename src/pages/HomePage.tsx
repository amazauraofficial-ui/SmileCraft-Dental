import React from 'react';
import { PageRoute } from '../types';
import { CLINIC_INFO, SERVICES, DOCTORS, TESTIMONIALS, FAQS } from '../data/clinicData';
import { ASSETS } from '../data/assets';
import { TrustIndicators } from '../components/TrustIndicators';
import { LocationSection } from '../components/LocationSection';
import {
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  AlertCircle,
  CheckCircle2,
  HeartPulse,
  Star,
  ChevronRight,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-800" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-800" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-amber-700" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-sky-800" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-sky-800" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-800" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-sky-50/40 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Unboxed Location/Trust Marker (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="text-sky-900 font-semibold">Madison Avenue, New York</span>
                <span aria-hidden="true">·</span>
                <span>Upper East Side Practice</span>
                <span aria-hidden="true">·</span>
                <span>Welcoming New Patients</span>
              </div>

              {/* Main H1 Title (Editorial, Balanced) */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-medium tracking-tight leading-[1.12]">
                A Healthier Smile Starts With Exceptional Care.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Modern dentistry, personalized treatment, and a caring team dedicated to helping you smile with confidence. Experience gentle, unhurried care in a tranquil Manhattan setting.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-md hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                  Experienced Dental Team
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                  Modern 3D Diagnostics
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                  Patient-Centered Care
                </span>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-16/11 sm:aspect-16/10">
                <img
                  src={ASSETS.hero}
                  alt="Patient smiling with caring dentist in modern bright dental clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Quiet Floating Clinical Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md rounded-lg p-3.5 border border-slate-200/90 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center shrink-0 border border-sky-100">
                      <ShieldCheck className="w-4 h-4 text-sky-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Dr. Sarah Mitchell, DDS</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Columbia Dental Medicine · 14+ Years Clinical Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS STRIP */}
      <TrustIndicators />

      {/* 3. INTRODUCTION / ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-md aspect-16/10 bg-slate-100">
                <img
                  src={ASSETS.clinicInterior}
                  alt="Modern architectural dental operatory with natural daylight on Madison Avenue"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block">
                The SmileCraft Difference
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium tracking-tight">
                Dentistry Designed Around You
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe that visiting the dentist should feel calming, transparent, and respectful of your time. Our Madison Avenue practice combines advanced dental science with thoughtful amenities, providing a peaceful environment where you are fully heard.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Whether you visit for a gentle routine hygiene examination, a comprehensive implant restoration, or bespoke cosmetic enhancements, our clinical team focuses on long-term tooth preservation and aesthetic natural balance.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-900 hover:text-sky-950 py-2 border-b-2 border-sky-800 transition-all cursor-pointer"
                >
                  <span>Learn More About Our Philosophy & Clinic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES SHOWCASE */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
                Clinical Services
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
                Complete Dental Care, From Routine to Transformative
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Each treatment plan is customized to your unique anatomical goals, comfort requirements, and lifestyle.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-sky-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>View All Services</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-sky-900 group-hover:bg-sky-50 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-medium text-slate-900 mb-2 group-hover:text-sky-950 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-[11px] text-slate-500">
                    {service.keyBenefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-700 font-bold shrink-0">·</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  {service.route ? (
                    <button
                      onClick={() => service.route && onNavigate(service.route)}
                      className="text-xs font-semibold text-sky-900 hover:text-sky-950 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  <button
                    onClick={() => onNavigate('book-appointment')}
                    className="text-[11px] font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DOCTORS SPOTLIGHT */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Experienced Clinicians
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              Care Guided by Precision & Empathy
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our multidisciplinary team of board-certified specialists brings extensive Ivy League training and compassionate clinical mastery to every appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 bg-slate-100 overflow-hidden relative">
                    <img
                      src={doc.image}
                      alt={`${doc.name}, ${doc.role}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-editorial text-xl font-medium text-slate-900">{doc.name}</h3>
                      <span className="text-[11px] font-mono text-slate-500">{doc.credentials}</span>
                    </div>
                    <p className="text-xs font-medium text-sky-900 mb-3">{doc.role}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{doc.bio}</p>
                    
                    <div className="space-y-1 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700 block">Focus Areas:</span>
                      <p>{doc.specialties.slice(0, 2).join(' · ')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('doctors')}
                    className="text-xs font-semibold text-slate-800 hover:text-sky-900 cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Full Biography</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate('book-appointment')}
                    className="text-xs font-semibold text-sky-900 hover:text-sky-950 cursor-pointer"
                  >
                    Consult
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS / REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                Patient Feedback
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-white font-medium">
                Reflections on Comfort & Clinical Quality
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Authentic perspectives on how personalized care transforms the dental experience.
              </p>
            </div>

            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Read All Patient Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/80 border border-slate-700/70 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.author}</span>
                    <span className="text-[11px] text-sky-300">{item.treatment}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{item.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
              Common Questions
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
              Everything You Need to Know
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Answers regarding your first visit, insurance, treatments, and appointments.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="border border-slate-200/90 rounded-lg p-5 bg-slate-50/40 hover:bg-slate-50 transition-colors"
              >
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>Explore Complete FAQ Knowledge Base</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <LocationSection />

      {/* 9. APPOINTMENT BANNER CTA */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Begin Your Smile Journey
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-medium mb-4">
            Schedule Your Comprehensive Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Experience modern, gentle dental care on Madison Avenue. Reserve your appointment online or contact our front desk directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('book-appointment')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment Online</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneCall}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold text-white bg-slate-800 border border-slate-700 rounded-md hover:bg-slate-750 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call +1 (212) 555-0188</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
