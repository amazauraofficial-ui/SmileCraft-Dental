import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services', hasDropdown: true },
    { label: 'About', route: 'about' },
    { label: 'Doctors', route: 'doctors' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Contact', route: 'contact' },
  ];

  const serviceSubItems: { label: string; route: PageRoute; desc: string }[] = [
    { label: 'All Services Overview', route: 'services', desc: 'Complete range of care' },
    { label: 'Dental Implants', route: 'dental-implants', desc: 'Permanent tooth restoration' },
    { label: 'Cosmetic Dentistry', route: 'cosmetic-dentistry', desc: 'Bespoke smile design' },
    { label: 'Invisalign Clear Aligners', route: 'invisalign', desc: 'Discreet orthodontic alignment' },
    { label: 'Emergency Dentistry', route: 'emergency-dentistry', desc: 'Same-day urgent triage' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Single text wordmark (Top Bar Contract: Single text element) */}
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
            >
              <span className="font-editorial text-2xl font-medium tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
                SmileCraft Dental
              </span>
            </button>

            {/* Zone 2: 4–6 Clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route || (item.hasDropdown && (
                  currentRoute === 'dental-implants' ||
                  currentRoute === 'cosmetic-dentistry' ||
                  currentRoute === 'invisalign' ||
                  currentRoute === 'emergency-dentistry'
                ));

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNav('services')}
                        className={`inline-flex items-center gap-1.5 py-1 transition-colors hover:text-slate-900 cursor-pointer ${
                          isActive ? 'text-sky-900 font-semibold border-b-2 border-sky-800' : ''
                        }`}
                        aria-expanded={servicesDropdownOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
                      </button>

                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-72 pt-2 bg-transparent z-50">
                          <div className="bg-white rounded-lg shadow-lg border border-slate-200/90 py-2.5 px-1 animate-in fade-in-50 duration-150">
                            {serviceSubItems.map((sub) => (
                              <button
                                key={sub.label}
                                onClick={() => handleNav(sub.route)}
                                className={`w-full text-left px-3.5 py-2.5 rounded-md text-xs hover:bg-slate-50 transition-colors cursor-pointer flex flex-col ${
                                  currentRoute === sub.route ? 'bg-sky-50/70 text-sky-900' : 'text-slate-700'
                                }`}
                              >
                                <span className="font-semibold text-slate-900">{sub.label}</span>
                                <span className="text-[11px] text-slate-500 mt-0.5">{sub.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.route)}
                    className={`py-1 transition-colors hover:text-slate-900 cursor-pointer ${
                      isActive ? 'text-sky-900 font-semibold border-b-2 border-sky-800' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1–2 Primary actions (Call + Book CTA) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneCall}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-900 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
                title="Call Front Desk"
              >
                <Phone className="w-3.5 h-3.5 text-sky-700" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => handleNav('book-appointment')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => handleNav('book-appointment')}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md whitespace-nowrap"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.route)}
                  className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentRoute === item.route ? 'bg-sky-50 text-sky-900 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <span className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Services</span>
              {serviceSubItems.slice(1).map((sub) => (
                <button
                  key={sub.label}
                  onClick={() => handleNav(sub.route)}
                  className={`w-full text-left px-3 py-1.5 text-xs rounded-md ${
                    currentRoute === sub.route ? 'text-sky-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC_INFO.phoneCall}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-md bg-slate-50 hover:bg-slate-100"
              >
                <Phone className="w-3.5 h-3.5 text-sky-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleNav('book-appointment')}
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-md text-center"
              >
                Request an Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
