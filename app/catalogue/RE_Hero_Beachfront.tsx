import { useState, useEffect } from 'react';

export default function RE_Standalone_Beachfront({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0c1821] text-[#f4f7f6] min-h-screen font-sans selection:bg-amber-400/30 selection:text-amber-200 overflow-hidden">
      
      {/* --- 0. DREAMY RESORT NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#0c1821]/85 backdrop-blur-2xl border-b border-amber-500/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/80 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <span className="font-serif text-[#0c1821] font-bold text-sm">R</span>
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-amber-100">Azure <span className="text-amber-400 font-light">Sanctuary</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/70">
            <a href="#villas" className="hover:text-amber-400 transition-colors">The Coast</a>
            <a href="#amenities" className="hover:text-amber-400 transition-colors">Experiences</a>
            <a href="#concierge" className="hover:text-amber-400 transition-colors">Private Dock</a>
          </div>

          <button className="text-[10px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(251,191,36,0.4)]">
            Reserve Retreat
          </button>
        </div>
      </nav>

      {/* --- 1. SUNSET GOLDEN HOUR HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-end pt-32 pb-20 px-6 sm:px-10 lg:px-16 z-10">
        
        {/* Soft Golden Sunset Ocean Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0c1821]/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1821] via-[#0c1821]/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1821]/80 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940&auto=format&fit=crop" 
            alt="Tropical Beachfront" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_25s_ease-in-out_infinite]"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-12">
          
          {/* Left Warm Typography */}
          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-400/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-300 text-[10px] tracking-[0.3em] uppercase font-bold">Private Island Aesthetic • Zero Distractions</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.8rem] font-light tracking-tight mb-6 leading-[1.02] text-white font-serif">
              Wake Up To <br />
              <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300">
                Endless Horizons.
              </span>
            </h1>
            
            <p className="text-lg text-amber-100/80 max-w-xl font-light leading-relaxed tracking-wide mb-12">
              Private white sand coves, warm tropical breezes, and fluid open-air architecture built seamlessly over crystal turquoise waters.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_35px_rgba(251,191,36,0.3)] rounded-full">
                Explore Private Coves
              </button>
            </div>
          </div>

          {/* Right Floating Glass Card */}
          <div className="w-full lg:w-5/12">
            <div className="bg-[#13222f]/70 backdrop-blur-2xl border border-amber-500/20 p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-6 flex justify-between items-center">
                <span>Retreat Overview</span>
                <span className="w-10 h-[1px] bg-amber-400/40"></span>
              </h3>
              
              <div className="space-y-5">
                <div className="flex justify-between items-end border-b border-amber-500/10 pb-4">
                  <span className="text-amber-200/60 text-xs uppercase tracking-widest">Valuation</span>
                  <span className="text-2xl font-serif text-white">$24,800,000</span>
                </div>
                <div className="flex justify-between items-end border-b border-amber-500/10 pb-4">
                  <span className="text-amber-200/60 text-xs uppercase tracking-widest">Shoreline Access</span>
                  <span className="text-xl font-serif text-white">Private Cove (200ft)</span>
                </div>
                <div className="flex justify-between items-end border-b border-amber-500/10 pb-4">
                  <span className="text-amber-200/60 text-xs uppercase tracking-widest">Private Jetty</span>
                  <span className="text-xl font-serif text-amber-300">Yacht & Seaplane Ready</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="text-amber-200/60 text-xs uppercase tracking-widest">Climate</span>
                  <span className="text-xl font-serif text-white">Year-Round Tropical</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- 2. WARM STATS STRIP --- */}
      <section className="border-y border-amber-500/10 bg-[#08121a] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-amber-500/10">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-1">200ft</span>
            <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">Private Beach</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-1">365</span>
            <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">Sunset Views</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-1">8,500</span>
            <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">Sq. Ft. Open Lanai</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-1">7-Star</span>
            <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">Resort Services</span>
          </div>
        </div>
      </section>

      {/* --- 3. CURATED SANCTUARY GALLERY --- */}
      <section id="villas" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-4">Organic Architecture</h2>
            <p className="text-amber-100/70 max-w-xl text-sm tracking-wide leading-relaxed">Built with natural travertine stone, warm teak wood, and sliding glass walls that bring the calming sound of ocean waves directly into your bedroom.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 h-[580px] relative group overflow-hidden rounded-[36px] border border-amber-500/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop" 
              alt="Outdoor Lanai" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-[#0c1821]/80 backdrop-blur-xl px-8 py-4 rounded-2xl border border-amber-500/30">
              <span className="block text-amber-400 text-[10px] uppercase tracking-widest mb-1">Open-Air Living</span>
              <span className="text-white font-serif text-xl">The Sunset Lanai</span>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="h-[274px] relative group overflow-hidden rounded-[32px] border border-amber-500/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop" 
                alt="Private Pool" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-[#0c1821]/80 backdrop-blur-xl px-5 py-2.5 rounded-xl border border-amber-500/30">
                <span className="text-white font-serif text-sm">Infinity Plunge Pool</span>
              </div>
            </div>
            <div className="h-[274px] relative group overflow-hidden rounded-[32px] border border-amber-500/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2940&auto=format&fit=crop" 
                alt="White Sand Beach" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-[#0c1821]/80 backdrop-blur-xl px-5 py-2.5 rounded-xl border border-amber-500/30">
                <span className="text-white font-serif text-sm">Private White Sands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. INTEGRATED BEACHFRONT SERVICES GRID --- */}
      <section id="amenities" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#08121a] border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.25em] mb-4 border bg-amber-500/10 text-amber-400 border-amber-400/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Resort Experiences
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">Designed For Pure Bliss</h2>
            <p className="text-amber-100/70 max-w-2xl mx-auto font-light leading-relaxed">Everything you need to disconnect from the world and reconnect with absolute tranquility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#13222f]/50 border border-amber-500/20 p-10 rounded-[32px] hover:border-amber-400/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-8 group-hover:scale-110 transition-transform">
                ⛵
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Private Seaplane & Dock</h3>
              <p className="text-sm text-amber-100/70 font-light leading-relaxed">Direct deep-water mooring for mega-yachts and a private helipad/seaplane landing platform just off the coast.</p>
            </div>

            <div className="bg-[#13222f]/50 border border-amber-500/20 p-10 rounded-[32px] hover:border-amber-400/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-8 group-hover:scale-110 transition-transform">
                🧘
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Beachfront Spa & Yoga</h3>
              <p className="text-sm text-amber-100/70 font-light leading-relaxed">Open-air bamboo yoga pavilions, holistic Ayurvedic spa therapists, and hydrotherapy massage pools overlooking the surf.</p>
            </div>

            <div className="bg-[#13222f]/50 border border-amber-500/20 p-10 rounded-[32px] hover:border-amber-400/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-8 group-hover:scale-110 transition-transform">
                🍹
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Sunset Cocktail Lounge</h3>
              <p className="text-sm text-amber-100/70 font-light leading-relaxed">A sunken fire pit lounge on the beach paired with a private mixologist bar to enjoy golden hour with close friends.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. WARM RESORT FOOTER --- */}
      <section id="concierge" className="py-32 px-6 bg-[#050b10] border-t border-amber-500/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-stone-950 mb-8 shadow-lg">
            <span className="font-serif italic text-2xl font-bold">R</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Your Tropical Escape Awaits.</h2>
          <p className="text-amber-100/60 text-sm mb-12 font-light leading-relaxed">
            Private viewings and yacht transfers are arranged exclusively through our coastal concierge division.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 font-bold text-xs uppercase tracking-[0.25em] rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(251,191,36,0.4)]">
            Connect With Coastal Concierge
          </button>
          
          <div className="mt-20 pt-8 border-t border-amber-500/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-amber-200/40">
             <span>© 2026 Azure Sanctuary Estates. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-amber-400 transition-colors">Island Charter</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
               <a href="#" className="hover:text-amber-400 transition-colors">Concierge</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}