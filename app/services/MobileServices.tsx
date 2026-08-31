'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <Link href="/" className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
          <span>
            RAJAT<span className="text-blue-600"> | TECH</span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl shadow-md transition-transform active:scale-95 z-50"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* PREMIUM FULL-SCREEN OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] bg-slate-900 text-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">
                Quick Navigation
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-blue-400"
                >
                  <span>⚡ Services</span>
                  <span>&rarr;</span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>🚀 Work / Projects</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/team"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>👥 Leadership</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>💎 Pricing</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30"
            >
              Let's Talk
            </Link>
          </div>

          <div className="text-center text-slate-500 text-[10px] font-mono pb-6 pt-4 border-t border-slate-800">
            RAJAT.AI Mobile Architecture
          </div>
        </div>
      )}

      {/* MOBILE SERVICES CONTENT */}
      <main className="flex-grow px-5 py-12">
        <div className="text-center mb-10 max-w-sm mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
            OUR EXPERTISE
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Engineering <span className="text-blue-600">Capabilities.</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            From web & mobile apps to Telegram bots, casino platforms, and AI pipelines.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg mb-4">🌐</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Web & Mobile Apps</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Next.js web apps and cross-platform Android & iOS applications built via Java/Kotlin.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-blue-500">▹</span> Next.js & React Web Apps</li>
              <li className="flex items-center gap-1.5"><span className="text-blue-500">▹</span> Android & iOS Apps</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg mb-4">🤖</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Telegram Bot Ecosystems</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Crypto signal bots, automated subscription handlers, and interactive Telegram mini-apps.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-indigo-500">▹</span> Signal Automation</li>
              <li className="flex items-center gap-1.5"><span className="text-indigo-500">▹</span> Mini-Apps & Webviews</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-lg mb-4">🎰</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Casino & Gaming Platforms</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Custom games like Mines and Aviator with master admin control panels and ledgers.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-amber-500">▹</span> Interactive Games (Mines, Crash)</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-500">▹</span> Master Admin Controls</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center text-lg mb-4">💳</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Payment Panels & Ledgers</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Multi-tier transaction dashboards and secure PostgreSQL reconciliation architectures.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-teal-500">▹</span> Multi-Tier Agent Dashboards</li>
              <li className="flex items-center gap-1.5"><span className="text-teal-500">▹</span> Secure PostgreSQL DB</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-lg mb-4">⚡</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">AI Data Operations</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Python automation pipelines, voice data collection, and large-scale deduplication.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-purple-500">▹</span> Python Automation Scripts</li>
              <li className="flex items-center gap-1.5"><span className="text-purple-500">▹</span> LLM Evaluation & Structuring</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-lg mb-4">🛠️</div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Utility & Health Tools</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Micro-optimized daily utility web tools and fitness tracking dashboards.
            </p>
            <ul className="space-y-1.5 text-[11px] font-bold text-slate-600">
              <li className="flex items-center gap-1.5"><span className="text-rose-500">▹</span> Health & Fitness Trackers</li>
              <li className="flex items-center gap-1.5"><span className="text-rose-500">▹</span> Instant Response Web Apps</li>
            </ul>
          </div>

        </div>
      </main>

      {/* CTA Footer */}
      <section className="bg-slate-50 border-y border-slate-100 py-12 px-6 text-center">
        <h2 className="text-xl font-black mb-3 text-slate-900">Ready to build your digital product?</h2>
        <p className="text-slate-500 text-xs mb-6 max-w-xs mx-auto">Get in touch to discuss your specific requirements.</p>
        <Link href="/pricing" className="inline-block px-6 py-3 text-xs font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
          View Our Pricing
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-6 text-center text-[10px] font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}