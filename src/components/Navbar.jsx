import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400" />
            <span className="text-lg font-semibold tracking-tight text-slate-900">Flux Digital</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition">Services</a>
            <a href="#work" className="hover:text-slate-900 transition">Case Studies</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </nav>
          <div className="hidden sm:flex">
            <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-slate-800 transition">Get a Proposal</a>
          </div>
        </div>
      </div>
    </header>
  );
}
