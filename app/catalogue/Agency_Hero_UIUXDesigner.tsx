'use client';

import { useState, useEffect } from 'react';

export default function Agency_Hero_UIUXDesigner({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLayer, setActiveLayer] = useState<'tokens' | 'components' | 'accessibility'>('tokens');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
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
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] font-mono font-bold text-xs">
                ◇
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-neutral-200">ATELIER \ <span className="text-amber-500 font-bold">UIUX</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <a href="#cases" className="hover:text-amber-400 transition-colors">Case Studies</a>
            <a href="#tokens" className="hover:text-amber-400 transition-colors">Design Systems</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">Process</a>
            <a href="#metrics" className="hover:text-amber-400 transition-colors">Impact</a>
          </div>

          <a href="#contact" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-amber-500 text-black px-8 py-3 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            Book Discovery
          </a>
        </div>
      </nav>

      {/* --- 1. HUGE CINEMATIC HERO --- */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <section className="relative min-h-[100vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-28 border-b border-neutral-800 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 text-xs tracking-[0.25em] uppercase font-bold">Product Design & UI/UX Studio</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
              Human-Centric UI/UX & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-400 font-serif italic font-light">
                Bespoke Design Systems.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Crafting intuitive digital experiences, pixel-perfect interfaces, and scalable design token libraries for global web and mobile products.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#cases" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_40px_rgba(245,158,11,0.3)] uppercase tracking-wider text-xs">
                Explore Case Studies
              </a>
              <a href="#process" className="bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-medium px-10 py-5 rounded-2xl transition border border-amber-500/30 uppercase tracking-wider text-xs">
                View Methodology
              </a>
            </div>
          </div>

          {/* Interactive Figma Design Token Card */}
          <div className="lg:col-span-5 bg-neutral-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-amber-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-[9px] uppercase px-4 py-1.5 font-bold rounded-bl-2xl">
              Figma Verified HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
              <button onClick={() => setActiveLayer('tokens')} className={`text-xs px-4 py-2 rounded-xl transition ${activeLayer === 'tokens' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Tokens</button>
              <button onClick={() => setActiveLayer('components')} className={`text-xs px-4 py-2 rounded-xl transition ${activeLayer === 'components' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Atoms</button>
              <button onClick={() => setActiveLayer('accessibility')} className={`text-xs px-4 py-2 rounded-xl transition ${activeLayer === 'accessibility' ? 'bg-amber-500 text-black font-bold' : 'bg-neutral-950 text-neutral-400'}`}>WCAG</button>
            </div>

            <div className="space-y-4 bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
              {activeLayer === 'tokens' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Primary Color</span><span className="text-amber-400 font-bold">#F59E0B (Amber Gold)</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Typography Scale</span><span className="text-white font-bold">Inter / Plus Jakarta</span></div>
                </>
              )}
              {activeLayer === 'components' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Component Count</span><span className="text-amber-400 font-bold">340+ Production Atoms</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Auto-Layout Engine</span><span className="text-emerald-400 font-bold">Version 5.2</span></div>
                </>
              )}
              {activeLayer === 'accessibility' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Contrast Score</span><span className="text-emerald-400 font-bold">WCAG AAA (100% Pass)</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Screen Readers</span><span className="text-white font-bold">Fully Optimized Aria</span></div>
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-neutral-800 text-neutral-400 flex justify-between">
              <span>Handoff: React / Tailwind</span>
              <span className="text-amber-400 font-bold">Sync: Real-Time</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-neutral-800 bg-[#060608] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">WCAG AAA</span>
            <span className="text-amber-500 uppercase tracking-widest text-[10px]">Accessibility Standard</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">340+</span>
            <span className="text-amber-500 uppercase tracking-widest text-[10px]">Design Tokens</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">Figma v5</span>
            <span className="text-amber-500 uppercase tracking-widest text-[10px]">Auto-Layout Master</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">100%</span>
            <span className="text-amber-500 uppercase tracking-widest text-[10px]">Handoff Accuracy</span>
          </div>
        </div>
      </section>

      {/* --- 3. DEEP CASE STUDIES GRID --- */}
      <section id="cases" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ FEATURED WORK ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white">Selected Case Studies</h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm leading-relaxed">Deep dives into complex product redesigns, enterprise design systems, and high-conversion mobile flows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-amber-500/50 transition-colors group overflow-hidden">
            <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Fintech App UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
            </div>
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 block">Fintech • Mobile App</span>
            <h3 className="text-2xl font-bold text-white mb-3">NeoBank Global Design System</h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Unified 4 distinct regional banking apps into a single cohesive design token architecture, reducing developer bug tickets by 60%.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 group-hover:underline">Read Case Study →</span>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-amber-500/50 transition-colors group overflow-hidden">
            <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="SaaS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
            </div>
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 block">SaaS • Cloud Analytics</span>
            <h3 className="text-2xl font-bold text-white mb-3">DevOps Observability Dashboard</h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Transformed complex Kubernetes telemetry logs into an intuitive, dark-mode data visualization suite for enterprise SREs.</p>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 group-hover:underline">Read Case Study →</span>
          </div>
        </div>
      </section>

      {/* --- 4. METHODOLOGY & PROCESS GRID --- */}
      <section id="process" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#060608] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ METHODICAL CRAFT ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">From Research to Systems</h2>
            <p className="text-neutral-400 font-light">We bridge the gap between user psychology and clean code architecture through rigorous discovery and atomic design principles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-amber-500/50 transition-colors group">
              <div className="text-amber-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
              <h3 className="text-2xl font-bold text-white mb-3">User Research & Wireframing</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Conducting user interviews, empathy mapping, and low-fidelity prototype flows to validate problem statements before pixel work.</p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl border-amber-500/30 hover:border-amber-500/50 transition-colors group">
              <div className="text-amber-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
              <h3 className="text-2xl font-bold text-white mb-3">Scalable Design Systems</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Building atomic component libraries in Figma with robust variant properties for seamless, error-free developer handoff.</p>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-amber-500/50 transition-colors group">
              <div className="text-amber-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
              <h3 className="text-2xl font-bold text-white mb-3">Interaction Design</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Designing micro-interactions, smooth page transitions, and engaging visual feedback loops that delight users at every tap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CLIENT IMPACT METRICS --- */}
      <section id="metrics" className="py-28 px-6 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-16 uppercase tracking-tight">Proven Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl">
              <div className="text-5xl font-black text-amber-400 mb-2 font-mono">+240%</div>
              <div className="text-sm text-neutral-400">Average Conversion Lift Post-Redesign</div>
            </div>
            <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl">
              <div className="text-5xl font-black text-amber-400 mb-2 font-mono">3x</div>
              <div className="text-sm text-neutral-400">Faster Sprint Velocity for Engineering Teams</div>
            </div>
            <div className="p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl">
              <div className="text-5xl font-black text-amber-400 mb-2 font-mono">100%</div>
              <div className="text-sm text-neutral-400">Design Token Handoff Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. GRAND FOOTER CTA --- */}
      <section id="contact" className="py-32 px-6 bg-black border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-8 text-3xl font-mono shadow-2xl">
            ◇
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">Let's Build Your Product Experience.</h2>
          <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Partner with an expert product designer to transform your complex workflow into an intuitive, world-class interface.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#contact" className="px-12 py-5 bg-amber-500 text-black font-bold text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              Book a Discovery Call
            </a>
            <a href="#cases" className="px-12 py-5 bg-neutral-900 text-amber-300 font-medium text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-neutral-800 transition border border-amber-500/30">
              Explore Portfolio
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
             <span>© 2026 Atelier Product Design Studio. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-amber-400 transition-colors">Figma Community</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Dribbble</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}