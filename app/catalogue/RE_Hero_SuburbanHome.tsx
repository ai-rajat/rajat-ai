'use client';

import { useState, useEffect } from 'react';

export default function RE_Standalone_SuburbanHome({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState<'yard' | 'interior' | 'eco'>('yard');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#042018] text-[#f0fdf4] min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED VVIP SUBURBAN NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#042018]/90 backdrop-blur-2xl border-b border-emerald-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-300 hover:text-white transition-colors bg-emerald-950/60 px-4 py-2 rounded-full border border-emerald-700/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                🏡
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-emerald-100">VERDANT <span className="text-emerald-400 font-light">\ HAVEN</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-200/70">
            <a href="#community" className="hover:text-emerald-400 transition-colors">The Community</a>
            <a href="#amenities" className="hover:text-emerald-400 transition-colors">Family Amenities</a>
            <a href="#tour" className="hover:text-emerald-400 transition-colors">Book Tour</a>
          </div>

          <a href="#tour" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Schedule Tour
          </a>
        </div>
      </nav>

      {/* --- 1. SUBURBAN HAVEN HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-emerald-900/50">
        
        {/* Soft Green Canopy & Suburban Estate Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#042018]/50 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042018] via-[#042018]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#042018]/90 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop" 
            alt="Spacious Suburban Home" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite] opacity-60"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-900/60 border border-emerald-500/40 mb-8 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-200 text-xs tracking-[0.25em] uppercase font-bold">Family Haven & Gated Community</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6 leading-[1.05] text-white">
              Spacious Suburban Homes <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 font-light">
                Built For Lifelong Memories.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-emerald-100 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Peaceful green gated communities, expansive manicured lawns, top-rated school zones, and custom chef-grade kitchens designed for modern families.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#community" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_35px_rgba(16,185,129,0.4)] uppercase tracking-wider text-xs">
                View Suburban Listings
              </a>
            </div>
          </div>

          {/* Right: Interactive Property Specs HUD Card */}
          <div className="lg:col-span-5 bg-[#063024]/80 backdrop-blur-2xl p-8 rounded-[32px] border border-emerald-500/30 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-300 text-[9px] uppercase px-3.5 py-1 border-b border-l border-emerald-500/40 rounded-bl font-mono">
              Estate Package HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-emerald-900/60 pb-4">
              <button 
                onClick={() => setActiveFeature('yard')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeFeature === 'yard' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                Backyard Oasis
              </button>
              <button 
                onClick={() => setActiveFeature('interior')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeFeature === 'interior' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                School District
              </button>
              <button 
                onClick={() => setActiveFeature('eco')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeFeature === 'eco' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                Energy Efficient
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeFeature === 'yard' && (
                <div className="bg-[#031812] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Private 6,000 Sq. Ft. Lawn</span>
                    <span className="text-emerald-400 font-bold">Included</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Custom stone fire pit, pergola-covered outdoor dining patio, and organic vegetable garden space.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Landscaping: Professional</span>
                    <span>Fully Fenced</span>
                  </div>
                </div>
              )}
              {activeFeature === 'interior' && (
                <div className="bg-[#031812] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Ranked #1 Regional District</span>
                    <span className="text-emerald-400 font-bold">A+ Rated</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Award-winning public elementary and high schools located within a safe 5-minute community walk.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Safety Index: 99.4%</span>
                    <span>Gated Entry</span>
                  </div>
                </div>
              )}
              {activeFeature === 'eco' && (
                <div className="bg-[#031812] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Zero-Carbon Solar Build</span>
                    <span className="text-emerald-400 font-bold">Platinum LEED</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Rooftop solar panel integration, rainwater harvesting storage tanks, and geothermal climate control.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Utility Savings: ~70%</span>
                    <span>Smart Home Ready</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#031812] p-3 rounded-xl border border-emerald-900/50">
                  <span className="text-emerald-400/60 block text-[10px] uppercase font-mono">Starting Price</span>
                  <span className="text-white font-bold text-sm">$890,000</span>
                </div>
                <div className="bg-[#031812] p-3 rounded-xl border border-emerald-900/50">
                  <span className="text-emerald-400/60 block text-[10px] uppercase font-mono">Park Access</span>
                  <span className="text-emerald-400 font-bold text-sm">200 Meters</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. SUBURBAN SPECS STRIP --- */}
      <section className="border-b border-emerald-900/40 bg-[#031812] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-900/50 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-3xl sm:text-4xl font-light mb-1">6,000+</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Sq. Ft. Yard</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-3xl sm:text-4xl font-light mb-1">Rank #1</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">School District</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-3xl sm:text-4xl font-light mb-1">24/7</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Gated Security</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-serif text-3xl sm:text-4xl font-light mb-1">100%</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Solar Powered</span>
          </div>
        </div>
      </section>

      {/* --- 3. COMMUNITY & FAMILY AMENITIES GRID --- */}
      <section id="community" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ COMMUNITY ARCHITECTURE ]</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">Designed For Family Life</h2>
          <p className="text-emerald-100/70 font-light">Every detail is engineered to provide a secure, nurturing, and vibrant environment where children grow and families thrive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#072d22]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🏡</div>
            <h3 className="text-2xl font-serif text-white mb-3">Private Backyard Oasis</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Custom stone fire pit, pergola-covered outdoor dining patio, and organic vegetable garden space for weekend BBQs.</p>
          </div>
          <div className="bg-[#072d22]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🚲</div>
            <h3 className="text-2xl font-serif text-white mb-3">Child-Safe Gated Zone</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Zero-traffic internal roads, dedicated bicycle tracks, and modern children's adventure play parks within walking distance.</p>
          </div>
          <div className="bg-[#072d22]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-2xl font-serif text-white mb-3">Energy Efficient Build</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Rooftop solar panel integration, rainwater harvesting system, and geothermal climate control to keep utility bills near zero.</p>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="amenities" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#031510] border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE SUBURBAN ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">Why Families Choose Verdant Haven</h2>
            <p className="text-emerald-100/70 font-light">Escape the noise of the city without sacrificing modern luxury, convenience, or community safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#06291f]/60 border border-emerald-800/40 p-8 rounded-3xl hover:border-emerald-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-serif text-white mb-3">Master-Planned Greenery</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Over 40% of the community area is dedicated strictly to parks, tree-lined walking trails, and natural ponds.</p>
            </div>
            <div className="bg-[#06291f]/60 border border-emerald-800/40 p-8 rounded-3xl hover:border-emerald-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-serif text-white mb-3">Community Clubhouse</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Exclusive access to a resort-style pool, tennis courts, and private event banquet halls for residents.</p>
            </div>
            <div className="bg-[#06291f]/60 border border-emerald-800/40 p-8 rounded-3xl hover:border-emerald-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-serif text-white mb-3">Smart Home Integration</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Pre-wired for fiber-optic internet, EV chargers in every garage, and automated climate scheduling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. GRAND FOOTER CTA --- */}
      <section id="tour" className="py-32 px-6 bg-[#020d09] border-t border-emerald-900/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 text-2xl shadow-lg">
            🏡
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Find Your Family's Forever Home.</h2>
          <p className="text-emerald-100/60 text-sm mb-12 font-light leading-relaxed">
            Schedule a private community tour or explore available move-in ready suburban estates with our acquisition team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tour" className="px-12 py-5 bg-emerald-500 text-emerald-950 font-bold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_35px_rgba(16,185,129,0.3)]">
              Schedule Private Community Tour
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-emerald-950 text-[10px] font-mono uppercase tracking-widest text-emerald-400/40">
             © 2026 Verdant Haven Suburban Estates. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}