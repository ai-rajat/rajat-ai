'use client';

import Link from 'next/link';

export default function DesktopHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* DESKTOP NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5">
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
        
        <a href="#contact" className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all shadow-lg">
          Work With Us
        </a>
      </nav>

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-8xl font-black tracking-tight mb-8 text-slate-900 leading-[1.05] max-w-5xl mx-auto">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> Digital Products.
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="px-8 py-3.5 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md">
            View Our Work
          </Link>
          <a href="#contact" className="px-8 py-3.5 text-sm font-bold bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-all">
            Start a Project
          </a>
        </div>
      </main>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted architecture powering</p>
          <div className="flex flex-wrap justify-center gap-12 text-2xl font-black text-slate-300">
            <span>WE PAY PANELS</span>
            <span>DROXY MODS</span>
            <span>AI PIPELINES</span>
            <span>SECURE GATEWAYS</span>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4 text-slate-900">Built for Performance. Engineered for Scale.</h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Whether you need the <strong>We Pay Payment Panel</strong>, automated <strong>Voice & Media Processing</strong>, or complex setups like the <strong>Droxy BGMI Mod & Server Freeze</strong> gateways, we deliver flawless execution.
            </p>
            <Link href="/projects" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2">
              See all projects and case studies &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">⚡</div><div className="font-bold text-slate-900">Zero Downtime</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">🛡️</div><div className="font-bold text-slate-900">E2E Encryption</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">🚀</div><div className="font-bold text-slate-900">Next.js & Java</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">📊</div><div className="font-bold text-slate-900">High Volume</div></div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black tracking-tight mb-4">Ready to scale your vision?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Let's discuss your next big project. Reach out to us through our secure official channels below.</p>
          <div className="grid grid-cols-4 gap-4">
            <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-blue-600 transition-all"><div className="text-2xl mb-1">💬</div><div className="font-bold text-sm">Telegram</div><div className="text-slate-400 text-xs mt-1">@airajat</div></a>
            <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-green-600 transition-all"><div className="text-2xl mb-1">📱</div><div className="font-bold text-sm">WhatsApp</div><div className="text-slate-400 text-xs mt-1">+91 60059 54388</div></a>
            <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800 p-6 rounded-2xl hover:bg-rose-600 transition-all"><div className="text-2xl mb-1">✉️</div><div className="font-bold text-sm">Email</div><div className="text-slate-400 text-xs mt-1">airajat.tech</div></a>
            <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-fuchsia-600 transition-all"><div className="text-2xl mb-1">📸</div><div className="font-bold text-sm">Instagram</div><div className="text-slate-400 text-xs mt-1">airajat.tech</div></a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT|TECH. All rights reserved.</p>
      </footer>
    </div>
  );
}