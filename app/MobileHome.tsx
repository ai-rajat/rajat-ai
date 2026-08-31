'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">

          <div className="flex items-center gap-2 text-[17px] font-black tracking-tight">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
            <span>
              RAJAT<span className="text-blue-600"> | TECH</span>
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-lg"
          >
            {isOpen ? 'Close ✕' : 'Menu ☰'}
          </button>

        </div>
      </nav>

      {/* MENU */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[58px] z-40 bg-slate-900 text-white px-5 py-5 shadow-2xl">

          <p className="text-[9px] font-bold tracking-widest text-blue-400 uppercase mb-3">
            Quick Navigation
          </p>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="flex justify-between py-3 border-b border-slate-800 text-sm font-bold"
          >
            <span>⚡ Services</span>
            <span>→</span>
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="flex justify-between py-3 border-b border-slate-800 text-sm font-bold"
          >
            <span>🚀 Work / Projects</span>
            <span>→</span>
          </Link>

          <Link
            href="/team"
            onClick={() => setIsOpen(false)}
            className="flex justify-between py-3 border-b border-slate-800 text-sm font-bold"
          >
            <span>👥 Leadership</span>
            <span>→</span>
          </Link>

          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="flex justify-between py-3 border-b border-slate-800 text-sm font-bold"
          >
            <span>💎 Pricing</span>
            <span>→</span>
          </Link>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 py-3 bg-blue-600 rounded-lg text-xs font-bold"
          >
            WORK WITH US
          </a>
        </div>
      )}

      {/* HERO */}
      <main className="px-5 pt-16 pb-14 text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-[9px] font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
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

        <div className="flex flex-col gap-3 mt-7 mx-auto max-w-[330px]">

          <Link
            href="/projects"
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-[13px] font-bold shadow-md text-center"
          >
            View Our Work
          </Link>

          <a
            href="#contact"
            className="w-full py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-[13px] font-bold text-center"
          >
            Start a Project
          </a>

        </div>
      </main>

      {/* TRUST */}
      <section className="border-y border-slate-100 bg-slate-50 py-8 px-4 text-center">

        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Trusted architecture powering
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white p-3 rounded-lg border border-slate-100 text-[10px] font-black text-slate-400">
            WE PAY PANELS
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-100 text-[10px] font-black text-slate-400">
            DROXY MODS
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-100 text-[10px] font-black text-slate-400">
            AI PIPELINES
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-100 text-[10px] font-black text-slate-400">
            SECURE GATEWAYS
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-slate-900 text-white py-12 px-4 text-center"
      >
        <h2 className="text-[25px] leading-tight font-black mb-3">
          Ready to scale your vision?
        </h2>

        <p className="text-slate-400 text-[12px] leading-5 mb-7 max-w-[300px] mx-auto">
          Let's discuss your next big project. Reach out through our official channels.
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-[350px] mx-auto">

          <a
            href="https://t.me/airajat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-4 rounded-xl text-left"
          >
            <div className="text-xl mb-1">💬</div>
            <div className="font-bold text-xs">Telegram</div>
            <div className="text-slate-400 text-[10px]">@airajat</div>
          </a>

          <a
            href="https://wa.me/916005954388"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-4 rounded-xl text-left"
          >
            <div className="text-xl mb-1">📱</div>
            <div className="font-bold text-xs">WhatsApp</div>
            <div className="text-slate-400 text-[10px]">+91 60059 54388</div>
          </a>

          <a
            href="mailto:airajat.tech@gmail.com"
            className="bg-slate-800 p-4 rounded-xl text-left"
          >
            <div className="text-xl mb-1">✉️</div>
            <div className="font-bold text-xs">Email</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>

          <a
            href="https://instagram.com/airajat.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-4 rounded-xl text-left"
          >
            <div className="text-xl mb-1">📸</div>
            <div className="font-bold text-xs">Instagram</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>

        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-5 text-center text-[9px] font-mono">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>

    </div>
  );
}