'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 w-full bg-white/95 border-b border-slate-200 shadow-sm">
        <div className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow">
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="bg-slate-900 text-white px-6 py-6 flex flex-col gap-4 fixed inset-x-0 top-[65px] z-40 shadow-2xl border-b border-slate-800">
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 py-1.5 border-b border-slate-800">⚡ Services</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 py-1.5 border-b border-slate-800">🚀 Work / Projects</Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 py-1.5 border-b border-slate-800">👥 Leadership</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-base font-bold text-slate-200 py-1.5 border-b border-slate-800">💎 Pricing</Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl mt-2">Work With Us</a>
        </div>
      )}

      <main className="flex-grow flex flex-col items-center justify-center pt-16 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-6 text-slate-900 leading-tight">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> Digital Products.
        </h1>
        <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <Link href="/projects" className="py-3.5 text-xs font-bold bg-blue-600 text-white rounded-xl shadow">View Our Work</Link>
          <a href="#contact" className="py-3.5 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-xl">Start a Project</a>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}