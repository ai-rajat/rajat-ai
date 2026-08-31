'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* ==================== DESKTOP NAVBAR (Only visible on md and up) ==================== */}
      <nav className="hidden md:flex sticky top-0 z-50 items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5 cursor-pointer">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </div>
        
        <div className="flex gap-10 text-sm font-bold tracking-tight text-slate-500">
          <Link href="/services" className="relative group hover:text-slate-900 transition-colors">
            Services
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/projects" className="relative group hover:text-slate-900 transition-colors">
            Work / Projects
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/team" className="relative group hover:text-slate-900 transition-colors">
            Leadership
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/pricing" className="relative group hover:text-slate-900 transition-colors">
            Pricing
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <a
          href="#contact"
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-0.5"
        >
          Work With Us
        </a>
      </nav>

      {/* ==================== MOBILE NAVBAR (Only visible on small screens) ==================== */}
      <nav className="flex md:hidden sticky top-0 z-50 items-center justify-between px-4 py-3.5 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* Mobile Custom Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 text-white px-6 py-5 flex flex-col gap-4 fixed inset-x-0 top-[57px] z-40 shadow-2xl border-b border-slate-800">
          <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Navigation Menu</p>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 hover:text-blue-400 py-1 border-b border-slate-800">
            ⚡ Services
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 hover:text-blue-400 py-1 border-b border-slate-800">
            🚀 Work / Projects
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 hover:text-blue-400 py-1 border-b border-slate-800">
            👥 Leadership
          </Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 hover:text-blue-400 py-1 border-b border-slate-800">
            💎 Pricing
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

      {/* ==================== HERO SECTION ==================== */}
      <main className="flex-grow flex flex-col items-center justify-center pt-12 sm:pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900 leading-tight">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> <br className="hidden sm:inline" /> Digital Products.
        </h1>
        
        <p className="text-sm sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-8 sm:mb-12 font-medium leading-relaxed">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems for global clients.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/projects"
            className="px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md text-center"
          >
            View Our Work
          </Link>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-bold bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-all text-center"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* ==================== TRUST BANNER ==================== */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted architecture powering</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-base sm:text-2xl font-black text-slate-300">
            <span>WE PAY PANELS</span>
            <span>DROXY MODS</span>
            <span>AI PIPELINES</span>
            <span>SECURE GATEWAYS</span>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-slate-900">Built for Performance. Engineered for Scale.</h2>
            <p className="text-slate-500 text-sm sm:text-lg mb-6 leading-relaxed">
              Whether you need the <strong>We Pay Payment Panel</strong>, automated <strong>Voice & Media Processing</strong>, or complex setups like the <strong>Droxy BGMI Mod & Server Freeze</strong> gateways, we deliver flawless execution.
            </p>
            <Link href="/projects" className="text-blue-600 font-bold hover:text-blue-700 text-sm sm:text-base flex items-center gap-2">
              See all projects and case studies &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 text-2xl mb-2">⚡</div>
              <div className="font-bold text-slate-900 text-xs sm:text-base">Zero Downtime</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 text-2xl mb-2">🛡️</div>
              <div className="font-bold text-slate-900 text-xs sm:text-base">E2E Encryption</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 text-2xl mb-2">🚀</div>
              <div className="font-bold text-slate-900 text-xs sm:text-base">Next.js & Java</div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-blue-600 text-2xl mb-2">📊</div>
              <div className="font-bold text-slate-900 text-xs sm:text-base">High Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Ready to scale your vision?</h2>
          <p className="text-slate-400 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your next big project. Reach out to us through our secure official channels below.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 sm:p-6 rounded-2xl hover:bg-blue-600 transition-all">
              <div className="text-2xl mb-1">💬</div>
              <div className="font-bold text-xs sm:text-sm">Telegram</div>
              <div className="text-slate-400 text-[10px] mt-0.5">@airajat</div>
            </a>
            
            <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 sm:p-6 rounded-2xl hover:bg-green-600 transition-all">
              <div className="text-2xl mb-1">📱</div>
              <div className="font-bold text-xs sm:text-sm">WhatsApp</div>
              <div className="text-slate-400 text-[10px] mt-0.5">+91 60059 54388</div>
            </a>
            
            <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800 p-4 sm:p-6 rounded-2xl hover:bg-rose-600 transition-all">
              <div className="text-2xl mb-1">✉️</div>
              <div className="font-bold text-xs sm:text-sm">Email</div>
              <div className="text-slate-400 text-[10px] mt-0.5">airajat.tech</div>
            </a>
            
            <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-4 sm:p-6 rounded-2xl hover:bg-fuchsia-600 transition-all">
              <div className="text-2xl mb-1">📸</div>
              <div className="font-bold text-xs sm:text-sm">Instagram</div>
              <div className="text-slate-400 text-[10px] mt-0.5">airajat.tech</div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[11px] font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>

    </div>
  );
}