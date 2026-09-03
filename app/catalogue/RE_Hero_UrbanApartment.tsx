'use client';

import { useState, useEffect } from 'react';

export default function RE_Standalone_UrbanApartment({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTier, setActiveTier] = useState<'premier' | 'signature' | 'penthouse'>('signature');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pricingData = {
    premier: { floors: '30 - 45', price: '$1.8M', beds: '2 BHK', sqft: '1,450' },
    signature: { floors: '46 - 65', price: '$3.2M', beds: '3 BHK', sqft: '2,200' },
    penthouse: { floors: '66 - 72', price: '$8.5M', beds: '4 BHK + Pool', sqft: '4,800' },
  };

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-cyan-900/50 selection:text-cyan-100 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP URBAN NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-2xl border-b border-cyan-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-300 hover:text-white transition-colors bg-slate-900/60 px-4 py-2 rounded-full border border-cyan-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                🏙️
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-slate-100">DOWNTOWN \ <span className="text-cyan-400 font-light">SKYLINE</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
            <a href="#residences" className="hover:text-cyan-400 transition-colors">The Residences</a>
            <a href="#amenities" className="hover:text-cyan-400 transition-colors">Sky Club</a>
            <a href="#inquire" className="hover:text-cyan-400 transition-colors">Concierge</a>
          </div>

          <a href="#inquire" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-white text-slate-950 px-8 py-3 rounded-full hover:bg-slate-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Schedule Tour
          </a>
        </div>
      </nav>

      {/* --- 1. CINEMATIC FULL-SCREEN HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-end px-4 sm:px-8 lg:px-16 pb-16 lg:pb-24 pt-32 z-10">
        {/* Immersive Cityscape Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" 
            alt="City Skyline" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite] opacity-60"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left: Elegant Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1 border-l-2 border-cyan-500 mb-8 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold">Rajat Estates • Downtown Skyline</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tighter mb-6 leading-[1.05] text-white font-serif">
              Elevate Your <br />
              <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                Existence.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-lg mb-10 font-light leading-relaxed tracking-wide">
              An architectural masterpiece rising 72 stories above the city. Featuring floor-to-ceiling acoustic glass, robotic parking, and panoramic skyline views.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
              <a href="#inquire" className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center">
                Schedule Private Tour
              </a>
              <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-slate-600 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                View Cinematic Film
              </button>
            </div>
          </div>

          {/* Right: Glassmorphism Floor Selector */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-8 flex justify-between items-center">
                <span>Select Residence Tier</span>
                <span className="w-8 h-[1px] bg-cyan-500/50"></span>
              </h3>

              {/* Tier Selection Tabs */}
              <div className="flex gap-2 mb-8 bg-slate-950/50 p-1 rounded-lg border border-white/5">
                {(['premier', 'signature', 'penthouse'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setActiveTier(tier)}
                    className={`flex-1 py-2 text-[10px] uppercase tracking-widest font-bold rounded-md transition-all duration-300 ${activeTier === tier ? 'bg-cyan-900/40 text-cyan-300 border border-cyan-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Dynamic Property Specs */}
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Floors</span>
                  <span className="text-2xl font-light text-white font-serif">{pricingData[activeTier].floors}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Layout</span>
                  <span className="text-xl font-light text-white font-serif">{pricingData[activeTier].beds}</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-xs uppercase tracking-widest">Area</span>
                  <span className="text-xl font-light text-white font-serif">{pricingData[activeTier].sqft} <span className="text-sm text-slate-500">SQ FT</span></span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="text-cyan-500 text-xs uppercase tracking-widest font-bold">Starting Price</span>
                  <span className="text-3xl font-light text-white font-serif">{pricingData[activeTier].price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. ARCHITECTURAL STATS BAND --- */}
      <section className="border-y border-white/5 bg-[#030814] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-center divide-x divide-white/10">
          <div className="flex flex-col flex-1 px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-2">72</span>
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Stories High</span>
          </div>
          <div className="flex flex-col flex-1 px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-2">360°</span>
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">City Panorama</span>
          </div>
          <div className="flex flex-col flex-1 px-4">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-2">15k</span>
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">SqFt Members Club</span>
          </div>
          <div className="flex flex-col flex-1 px-4 hidden sm:flex">
            <span className="text-white font-serif text-4xl sm:text-5xl font-light mb-2">2.4s</span>
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">High-Speed Elevators</span>
          </div>
        </div>
      </section>

      {/* --- 3. THE RESIDENCES (EDITORIAL BENTO) --- */}
      <section id="residences" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-4">The Residences</h2>
            <p className="text-slate-400 max-w-xl text-sm tracking-wide leading-relaxed">Where cutting-edge technology meets timeless Italian craftsmanship. Every detail is meticulously engineered for the modern elite.</p>
          </div>
          <button className="text-xs uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
            View Floorplans <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {/* Feature 1 */}
          <div className="md:col-span-8 bg-slate-900 border border-white/5 p-8 hover:border-cyan-500/30 transition-colors relative overflow-hidden flex items-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif text-white mb-2">Acoustic Glass Facade</h3>
              <p className="text-slate-300 text-sm max-w-md font-light">Triple-glazed floor-to-ceiling windows block city noise while framing uninterrupted skyline views.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#0a0f1e] to-[#020617] border border-white/5 p-8 hover:border-white/20 transition-colors relative overflow-hidden flex flex-col justify-between">
             <div className="relative z-10">
              <h3 className="text-xl font-serif text-white mb-2">Invisible Tech</h3>
              <p className="text-slate-400 text-xs font-light">Control climate, lighting, and blinds via the resident app or voice command.</p>
            </div>
            <div className="relative z-10 mt-6 bg-[#020617] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col items-center">
               <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Living Room Climate</div>
               <div className="w-20 h-20 rounded-full border-4 border-cyan-500/30 border-t-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                 <span className="text-xl font-light text-white">72°</span>
               </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="md:col-span-4 bg-[#050b1a] border border-white/5 p-8 hover:border-white/20 transition-colors flex flex-col justify-center">
             <span className="text-cyan-500 font-serif text-3xl mb-4">01.</span>
             <h3 className="text-lg font-serif text-white mb-2">Private Elevator Foyers</h3>
             <p className="text-slate-400 text-xs font-light leading-relaxed">Direct-to-residence biometric elevators ensuring absolute privacy and security for your family.</p>
          </div>

          {/* Feature 4 */}
          <div className="md:col-span-8 bg-[#050b1a] border border-white/5 p-8 hover:border-white/20 transition-colors relative overflow-hidden flex items-center">
             <div className="relative z-10 w-1/2 pr-6">
              <span className="text-cyan-500 font-serif text-3xl mb-4 block">02.</span>
              <h3 className="text-2xl font-serif text-white mb-2">Italian Minimalist Kitchens</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">Custom Poliform cabinetry, integrated Gaggenau appliances, and solid Calacatta marble countertops.</p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#050b1a] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* --- 4. EXCLUSIVE AMENITIES --- */}
      <section id="amenities" className="py-24 border-t border-white/5 bg-[#020510]">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-serif font-light text-white mb-16">The 40th Floor Sky Club</h2>
           <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-cyan-400 hover:scale-110 transition-transform bg-[#050b1a]">🏊</div>
               <span className="text-xs uppercase tracking-widest text-slate-300">Infinity Pool</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-cyan-400 hover:scale-110 transition-transform bg-[#050b1a]">🧘</div>
               <span className="text-xs uppercase tracking-widest text-slate-300">Wellness Spa</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-cyan-400 hover:scale-110 transition-transform bg-[#050b1a]">🚁</div>
               <span className="text-xs uppercase tracking-widest text-slate-300">Rooftop Helipad</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-cyan-400 hover:scale-110 transition-transform bg-[#050b1a]">🍷</div>
               <span className="text-xs uppercase tracking-widest text-slate-300">Wine Vault</span>
             </div>
           </div>
        </div>
      </section>

      {/* --- 5. ELEGANT FOOTER CTA --- */}
      <section id="inquire" className="relative py-32 overflow-hidden border-t border-white/10 bg-[#01030a]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">
            Your Skyline Awaits.
          </h2>
          <p className="text-slate-400 mb-12 font-light">
            Private viewings are available strictly by appointment. Register your interest to receive the complete floorplan brochure and pricing details.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 bg-[#050b1a] border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-colors flex-1"
            />
            <button type="button" className="px-8 py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-200 transition-colors">
              Request Brochure
            </button>
          </form>
          <div className="mt-12 flex justify-center gap-8 text-[10px] text-slate-600 uppercase tracking-widest">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Broker Portal</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Contact Concierge</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}