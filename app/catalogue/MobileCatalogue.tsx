'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileCatalogue() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <Link href="/" className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl shadow-md transition-transform active:scale-95 z-50"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] bg-slate-900 text-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Link href="/services" onClick={() => setIsOpen(false)} className="py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">Services</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">Work / Projects</Link>
              <Link href="/team" onClick={() => setIsOpen(false)} className="py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">Leadership</Link>
              <Link href="/pricing" onClick={() => setIsOpen(false)} className="py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">Pricing</Link>
              <Link href="/catalogue" onClick={() => setIsOpen(false)} className="py-3.5 border-b border-slate-800 text-base font-bold text-blue-400">Catalogue</Link>
            </div>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-4 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl">
              Let's Talk
            </Link>
          </div>
          <div className="text-center text-slate-500 text-[10px] font-mono pb-6 pt-4 border-t border-slate-800">
            RAJAT.AI Mobile Architecture
          </div>
        </div>
      )}

      {/* Mobile Catalogue Content */}
      <main className="flex-grow px-5 py-12 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
          PRODUCT CATALOGUE
        </div>
        <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900">
          Enterprise <span className="text-blue-600">Catalogue.</span>
        </h1>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          [ Mobile catalogue view placeholder ]
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>
    </div>
  );
}