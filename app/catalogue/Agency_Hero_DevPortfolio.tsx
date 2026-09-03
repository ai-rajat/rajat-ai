'use client';

import { useState, useEffect } from 'react';

export default function Agency_Hero_DevPortfolio({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState<'kotlin' | 'python' | 'nextjs'>('kotlin');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#090d16] text-[#e2e8f0] min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- 0. INTEGRATED DEVELOPER HUD NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#090d16]/95 backdrop-blur-2xl border-b border-cyan-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 hover:text-white transition-colors bg-cyan-950/40 px-4 py-2 rounded-lg border border-cyan-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] font-mono font-bold text-xs">
                &lt;/&gt;
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-zinc-200">RAJAT \ <span className="text-cyan-400 font-bold">DEV</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
            <a href="#why-choose-us" className="hover:text-cyan-400 transition-colors">Why Work With Me</a>
          </div>

          <a href="#projects" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-cyan-600 text-white px-8 py-3 rounded-xl hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            Explore Codebase
          </a>
        </div>
      </nav>

      {/* --- 1. HUGE HERO SECTION --- */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <section className="relative min-h-[100vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-28 border-b border-zinc-800/80 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-300 text-xs tracking-[0.25em] uppercase font-bold">AI Data Specialist & Full-Stack Engineer</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
              Full-Stack Developer & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                LLM Operations Expert.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Architecting high-performance mobile applications, building scalable web hubs in Next.js, and evaluating advanced artificial intelligence models across global tech platforms.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_40px_rgba(6,182,212,0.4)] uppercase tracking-wider text-xs">
                Explore Projects
              </a>
              <a href="#stack" className="bg-zinc-900 hover:bg-zinc-800 text-cyan-300 font-medium px-10 py-5 rounded-2xl transition border border-cyan-950 uppercase tracking-wider text-xs">
                View Tech Stack
              </a>
            </div>
          </div>

          {/* Interactive IDE Code Terminal Card */}
          <div className="lg:col-span-5 bg-zinc-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-cyan-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-cyan-600 text-white text-[9px] uppercase px-4 py-1.5 font-bold rounded-bl-2xl">
              Terminal HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-zinc-800 pb-4">
              <button onClick={() => setActiveSnippet('kotlin')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSnippet === 'kotlin' ? 'bg-cyan-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>Rajat_Config.kt</button>
              <button onClick={() => setActiveSnippet('python')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSnippet === 'python' ? 'bg-cyan-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>Automation.py</button>
              <button onClick={() => setActiveSnippet('nextjs')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSnippet === 'nextjs' ? 'bg-cyan-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>NextJS.tsx</button>
            </div>

            <div className="space-y-2 text-zinc-300 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
              {activeSnippet === 'kotlin' && (
                <>
                  <p><span className="text-purple-400">val</span> engineer = <span className="text-amber-300">"Rajat"</span></p>
                  <p><span className="text-purple-400">val</span> role = <span className="text-amber-300">"AI Data & Tech Analyst"</span></p>
                  <p><span className="text-purple-400">val</span> stack = <span className="text-cyan-400">listOf</span>(<span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"Kotlin"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"SQL"</span>)</p>
                  <p><span className="text-purple-400">val</span> status = <span className="text-emerald-400">"Building Production Web Hubs"</span></p>
                </>
              )}
              {activeSnippet === 'python' && (
                <>
                  <p><span className="text-purple-400">import</span> openai</p>
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">evaluate_llm_prompt</span>(prompt):</p>
                  <p className="pl-4">response = openai.Completion.create(prompt=prompt)</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> response.score &gt;= <span className="text-orange-400">0.95</span></p>
                </>
              )}
              {activeSnippet === 'nextjs' && (
                <>
                  <p><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">MarketCapDashboard</span> live=&#123;<span className="text-orange-400">true</span>&#125; /&gt;</p>
                  <p>&#125;</p>
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 text-zinc-400 flex justify-between">
              <span>Commits: 1,420+ Verified</span>
              <span className="text-cyan-400 font-bold">Status: Online</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-zinc-800 bg-[#05080f] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">1,420+</span>
            <span className="text-cyan-400 uppercase tracking-widest text-[10px]">GitHub Commits</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">Android</span>
            <span className="text-cyan-400 uppercase tracking-widest text-[10px]">Java & Kotlin Apps</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">LLM / AI</span>
            <span className="text-cyan-400 uppercase tracking-widest text-[10px]">Evaluation Specialist</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">Next.js</span>
            <span className="text-cyan-400 uppercase tracking-widest text-[10px]">Full-Stack Architecture</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & CORE CAPABILITIES GRID --- */}
      <section id="stack" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ CORE EXPERTISE ]</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Engineering Stack & AI Ops</h2>
          <p className="text-zinc-400 font-light">Combining robust mobile development, full-stack web engineering, and high-precision AI data annotation across global platforms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-2xl font-bold text-white mb-3">Android & Java/Kotlin</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Developing feature-rich mobile applications with custom state management and clean architecture in Android Studio.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl border-cyan-500/30 hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Evaluation & Annotation</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Rigorous prompt engineering, LLM benchmark testing, and audio/image data curation across premier AI operations platforms.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Web Architecture</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Building agency-grade web design hubs, real-time market cap apps, and responsive component systems using Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* --- 4. FEATURED PROJECTS CASE STUDIES --- */}
      <section id="projects" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#05080f] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ PRODUCTION BUILDS ]</span>
              <h2 className="text-4xl sm:text-6xl font-black text-white">Featured Projects</h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">Explore recent mobile apps, real-time tracking hubs, and automated workflows engineered from scratch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-zinc-950 rounded-2xl mb-6 overflow-hidden relative border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80" alt="Market Cap App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 block">Android • Kotlin & Java</span>
              <h3 className="text-2xl font-bold text-white mb-3">Rajat Market Cap Mobile App</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">Custom Android application built with Kotlin DSL to display real-time currency and cryptocurrency market valuations with optimized local caching.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:underline">View Source Code →</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-zinc-950 rounded-2xl mb-6 overflow-hidden relative border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Full Stack Web Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 block">Next.js • Tailwind CSS</span>
              <h3 className="text-2xl font-bold text-white mb-3">VVIP Real Estate & Agency Hubs</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">High-performance frontend architecture featuring glassmorphic UI, responsive grid systems, and immersive modern web components.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:underline">View Live Preview →</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US / WHY WORK WITH ME SECTION --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#070b14] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE ENGINEERING EDGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Collaborate With Me?</h2>
            <p className="text-zinc-400 font-light">Combining disciplined software development with rigorous AI data training expertise for bulletproof digital solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Rigorous AI Background</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Extensive hands-on experience evaluating LLM prompts, audio data pipelines, and search quality models across top AI platforms.</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Versatility</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Seamlessly moving between native Android mobile code, Python automation scripts, and responsive Next.js web hubs.</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Clean Architecture</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Writing maintainable, modular code optimized for performance, scalability, and long-term maintainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. GRAND FOOTER CTA --- */}
      <section className="py-32 px-6 bg-black border-t border-zinc-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-8 text-3xl font-mono shadow-2xl">
            &lt;/&gt;
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">Let's Build Something Exceptional.</h2>
          <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Ready to collaborate on next-gen mobile apps, web hubs, or AI model evaluations? Let's connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#projects" className="px-12 py-5 bg-cyan-600 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-cyan-500 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              Explore Codebase
            </a>
            <a href="#why-choose-us" className="px-12 py-5 bg-zinc-900 text-cyan-300 font-medium text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-zinc-800 transition border border-cyan-950">
              Why Work With Me
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             <span>© 2026 Rajat Singh. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}