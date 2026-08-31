'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileTeam() {
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
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>⚡ Services</span>
                  <span className="text-blue-500">&rarr;</span>
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
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-blue-400"
                >
                  <span>👥 Leadership</span>
                  <span>&rarr;</span>
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

      {/* MOBILE TEAM CONTENT */}
      <main className="flex-grow px-5 py-12">
        <div className="text-center mb-10 max-w-sm mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
            CORE TEAM
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            The Minds Behind <span className="text-blue-600">The Code.</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Meet the engineering and operational leadership powering our infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/30">
              RS
            </div>
            <h2 className="text-xl font-black mb-1 text-slate-900">Rajat Singh</h2>
            <p className="text-blue-600 text-[10px] font-mono font-bold tracking-wider uppercase mb-4">Lead Architect</p>
            <p className="text-slate-500 leading-relaxed text-xs">
              Spearheads all core coding, system architecture, database indexing, and backend development with expertise in Next.js, Java, and encrypted network routing.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white font-black text-lg shadow-md shadow-slate-900/20">
              RC
            </div>
            <h2 className="text-xl font-black mb-1 text-slate-900">Richu Chalotra</h2>
            <p className="text-slate-500 text-[10px] font-mono font-bold tracking-wider uppercase mb-4">Operations Manager</p>
            <p className="text-slate-500 leading-relaxed text-xs">
              Ensures flawless execution across all client projects, managing team workflows, structural coordination, and administrative processes.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-teal-500/30">
              {'</>'}
            </div>
            <h2 className="text-xl font-black mb-1 text-slate-900">Elite Squad</h2>
            <p className="text-teal-600 text-[10px] font-mono font-bold tracking-wider uppercase mb-4">Core Engineering Unit</p>
            <p className="text-slate-500 leading-relaxed text-xs">
              A private unit of top-tier developers handling intense backend scaling, heavy AI dataset operations, and zero-latency gateway configurations.
            </p>
          </div>

        </div>
      </main>

      {/* Engineering Philosophy */}
      <section className="bg-slate-900 text-white py-14 px-4 text-center">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-black mb-8">Our Engineering Philosophy</h2>
          <div className="flex flex-col gap-6 text-left">
            <div>
              <div className="text-blue-500 text-lg mb-1 font-bold">01. Zero Compromise</div>
              <p className="text-slate-400 text-xs">Security and encryption are built into the foundation of our code, never as an afterthought.</p>
            </div>
            <div>
              <div className="text-blue-500 text-lg mb-1 font-bold">02. Absolute Scale</div>
              <p className="text-slate-400 text-xs">Every database schema and API route is optimized for high-volume, low-latency traffic.</p>
            </div>
            <div>
              <div className="text-blue-500 text-lg mb-1 font-bold">03. Flawless Execution</div>
              <p className="text-slate-400 text-xs">From UI design to server deployment, operational excellence drives our delivery process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono">
        © {new Date().getFullYear()} RAJAT|TECH. All rights reserved.
      </footer>
    </div>
  );
}