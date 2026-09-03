'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Hero_ProjectMgmt({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#09090b] text-zinc-300 min-h-screen font-sans selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP PROJECT MGMT NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#09090b]/90 backdrop-blur-2xl border-b border-violet-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-violet-300 hover:text-white transition-colors bg-zinc-900/60 px-4 py-2 rounded-full border border-violet-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                ⚡
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-zinc-200">RAJAT \ <span className="text-violet-400 font-bold">WORKSPACE</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#kanban" className="hover:text-violet-400 transition-colors">Kanban</a>
            <a href="#features" className="hover:text-violet-400 transition-colors">Bento Grid</a>
            <a href="#why-choose-us" className="hover:text-violet-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#cta" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)]">
            Start Workspace Free
          </a>
        </div>
      </nav>

      {/* --- 1. HERO COLLABORATION WORKSPACE --- */}
      <section id="kanban" className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        {/* Background Grid & Violet Glow */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:bg-violet-500/20 transition-all cursor-pointer">
            <span className="bg-violet-500 text-white text-[10px] font-black px-2 py-0.5 rounded-sm tracking-wider">NEW</span>
            <span className="text-violet-300 text-xs sm:text-sm tracking-wide font-medium">Introducing AI Auto-Sprint Planning </span>
            <span className="text-violet-400">→</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Build software, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 drop-shadow-sm">
              without the chaos.
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-zinc-400 max-w-3xl mb-12 font-light leading-relaxed">
            The minimalist, lightning-fast issue tracker designed for high-performance engineering teams. Ditch the clutter, focus on the code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            <a href="#cta" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:-translate-y-1 text-center">
              Start Workspace Free
            </a>
            <a href="#cta" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-zinc-900 text-zinc-300 border border-zinc-700 font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 text-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              Watch Demo
            </a>
          </div>
        </div>

        {/* Hero Interactive Kanban Mockup */}
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          <div className="relative bg-[#121214] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Mockup Header */}
            <div className="h-12 border-b border-zinc-800 bg-[#18181b] flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-md">rajat-tech / sprint-42</div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-violet-500 border border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white z-20">R</div>
                <div className="w-6 h-6 rounded-full bg-fuchsia-500 border border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white z-10">S</div>
              </div>
            </div>
            
            {/* Kanban Columns */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative bg-[#09090b]/50 overflow-x-auto">
              
              {/* Fake Cursor 1 */}
              <div className="absolute top-1/4 left-1/3 z-50 hidden sm:block animate-[bounce_4s_infinite]">
                <svg className="w-5 h-5 text-fuchsia-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.7z"/></svg>
                <span className="bg-fuchsia-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm absolute top-5 left-3 shadow-lg">Sahil</span>
              </div>

              {/* Todo Column */}
              <div className="space-y-3 min-w-[250px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Todo <span className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 ml-1">4</span></span>
                  <span className="text-zinc-600">+</span>
                </div>
                <div className="bg-[#18181b] p-4 rounded-xl border border-zinc-800 hover:border-violet-500/50 transition cursor-pointer">
                  <div className="text-xs text-violet-400 font-mono mb-2">ENG-142</div>
                  <h4 className="text-sm font-bold text-white mb-3">Implement Redis Caching</h4>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded">Backend</span>
                    <span className="text-zinc-500">Oct 24</span>
                  </div>
                </div>
              </div>

              {/* In Progress Column */}
              <div className="space-y-3 relative min-w-[250px]">
                {/* Fake Cursor 2 */}
                <div className="absolute -top-4 -right-4 z-50 hidden sm:block animate-[bounce_3s_infinite_reverse]">
                  <svg className="w-5 h-5 text-violet-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.7z"/></svg>
                  <span className="bg-violet-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm absolute top-5 left-3 shadow-lg">Rajat</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">In Progress <span className="bg-amber-500/10 px-1.5 py-0.5 rounded text-amber-400 ml-1">2</span></span>
                  <span className="text-zinc-600">+</span>
                </div>
                <div className="bg-[#18181b] p-4 rounded-xl border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.05)] cursor-pointer">
                  <div className="text-xs text-violet-400 font-mono mb-2">ENG-138</div>
                  <h4 className="text-sm font-bold text-white mb-3">Refactor Auth Microservice</h4>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full mb-3 overflow-hidden">
                    <div className="bg-amber-500 w-2/3 h-full rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500"></span> Rajat Singh</span>
                    <span className="text-zinc-500">8 pts</span>
                  </div>
                </div>
              </div>

              {/* Done Column */}
              <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity min-w-[250px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Done <span className="bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-400 ml-1">18</span></span>
                  <span className="text-zinc-600">+</span>
                </div>
                <div className="bg-[#18181b] p-4 rounded-xl border border-emerald-500/20 line-through decoration-zinc-600">
                  <div className="text-xs text-zinc-500 font-mono mb-2">ENG-120</div>
                  <h4 className="text-sm font-bold text-zinc-400 mb-2">Design System V2 Tokens</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- 2. BENTO GRID CAPABILITIES --- */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Built for speed. <br/><span className="text-zinc-500">Designed for scale.</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Every interaction is optimized to be sub-100ms. If you can think it, you can do it instantly with keyboard shortcuts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: Keyboard First (Wide) */}
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-violet-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-all"></div>
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl font-bold text-white mb-3">Keyboard-First Design</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">Never take your hands off the keyboard. Press <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1.5 py-0.5 font-mono text-white text-xs mx-1">Cmd</kbd> + <kbd className="bg-zinc-800 border border-zinc-700 rounded px-1.5 py-0.5 font-mono text-white text-xs mx-1">K</kbd> to command your entire workspace.</p>
            </div>
            
            {/* Fake Command Menu */}
            <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-80 bg-[#18181b] border border-zinc-700 rounded-xl shadow-2xl overflow-hidden z-20 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="p-3 border-b border-zinc-800 flex items-center text-zinc-400 text-sm">
                <span className="mr-2">🔍</span> Assign to Rajat...
              </div>
              <div className="p-2 space-y-1">
                <div className="bg-violet-600/20 text-violet-300 px-3 py-2 rounded-lg text-xs font-medium flex justify-between items-center">
                  <span>Assign Issue (ENG-142)</span>
                  <span className="font-mono opacity-50">↵</span>
                </div>
                <div className="text-zinc-400 px-3 py-2 rounded-lg text-xs hover:bg-zinc-800 transition">Change Priority to High</div>
              </div>
            </div>
          </div>

          {/* Card 2: Sprint Velocity (Square) */}
          <div className="bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-fuchsia-500/50 transition-colors relative overflow-hidden group">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Auto-Sprint Planning</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">AI analyzes your team's velocity and automatically builds optimized sprint backlogs.</p>
            </div>
            {/* Graph Visualization */}
            <div className="w-full h-24 flex items-end justify-between gap-1 mt-6">
              {[20, 35, 50, 45, 70, 85, 60, 95].map((h, i) => (
                <div key={i} className={`w-full rounded-t-sm transition-all duration-1000 ${i === 7 ? 'bg-fuchsia-500 group-hover:animate-pulse' : 'bg-zinc-800'}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Card 3: GitHub Sync (Square) */}
          <div className="bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Automated GitHub Sync</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Merge a PR and watch the issue automatically move to 'Done'. Zero manual updates required.</p>
            </div>
            <div className="mt-6 p-4 bg-black rounded-xl border border-zinc-800 font-mono text-[10px] text-zinc-500 flex flex-col gap-2">
               <div className="flex items-center gap-2">
                 <span className="text-indigo-400 font-bold">git</span> commit -m "Fixes ENG-138"
               </div>
               <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Workflow Triggered
               </div>
               <div className="flex items-center gap-2 text-zinc-300">
                 → Status changed to <span className="text-emerald-400 font-bold border border-emerald-500/30 px-1 rounded">DONE</span>
               </div>
            </div>
          </div>

          {/* Card 4: Lightning Docs (Wide) */}
          <div className="md:col-span-2 bg-[linear-gradient(110deg,#18181b,45%,#27272a,55%,#18181b)] bg-[length:200%_100%] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center overflow-hidden relative">
            <h3 className="text-3xl font-black text-white mb-4">Multiplayer Markdown Docs</h3>
            <p className="text-zinc-400 text-base max-w-lg mb-6 relative z-10">
              Write PRDs, engineering specs, and meeting notes collaboratively. Embed live issues, Figma files, and code snippets natively.
            </p>
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
              <pre className="text-3xl font-bold text-zinc-500 font-mono leading-none">
                # Setup
                <br/>
                npm i rajat-ui
                <br/>
                <br/>
                ## Arch
                <br/>
                Microservices
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#0c0c0e] border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-violet-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE WORKSPACE ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Engineering Leads Switch to Rajat Workspace</h2>
            <p className="text-zinc-400 font-light">Jira is slow, clunky, and hated by developers. We built a blazing-fast, keyboard-driven issue tracker that teams actually love using.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-violet-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Sub-100ms Interactions</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Local-first client architecture ensures instant page transitions and zero lag even with 50k+ issues.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-violet-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Frictionless Migrations</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Import all your existing issues, epics, and team members from Jira or Linear with a single click.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-violet-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Workflow Rules</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Build automated triggers for code reviews, QA sign-offs, and release milestone notifications instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. HIGH CONVERSION CTA FOOTER --- */}
      <section id="cta" className="relative py-32 overflow-hidden border-t border-zinc-800/50 bg-[#09090b]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/30 via-[#09090b] to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Stop managing work. <br/> Start shipping it.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
            Join the elite engineering teams who have traded legacy ticketing systems for the ultimate speed of RAJAT \ WORKSPACE.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="#cta" className="px-10 py-5 rounded-xl bg-white text-black font-black text-sm uppercase tracking-wider hover:bg-zinc-200 transition shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
              Get Started for Free
            </a>
            <a href="#cta" className="px-10 py-5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition text-center">
              Book a Demo
            </a>
          </div>
          <p className="mt-8 text-xs text-zinc-600 font-mono uppercase tracking-widest flex items-center justify-center gap-4">
            <span>✓ Free for up to 10 users</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ No credit card needed</span>
          </p>

          <div className="mt-24 pt-8 border-t border-zinc-800/80 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             <span>© 2026 Rajat Workspace Systems. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-violet-400 transition-colors">Security</a>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}