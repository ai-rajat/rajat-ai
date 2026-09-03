import { useState, useEffect } from 'react';

export default function RE_Standalone_LuxuryVilla() {
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0c0a09] text-[#f5f5f4] min-h-screen font-sans selection:bg-amber-700/50 selection:text-amber-100 overflow-hidden">
      
      {/* --- 0. INTEGRATED VVIP NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0c0a09]/90 backdrop-blur-2xl border-b border-stone-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 border border-amber-500 flex items-center justify-center rotate-45">
              <span className="-rotate-45 font-serif text-amber-500 font-bold">R</span>
            </div>
            <span className="font-serif tracking-[0.2em] uppercase text-sm">Rajat Estates</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
            <a href="#gallery" className="hover:text-amber-400 transition-colors">The Gallery</a>
            <a href="#blueprint" className="hover:text-amber-400 transition-colors">Blueprints</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Concierge</a>
          </div>

          <button className="text-[10px] font-bold uppercase tracking-[0.2em] border border-stone-700 px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300">
            Client Portal
          </button>
        </div>
      </nav>

      {/* --- 1. ARCHITECTURAL HERO (PANORAMIC & GRIDDED) --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 lg:px-12 z-10 border-b border-stone-800">
        
        {/* Top Coordinates Indicator */}
        <div className="relative z-20 w-full flex justify-between items-center border-b border-stone-800/50 pb-6 mb-8">
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            Exclusive Collection
          </div>
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-[0.3em] hidden sm:block">
            Lat 34.0259° N <span className="text-amber-500 mx-2">|</span> Lon 118.7798° W
          </div>
        </div>

        {/* Massive Immersive Background */}
        <div className="absolute inset-0 z-0 top-[180px] bottom-0 mx-4 sm:mx-8 lg:mx-12 overflow-hidden border border-stone-800 rounded-sm">
          <div className="absolute inset-0 bg-[#0c0a09]/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent z-10 opacity-90"></div>
          <img 
            src="https://images.unsplash.com/photo-1613490908578-81c2231b0fc4?q=80&w=2940&auto=format&fit=crop" 
            alt="Cliffside Luxury Villa" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_25s_ease-in-out_infinite]"
          />
        </div>

        {/* Hero Typography & CTA */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-12 pb-12 mt-auto">
          <div className="w-full lg:w-2/3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tighter mb-6 leading-[0.95] text-white">
              The Cliffside <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Sanctuary.
              </span>
            </h1>
            <p className="text-lg text-stone-400 max-w-xl font-light leading-relaxed tracking-wide">
              An architectural triumph carved into the coastal cliffs. 12,500 sq. ft. of bespoke Italian interiors, a cantilevered infinity pool, and unbroken ocean horizons.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end gap-6">
            <div className="bg-stone-950/80 backdrop-blur-xl border border-stone-700 p-8 w-full max-w-sm shadow-2xl">
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-2">Offered At</div>
              <div className="text-3xl font-serif text-white mb-8">$42,500,000</div>
              <button className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                Request Viewing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. BLUEPRINT SPECIFICATIONS --- */}
      <section id="blueprint" className="border-b border-stone-800 bg-[#0c0a09]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-800">
          <div className="p-8 sm:p-12 flex flex-col justify-center hover:bg-stone-900/30 transition-colors">
            <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Total Estate Area</span>
            <span className="text-3xl sm:text-4xl font-serif text-white">4.2 <span className="text-base text-stone-500">ACRES</span></span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center hover:bg-stone-900/30 transition-colors">
            <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Living Space</span>
            <span className="text-3xl sm:text-4xl font-serif text-white">12.5k <span className="text-base text-stone-500">SQFT</span></span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center hover:bg-stone-900/30 transition-colors">
            <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Accommodations</span>
            <span className="text-3xl sm:text-4xl font-serif text-white">7 <span className="text-base text-stone-500">BEDS</span></span>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center hover:bg-stone-900/30 transition-colors">
            <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Automotive Gallery</span>
            <span className="text-3xl sm:text-4xl font-serif text-white">12 <span className="text-base text-stone-500">CARS</span></span>
          </div>
        </div>
      </section>

      {/* --- 3. THE ESTATE GALLERY --- */}
      <section id="gallery" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#0c0a09] relative z-10 border-b border-stone-800">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-4">Masterful Design</h2>
            <p className="text-stone-400 max-w-xl text-sm tracking-wide leading-relaxed">Engineered with structural glass and poured concrete to seamlessly blend indoor and outdoor living.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 h-[600px] relative group overflow-hidden border border-stone-800">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop" 
              alt="Villa Interior" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-[#0c0a09]/80 backdrop-blur-md px-6 py-3 border border-stone-700">
              <span className="block text-amber-500 text-[10px] uppercase tracking-widest mb-1">The Great Room</span>
              <span className="text-white font-serif text-lg">24-Foot Ceilings</span>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="h-[288px] relative group overflow-hidden border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1579624519967-33a39e71ec91?q=80&w=2940&auto=format&fit=crop" 
                alt="Wine Cellar" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-[#0c0a09]/80 backdrop-blur-md px-4 py-2 border border-stone-700">
                <span className="text-white font-serif text-sm">3,000-Bottle Cellar</span>
              </div>
            </div>
            <div className="h-[288px] relative group overflow-hidden border border-stone-800">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop" 
                alt="Infinity Pool" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-4 z-20 bg-[#0c0a09]/80 backdrop-blur-md px-4 py-2 border border-stone-700">
                <span className="text-white font-serif text-sm">Saltwater Infinity Edge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. INTEGRATED SERVICES GRID (CONCIERGE & AMENITIES) --- */}
      <section id="services" className="py-24 px-4 sm:px-8 lg:px-12 bg-[#0a0807] border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border bg-amber-500/10 text-amber-500 border-amber-500/30">
              White-Glove Management
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Private Concierge Services</h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light">Ownership includes lifetime access to our globally connected private staff network. Your estate operates like a 7-star resort seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#0f0c0b] border border-stone-800 p-8 hover:border-amber-500/40 transition-colors group">
              <div className="text-amber-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Estate Management</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">Full-time residential manager overseeing landscaping, pool maintenance, and structural upkeep year-round.</p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-[#0f0c0b] border border-stone-800 p-8 hover:border-amber-500/40 transition-colors group">
              <div className="text-amber-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Tactical Security</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">Former elite military personnel providing 24/7 perimeter patrol, drone surveillance, and biometric access control.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0f0c0b] border border-stone-800 p-8 hover:border-amber-500/40 transition-colors group">
              <div className="text-amber-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Culinary & Staffing</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">Access to Michelin-star private chefs, licensed sommeliers, and highly trained butlers available on 12-hour notice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PRIVATE BROKERAGE FOOTER --- */}
      <section className="py-24 px-4 bg-[#070605] text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-12 mx-auto border border-amber-500/30 flex items-center justify-center text-amber-500 mb-8 rotate-45 hover:rotate-180 transition-transform duration-700 cursor-pointer">
            <div className="-rotate-45 font-serif italic text-xl">R</div>
          </div>
          <h2 className="text-3xl font-serif text-white mb-6">Acquire The Extraordinary.</h2>
          <p className="text-stone-500 text-sm mb-12 font-light">
            Due to the exclusive nature of this estate, precise location details and full architectural blueprints are provided strictly upon verification of funds.
          </p>
          <button className="px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-500 transition-all duration-300">
            Contact Lead Broker
          </button>
          
          <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-stone-600">
             <span>© 2026 Rajat Estates. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-amber-500 transition-colors">Legal</a>
               <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
               <a href="#" className="hover:text-amber-500 transition-colors">Broker Portal</a>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}