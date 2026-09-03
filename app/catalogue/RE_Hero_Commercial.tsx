import { useState, useEffect } from 'react';

export default function RE_Standalone_Commercial({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0b] text-[#f4f4f5] min-h-screen font-sans selection:bg-amber-600/30 selection:text-amber-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED CORPORATE NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors bg-white/5 px-4 py-2 border border-white/10 rounded-sm"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="w-8 h-8 bg-amber-600 flex items-center justify-center">
                <span className="font-serif text-white font-black">R</span>
              </div>
              <span className="font-bold tracking-[0.3em] uppercase text-xs hidden sm:block text-white">Rajat <span className="text-zinc-500">Commercial</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <a href="#overview" className="hover:text-amber-500 transition-colors">Overview</a>
            <a href="#specifications" className="hover:text-amber-500 transition-colors">Building Specs</a>
            <a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a>
          </div>

          <button className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-black px-6 py-3 hover:bg-amber-500 transition-all duration-300">
            Leasing Inquiry
          </button>
        </div>
      </nav>

      {/* --- 1. CORPORATE HERO (STRUCTURAL & BOLD) --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-end pt-32 pb-16 px-4 sm:px-8 lg:px-12 z-10 border-b border-white/10">
        
        {/* Massive Glass Façade Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0b]/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
            alt="Commercial Skyscraper" 
            className="w-full h-full object-cover object-bottom scale-105 animate-[pulse_30s_ease-in-out_infinite]"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-12">
          
          {/* Left Typography */}
          <div className="w-full lg:w-2/3">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-sm"></span>
              <span className="text-amber-500 text-[10px] tracking-[0.3em] uppercase font-black">LEED Platinum Certified</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] text-white uppercase">
              The Center <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">
                Of Commerce.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl font-light leading-relaxed tracking-wide mb-10">
              A 1.2 million sq. ft. Grade-A commercial hub designed for Fortune 500 headquarters. Unprecedented scale, advanced IT infrastructure, and unparalleled corporate prestige.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-max">
              <button className="w-full sm:w-auto px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.3)]">
                Download Investment Deck
              </button>
            </div>
          </div>

          {/* Right Leasing Card */}
          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <div className="bg-[#121214]/80 backdrop-blur-2xl border border-white/10 p-8 w-full shadow-2xl relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

              <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6">Current Leasing Velocity</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white font-bold text-2xl">84%</span>
                    <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">Leased</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-none overflow-hidden">
                    <div className="w-[84%] h-full bg-emerald-500"></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">Available Floor Plates</div>
                  <div className="text-xl font-bold text-white">25k - 100k Sq. Ft.</div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">Base Rate</div>
                  <div className="text-xl font-bold text-amber-500">Upon Request</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- 2. THE NUMBERS (STRICT CORPORATE GRID) --- */}
      <section id="overview" className="border-b border-white/5 bg-[#050505]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 flex flex-col items-start hover:bg-white/[0.02] transition-colors">
            <span className="text-amber-600 text-4xl mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </span>
            <span className="text-4xl font-black text-white mb-1">45</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Total Stories</span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col items-start hover:bg-white/[0.02] transition-colors">
            <span className="text-amber-600 text-4xl mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <span className="text-4xl font-black text-white mb-1">1.2M</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Rentable Sq. Ft.</span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col items-start hover:bg-white/[0.02] transition-colors">
            <span className="text-amber-600 text-4xl mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            <span className="text-4xl font-black text-white mb-1">100%</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">N+1 Power Redundancy</span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col items-start hover:bg-white/[0.02] transition-colors">
            <span className="text-amber-600 text-4xl mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
            </span>
            <span className="text-4xl font-black text-white mb-1">3.5k</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Parking Capacity</span>
          </div>
        </div>
      </section>

      {/* --- 3. INFRASTRUCTURE & ARCHITECTURE (ASYMMETRIC) --- */}
      <section id="specifications" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#0a0a0b] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">Built For The Future</h2>
              <p className="text-zinc-400 max-w-xl text-sm leading-relaxed">Engineered with column-free floor plates, structural smart-glass, and a central core design to maximize natural light and layout efficiency.</p>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] border border-amber-600 text-amber-500 px-6 py-3 hover:bg-amber-600 hover:text-black transition-colors">
              View Floor Plans
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Massive Interior Shot */}
            <div className="lg:col-span-8 h-[500px] lg:h-[700px] relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop" 
                alt="Corporate Lobby" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                <span className="bg-amber-600 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-3 inline-block">The Grand Atrium</span>
                <h3 className="text-3xl font-bold text-white">40-Foot Triple Height Lobby</h3>
              </div>
            </div>
            
            {/* Tech Specs List */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-8 pl-0 lg:pl-8">
              <div className="group">
                <div className="text-amber-500 font-mono text-lg mb-2">01</div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Destination Elevators</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">24 high-speed smart elevators utilizing AI-driven destination control to ensure sub-30 second wait times during peak hours.</p>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="group">
                <div className="text-amber-500 font-mono text-lg mb-2">02</div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Column-Free Plates</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Central core architecture providing 90% floor efficiency, allowing for highly flexible, open-plan corporate layouts.</p>
              </div>
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="group">
                <div className="text-amber-500 font-mono text-lg mb-2">03</div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Fiber-Optic Backbone</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Dual-fed telecommunications pathways from multiple ISPs ensuring zero internet downtime for mission-critical operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. INTEGRATED CORPORATE AMENITIES --- */}
      <section id="amenities" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold px-4 py-1.5 rounded-sm uppercase tracking-[0.2em] mb-4 border bg-zinc-900 text-zinc-300 border-zinc-700">
              <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Executive Lifestyle
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">World-Class Amenities</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">Designed not just for business, but for the people who drive it. The complex features an entire ecosystem to support employee wellness and executive networking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#0a0a0b] border border-white/5 p-10 hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl group-hover:bg-amber-600/10 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-amber-500 transition-colors">Executive Club</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">A private rooftop club on the 45th floor featuring Michelin-star dining, cigar lounges, and private boardroom suites.</p>
              <div className="text-[10px] font-mono font-bold text-zinc-600 border-t border-white/5 pt-4">LEVEL 45</div>
            </div>

            <div className="bg-[#0a0a0b] border border-white/5 p-10 hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl group-hover:bg-amber-600/10 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-amber-500 transition-colors">Wellness Center</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">A 15,000 sq. ft. commercial-grade fitness facility, complete with indoor lap pool, spa services, and dedicated yoga studios.</p>
              <div className="text-[10px] font-mono font-bold text-zinc-600 border-t border-white/5 pt-4">LEVEL 03</div>
            </div>

            <div className="bg-[#0a0a0b] border border-white/5 p-10 hover:border-amber-500/30 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl group-hover:bg-amber-600/10 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-amber-500 transition-colors">Retail Galleria</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">The ground pavilion hosts global luxury brands, artisanal cafes, and banking halls, creating a vibrant high-street experience.</p>
              <div className="text-[10px] font-mono font-bold text-zinc-600 border-t border-white/5 pt-4">GROUND PAVILION</div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. CORPORATE FOOTER / CONTACT --- */}
      <section className="py-24 px-4 bg-black border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-16 h-16 mx-auto bg-amber-600 flex items-center justify-center mb-8">
            <span className="font-serif text-white font-black text-2xl">R</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">Secure Your Legacy.</h2>
          <p className="text-zinc-400 text-sm mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Leasing for Phase 1 is now open for anchor tenants. Contact our corporate real estate team to discuss floor plate configurations and naming rights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-amber-500 transition-all duration-300">
              Contact Leasing Team
            </button>
            <button className="px-10 py-4 bg-transparent border border-zinc-700 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
             <span>© 2026 Rajat Commercial Real Estate.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
               <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
               <a href="#" className="hover:text-amber-500 transition-colors">Broker Portal</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}