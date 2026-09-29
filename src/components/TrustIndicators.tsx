import React from 'react';
import { Award, Cpu, HeartHandshake, Clock4 } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: 'Experienced Dental Team',
      desc: 'Columbia & Harvard trained specialists with 14+ years in Manhattan.',
    },
    {
      icon: Cpu,
      title: 'Modern Digital Diagnostics',
      desc: 'Low-radiation 3D CBCT scans & optical iTero digital impressions.',
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Centered Comfort',
      desc: 'Calm, gentle treatments designed to alleviate dental anxiety.',
    },
    {
      icon: Clock4,
      title: 'Reserved Emergency Time',
      desc: 'Dedicated daily triage slots for same-day acute dental relief.',
    },
  ];

  return (
    <div className="border-y border-slate-200/80 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-slate-50 border border-slate-200/60 text-sky-900 shrink-0">
                  <Icon className="w-5 h-5 text-sky-800" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
