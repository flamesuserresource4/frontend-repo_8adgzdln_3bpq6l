import React from 'react';

export default function CTA() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    alert(`Thanks! We\'ll reach out to ${email} with your growth plan.`);
    e.currentTarget.reset();
  }

  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-teal-50 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/20 to-sky-400/20 blur-2xl" />
          <div className="relative">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Ready to unlock your next growth curve?</h3>
              <p className="mt-3 text-slate-600">Get a free mini audit with 3 quick wins tailored to your funnel.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Your work email"
                className="w-full sm:flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800 transition">
                Get my plan
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
