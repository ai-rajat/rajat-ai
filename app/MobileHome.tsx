'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      
      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md transition-transform active:scale-95"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="bg-slate-900 text-white px-6 py-6 flex flex-col gap-4 fixed inset-x-0 top-[57px] z-40 shadow-2xl border-b border-slate-800 animate-fadeIn">
          <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Quick Navigation</p>
          
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800 flex items-center justify-between">
            <span>⚡ Services</span>
            <span className="text-slate-600">&rarr;</span>
          </Link>
          
          <Link href="/projects" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800 flex items-center justify-between">
            <span>🚀 Work / Projects</span>
            <span className="text-slate-600">&rarr;</span>
          </Link>
          
          <Link href="/team" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800 flex items-center justify-between">
            <span>👥 Leadership</span>
            <span className="text-slate-600">&rarr;</span>
          </Link>
          
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800 flex items-center justify-between">
            <span>💎 Pricing</span>
            <span className="text-slate-600">&rarr;</span>
          </Link>
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl shadow-lg mt-2"
          >
            Work With Us
          </a>
        </div>
      )}

      {/* MOBILE HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-blue-50/60 rounded-full blur-[80px] -z-10"></div>

        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        
        <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> Digital Products.
        </h1>
        
        <p className="text-xs text-slate-500 max-w-sm mx-auto mb-8 font-medium leading-relaxed">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems.
        </p>
        
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Link
            href="/projects"
            className="w-full py-3.5 text-xs font-bold bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all text-center"
          >
            View Our Work
          </Link>
          <a
            href="#contact"
            className="w-full py-3.5 text-xs font-bold bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all text-center"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* MOBILE TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8 px-4 text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted architecture powering</p>
        <div className="grid grid-cols-2 gap-3 text-xs font-black text-slate-400">
          <div className="bg-white p-3 rounded-xl border border-slate-100">WE PAY PANELS</div>
          <div className="bg-white p-3 rounded-xl border border-slate-100">DROXY MODS</div>
          <div className="bg-white p-3 rounded-xl border border-slate-100">AI PIPELINES</div>
          <div className="bg-white p-3 rounded-xl border border-slate-100">SECURE GATEWAYS</div>
        </div>
      </section>

      {/* MOBILE CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-black tracking-tight mb-3">Ready to scale your vision?</h2>
        <p className="text-slate-400 text-xs mb-8 max-w-xs mx-auto">
          Let's discuss your next big project. Reach out through our official channels.
        </p>
        
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 rounded-xl hover:bg-blue-600 transition-all text-left">
            <div className="text-xl mb-1">💬</div>
            <div className="font-bold text-xs">Telegram</div>
            <div className="text-slate-400 text-[10px]">@airajat</div>
          </a>
          
          <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 rounded-xl hover:bg-green-600 transition-all text-left">
            <div className="text-xl mb-1">📱</div>
            <div className="font-bold text-xs">WhatsApp</div>
            <div className="text-slate-400 text-[10px]">+91 60059 54388</div>
          </a>
          
          <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800 p-4 rounded-xl hover:bg-rose-600 transition-all text-left">
            <div className="text-xl mb-1">✉️</div>
            <div className="font-bold text-xs">Email</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>
          
          <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 rounded-xl hover:bg-fuchsia-600 transition-all text-left">
            <div className="text-xl mb-1">📸</div>
            <div className="font-bold text-xs">Instagram</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>

    </div>
  );
}