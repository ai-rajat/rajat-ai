'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Standalone_CRM({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'forecasting' | 'automation'>('pipeline');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-neutral-300 min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP CRM NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-amber-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-300 hover:text-white transition-colors bg-neutral-900/60 px-4 py-2 rounded-full border border-amber-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                💼
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-neutral-200">RAJAT \ <span className="text-amber-400 font-bold">CRM</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <a href="#pipeline" className="hover:text-amber-400 transition-colors">Pipeline</a>
            <a href="#features" className="hover:text-amber-400 transition-colors">Bento Grid</a>
            <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#cta" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-amber-500 text-black px-8 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
            Start Free
          </a>
        </div>
      </nav>

      {/* --- 1. HERO SALES COMMAND CENTER --- */}
      <section id="pipeline" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Background Grid & Amber Glow */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-600/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.1)] hover:bg-amber-500/15 transition-all cursor-pointer">
            <span className="bg-amber-500 text-black text-[10px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">New</span>
            <span className="text-amber-300 text-xs sm:text-sm tracking-wide font-medium">AI-Powered Revenue Forecasting is live </span>
            <span className="text-amber-400">→</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Close Deals Faster. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 drop-shadow-sm">
              Scale Revenue.
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-neutral-400 max-w-3xl mb-12 font-light leading-relaxed">
            The intelligent CRM built for high-velocity sales teams. Automate outreach, score leads with AI, and visualize your entire pipeline in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:-translate-y-1 text-center">
              Start Closing For Free
            </a>
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#121212] border border-neutral-700 text-amber-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-neutral-900 flex items-center justify-center gap-2 text-center">
              <span>Book a Demo</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive CRM Pipeline Mockup */}
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          <div className="relative bg-[#111111] rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
            {/* Mockup Header */}
            <div className="h-14 border-b border-neutral-800 bg-[#171717] flex items-center px-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-sm font-bold text-neutral-300 ml-4 hidden sm:block">Q3 Enterprise Pipeline</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-xs font-mono bg-neutral-800 text-neutral-300 px-3 py-1 rounded">Expected Revenue: <span className="text-emerald-400 font-bold">$1.2M</span></div>
                <button className="bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded">+ New Deal</button>
              </div>
            </div>
            
            {/* Kanban Columns */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative bg-[#0a0a0a]/50 overflow-x-auto">
              
              {/* Column 1: Qualified */}
              <div className="space-y-3 min-w-[250px]">
                <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Qualified <span className="bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded ml-1">12</span></span>
                  <span className="text-neutral-500">$450k</span>
                </div>
                <div className="bg-[#171717] p-4 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition">Acme Corp Expansion</h4>
                    <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">High Intent</span>
                  </div>
                  <div className="text-xl font-bold text-neutral-300 mb-3">$120,000</div>
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                     <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">JD</div>
                     John Doe (CTO)
                  </div>
                </div>
              </div>

              {/* Column 2: Demo Scheduled */}
              <div className="space-y-3 min-w-[250px] relative">
                <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Demo <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded ml-1">8</span></span>
                  <span className="text-neutral-500">$320k</span>
                </div>
                <div className="bg-[#171717] p-4 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.05)] cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-white">Stark Industries SaaS</h4>
                    <span className="bg-amber-500/10 text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-500/20">Hot</span>
                  </div>
                  <div className="text-xl font-bold text-neutral-300 mb-3">$85,000</div>
                  <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Tomorrow, 2:00 PM
                  </div>
                </div>
              </div>

              {/* Column 3: Proposal Sent */}
              <div className="space-y-3 min-w-[250px]">
                <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Proposal <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded ml-1">4</span></span>
                  <span className="text-neutral-500">$210k</span>
                </div>
                <div className="bg-[#171717] p-4 rounded-xl border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.1)] relative overflow-hidden cursor-pointer group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all"></div>
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <h4 className="text-sm font-bold text-white">Global Tech Inc</h4>
                    <span className="bg-neutral-800 text-neutral-300 text-[9px] font-bold px-1.5 py-0.5 rounded">Sent 2d ago</span>
                  </div>
                  <div className="text-xl font-bold text-amber-400 mb-3 relative z-10">$150,000</div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full mb-2 overflow-hidden relative z-10">
                    <div className="bg-amber-500 w-[80%] h-full rounded-full"></div>
                  </div>
                  <div className="text-[9px] text-neutral-500 text-right relative z-10">80% Probability to Close</div>
                </div>
              </div>

              {/* Column 4: Closed Won */}
              <div className="space-y-3 min-w-[250px] opacity-75">
                <div className="flex items-center justify-between mb-4 border-b border-neutral-800 pb-2">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Closed Won <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded ml-1">24</span></span>
                  <span className="text-emerald-500">$840k</span>
                </div>
                <div className="bg-gradient-to-br from-[#171717] to-[#0d1512] p-4 rounded-xl border border-emerald-500/30">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-neutral-400">Wayne Enterprises</h4>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-500/70 line-through decoration-emerald-500/30">$45,000</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 2. LIVE PIPELINE TICKER --- */}
      <section className="border-y border-neutral-800/50 bg-[#0a0a0a]/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 font-mono text-xs sm:text-sm">
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-widest mb-1">Win Rate (Q3)</span>
            <span className="text-white font-bold text-xl">68.4% <span className="text-emerald-400 text-sm">↑ 4%</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-widest mb-1">Avg Deal Cycle</span>
            <span className="text-amber-400 font-bold text-xl">14 Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-widest mb-1">Pipeline Generated</span>
            <span className="text-white font-bold text-xl">$4.2M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-500 uppercase tracking-widest mb-1">Active Users</span>
            <span className="text-emerald-400 font-bold text-xl">12,450+</span>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID FEATURES --- */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Sales automation, <br/><span className="text-neutral-500">that feels like magic.</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Stop doing manual data entry. Let AI score leads, draft follow-ups, and forecast revenue while you focus on selling.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: AI Lead Scoring (Wide) */}
          <div className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-amber-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl font-bold text-white mb-3">Predictive Lead Scoring</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">Our ML models analyze 50+ data points (website visits, email opens, company size) to surface the prospects most likely to close today.</p>
            </div>
            
            {/* Lead Score Mockup UI */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-80 bg-[#171717] border border-neutral-800 rounded-xl shadow-2xl p-4 z-20 group-hover:-translate-y-2 transition-transform duration-500">
               <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold">JD</div>
                   <div>
                     <div className="text-white text-sm font-bold">Jane Doe</div>
                     <div className="text-neutral-500 text-[10px]">VP of Sales @ TechCorp</div>
                   </div>
                 </div>
                 <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold text-sm">94</div>
               </div>
               <div className="flex gap-2 text-[9px] uppercase tracking-widest text-neutral-400">
                 <span className="bg-neutral-800 px-2 py-1 rounded">+ Visited Pricing Page</span>
                 <span className="bg-neutral-800 px-2 py-1 rounded">+ Opened Email</span>
               </div>
            </div>
          </div>

          {/* Card 2: Sequences (Square) */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500/50 transition-colors relative overflow-hidden group">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Omnichannel Sequences</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Automate personalized outreach across Email, LinkedIn, and SMS based on triggers.</p>
            </div>
            {/* Visual Sequence Flow */}
            <div className="mt-4 space-y-2 relative z-10">
               <div className="flex items-center gap-3 p-2 bg-[#171717] border border-neutral-800 rounded-lg text-xs text-neutral-300">
                 <span className="text-blue-400">✉️</span> Send Initial Email
               </div>
               <div className="w-0.5 h-4 bg-neutral-700 ml-4"></div>
               <div className="flex items-center gap-3 p-2 bg-[#171717] border border-neutral-800 rounded-lg text-xs text-neutral-300">
                 <span className="text-zinc-500">⏳</span> Wait 2 Days
               </div>
               <div className="w-0.5 h-4 bg-neutral-700 ml-4"></div>
               <div className="flex items-center gap-3 p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-400 font-bold">
                 <span className="text-blue-500">in</span> LinkedIn Connect
               </div>
            </div>
          </div>

          {/* Card 3: Revenue Forecast (Square) */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Revenue Forecasting</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Never miss a quota. AI predicts your end-of-quarter revenue based on historical win rates.</p>
            </div>
            {/* Graph Visualization */}
            <div className="w-full h-24 flex items-end justify-between gap-1 mt-6 relative z-10">
              {/* Target Line */}
              <div className="absolute top-8 left-0 right-0 border-t border-dashed border-neutral-500"></div>
              <div className="absolute top-4 right-0 text-[9px] text-neutral-500 uppercase font-bold">Quota: $2M</div>
              
              {[20, 35, 50, 45, 70, 95].map((h, i) => (
                <div key={i} className={`w-full rounded-t-sm transition-all duration-1000 ${i === 5 ? 'bg-emerald-500' : 'bg-neutral-700'}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Card 4: Integrations (Wide) */}
          <div className="md:col-span-2 bg-[linear-gradient(110deg,#171717,45%,#262626,55%,#171717)] bg-[length:200%_100%] border border-neutral-800 rounded-3xl p-8 flex items-center overflow-hidden relative">
            <div className="relative z-10 md:w-2/3">
               <h3 className="text-3xl font-black text-white mb-4">Connects with everything.</h3>
               <p className="text-neutral-400 text-base leading-relaxed mb-6">
                 Natively sync your calendar, inbox, billing software, and marketing tools. Two-way sync with Google Workspace, Slack, Stripe, and 100+ others.
               </p>
               <a href="#cta" className="text-xs font-bold uppercase tracking-widest text-amber-400 border border-amber-500/30 px-4 py-2 rounded-lg hover:bg-amber-500/10 transition inline-block">View App Directory →</a>
            </div>
            {/* Integration Icons Graphic */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden md:grid grid-cols-2 gap-4 p-6 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl rotate-12 opacity-50">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl shadow-lg">G</div>
               <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">#</div>
               <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">in</div>
               <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">S</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#0f0f0f] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-500 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE CRM ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Top-Performing Sales Teams Switch to Rajat CRM</h2>
            <p className="text-neutral-400 font-light">Legacy CRMs are slow, bloated databases that sales reps hate using. We designed a lightning-fast interface powered by modern AI workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Data Entry</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">AI automatically logs calls, emails, and Zoom meeting transcripts directly into the correct deal record.</p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Sub-Second Speed</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Optimized edge infrastructure ensures zero loading lag when managing pipelines with 100k+ enterprise leads.</p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Deal Stages</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Build complex multi-pipeline workflows tailored specifically to your B2B sales cycle within minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. HIGH CONVERSION CTA FOOTER --- */}
      <section id="cta" className="relative py-32 overflow-hidden border-t border-neutral-800/50 bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-amber-900/30 via-[#0a0a0a] to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Stop guessing. <br/> Start closing.
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
            Join the fastest-growing sales teams who use RAJAT \ CRM to build pipeline and crush their quotas every single quarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="#cta" className="px-10 py-5 rounded-xl bg-amber-500 text-black font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition shadow-[0_0_30px_rgba(245,158,11,0.2)] text-center">
              Get Started for Free
            </a>
            <a href="#cta" className="px-10 py-5 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition text-center">
              Request VIP Demo
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500 font-mono uppercase tracking-widest">
            Free forever for up to 3 users. No credit card required.
          </p>
        </div>
      </section>
      
    </div>
  );
}