'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
          <span>
            RAJAT<span className="text-blue-600"> | TECH</span>
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl shadow-md transition-transform active:scale-95 z-50"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* PREMIUM FULL-SCREEN OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-[58px] bg-slate-900 text-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">
                Quick Navigation
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  <span>⚡ Services</span>
                  <span className="text-blue-500 font-normal">&rarr;</span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  <span>🚀 Work / Projects</span>
                  <span className="text-blue-500 font-normal">&rarr;</span>
                </Link>

                <Link
                  href="/team"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  <span>👥 Leadership</span>
                  <span className="text-blue-500 font-normal">&rarr;</span>
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  <span>💎 Pricing</span>
                  <span className="text-blue-500 font-normal">&rarr;</span>
                </Link>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700"
            >
              Work With Us
            </a>
          </div>

          <div className="text-center text-slate-500 text-[10px] font-mono pb-6 pt-4 border-t border-slate-800/80">
            RAJAT.AI Mobile Architecture
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center px-5 pt-16 pb-14 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50/60 rounded-full blur-[90px] -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[9px] font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>

        <h1 className="mx-auto max-w-[340px] text-[32px] leading-[1.08] font-black tracking-[-1.5px] text-slate-900">
          We Build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            High-Scale
          </span>{' '}
          Digital Products.
        </h1>

        <p className="mx-auto mt-5 max-w-[330px] text-[13px] leading-6 text-slate-500 font-medium">
          From complex payment panels to real-time AI processing pipelines.
          We engineer secure, fast, and scalable ecosystems.
        </p>

        <div className="flex flex-col gap-3 mt-7 mx-auto max-w-[330px] w-full">
          <Link
            href="/projects"
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-[13px] font-bold shadow-md shadow-blue-600/20 text-center transition-all hover:bg-blue-700"
          >
            View Our Work
          </Link>

          <a
            href="#contact"
            className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-[13px] font-bold text-center transition-all hover:bg-slate-50"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-8 px-4 text-center">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Trusted architecture powering
        </p>

        <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">
            WE PAY PANELS
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">
            DROXY MODS
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">
            AI PIPELINES
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-[10px] font-black text-slate-400">
            SECURE GATEWAYS
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-14 px-4 text-center">
        <h2 className="text-[25px] leading-tight font-black mb-3">
          Ready to scale your vision?
        </h2>

        <p className="text-slate-400 text-[12px] leading-5 mb-8 max-w-[300px] mx-auto">
          Let's discuss your next big project. Reach out through our official channels.
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-[350px] mx-auto">
          <a
            href="https://t.me/airajat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-blue-600 transition-all group"
          >
            <div className="text-xl mb-1">💬</div>
            <div className="font-bold text-xs text-white">Telegram</div>
            <div className="text-slate-400 text-[10px] group-hover:text-blue-100">@airajat</div>
          </a>

          <a
            href="https://wa.me/916005954388"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-green-600 transition-all group"
          >
            <div className="text-xl mb-1">📱</div>
            <div className="font-bold text-xs text-white">WhatsApp</div>
            <div className="text-slate-400 text-[10px] group-hover:text-green-100">+91 60059 54388</div>
          </a>

          <a
            href="mailto:airajat.tech@gmail.com"
            className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-rose-600 transition-all group"
          >
            <div className="text-xl mb-1">✉️</div>
            <div className="font-bold text-xs text-white">Email</div>
            <div className="text-slate-400 text-[10px] group-hover:text-rose-100">airajat.tech</div>
          </a>

          <a
            href="https://instagram.com/airajat.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-fuchsia-600 transition-all group"
          >
            <div className="text-xl mb-1">📸</div>
            <div className="font-bold text-xs text-white">Instagram</div>
            <div className="text-slate-400 text-[10px] group-hover:text-fuchsia-100">airajat.tech</div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[9px] font-mono">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>

    </div>
  );
}