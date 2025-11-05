import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white shadow-sm">Fintech & eCommerce Growth</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Digital marketing that turns clicks into customers
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-2xl">
              We help modern finance and commerce brands scale with performance-driven campaigns, conversion-focused design, and ROI-first experimentation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#cta" className="inline-flex justify-center items-center rounded-lg bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">
                Get your free growth plan
              </a>
              <a href="#services" className="inline-flex justify-center items-center rounded-lg bg-white/80 px-5 py-3 text-slate-900 font-medium border border-slate-200 shadow-sm hover:bg-white transition">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=12" alt="client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=24" alt="client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=36" alt="client" />
              </div>
              <span>Trusted by 120+ growth teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
