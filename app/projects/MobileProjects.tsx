'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileProjects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-slate-50/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
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
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>⚡ Services</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-blue-400"
                >
                  <span>🚀 Work / Projects</span>
                  <span>&rarr;</span>
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

      {/* MOBILE PROJECTS CONTENT */}
      <main className="flex-grow px-5 py-12">
        <div className="text-center mb-10 max-w-sm mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
            OUR PORTFOLIO
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Systems Built for <span className="text-blue-600">Scale</span>.
          </h1>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Explore our production-grade architecture for high-volume ecosystems.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg">📈</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-indigo-700 bg-indigo-50 rounded-full border border-indigo-200">Trading</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Telegram Crypto & Forex Bot</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Automated bot with real-time web control panel for instant signals and subscription tracking.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Bot API</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">WebSockets</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg">🎰</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-amber-700 bg-amber-50 rounded-full border border-amber-200">Gaming</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Automated Casino Apps</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              End-to-end custom casino platform with deposit/withdrawal mechanics and master admin portal.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Admin Portal</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Secure Ledger</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">💳</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 rounded-full">FinTech</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">We Pay Payment Panel</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Multi-tier agent transaction dashboard with automated ledger reconciliation and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Next.js</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">PostgreSQL</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-lg">🎮</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 rounded-full">Infrastructure</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Droxy BGMI Mod & Freeze</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Complex network routing architecture for real-time packet manipulation and tunneling.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">C++ / Java</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Routing</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-lg">🎙️</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 rounded-full">AI Ops</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Voice & Media Pipeline</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Automated data collection and transcription evaluation engine for global AI model training.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Python</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Automation</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">📈</div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 rounded-full">Mobile Data</span>
            </div>
            <h2 className="text-lg font-black mb-2 text-slate-900">Market Cap Matrix</h2>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              High-frequency rate monitoring application with sub-second API polling and local caching.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400">
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">Kotlin</span>
              <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">SQLite</span>
            </div>
          </div>

        </div>
      </main>

      {/* CTA Footer */}
      <section className="bg-slate-900 text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-black mb-3">Have a complex requirement?</h2>
        <p className="text-slate-400 text-xs mb-6 max-w-xs mx-auto">Our architecture handles edge cases, high volume, and secure operations.</p>
        <Link href="/#contact" className="inline-block px-6 py-3 text-xs font-bold bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg">
          Discuss Your Project
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>
    </div>
  );
}