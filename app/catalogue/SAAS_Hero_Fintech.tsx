'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Standalone_Fintech({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'treasury' | 'payouts' | 'ledger'>('treasury');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP FINTECH NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-2xl border-b border-emerald-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-300 hover:text-white transition-colors bg-slate-900/60 px-4 py-2 rounded-full border border-emerald-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                💳
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-slate-100">RAJAT \ <span className="text-emerald-400 font-bold">TREASURY</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
            <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Bento Grid</a>
            <a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#cta" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Get API Keys
          </a>
        </div>
      </nav>

      {/* --- 1. HERO FINANCIAL DASHBOARD --- */}
      <section id="dashboard" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Background Grid & Emerald Glow */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:bg-emerald-500/20 transition-all cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs sm:text-sm tracking-wide font-medium">Treasury API v2.0 is now live </span>
            <span className="text-emerald-400">→</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Automate Revenue. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-sm">
              Move Money Globally.
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-400 max-w-3xl mb-12 font-light leading-relaxed">
            The programmable financial engine for high-growth startups. Automate invoicing, reconcile ledgers in real-time, and manage cross-border payouts seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1 text-center">
              Start 14-Day Trial
            </a>
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-slate-800 text-center">
              Explore API Docs
            </a>
          </div>
        </div>

        {/* Hero Interactive Financial Mockup */}
        <div className="relative z-20 w-full max-w-5xl mx-auto flex justify-center">
          <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Glassmorphic Revenue Dashboard */}
            <div className="bg-slate-900/60 backdrop-blur-2xl p-6 rounded-3xl border border-slate-700 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Total ARR Velocity</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/25">+28.4% MoM</span>
              </div>
              <div>
                <h3 className="text-5xl font-black text-white mb-2">$4,240,892<span className="text-slate-500 text-2xl">.50</span></h3>
                <p className="text-slate-400 text-sm mb-6">Real-time ledger reconciliation</p>
                {/* Mock Chart */}
                <div className="h-24 flex items-end justify-between gap-2 border-b border-slate-800 pb-2">
                  {[30, 45, 40, 60, 55, 80, 75, 100].map((h, i) => (
                    <div key={i} className="w-full bg-emerald-500/80 rounded-t-sm transition-all duration-500 hover:bg-emerald-400" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal API Request Box */}
            <div className="bg-[#0b0f19] p-6 rounded-3xl border border-slate-800 shadow-2xl font-mono text-sm flex flex-col">
              <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="text-slate-300 space-y-2 flex-grow">
                <p><span className="text-pink-500">POST</span> <span className="text-teal-300">/v1/payouts</span></p>
                <p className="text-slate-500">{"{"}</p>
                <p className="pl-4">"amount": <span className="text-amber-400">150000</span>,</p>
                <p className="pl-4">"currency": <span className="text-emerald-400">"USD"</span>,</p>
                <p className="pl-4">"destination": <span className="text-emerald-400">"ic_8f9x..."</span>,</p>
                <p className="pl-4">"description": <span className="text-emerald-400">"Vendor Payout"</span></p>
                <p className="text-slate-500">{"}"}</p>
                <br />
                <p className="text-emerald-500 font-bold">{"// HTTP/1.1 200 OK"}</p>
                <p className="text-emerald-400">"status": "processed"</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. LIVE INFRASTRUCTURE TICKER --- */}
      <section className="border-y border-slate-800/50 bg-slate-950/40 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 font-mono text-xs sm:text-sm">
          <div className="flex flex-col">
            <span className="text-slate-500 uppercase tracking-widest mb-1">Processing Volume</span>
            <span className="text-white font-bold text-xl">$12B+ / yr</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 uppercase tracking-widest mb-1">API Uptime</span>
            <span className="text-emerald-400 font-bold text-xl">99.999%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 uppercase tracking-widest mb-1">Supported Currencies</span>
            <span className="text-cyan-400 font-bold text-xl">135+</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 uppercase tracking-widest mb-1">Security</span>
            <span className="text-white font-bold text-xl">PCI DSS Level 1</span>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID CAPABILITIES --- */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Financial operations, <br/><span className="text-slate-500">running on autopilot.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Replace spreadsheets and fragmented legacy banks with a single, programmable treasury operating system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {/* Card 1: Smart Dunning (Wide) */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Smart Dunning & Recovery</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">AI-driven retry logic automatically recovers failed credit card payments, optimizing for the best time to retry without manual customer outreach.</p>
            </div>
            <div className="relative z-10 mt-6 flex gap-3 items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs">💳</div>
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs">🏦</div>
              </div>
              <span className="text-emerald-400 text-sm font-bold">+12% Revenue Recovered</span>
            </div>
          </div>

          {/* Card 2: Tax Automation (Square) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Global Tax Engine</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Instantly calculate and collect exact VAT, GST, and sales tax across 150+ jurisdictions automatically.</p>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between items-center text-xs p-2 bg-slate-950 rounded border border-slate-800">
                <span className="text-slate-400">EU VAT (20%)</span>
                <span className="text-emerald-400 font-mono">Calculated</span>
              </div>
              <div className="flex justify-between items-center text-xs p-2 bg-slate-950 rounded border border-slate-800">
                <span className="text-slate-400">US Sales Tax</span>
                <span className="text-emerald-400 font-mono">Calculated</span>
              </div>
            </div>
          </div>

          {/* Card 3: Cross Border (Square) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Cross-Border Payouts</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Settle vendor invoices and pay contractors in their local currencies with real-time interbank FX rates.</p>
            </div>
            <div className="mt-6 flex justify-between items-center bg-black/50 p-4 rounded-xl border border-slate-800">
              <span className="text-xl">🇺🇸 <span className="text-slate-300 font-bold text-sm">USD</span></span>
              <span className="text-slate-500">→</span>
              <span className="text-xl">🇪🇺 <span className="text-slate-300 font-bold text-sm">EUR</span></span>
            </div>
          </div>

          {/* Card 4: Audit Trails (Wide) */}
          <div className="md:col-span-2 bg-[linear-gradient(110deg,#0f172a,45%,#1e293b,55%,#0f172a)] bg-[length:200%_100%] border border-slate-800 rounded-3xl p-8 flex flex-col justify-center overflow-hidden relative">
            <h3 className="text-3xl font-black text-white mb-4">GAAP-Ready Audit Trails</h3>
            <p className="text-slate-400 text-base max-w-lg mb-6 relative z-10">
              Generate pixel-perfect financial statements, lock historical ledger data, and export directly to NetSuite or QuickBooks with one API call.
            </p>
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-30 hidden md:block">
              <div className="bg-[#020617] p-4 rounded-xl border border-slate-700 font-mono text-sm text-emerald-400">
                [✓] Ledger synced <br/>
                [✓] Balances verified <br/>
                [✓] Statement generated <br/>
                &gt; READY FOR AUDIT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#040a1b] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE TREASURY ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Fast-Growing Startups Choose Rajat Treasury</h2>
            <p className="text-slate-400 font-light">Legacy bank APIs take months to integrate and break constantly. Our developer-first treasury layer lets you move millions in minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Webhook Alerts</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">Receive sub-millisecond event triggers for every charge, payout, dispute, or ledger state change.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Entity Management</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">Manage subsidiaries across the US, UK, and EU from a single dashboard with automated intercompany transfers.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support Engineers</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">Get a private Slack channel with our core infrastructure team to help you architect complex payment flows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. HIGH CONVERSION CTA FOOTER --- */}
      <section id="cta" className="relative py-32 overflow-hidden border-t border-slate-800/50 bg-[#020617]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#020617] to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Ready to upgrade your <br/> financial infrastructure?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of modern businesses managing millions in revenue effortlessly with RAJAT \ TREASURY.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="#cta" className="px-10 py-5 rounded-xl bg-white text-black font-black text-sm uppercase tracking-wider hover:bg-slate-200 transition shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center">
              Get API Keys Now
            </a>
            <a href="#cta" className="px-10 py-5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition text-center">
              Contact Sales
            </a>
          </div>
          <p className="mt-8 text-xs text-slate-500 font-mono uppercase tracking-widest flex items-center justify-center gap-4">
            <span>✓ SOC2 Type II</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ ISO 27001</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Bank-grade 256-bit Encryption</span>
          </p>

          <div className="mt-24 pt-8 border-t border-slate-800/80 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-500">
             <span>© 2026 Rajat Treasury Systems. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">Security</a>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}