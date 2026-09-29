/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { DentalImplantsPage } from './pages/DentalImplantsPage';
import { CosmeticDentistryPage } from './pages/CosmeticDentistryPage';
import { InvisalignPage } from './pages/InvisalignPage';
import { EmergencyDentistryPage } from './pages/EmergencyDentistryPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CLINIC_INFO } from './data/clinicData';
import { Phone } from 'lucide-react';

const SITE_URL = (import.meta.env.VITE_SITE_URL as string) || 'https://smilecraftdental.netlify.app';

export default function App() {
  // Parse initial route from window.location.pathname
  const getRouteFromPath = (): PageRoute => {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    if (path === '' || path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path === '/services/dental-implants' || path === '/dental-implants') return 'dental-implants';
    if (path === '/services/cosmetic-dentistry' || path === '/cosmetic-dentistry') return 'cosmetic-dentistry';
    if (path === '/services/invisalign' || path === '/invisalign') return 'invisalign';
    if (path === '/services/emergency-dentistry' || path === '/emergency-dentistry') return 'emergency-dentistry';
    if (path === '/doctors' || path === '/team') return 'doctors';
    if (path === '/about') return 'about';
    if (path === '/reviews' || path === '/testimonials') return 'reviews';
    if (path === '/faq') return 'faq';
    if (path === '/contact') return 'contact';
    if (path === '/book-appointment' || path === '/book' || path === '/appointment') return 'book-appointment';
    if (path === '/privacy-policy' || path === '/privacy') return 'privacy-policy';
    if (path === '/404') return '404';
    return '404';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromPath);

  // Sync route with URL path
  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    let path = '/';
    if (route === 'services') path = '/services';
    else if (route === 'dental-implants') path = '/services/dental-implants';
    else if (route === 'cosmetic-dentistry') path = '/services/cosmetic-dentistry';
    else if (route === 'invisalign') path = '/services/invisalign';
    else if (route === 'emergency-dentistry') path = '/services/emergency-dentistry';
    else if (route === 'privacy-policy') path = '/privacy-policy';
    else if (route === '404') path = '/404';
    else if (route !== 'home') path = `/${route}`;

    try {
      window.history.pushState({ route }, '', path);
    } catch {
      // Handled gracefully in sandboxed or constrained frames
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getRouteFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title, meta description, and canonical URL dynamically
  useEffect(() => {
    let title = 'SmileCraft Dental | Modern Dental Care in New York';
    let description =
      'Modern dentistry, personalized treatment, and a caring team dedicated to helping you smile with confidence on Madison Avenue, New York.';
    let routePath = '/';

    switch (currentRoute) {
      case 'home':
        title = 'SmileCraft Dental | Modern Dental Care in New York';
        description =
          'SmileCraft Dental offers modern dentistry, dental implants, cosmetic dentistry, Invisalign, and emergency dental care on Madison Avenue, New York.';
        routePath = '/';
        break;
      case 'services':
        title = 'Dental Services & Treatments in New York | SmileCraft Dental';
        description =
          'Explore comprehensive dental care from routine hygiene to dental implants and Invisalign at SmileCraft Dental on Madison Avenue.';
        routePath = '/services';
        break;
      case 'dental-implants':
        title = 'Dental Implants in New York | SmileCraft Dental';
        description =
          'Restore your natural smile with modern biocompatible dental implants. Computer-guided 3D planning and custom ceramic crowns in Manhattan.';
        routePath = '/services/dental-implants';
        break;
      case 'cosmetic-dentistry':
        title = 'Cosmetic Dentistry in New York | SmileCraft Dental';
        description =
          'Bespoke porcelain veneers, in-office teeth whitening, and aesthetic smile design harmonized with your natural facial features.';
        routePath = '/services/cosmetic-dentistry';
        break;
      case 'invisalign':
        title = 'Invisalign in New York | SmileCraft Dental';
        description =
          'Discreet orthodontic alignment with clear Invisalign trays. 3D iTero optical scanning without messy impressions on Madison Avenue.';
        routePath = '/services/invisalign';
        break;
      case 'emergency-dentistry':
        title = 'Emergency Dentist in New York | SmileCraft Dental';
        description =
          'Same-day emergency dental relief for acute toothaches, fractured teeth, and trauma. Call our Madison Avenue clinic directly.';
        routePath = '/services/emergency-dentistry';
        break;
      case 'doctors':
        title = 'Our Dental Specialists | SmileCraft Dental New York';
        description =
          'Meet Dr. Sarah Mitchell, Dr. James Carter, and Dr. Emily Parker — Ivy League trained specialists providing gentle, patient-centered care.';
        routePath = '/doctors';
        break;
      case 'about':
        title = 'About Our Practice | SmileCraft Dental New York';
        description =
          'Modern dentistry with a human approach. Discover our serene Upper East Side practice, technology, and patient-first philosophy.';
        routePath = '/about';
        break;
      case 'reviews':
        title = 'Patient Reviews & Testimonials | SmileCraft Dental';
        description =
          'Read authentic reflections from patients on comfort, transparency, and clinical excellence at SmileCraft Dental.';
        routePath = '/reviews';
        break;
      case 'faq':
        title = 'Frequently Asked Questions | SmileCraft Dental';
        description =
          'Answers to common questions regarding dental implants, cosmetic dentistry, Invisalign, emergencies, and insurance billing.';
        routePath = '/faq';
        break;
      case 'contact':
        title = 'Contact & Clinic Location | SmileCraft Dental';
        description =
          'Visit our Madison Avenue dental office on the Upper East Side. Directions, subway access, phone, and direct appointment requests.';
        routePath = '/contact';
        break;
      case 'book-appointment':
        title = 'Request an Appointment | SmileCraft Dental';
        description =
          'Schedule your dental visit online. Choose your service, select a preferred time, and our concierge team will confirm your appointment.';
        routePath = '/book-appointment';
        break;
      case 'privacy-policy':
        title = 'Privacy Policy & Information Notice | SmileCraft Dental';
        description =
          'Learn about our information handling and digital privacy safeguards at SmileCraft Dental.';
        routePath = '/privacy-policy';
        break;
      case '404':
        title = 'Page Not Found | SmileCraft Dental';
        description = 'The requested dental page could not be found. Explore our services or return home.';
        routePath = '/404';
        break;
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `${SITE_URL}${routePath === '/' ? '' : routePath}`);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${SITE_URL}${routePath === '/' ? '' : routePath}`);
  }, [currentRoute]);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'dental-implants':
        return <DentalImplantsPage onNavigate={navigateTo} />;
      case 'cosmetic-dentistry':
        return <CosmeticDentistryPage onNavigate={navigateTo} />;
      case 'invisalign':
        return <InvisalignPage onNavigate={navigateTo} />;
      case 'emergency-dentistry':
        return <EmergencyDentistryPage onNavigate={navigateTo} />;
      case 'doctors':
        return <DoctorsPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'reviews':
        return <ReviewsPage onNavigate={navigateTo} />;
      case 'faq':
        return <FaqPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'book-appointment':
        return <BookAppointmentPage onNavigate={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case '404':
        return <NotFoundPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-sky-100 selection:text-sky-900">
      {/* Top Banner Notice for Emergency & Quick Contact */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
            <span className="hidden sm:inline">1250 Madison Ave (Upper East Side) · Open Mon–Sat</span>
            <span className="sm:hidden">1250 Madison Ave, NYC</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneCall}`}
              className="text-slate-200 hover:text-white flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <button
              onClick={() => navigateTo('book-appointment')}
              className="text-sky-400 hover:text-sky-300 cursor-pointer font-medium"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Active Page View */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
