import { useState, useEffect } from 'react';

export default function LB_Standalone_BoldCTA({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeZone, setActiveZone] = useState<'power' | 'hybrid' | 'recovery'>('power');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-[#f4f4f5] min-h-screen font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      
      {/* --- 0. INTEGRATED ELITE ARENA NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 backdrop-blur-2xl border-b border-red-600/30 py-4 shadow-[0_4px_30px_rgba(220,38,38,0.2)]' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-red-500 hover:text-white transition-colors bg-red-950/40 px-4 py-2 rounded border border-red-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded bg-red-600 flex items-center justify-center text-white font-black shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                ⚡
              </div>
              <span className="font-black tracking-[0.25em] uppercase text-xs hidden sm:block text-white italic">RAJAT <span className="text-red-600">\ APEX</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400">
            <a href="#zones" className="hover:text-red-500 transition-colors">Training Zones</a>
            <a href="#telemetry" className="hover:text-red-500 transition-colors">Performance HUD</a>
            <a href="#trial" className="hover:text-red-500 transition-colors">Elite Coaching</a>
          </div>

          <a href="#trial" className="text-[10px] font-black uppercase tracking-[0.25em] bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all duration-300 shadow-[0_0_25px_rgba(220,38,38,0.5)]">
            Claim Free Trial
          </a>
        </div>
      </nav>

      {/* --- 1. HARDCORE ELITE HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b-8 border-red-600">
        
        {/* Dark Industrial Atmosphere & Red Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-950/40 to-black/95 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
            alt="Hardcore Gym Arena" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite] opacity-40"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter italic mb-2 text-white drop-shadow-xl">
              Crush Your Limits.
            </h1>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic mb-8 text-red-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              Forge Your Legacy.
            </h2>
            
            <p className="text-xl text-gray-300 max-w-xl mb-10 font-bold leading-relaxed tracking-wide drop-shadow-md">
              Elite personal training, state-of-the-art powerlifting zones, and hybrid conditioning programs powered by unmatched coaching.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#trial" className="bg-red-600 hover:bg-red-700 text-white font-black text-sm px-10 py-5 rounded-sm transition uppercase tracking-wider shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                Claim Free Trial
              </a>
              <span className="text-gray-300 font-bold uppercase tracking-widest text-xs bg-black/60 px-5 py-4 rounded border border-white/10 backdrop-blur-md">
                24/7 Access Included
              </span>
            </div>
          </div>

          {/* Right: Interactive Performance HUD Card */}
          <div className="lg:col-span-5 bg-[#0a0a0c]/90 backdrop-blur-2xl p-8 rounded-xl border border-red-600/40 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] uppercase px-3.5 py-1 font-mono font-bold rounded-bl">
              Apex HUD Telemetry
            </div>

            <div className="flex gap-2 mb-6 border-b border-zinc-800 pb-4">
              <button 
                onClick={() => setActiveZone('power')}
                className={`text-xs px-3.5 py-1.5 rounded transition font-mono uppercase tracking-wider ${activeZone === 'power' ? 'bg-red-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                Powerlifting
              </button>
              <button 
                onClick={() => setActiveZone('hybrid')}
                className={`text-xs px-3.5 py-1.5 rounded transition font-mono uppercase tracking-wider ${activeZone === 'hybrid' ? 'bg-red-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                Hybrid WOD
              </button>
              <button 
                onClick={() => setActiveZone('recovery')}
                className={`text-xs px-3.5 py-1.5 rounded transition font-mono uppercase tracking-wider ${activeZone === 'recovery' ? 'bg-red-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                Recovery Lab
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeZone === 'power' && (
                <div className="bg-black p-4 rounded border border-red-950 space-y-2">
                  <div className="flex justify-between font-bold text-white text-base uppercase tracking-wide">
                    <span>Eleiko Competition Rigs</span>
                    <span className="text-red-500">1,000 LB Rated</span>
                  </div>
                  <div className="text-gray-400 font-light">Calibrated steel plates, deadlift platforms with dampening turf, and monolithic combo racks.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-red-400 font-mono border-t border-zinc-900">
                    <span>Equipment: Swedish Steel</span>
                    <span>Uncompromising</span>
                  </div>
                </div>
              )}
              {activeZone === 'hybrid' && (
                <div className="bg-black p-4 rounded border border-red-950 space-y-2">
                  <div className="flex justify-between font-bold text-white text-base uppercase tracking-wide">
                    <span>MetCon Conditioning Arena</span>
                    <span className="text-red-500">VO2 Max Focus</span>
                  </div>
                  <div className="text-gray-400 font-light">SkiErgs, Assault Bikes, sled push tracks, and high-tensile climbing ropes for relentless endurance.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-red-400 font-mono border-t border-zinc-900">
                    <span>Program: High Intensity</span>
                    <span>Results Driven</span>
                  </div>
                </div>
              )}
              {activeZone === 'recovery' && (
                <div className="bg-black p-4 rounded border border-red-950 space-y-2">
                  <div className="flex justify-between font-bold text-white text-base uppercase tracking-wide">
                    <span>Cryo & Infrared Suite</span>
                    <span className="text-red-500">-110°C Chamber</span>
                  </div>
                  <div className="text-gray-400 font-light">Accelerate muscle recovery, reduce systemic inflammation, and flush lactic acid instantly.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-red-400 font-mono border-t border-zinc-900">
                    <span>Protocol: Athletic Care</span>
                    <span>Instant Rejuvenation</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-zinc-900/60 p-3 rounded border border-white/5">
                  <span className="text-zinc-500 block text-[10px] uppercase font-mono">Floor Area</span>
                  <span className="text-white font-bold text-sm">25,000 Sq. Ft.</span>
                </div>
                <div className="bg-zinc-900/60 p-3 rounded border border-white/5">
                  <span className="text-zinc-500 block text-[10px] uppercase font-mono">Coaching</span>
                  <span className="text-red-500 font-bold text-sm">Elite Certified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. ELITE PERFORMANCE METRICS --- */}
      <section className="border-b border-zinc-800 bg-[#030304] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-black text-4xl sm:text-5xl italic mb-1">24/7</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px] font-bold">Secure Access</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-black text-4xl sm:text-5xl italic mb-1">100+</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px] font-bold">Pro Machines</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-black text-4xl sm:text-5xl italic mb-1">1:1</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px] font-bold">Expert Coaching</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-black text-4xl sm:text-5xl italic mb-1">0%</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px] font-bold">Excuses Allowed</span>
          </div>
        </div>
      </section>

      {/* --- 3. TRAINING ZONES & SERVICES GRID --- */}
      <section id="zones" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-500 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ BUILT FOR WARRIORS ]</span>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white mb-6">Uncompromising Facilities</h2>
          <p className="text-gray-400 font-light">Every square foot of our arena is optimized for raw strength gains, explosive conditioning, and physical transformation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0b0b0e] border border-zinc-800 p-10 rounded-sm hover:border-red-600 transition-colors group">
            <div className="text-red-600 text-3xl font-black italic mb-6">01 //</div>
            <h3 className="text-2xl font-black uppercase italic tracking-wide text-white mb-3">Powerlifting Megalith</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Heavy-duty power cages, calibrated iron bumper plates, specialized monolifts, and aggressive chalk stations.</p>
          </div>
          <div className="bg-[#0b0b0e] border border-zinc-800 p-10 rounded-sm hover:border-red-600 transition-colors group">
            <div className="text-red-600 text-3xl font-black italic mb-6">02 //</div>
            <h3 className="text-2xl font-black uppercase italic tracking-wide text-white mb-3">Combat & Agility Turf</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">100-foot heavy sled push track, battle ropes, plyometric boxes, and professional speed bags.</p>
          </div>
          <div className="bg-[#0b0b0e] border border-zinc-800 p-10 rounded-sm hover:border-red-600 transition-colors group">
            <div className="text-red-600 text-3xl font-black italic mb-6">03 //</div>
            <h3 className="text-2xl font-black uppercase italic tracking-wide text-white mb-3">Sports Nutrition Bar</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Custom macro shakes, pharmaceutical-grade BCAAs, organic isolates, and clean energy fuel on tap.</p>
          </div>
        </div>
      </section>

      {/* --- 4. TRIAL CTA & FOOTER --- */}
      <section id="trial" className="py-28 px-6 bg-black border-t-8 border-red-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded bg-red-600 flex items-center justify-center text-white mb-8 text-2xl font-black shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            ⚡
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-white mb-6">Claim Your Territory.</h2>
          <p className="text-gray-400 text-sm mb-10 font-light leading-relaxed">
            Stop waiting for motivation. Build discipline with a 7-day all-access trial pass to the ultimate training facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/join" className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.25em] rounded-sm transition shadow-[0_0_35px_rgba(220,38,38,0.5)]">
              Claim Free Trial Now
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-zinc-900 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             © 2026 Rajat Apex Fitness & Performance Arena. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}