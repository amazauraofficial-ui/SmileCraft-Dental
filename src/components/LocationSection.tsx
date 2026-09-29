import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Navigation, Train, Clock, Phone } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=1250+Madison+Avenue+New+York+NY+10028`;

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider block mb-1">
            Upper East Side Clinic
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-medium">
            Conveniently Located on Madison Avenue
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            A serene, private dental sanctuary situated between 89th and 90th Streets in Manhattan.
          </p>
        </div>

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Clinic Details Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Physical Address
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{CLINIC_INFO.address.street}</p>
                    <p className="text-xs text-slate-600">{CLINIC_INFO.address.suite}</p>
                    <p className="text-xs text-slate-500">
                      {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip} ({CLINIC_INFO.address.crossStreet})
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Public Transit & Arrival
                </span>
                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-sky-700 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {CLINIC_INFO.transit} Nearby public parking garages available on 89th & 90th Streets.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Practice Hours
                </span>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {CLINIC_INFO.hours.map((h) => (
                    <div key={h.days} className="flex justify-between items-center py-0.5 border-b border-slate-50">
                      <span className="font-medium text-slate-700">{h.days}</span>
                      <span className="text-slate-500">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Transit Directions</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phoneCall}`}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 text-sky-700" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Interactive Styled Map Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs relative min-h-[360px] flex flex-col">
            
            {/* Map Header Overlay */}
            <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-slate-900">1250 Madison Avenue</span>
                <span className="text-slate-400">·</span>
                <span>Upper East Side, Manhattan</span>
              </div>
              <span className="text-[11px] text-slate-500">40.7828° N, 73.9575° W</span>
            </div>

            {/* Embedded Visual Map Preview (High Quality Styled Vector Map) */}
            <div className="relative flex-1 bg-[#EEF2F6] overflow-hidden flex items-center justify-center p-6">
              
              {/* Subtle Grid / Street Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Central Park Greenery Graphic Representation on West */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-emerald-100/70 border-r border-emerald-200/80 flex items-center justify-center">
                <span className="rotate-270 text-[11px] font-semibold text-emerald-800 tracking-widest uppercase">
                  Central Park
                </span>
              </div>

              {/* Fifth Avenue & Madison Avenue simulated street markers */}
              <div className="absolute left-32 top-0 bottom-0 w-10 border-x border-slate-300/80 bg-white/40 flex items-center justify-center">
                <span className="rotate-270 text-[10px] font-medium text-slate-500 tracking-wider">
                  Fifth Ave
                </span>
              </div>

              <div className="absolute left-56 top-0 bottom-0 w-12 border-x-2 border-slate-300 bg-white/70 flex items-center justify-center">
                <span className="rotate-270 text-[10px] font-semibold text-slate-700 tracking-wider">
                  Madison Ave
                </span>
              </div>

              {/* 89th & 90th Cross Streets */}
              <div className="absolute left-0 right-0 top-24 h-8 border-y border-slate-300/80 bg-white/40 flex items-center px-28">
                <span className="text-[10px] text-slate-500 font-medium">East 89th Street</span>
              </div>
              <div className="absolute left-0 right-0 bottom-24 h-8 border-y border-slate-300/80 bg-white/40 flex items-center px-28">
                <span className="text-[10px] text-slate-500 font-medium">East 90th Street</span>
              </div>

              {/* Pin Callout Marker */}
              <div className="relative z-10 bg-slate-900 text-white rounded-lg p-3.5 shadow-xl border border-slate-700 max-w-xs animate-in zoom-in-95 duration-200">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-full bg-sky-500/20 text-sky-400">
                    <MapPin className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-white">SmileCraft Dental</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">1250 Madison Ave (Suite 600)</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Elevator access to 6th floor</p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Open Today 8am–6pm
                  </span>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-sky-300 hover:text-sky-200 underline"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>

            </div>

            {/* Map Footer Bar */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span>Upper East Side Historic District · 3 mins from Guggenheim Museum</span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-800 hover:text-sky-950"
              >
                View Larger Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
