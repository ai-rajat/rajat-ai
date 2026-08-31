'use client';

import Link from 'next/link';

export default function DesktopTeam() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Minimal Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-blue-600"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-tight text-slate-500">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Work / Projects</Link>
          <Link href="/team" className="text-blue-600 font-bold">Leadership</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
        </div>
        <Link href="/#contact" className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md">
          Let's Talk
        </Link>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
          CORE TEAM
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
          The Minds Behind <span className="text-blue-600">The Code.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
          Driven by precision and scale. Meet the engineering and operational leadership powering RAJAT.AI's global digital infrastructure.
        </p>
      </header>

      {/* Leadership Profiles */}
      <main className="flex-grow max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Rajat Singh */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300">
            <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/30">
              RS
            </div>
            <h2 className="text-3xl font-black mb-1 text-slate-900">Rajat Singh</h2>
            <p className="text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-6">Lead Architect</p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Spearheads all core coding, system architecture, database indexing, and backend development. With deep expertise in Next.js, Java, and encrypted network routing, Rajat builds the high-frequency systems that power enterprise operations.
            </p>
          </div>

          {/* Richu Chalotra */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-400/30 transition-all duration-300">
            <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-slate-900/20">
              RC
            </div>
            <h2 className="text-3xl font-black mb-1 text-slate-900">Richu Chalotra</h2>
            <p className="text-slate-500 text-xs font-mono font-bold tracking-wider uppercase mb-6">Operations Manager</p>
            <p className="text-slate-500 leading-relaxed text-sm">
              Ensures flawless execution across all client projects. Richu manages team workflows, operational oversight, structural coordination, and administrative processes, ensuring that complex engineering tasks are delivered on time and at scale.
            </p>
          </div>

          {/* Anonymous High-Quality Team */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-500/30 transition-all duration-300">
            <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
              {'</>'}
            </div>
            <h2 className="text-3xl font-black mb-1 text-slate-900">Elite Squad</h2>
            <p className="text-teal-600 text-xs font-mono font-bold tracking-wider uppercase mb-6">Core Engineering Unit</p>
            <p className="text-slate-500 leading-relaxed text-sm">
              A highly vetted, private unit of top-tier developers and data specialists operating behind the scenes. This elite squad handles intense backend scaling, heavy AI dataset operations, and zero-latency gateway configurations.
            </p>
          </div>

        </div>
      </main>

      {/* Engineering Philosophy */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Our Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-blue-500 text-2xl mb-4">01</div>
              <h3 className="font-bold text-xl mb-2">Zero Compromise</h3>
              <p className="text-slate-400 text-sm">Security and encryption are built into the foundation of our code, never as an afterthought.</p>
            </div>
            <div>
              <div className="text-blue-500 text-2xl mb-4">02</div>
              <h3 className="font-bold text-xl mb-2">Absolute Scale</h3>
              <p className="text-slate-400 text-sm">Every database schema and API route is optimized for high-volume, low-latency traffic.</p>
            </div>
            <div>
              <div className="text-blue-500 text-2xl mb-4">03</div>
              <h3 className="font-bold text-xl mb-2">Flawless Execution</h3>
              <p className="text-slate-400 text-sm">From UI design to server deployment, operational excellence drives our delivery process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}