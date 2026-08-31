'use client';

import Link from 'next/link';

export default function DesktopServices() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Minimal Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-tight text-slate-500">
          <Link href="/services" className="text-blue-600 font-bold">Services</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Work / Projects</Link>
          <Link href="/team" className="hover:text-blue-600 transition-colors">Leadership</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
        </div>
        <Link href="/#contact" className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md">
          Let's Talk
        </Link>
      </nav>

      {/* Services Header */}
      <header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
          OUR EXPERTISE
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
          Engineering <span className="text-blue-600">Capabilities.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
          From full-stack web and cross-platform mobile apps to Telegram bot ecosystems, custom casino games, and high-frequency systems. Explore our complete service verticals.
        </p>
      </header>

      {/* Services Grid (6 Comprehensive Boxes) */}
      <main className="flex-grow max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1: Custom Web & Mobile Apps */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">Web & Mobile App Development</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Full-scale web development using Next.js, along with robust Android & iOS cross-platform mobile apps built via Java/Kotlin. We ensure lightning-fast performance and ultra-responsive layouts.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-blue-500 w-3">▹</span> Next.js & React Web Apps</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 w-3">▹</span> Android & iOS Mobile Apps</li>
              <li className="flex items-center gap-2"><span className="text-blue-500 w-3">▹</span> High-Frequency Caching & APIs</li>
            </ul>
          </div>

          {/* Service 2: Telegram Bots & Mini Apps */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🤖
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">Telegram Bot Ecosystems</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Development of high-performance Telegram bots of any complexity—including crypto/forex trading signal bots, automated subscription handlers, and interactive mini-apps.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-indigo-500 w-3">▹</span> Crypto & Forex Signal Automation</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500 w-3">▹</span> Telegram Mini-Apps & Webviews</li>
              <li className="flex items-center gap-2"><span className="text-indigo-500 w-3">▹</span> Automated Payment & Membership</li>
            </ul>
          </div>

          {/* Service 3: Casino & Gaming Platforms */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🎰
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">Casino Games & Admin Portals</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Custom-built casino platforms featuring games like Mines, Aviator, and custom slots, complete with automated deposit/withdrawal mechanics and full master admin control dashboards.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-amber-500 w-3">▹</span> Interactive Games (Mines, Crash)</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 w-3">▹</span> Master Admin Backend Control</li>
              <li className="flex items-center gap-2"><span className="text-amber-500 w-3">▹</span> Automated Balance & Ledgers</li>
            </ul>
          </div>

          {/* Service 4: Payment Panels & Gateways */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                💳
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">Payment Panels & Ledgers</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Secure multi-tier agent transaction dashboards, escrow systems, and automated reconciliation panels built with strict database indexing and cryptographic accuracy.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-teal-500 w-3">▹</span> Multi-Tier Agent Dashboards</li>
              <li className="flex items-center gap-2"><span className="text-teal-500 w-3">▹</span> Automated Ledger Reconciliation</li>
              <li className="flex items-center gap-2"><span className="text-teal-500 w-3">▹</span> Secure PostgreSQL Architectures</li>
            </ul>
          </div>

          {/* Service 5: AI Data Operations */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">AI Data Operations & Pipelines</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Automated Python data pipelines handling massive datasets, voice/media collection, deduplication, and transcription evaluations for training global AI models.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-purple-500 w-3">▹</span> Python Automation Scripts</li>
              <li className="flex items-center gap-2"><span className="text-purple-500 w-3">▹</span> Large-Scale Data Deduplication</li>
              <li className="flex items-center gap-2"><span className="text-purple-500 w-3">▹</span> LLM Evaluation & Structuring</li>
            </ul>
          </div>

          {/* Service 6: Daily Utility & Health Tools */}
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h2 className="text-2xl font-black mb-4 text-slate-900">Utility & Health Web Tools</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Fast, micro-optimized daily utility web tools ranging from health & fitness tracking dashboards to instant conversion calculators built for seamless user experience.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li className="flex items-center gap-2"><span className="text-rose-500 w-3">▹</span> Health & Fitness Trackers</li>
              <li className="flex items-center gap-2"><span className="text-rose-500 w-3">▹</span> High-Speed Utility Web Apps</li>
              <li className="flex items-center gap-2"><span className="text-rose-500 w-3">▹</span> Clean UI/UX & Instant Response</li>
            </ul>
          </div>

        </div>
      </main>

      {/* CTA Footer */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-black mb-6 text-slate-900">Ready to build your digital product?</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">Get in touch to discuss your specific requirements and custom development scope.</p>
        <Link href="/pricing" className="inline-block px-8 py-4 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
          View Our Pricing
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-8 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}