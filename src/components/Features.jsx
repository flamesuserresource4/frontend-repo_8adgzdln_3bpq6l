import React from 'react';
import { Rocket, BarChart3, Shield, Megaphone } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Full-funnel strategy',
    desc: 'From awareness to retention, we architect journeys that compound growth.'
  },
  {
    icon: BarChart3,
    title: 'Performance media',
    desc: 'Paid social and search managed for efficiency, scale, and clear ROI.'
  },
  {
    icon: Shield,
    title: 'Compliance-friendly',
    desc: 'Fintech-grade messaging frameworks that stay on brand and on policy.'
  },
  {
    icon: Megaphone,
    title: 'Conversion design',
    desc: 'Landing pages and CRO programs engineered to convert at every step.'
  }
];

export default function Features() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">A focused partner for modern brands in digital banking, payments, and ecommerce.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
