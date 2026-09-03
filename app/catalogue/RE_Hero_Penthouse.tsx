'use client';

import { useState, useEffect } from 'react';

export default function RE_Hero_Penthouse({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-[#e5e5e5] min-h-screen font-sans selection:bg-amber-900/50 selection:text-amber-100 overflow-hidden">
      
      {/* --- 0. INTEGRATED VVIP NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-amber-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-300 hover:text-white transition-colors bg-black/40 px-4 py-2 rounded-full border border-amber-500/30 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 border border-amber-500 flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <span className="-rotate-45 font-serif text-amber-500 font-bold text-sm">R</span>
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-amber-100">Royale <span className="text-amber-400 font-light">Penthouse</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/70">
            <a href="#sanctuary" className="hover:text-amber-400 transition-colors">The Sky Sanctuary</a>
            <a href="#palette" className="hover:text-amber-400 transition-colors">Material Palette</a>
            <a href="#inquire" className="hover:text-amber-400 transition-colors">Vetting Access</a>
          </div>

          <button className="text-[10px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
            Private Access
          </button>
        </div>
      </nav>

      {/* --- 1. THE CROWN JEWEL HERO (CINEMATIC & CENTERED) --- */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 overflow-hidden z-10">
        {/* Deep Opulent Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600607687959-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop" 
            alt="Penthouse Interior" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-amber-500/50"></span>
            <span className="text-amber-500 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">The Royale Collection</span>
            <span className="w-12 h-[1px] bg-amber-500/50"></span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-light tracking-tighter mb-6 leading-[1] text-white font-serif uppercase">
            The Pinnacle <br />
            <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700">
              Of Power.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            A triplex sanctuary suspended 800 feet above the metropolis. Unrivaled scale, imported Italian onyx, and the city's highest private cantilevered pool.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a href="#inquire" className="px-12 py-5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-black font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
              Inquire Privately
            </a>
            <button className="px-12 py-5 bg-black/50 border border-amber-500/30 text-amber-500 font-bold text-xs uppercase tracking-[0.3em] hover:bg-amber-500/10 transition-all duration-500 backdrop-blur-md">
              The Brochure
            </button>
          </div>
        </div>
      </section>

      {/* --- 2. FLOATING VVIP SPECIFICATION BAR --- */}
      <section className="relative z-35 -mt-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl border border-amber-500/20 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-amber-900/30">
           
           <div className="flex flex-col items-center flex-1 w-full pt-4 md:pt-0">
             <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Internal Area</span>
             <span className="text-3xl sm:text-4xl font-serif text-white">12,400 <span className="text-lg text-zinc-500">SQFT</span></span>
           </div>
           
           <div className="flex flex-col items-center flex-1 w-full pt-4 md:pt-0">
             <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Valuation</span>
             <span className="text-3xl sm:text-4xl font-serif text-amber-400">$34.5 <span className="text-lg text-amber-500/50">MILLION</span></span>
           </div>

           <div className="flex flex-col items-center flex-1 w-full pt-4 md:pt-0">
             <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Elevation</span>
             <span className="text-3xl sm:text-4xl font-serif text-white">Level 85<span className="text-lg text-zinc-500">+</span></span>
           </div>

           <div className="flex flex-col items-center flex-1 w-full pt-4 md:pt-0">
             <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Availability</span>
             <span className="text-sm sm:text-base font-mono tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 border border-emerald-500/20">INVITE ONLY</span>
           </div>

        </div>
      </section>

      {/* --- 3. EDITORIAL STORYBOARD (ALTERNATING LAYOUT) --- */}
      <section id="sanctuary" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Story 1: Left Text, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6 leading-tight">
              A private realm, <br/>
              <span className="text-amber-500 italic">suspended in the sky.</span>
            </h2>
            <p className="text-zinc-400 text-sm tracking-wide leading-loose mb-8 max-w-md">
              Arrive via a private, biometric-secured glass elevator that opens directly into your grand foyer. The triple-height living room features a 30-foot cascading chandelier crafted from hand-blown Venetian glass, framing the unobstructed panoramic views of the city skyline.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-amber-500 font-bold">
              <span className="w-8 h-[1px] bg-amber-500"></span> Explore The Grand Room
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[500px] w-full">
            <div className="absolute inset-0 bg-amber-500/10 translate-x-4 translate-y-4 border border-amber-500/30"></div>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop" alt="Penthouse Pool" className="absolute inset-0 w-full h-full object-cover z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Story 2: Left Image, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-zinc-800/50 -translate-x-4 translate-y-4 border border-zinc-700"></div>
            <img src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2940&auto=format&fit=crop" alt="Master Bath" className="absolute inset-0 w-full h-full object-cover z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
            
            {/* Floating Info Box on Image */}
            <div className="absolute bottom-8 right-8 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-6 max-w-xs hidden sm:block">
              <div className="text-amber-500 text-2xl font-serif mb-2">The Sanctuary</div>
              <p className="text-zinc-400 text-xs leading-relaxed">Solid slab Calacatta Gold marble, dual rain showers, and a freestanding soaking tub overlooking the horizon.</p>
            </div>
          </div>
          <div className="relative lg:pl-12">
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6 leading-tight">
              Uncompromising <br/>
              <span className="text-zinc-500 italic">craftsmanship.</span>
            </h2>
            <p className="text-zinc-400 text-sm tracking-wide leading-loose mb-8 max-w-md">
              Every millimeter of the penthouse has been curated by award-winning global architects. From the imported wide-plank French oak flooring to the smart-glass windows that tint automatically to follow the sun's trajectory.
            </p>
            <ul className="space-y-4 text-xs font-mono text-zinc-300">
              <li className="flex items-center gap-3"><span className="text-amber-500">❖</span> Custom Poliform Kitchen</li>
              <li className="flex items-center gap-3"><span className="text-amber-500">❖</span> Temperature-controlled Wine Vault (2,000 bottles)</li>
              <li className="flex items-center gap-3"><span className="text-amber-500">❖</span> 12-Seat Dolby Atmos Cinema Room</li>
            </ul>
          </div>
        </div>

      </section>

      {/* --- 4. BESPOKE MATERIALS (MINIMALIST GRID) --- */}
      <section id="palette" className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-bold mb-4">Curated Perfection</h3>
             <h2 className="text-3xl font-serif font-light text-white">The Material Palette</h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 border-y border-white/10 py-12">
             <div className="text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 mb-6 p-[1px]">
                 <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-amber-500 text-xl font-serif">Au</div>
               </div>
               <h4 className="text-white font-serif text-lg mb-2">24k Accents</h4>
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Hand-brushed brass</p>
             </div>
             <div className="text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-700 mb-6 p-[1px]">
                 <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-zinc-300 text-xl font-serif">Ma</div>
               </div>
               <h4 className="text-white font-serif text-lg mb-2">Onyx & Marble</h4>
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Sourced from Italy</p>
             </div>
             <div className="text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-slate-800 mb-6 p-[1px]">
                 <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-blue-400 text-xl font-serif">Gl</div>
               </div>
               <h4 className="text-white font-serif text-lg mb-2">Acoustic Glass</h4>
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Triple-glazed</p>
             </div>
             <div className="text-center flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-900 to-stone-800 mb-6 p-[1px]">
                 <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-amber-700 text-xl font-serif">Wd</div>
               </div>
               <h4 className="text-white font-serif text-lg mb-2">French Oak</h4>
               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Wide-plank flooring</p>
             </div>
           </div>
        </div>
      </section>

      {/* --- 5. ULTRA-PREMIUM VETTING FORM (CTA) --- */}
      <section id="inquire" className="relative py-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#000000]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="border border-amber-500/20 bg-[#0a0a0a]/80 backdrop-blur-xl p-8 sm:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/50"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/50"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/50"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/50"></div>

            <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center mb-8 text-amber-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-4">
              Access is <span className="italic text-amber-500">Strictly Guarded.</span>
            </h2>
            <p className="text-zinc-400 mb-12 font-light max-w-lg text-sm leading-relaxed">
              To maintain the privacy and exclusivity of our residents, viewings for the Royale Penthouse are conducted by invitation and prior vetting only.
            </p>
            
            <form className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-amber-500/80 font-bold">Representative / Buyer Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-amber-500 transition-colors font-serif text-lg"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-amber-500/80 font-bold">Private Wealth Firm / Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-amber-500 transition-colors font-serif text-lg"
                />
              </div>
              <button type="button" className="w-full mt-8 px-8 py-5 bg-amber-600 text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-amber-500 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                Submit Credentials
              </button>
            </form>
            
            <p className="mt-8 text-[9px] text-zinc-600 uppercase tracking-widest">All inquiries are bound by a non-disclosure agreement.</p>
          </div>
        </div>
      </section>

    </div>
  );
}