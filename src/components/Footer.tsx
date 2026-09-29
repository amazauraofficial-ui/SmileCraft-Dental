import React from 'react';
import { PageRoute } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-editorial text-2xl text-white font-medium tracking-tight block">
              SmileCraft Dental
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Modern dentistry with a human approach. Dedicated to clinical precision, patient comfort, and long-term oral health on Madison Avenue, New York.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-sky-400 shrink-0" />
              <span>ADA Member Practice · Digital Low-Radiation Clinic</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav('book-appointment')}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Request an Appointment
              </button>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Our Practice
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('doctors')} className="hover:text-white transition-colors cursor-pointer">
                  Our Doctors
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Patient Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Core Services
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('dental-implants')} className="hover:text-white transition-colors cursor-pointer">
                  Dental Implants
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cosmetic-dentistry')} className="hover:text-white transition-colors cursor-pointer">
                  Cosmetic Dentistry & Veneers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('invisalign')} className="hover:text-white transition-colors cursor-pointer">
                  Invisalign Clear Aligners
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('emergency-dentistry')} className="hover:text-white transition-colors cursor-pointer text-amber-300">
                  Emergency Dentistry
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  General & Preventative Care
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white tracking-wider uppercase block">
              Clinic Location
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <span>
                  {CLINIC_INFO.address.street}, {CLINIC_INFO.address.suite}<br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneCall}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-300 font-medium">Mon–Thu:</span> 8am–6pm<br />
                  <span className="text-slate-300 font-medium">Fri:</span> 8am–4pm · <span className="text-slate-300 font-medium">Sat:</span> 9am–2pm
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4">
          <div className="p-3.5 rounded-md bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Healthcare Disclaimer & Demo Notice:</strong> {CLINIC_INFO.disclaimer}{' '}
            <span className="text-slate-400 block sm:inline sm:ml-1">
              SmileCraft Dental is a fictional dental practice created for professional web portfolio and UI/UX presentation purposes.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
            <div>
              © {new Date().getFullYear()} SmileCraft Dental. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <button onClick={() => handleNav('privacy-policy')} className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                Patient FAQ
              </button>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                Location &amp; Hours
              </button>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <button onClick={() => handleNav('book-appointment')} className="hover:text-white transition-colors cursor-pointer">
                Book Visit
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
