'use client';

import Link from 'next/link';

export default function DesktopTeam() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Minimal Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-tight text-slate-500">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Work / Projects</Link>
          <Link href="/catalogue" className="hover:text-blue-600 transition-colors">Catalogue</Link>
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
          CORE TEAM & LEADERSHIP
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.05]">
          The Minds Behind <span className="text-blue-600">The Code.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
          Driven by precision and scale. Meet the engineering and operational leadership powering RAJAT.TECH's global digital infrastructure and enterprise software ecosystems.
        </p>
      </header>

      {/* Leadership Profiles */}
      <main className="flex-grow max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Rajat Singh */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/30">
                RS
              </div>
              <h2 className="text-3xl font-black mb-1 text-slate-900">Rajat Singh</h2>
              <p className="text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-6">Lead Architect & Founder</p>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                Spearheads all core coding, system architecture, database indexing, and backend development. With deep expertise in Next.js, Java, and encrypted network routing, Rajat builds the high-frequency systems that power enterprise operations.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-400">
              <span>Stack: Next.js, Java, Python, PostgreSQL</span>
            </div>
          </div>

          {/* Richu Chalotra */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-slate-400/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-slate-900/20">
                RC
              </div>
              <h2 className="text-3xl font-black mb-1 text-slate-900">Richu Chalotra</h2>
              <p className="text-slate-500 text-xs font-mono font-bold tracking-wider uppercase mb-6">Operations Manager</p>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                Ensures flawless execution across all client projects. Richu manages team workflows, operational oversight, structural coordination, and administrative processes, ensuring that complex engineering tasks are delivered on time and at scale.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-400">
              <span>Focus: Workflows & Quality Control</span>
            </div>
          </div>

          {/* Anonymous High-Quality Team */}
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 mb-8 rounded-3xl bg-gradient-to-tr from-teal-500 to-emerald-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
                {'</>'}
              </div>
              <h2 className="text-3xl font-black mb-1 text-slate-900">Elite Squad</h2>
              <p className="text-teal-600 text-xs font-mono font-bold tracking-wider uppercase mb-6">Core Engineering Unit</p>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">
                A highly vetted, private unit of top-tier developers and data specialists operating behind the scenes. This elite squad handles intense backend scaling, heavy AI dataset operations, and zero-latency gateway configurations.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-slate-400">
              <span>Specialty: Scaling & AI Operations</span>
            </div>
          </div>

        </div>
      </main>

      {/* Extended Enterprise Section to Add Professional Depth */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Global Standards</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6">Built for Uncompromising Reliability & High Volume</h2>
            <p className="text-slate-500 leading-relaxed mb-6 font-medium">
              At RAJAT.TECH, leadership goes beyond management—it’s about direct technical ownership. Every platform we deploy undergoes rigorous load testing, automated verification, and secure ledger reconciliation before reaching production.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="text-2xl font-black text-slate-900 mb-1">99.9%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Uptime SLA Target</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="text-2xl font-black text-slate-900 mb-1">Zero-Drop</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Ledger Security</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0"></div>
            <h3 className="text-2xl font-black mb-4 relative z-10">Our Operational Commitment</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Whether you are scaling an automated trading infrastructure, deploying a multi-tier payment panel, or integrating custom AI pipelines, our leadership ensures direct oversight at every stage of the software lifecycle.
            </p>
            <Link href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-blue-500 transition relative z-10">
              Explore Partnership Tiers &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Our Engineering Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-blue-400 text-2xl font-black mb-4">01</div>
              <h3 className="font-bold text-xl mb-2 text-white">Zero Compromise</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Security and encryption are built into the foundation of our code, never as an afterthought.</p>
            </div>
            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-blue-400 text-2xl font-black mb-4">02</div>
              <h3 className="font-bold text-xl mb-2 text-white">Absolute Scale</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every database schema and API route is optimized for high-volume, low-latency traffic.</p>
            </div>
            <div className="bg-slate-800/60 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-blue-400 text-2xl font-black mb-4">03</div>
              <h3 className="font-bold text-xl mb-2 text-white">Flawless Execution</h3>
              <p className="text-slate-400 text-sm leading-relaxed">From UI design to server deployment, operational excellence drives our delivery process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT|TECH. All rights reserved.</p>
      </footer>
    </div>
  );
}