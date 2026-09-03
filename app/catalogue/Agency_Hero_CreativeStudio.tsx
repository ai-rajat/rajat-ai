'use client';

import { useState, useEffect } from 'react';

export default function Agency_Hero_CreativeStudio({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'frontend' | 'branding' | 'ai'>('frontend');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      
      {/* --- 0. INTEGRATED STUDIO NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(147,51,234,0.3)] font-mono font-bold text-xs">
                ✦
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-neutral-200">CREATIVE \ <span className="text-purple-400 font-bold">STUDIO</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <a href="#work" className="hover:text-purple-400 transition-colors">Selected Work</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Capabilities</a>
            <a href="#why-choose-us" className="hover:text-purple-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-500 transition-all duration-300 shadow-[0_0_25px_rgba(147,51,234,0.4)]">
            Start a Project
          </a>
        </div>
      </nav>

      {/* --- 1. HUGE HERO SECTION --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <section className="relative min-h-[100vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-28 border-b border-neutral-800 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-purple-300 text-xs tracking-[0.25em] uppercase font-bold">Creative Digital Studio</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
              We Craft Digital Legends & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                Immersive Web Brands.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Award-winning digital agency specializing in high-end Next.js architecture, interactive design systems, and cinematic brand identities for global tech leaders.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#work" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_40px_rgba(147,51,234,0.4)] uppercase tracking-wider text-xs">
                View Selected Work
              </a>
              <a href="#contact" className="bg-neutral-900 hover:bg-neutral-800 text-purple-300 font-medium px-10 py-5 rounded-2xl transition border border-purple-900/50 uppercase tracking-wider text-xs">
                Start a Project
              </a>
            </div>
          </div>

          {/* Interactive Studio Metrics & Capabilities HUD Card */}
          <div className="lg:col-span-5 bg-neutral-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-purple-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-[9px] uppercase px-4 py-1.5 font-bold rounded-bl-2xl">
              Studio Metrics HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
              <button onClick={() => setActiveTab('frontend')} className={`text-xs px-4 py-2 rounded-xl transition ${activeTab === 'frontend' ? 'bg-purple-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Next.js</button>
              <button onClick={() => setActiveTab('branding')} className={`text-xs px-4 py-2 rounded-xl transition ${activeTab === 'branding' ? 'bg-purple-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Branding</button>
              <button onClick={() => setActiveTab('ai')} className={`text-xs px-4 py-2 rounded-xl transition ${activeTab === 'ai' ? 'bg-purple-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>AI Tech</button>
            </div>

            <div className="space-y-4 bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
              {activeTab === 'frontend' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Architecture</span><span className="text-white font-bold">Next.js 15 App Router</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Performance Score</span><span className="text-purple-400 font-bold">99/100 Lighthouse</span></div>
                </>
              )}
              {activeTab === 'branding' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Design Systems</span><span className="text-white font-bold">Atomic Figma Tokens</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Global Awards</span><span className="text-purple-400 font-bold">42+ Wins</span></div>
                </>
              )}
              {activeTab === 'ai' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">LLM Integration</span><span className="text-white font-bold">Custom OpenAI & Claude APIs</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Client Retention</span><span className="text-emerald-400 font-bold">98.4%</span></div>
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-neutral-800 text-neutral-400 flex justify-between">
              <span>Projects: 150+ Enterprise</span>
              <span className="text-purple-400 font-bold">Status: Accepting Clients</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-neutral-800 bg-[#060608] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">42+</span>
            <span className="text-purple-400 uppercase tracking-widest text-[10px]">Global Design Awards</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">98.4%</span>
            <span className="text-purple-400 uppercase tracking-widest text-[10px]">Client Retention Rate</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">150+</span>
            <span className="text-purple-400 uppercase tracking-widest text-[10px]">Enterprise Builds</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">99/100</span>
            <span className="text-purple-400 uppercase tracking-widest text-[10px]">Lighthouse Speed Score</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & CAPABILITIES GRID --- */}
      <section id="services" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ CORE CAPABILITIES ]</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Engineered for Impact</h2>
          <p className="text-neutral-400 font-light">We blend artistic visual storytelling with uncompromising web performance and modern artificial intelligence pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-purple-500/50 transition-colors group">
            <div className="text-purple-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-2xl font-bold text-white mb-3">Immersive Frontend</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Blazing fast Next.js apps with butter-smooth animations, custom shaders, and responsive UI components.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl border-purple-500/30 hover:border-purple-500/50 transition-colors group">
            <div className="text-purple-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-2xl font-bold text-white mb-3">Strategic Branding</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Distinct visual identities, typography scaling systems, and comprehensive design token architectures.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-purple-500/50 transition-colors group">
            <div className="text-purple-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI Integration</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Embedding customized LLM wrappers, smart recommendation engines, and automated workflows into web platforms.</p>
          </div>
        </div>
      </section>

      {/* --- 4. SELECTED WORK CASE STUDIES --- */}
      <section id="work" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#060608] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-800 pb-8">
            <div>
              <span className="text-purple-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ FEATURED PORTFOLIO ]</span>
              <h2 className="text-4xl sm:text-6xl font-black text-white">Selected Digital Legends</h2>
            </div>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed">Explore recent web brands, immersive 3D interfaces, and enterprise design systems built for global tech innovators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Immersive Web Brand" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2 block">Web3 • Immersive UI</span>
              <h3 className="text-2xl font-bold text-white mb-3">Solana Ecosystem Metaverse Portal</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Designed and developed an award-winning WebGL interactive portal handling millions of daily decentralized volume transactions.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 group-hover:underline">Explore Case Study →</span>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="AI SaaS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2 block">AI SaaS • Enterprise Dashboard</span>
              <h3 className="text-2xl font-bold text-white mb-3">Autonomous Agent Workflow Platform</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Built a lighting-fast Next.js control center for managing multi-modal LLM pipelines with real-time token streaming visualization.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 group-hover:underline">Explore Case Study →</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US SECTION --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-purple-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE STUDIO ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Partner With Our Creative Studio?</h2>
            <p className="text-neutral-400 font-light">We don't just write code or push pixels. We partner with visionaries to build category-defining digital experiences that dominate markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-6 text-lg">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Uncompromising Craftsmanship</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Every micro-interaction, color token, and line of code is meticulously optimized for supreme aesthetic impact.</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-6 text-lg">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Execution</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">From initial wireframe sketches in Figma to production Next.js deployment, we handle the complete lifecycle.</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-6 text-lg">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Future-Proof AI Readiness</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">We embed cutting-edge AI pipelines and smart automation directly into your web architecture from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. GRAND FOOTER CTA --- */}
      <section id="contact" className="py-32 px-6 bg-black border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-8 text-3xl font-mono shadow-2xl">
            ✦
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">Ready to Build Something Legendary?</h2>
          <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Let's discuss your next project, brand overhaul, or immersive Next.js web application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#contact" className="px-12 py-5 bg-purple-600 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-purple-500 transition-all duration-300 shadow-[0_0_40px_rgba(147,51,234,0.4)]">
              Start a Project
            </a>
            <a href="#work" className="px-12 py-5 bg-neutral-900 text-purple-300 font-medium text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-neutral-800 transition border border-purple-900/50">
              View Selected Work
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
             <span>© 2026 Creative Digital Studio. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-purple-400 transition-colors">Client Portal</a>
               <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}