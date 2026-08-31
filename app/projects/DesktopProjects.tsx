'use client';

import Link from 'next/link';

export default function DesktopProjects() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Minimal Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200/50">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-tight text-slate-500">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/projects" className="text-blue-600 font-bold">Work / Projects</Link>
          <Link href="/team" className="hover:text-blue-600 transition-colors">Leadership</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
        </div>
        <Link href="/#contact" className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md">
          Let's Talk
        </Link>
      </nav>

      {/* Page Header */}
      <header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
          OUR PORTFOLIO
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
          Systems Built for <span className="text-blue-600">Scale</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
          Explore our production-grade architecture. From automated trading bots to casino gaming portals, we deliver flawless execution for high-volume ecosystems.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: Crypto & Forex Signals Bot & Panel */}
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📈</div>
                <span className="px-3 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 rounded-full border border-indigo-200">Trading Automation</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">Telegram Crypto & Forex Signals Bot & Panel</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                High-performance automated Telegram bot integrated with a real-time web control panel. Delivers instant crypto and forex buy/sell signals, handles automated VIP user subscriptions, and tracks live trade execution accuracy.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Telegram Bot API</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Real-time WebSockets</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Python / Node.js</span>
            </div>
          </div>

          {/* Project 2: Casino Apps with Admin Portal */}
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🎰</div>
                <span className="px-3 py-1 text-xs font-bold text-amber-700 bg-amber-50 rounded-full border border-amber-200">Gaming & Automation</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">Automated Casino Apps & Admin Portal</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                End-to-end custom casino gaming platforms built with fully automated deposit/withdrawal mechanics, real-time user tracking, and a comprehensive master admin portal for complete backend control, financial logs, and house edge analytics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Full-Stack Automation</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Master Admin Portal</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Secure Ledger</span>
            </div>
          </div>

          {/* Project 3: We Pay */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💳</div>
                <span className="px-3 py-1 text-xs font-bold text-slate-500 bg-slate-100 rounded-full">FinTech</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">We Pay Payment Panel</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Enterprise-grade multi-tier agent transaction dashboard. Equipped with automated ledger reconciliation, high-frequency volume handling, and strict PostgreSQL database indexing for zero-drop settlements.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Next.js</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">PostgreSQL</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">E2E Encryption</span>
            </div>
          </div>

          {/* Project 4: Droxy Mod */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🎮</div>
                <span className="px-3 py-1 text-xs font-bold text-slate-500 bg-slate-100 rounded-full">Gaming Infrastructure</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">Droxy BGMI Mod & Server Freeze</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Complex network routing architecture designed for real-time packet manipulation. Includes custom server freeze gateway protocols and high-speed encrypted data tunneling for seamless performance.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">C++ / Java</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Network Routing</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Encrypted Gateway</span>
            </div>
          </div>

          {/* Project 5: AI Pipeline */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🎙️</div>
                <span className="px-3 py-1 text-xs font-bold text-slate-500 bg-slate-100 rounded-full">AI Operations</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">Voice & Media Processing Pipeline</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Automated large-scale data collection, deduplication, and transcription evaluation engine. Built to handle massive unstructured media assets for global AI model training.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Python</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Data Automation</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">SQL</span>
            </div>
          </div>

          {/* Project 6: Market Cap */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📈</div>
                <span className="px-3 py-1 text-xs font-bold text-slate-500 bg-slate-100 rounded-full">Mobile Data</span>
              </div>
              <h2 className="text-3xl font-black mb-4 text-slate-900">Market Cap & Currency Matrix</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                High-frequency rate monitoring application for global cryptocurrency and fiat markets. Features sub-second API polling and local SQLite caching for zero-latency data delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">Kotlin</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">REST API</span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">SQLite</span>
            </div>
          </div>

        </div>
      </main>

      {/* CTA Footer */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6">Have a complex technical requirement?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Our architecture is built to handle edge cases, high volume, and secure operations.</p>
        <Link href="/#contact" className="inline-block px-8 py-4 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg">
          Discuss Your Project
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT|TECH. All rights reserved.</p>
      </footer>
    </div>
  );
}