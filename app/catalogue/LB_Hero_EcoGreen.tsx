import { useState, useEffect } from 'react';

export default function LB_Standalone_EcoGreen({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeRemedy, setActiveRemedy] = useState<'oils' | 'skincare' | 'sessions'>('oils');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#06241b] text-[#f0fdf4] min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED BOTANICAL NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#06241b]/90 backdrop-blur-2xl border-b border-emerald-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-300 hover:text-white transition-colors bg-emerald-900/40 px-4 py-2 rounded-full border border-emerald-700/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                🌿
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-emerald-100">RAJAT <span className="text-emerald-400 font-light">\ BOTANICS</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-200/70">
            <a href="#catalogue" className="hover:text-emerald-400 transition-colors">Apothecary</a>
            <a href="#purity" className="hover:text-emerald-400 transition-colors">Botanical Purity</a>
            <a href="#consult" className="hover:text-emerald-400 transition-colors">Holistic Sessions</a>
          </div>

          <a href="#catalogue" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Organic Catalogue
          </a>
        </div>
      </nav>

      {/* --- 1. BOTANICAL SANCTUARY HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-emerald-900/50">
        
        {/* Soft Forest Light & Plant Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#06241b]/50 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06241b] via-[#06241b]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06241b]/90 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" 
            alt="Botanical Remedies" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_25s_ease-in-out_infinite] opacity-60"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-900/60 border border-emerald-500/40 mb-8 backdrop-blur-md shadow-md">
              <span className="text-emerald-300 text-xs">🌿</span>
              <span className="text-emerald-200 text-xs tracking-[0.2em] uppercase font-bold">100% Plant-Based Remedies</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6 leading-[1.05] text-white">
              Holistic Healing For <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 font-light">
                Mind & Body.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-emerald-100 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
              Shop our signature catalogue of organic essential oils, handcrafted vegan skincare, and book certified expert holistic sessions tailored for deep wellness.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#catalogue" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-10 py-4 rounded-xl transition shadow-[0_0_35px_rgba(16,185,129,0.4)] uppercase tracking-wider text-xs">
                Explore Organic Catalogue
              </a>
            </div>
          </div>

          {/* Right: Interactive Botanical HUD Card */}
          <div className="lg:col-span-5 bg-[#093025]/80 backdrop-blur-2xl p-8 rounded-[32px] border border-emerald-500/30 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-300 text-[9px] uppercase px-3.5 py-1 border-b border-l border-emerald-500/40 rounded-bl font-mono">
              Apothecary HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-emerald-900/60 pb-4">
              <button 
                onClick={() => setActiveRemedy('oils')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeRemedy === 'oils' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                Essential Oils
              </button>
              <button 
                onClick={() => setActiveRemedy('skincare')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeRemedy === 'skincare' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                Vegan Skincare
              </button>
              <button 
                onClick={() => setActiveRemedy('sessions')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeRemedy === 'sessions' ? 'bg-emerald-400 text-emerald-950 font-bold' : 'bg-emerald-950/60 text-emerald-300/70'}`}
              >
                Expert Sessions
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeRemedy === 'oils' && (
                <div className="bg-[#041a13] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Royal Cold-Pressed Lavender & Cedar</span>
                    <span className="text-emerald-400 font-bold">$38.00</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Steam-distilled therapeutic grade oil designed to calm the nervous system and induce deep sleep.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Source: Wild Harvested</span>
                    <span>100% Pure</span>
                  </div>
                </div>
              )}
              {activeRemedy === 'skincare' && (
                <div className="bg-[#041a13] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Botanical Renewal Face Elixir</span>
                    <span className="text-emerald-400 font-bold">$54.00</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Infused with organic rosehip, jojoba, and blue tansy to restore skin barrier and natural radiance.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Certification: Cruelty-Free Vegan</span>
                    <span>Zero Toxins</span>
                  </div>
                </div>
              )}
              {activeRemedy === 'sessions' && (
                <div className="bg-[#041a13] p-4 rounded-2xl border border-emerald-900/60 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>1-on-1 Ayurvedic Wellness Consultation</span>
                    <span className="text-emerald-400 font-bold">$90.00</span>
                  </div>
                  <div className="text-emerald-100/70 font-light">Personalized herbal prescription, lifestyle mapping, and nutritional roadmap with a certified master practitioner.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-300 font-mono border-t border-emerald-950">
                    <span>Duration: 60 Mins</span>
                    <span>Video / In-Person</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#041a13] p-3 rounded-xl border border-emerald-900/50">
                  <span className="text-emerald-400/60 block text-[10px] uppercase font-mono">Sustainability</span>
                  <span className="text-white font-bold text-sm">Glass Packaging</span>
                </div>
                <div className="bg-[#041a13] p-3 rounded-xl border border-emerald-900/50">
                  <span className="text-emerald-400/60 block text-[10px] uppercase font-mono">Formula</span>
                  <span className="text-emerald-400 font-bold text-sm">Doctor Formulated</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. BOTANICAL PURITY METRICS --- */}
      <section className="border-b border-emerald-900/40 bg-[#041a13] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-900/50">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl font-light mb-1">100%</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Plant-Based Active</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl font-light mb-1">Zero</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Synthetic Additives</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-serif text-4xl font-light mb-1">Wild</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Harvested Herbs</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-serif text-4xl font-light mb-1">Expert</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Certified Practitioners</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & HEALING GRID --- */}
      <section id="purity" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE HOLISTIC PROMISE ]</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">Rooted in Nature</h2>
          <p className="text-emerald-100/70 font-light">We combine ancient botanical wisdom with modern clinical science to deliver remedies that nurture your entire system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#093025]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
            <h3 className="text-2xl font-serif text-white mb-3">Therapeutic Essential Oils</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Extracts sourced directly from high-altitude organic farms, designed for aromatherapy and cellular renewal.</p>
          </div>
          <div className="bg-[#093025]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">💧</div>
            <h3 className="text-2xl font-serif text-white mb-3">Handcrafted Vegan Skincare</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Clean, waterless formulations packed with phytonutrients and antioxidants to protect your skin barrier.</p>
          </div>
          <div className="bg-[#093025]/60 border border-emerald-800/40 p-10 rounded-[32px] hover:border-emerald-400/50 transition-colors group">
            <div className="text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🧘</div>
            <h3 className="text-2xl font-serif text-white mb-3">Expert Holistic Sessions</h3>
            <p className="text-sm text-emerald-100/70 leading-relaxed font-light">Guidance from certified practitioners specializing in herbal medicine, meditation, and stress equilibrium.</p>
          </div>
        </div>
      </section>

      {/* --- 4. CATALOGUE CTA & FOOTER --- */}
      <section id="catalogue" className="py-28 px-6 bg-[#04140f] border-t border-emerald-900/50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 text-2xl shadow-lg">
            🌿
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Begin Your Healing Journey.</h2>
          <p className="text-emerald-100/60 text-sm mb-12 font-light leading-relaxed">
            Explore our organic catalogue or book your first consultation with our holistic wellness experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/shop" className="px-12 py-5 bg-emerald-500 text-emerald-950 font-bold text-xs uppercase tracking-[0.25em] rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_35px_rgba(16,185,129,0.3)]">
              Explore Organic Catalogue
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-emerald-950 text-[10px] font-mono uppercase tracking-widest text-emerald-300/40">
             © 2026 Rajat Botanics & Holistic Remedies. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}