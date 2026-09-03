'use client';

import { useState, useEffect } from 'react';

export default function Agency_Hero_FreelanceConsultant({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSession, setActiveSession] = useState<'audit' | 'architecture' | 'ai'>('audit');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-blue-500 selection:text-black overflow-x-hidden">
      
      {/* --- 0. INTEGRATED ADVISORY NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] font-mono font-bold text-xs">
                ⚡
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-zinc-200">RAJAT \ <span className="text-blue-400 font-bold">ADVISORY</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#services" className="hover:text-blue-400 transition-colors">Advisory Packages</a>
            <a href="#metrics" className="hover:text-blue-400 transition-colors">Track Record</a>
            <a href="#why-choose-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#book" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.4)]">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* --- 1. HUGE HERO SECTION --- */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <section className="relative min-h-[100vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-28 border-b border-zinc-800 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-300 text-xs tracking-[0.25em] uppercase font-bold">Executive Tech Advisory</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
              Senior Tech Advisory & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                Strategic Scale Consulting.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Empowering startups and enterprise engineering teams with architecture audits, AI pipeline integration, and product roadmap execution.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#book" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_40px_rgba(37,99,235,0.4)] uppercase tracking-wider text-xs">
                Book Consultation Call
              </a>
              <a href="#services" className="bg-zinc-900 hover:bg-zinc-800 text-blue-300 font-medium px-10 py-5 rounded-2xl transition border border-blue-900/50 uppercase tracking-wider text-xs">
                Advisory Packages
              </a>
            </div>
          </div>

          {/* Interactive Advisory Calendar HUD Card */}
          <div className="lg:col-span-5 bg-zinc-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-blue-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] uppercase px-4 py-1.5 font-bold rounded-bl-2xl">
              Live Advisory Calendar
            </div>

            <div className="flex gap-2 mb-6 border-b border-zinc-800 pb-4">
              <button onClick={() => setActiveSession('audit')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSession === 'audit' ? 'bg-blue-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>Strategy Audit</button>
              <button onClick={() => setActiveSession('architecture')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSession === 'architecture' ? 'bg-blue-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>Architecture</button>
              <button onClick={() => setActiveSession('ai')} className={`text-xs px-4 py-2 rounded-xl transition ${activeSession === 'ai' ? 'bg-blue-600 text-white font-bold' : 'bg-zinc-950 text-zinc-400'}`}>AI Pipeline</button>
            </div>

            <div className="space-y-4 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
              {activeSession === 'audit' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Duration & Format</span><span className="text-white font-bold">60 Min 1-on-1 Zoom</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Investment Rate</span><span className="text-blue-400 font-bold">$250 / session</span></div>
                </>
              )}
              {activeSession === 'architecture' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Scope & Review</span><span className="text-white font-bold">Full Codebase & DB Audit</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Investment Rate</span><span className="text-cyan-400 font-bold">$1,200 / deep-dive</span></div>
                </>
              )}
              {activeSession === 'ai' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">LLM Integration</span><span className="text-white font-bold">Prompt & Pipeline Setup</span></div>
                  <div className="flex justify-between items-center"><span className="text-zinc-400">Investment Rate</span><span className="text-blue-400 font-bold">Custom Retainer</span></div>
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 text-zinc-400 flex justify-between">
              <span>Slots Available: 2 This Week</span>
              <span className="text-emerald-400 font-bold">&lt; 24h Response</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-zinc-800 bg-[#050508] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">100%</span>
            <span className="text-blue-400 uppercase tracking-widest text-[10px]">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">12+</span>
            <span className="text-blue-400 uppercase tracking-widest text-[10px]">Enterprise Systems Built</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">Sub-24h</span>
            <span className="text-blue-400 uppercase tracking-widest text-[10px]">Advisory Turnaround</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">Senior</span>
            <span className="text-blue-400 uppercase tracking-widest text-[10px]">Direct 1-on-1 Guidance</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & ADVISORY PACKAGES GRID --- */}
      <section id="services" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ STRATEGIC ADVISORY ]</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Core Consulting Pillars</h2>
          <p className="text-zinc-400 font-light">Targeted technical interventions designed to eliminate engineering bottlenecks and accelerate product delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl hover:border-blue-500/50 transition-colors group">
            <div className="text-blue-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-2xl font-bold text-white mb-3">Architecture Code Review</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Comprehensive analysis of Next.js, Android, and database performance bottlenecks with actionable optimization steps.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl border-blue-500/30 hover:border-blue-500/50 transition-colors group">
            <div className="text-blue-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI & LLM Integration</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Advising businesses on deploying custom prompt workflows, data annotation pipelines, and secure LLM wrappers.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl hover:border-blue-500/50 transition-colors group">
            <div className="text-blue-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-2xl font-bold text-white mb-3">Product Scaling Roadmap</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">Translating business objectives into robust technical milestones, sprint schedules, and engineering deliverables.</p>
          </div>
        </div>
      </section>

      {/* --- 4. TRACK RECORD & CASE STUDIES --- */}
      <section id="metrics" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#050508] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-blue-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ VERIFIED IMPACT ]</span>
              <h2 className="text-4xl sm:text-6xl font-black text-white">Advisory Case Studies</h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed">Real-world technical transformations delivered for high-growth startups and engineering teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-zinc-950 rounded-2xl mb-6 overflow-hidden relative border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" alt="Tech Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2 block">Fintech • Architecture Overhaul</span>
              <h3 className="text-2xl font-bold text-white mb-3">Scaling Database Latency by 4x for High-Frequency App</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">Conducted a 2-week architectural audit, migrating legacy PostgreSQL connection pools and resolving severe memory leaks under peak traffic.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:underline">Read Advisory Report →</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-zinc-950 rounded-2xl mb-6 overflow-hidden relative border border-zinc-800">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" alt="AI Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2 block">AI SaaS • Pipeline Deployment</span>
              <h3 className="text-2xl font-bold text-white mb-3">Deploying Custom LLM Data Annotation Pipelines</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">Designed an automated prompt evaluation workflow and secured LLM wrappers, reducing manual data processing overhead by 70%.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:underline">Read Advisory Report →</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. WHY CHOOSE US SECTION --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE ADVISORY ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Partner With Me For Tech Leadership?</h2>
            <p className="text-zinc-400 font-light">No fluff or high-level generic slides. You get deep technical execution, direct access to a seasoned engineer, and actionable solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-6 text-lg">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Hands-On Code Expertise</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Deep proficiency in Java, Python, Next.js, and database scaling means I read and fix your actual code.</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-6 text-lg">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Corporate Overhead</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Direct communication with your lead advisor. No account managers or junior associates in between.</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-6 text-lg">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Turnaround</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Actionable audit reports delivered within 48 hours so your engineering sprints never lose momentum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. GRAND FOOTER CTA --- */}
      <section id="book" className="py-32 px-6 bg-black border-t border-zinc-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-8 text-3xl font-mono shadow-2xl">
            ⚡
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">Ready to Scale Your Architecture?</h2>
          <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Book your 1-on-1 technical advisory session and eliminate your engineering bottlenecks today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#book" className="px-12 py-5 bg-blue-600 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
              Book Consultation Call
            </a>
            <a href="#services" className="px-12 py-5 bg-zinc-900 text-blue-300 font-medium text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-zinc-800 transition border border-blue-900/50">
              View Advisory Packages
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             <span>© 2026 Rajat Tech Advisory. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}