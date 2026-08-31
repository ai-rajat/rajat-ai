'use client';

import Link from 'next/link';

export default function DesktopHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
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

      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h1 className="text-8xl font-black tracking-tight mb-8 text-slate-900 leading-[1.05] max-w-5xl mx-auto">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> Digital Products.
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems.
        </p>
      </main>
    </div>
  );
}