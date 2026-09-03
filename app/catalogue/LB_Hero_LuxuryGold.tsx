import { useState, useEffect } from 'react';

export default function LB_Standalone_LuxuryGold({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeVault, setActiveVault] = useState<'diamonds' | 'gold' | 'timepieces'>('diamonds');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#080706] text-[#fbf8f2] min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED ROYAL VAULT NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#080706]/90 backdrop-blur-2xl border-b border-amber-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400/80 hover:text-white transition-colors bg-amber-500/10 px-4 py-2 rounded-sm border border-amber-500/30 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 border border-amber-500/60 bg-amber-500/10 flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="-rotate-45 font-serif text-amber-400 font-bold text-sm">✦</span>
              </div>
              <span className="font-serif tracking-[0.3em] uppercase text-xs hidden sm:block text-amber-100">RAJAT <span className="text-amber-500 font-light">\ JEWELS</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/70">
            <a href="#collection" className="hover:text-amber-400 transition-colors">The Vault</a>
            <a href="#craft" className="hover:text-amber-400 transition-colors">Mastercraft</a>
            <a href="#bespoke" className="hover:text-amber-400 transition-colors">Private Commissions</a>
          </div>

          <a href="#collection" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-amber-600 to-yellow-500 text-stone-950 px-8 py-3 rounded-sm hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            Private Access
          </a>
        </div>
      </nav>

      {/* --- 1. ROYAL HERITAGE VAULT HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-amber-500/20">
        
        {/* Deep Obsidian & Gold Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#080706]/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/90 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80" 
            alt="Exquisite Jewellery" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite] opacity-60"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-amber-500/50"></span>
              <span className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-bold">EST. 1984 • Royal Heritage Collection</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-serif tracking-tight mb-6 leading-[1.05] text-white">
              Exquisite Craftsmanship. <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 font-black">
                Heritage Redefined.
              </span>
            </h1>
            
            <p className="text-lg text-stone-300 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
              Browse our exclusive digital showcase featuring bespoke diamond necklaces, pure heritage gold, and limited-edition luxury timepieces forged for eternity.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#collection" className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-stone-950 font-bold px-10 py-4 rounded-sm transition shadow-[0_0_35px_rgba(245,158,11,0.3)] uppercase tracking-[0.2em] text-xs">
                View Private Collection
              </a>
            </div>
          </div>

          {/* Right: Interactive Vault Preview Card */}
          <div className="lg:col-span-5 bg-[#12100e]/90 backdrop-blur-2xl p-8 rounded-2xl border border-amber-500/30 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-300 text-[9px] uppercase px-3.5 py-1 border-b border-l border-amber-500/40 rounded-bl font-mono">
              Secure Vault HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-amber-950 pb-4">
              <button 
                onClick={() => setActiveVault('diamonds')}
                className={`text-xs px-3.5 py-1.5 rounded-sm transition font-mono ${activeVault === 'diamonds' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'}`}
              >
                Diamonds
              </button>
              <button 
                onClick={() => setActiveVault('gold')}
                className={`text-xs px-3.5 py-1.5 rounded-sm transition font-mono ${activeVault === 'gold' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'}`}
              >
                Pure Gold
              </button>
              <button 
                onClick={() => setActiveVault('timepieces')}
                className={`text-xs px-3.5 py-1.5 rounded-sm transition font-mono ${activeVault === 'timepieces' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-900 text-stone-400'}`}
              >
                Timepieces
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeVault === 'diamonds' && (
                <div className="bg-[#080706] p-4 rounded-xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>The Imperial Crown Necklace</span>
                    <span className="text-amber-400 font-bold">14.2 CT</span>
                  </div>
                  <div className="text-stone-400 font-light">VVS1 clarity, conflict-free colorless diamonds set in hand-polished 18k white gold.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-amber-950">
                    <span>Certification: GIA Certified</span>
                    <span>Unique Piece</span>
                  </div>
                </div>
              )}
              {activeVault === 'gold' && (
                <div className="bg-[#080706] p-4 rounded-xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Royal Kundan Polki Choker</span>
                    <span className="text-amber-400 font-bold">24K Pure</span>
                  </div>
                  <div className="text-stone-400 font-light">Traditional uncut diamonds and pure gold foil work crafted by royal master artisans in Rajasthan.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-amber-950">
                    <span>Hallmark: BIS Certified</span>
                    <span>Heritage Line</span>
                  </div>
                </div>
              )}
              {activeVault === 'timepieces' && (
                <div className="bg-[#080706] p-4 rounded-xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Chronometre Royal Tourbillon</span>
                    <span className="text-amber-400 font-bold">Limited 10</span>
                  </div>
                  <div className="text-stone-400 font-light">Swiss mechanical movement housed in an 18k rose gold skeleton case with sapphire crystal.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-amber-950">
                    <span>Movement: Swiss Hand-Wound</span>
                    <span>Collectors Edition</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-500/10">
                  <span className="text-stone-500 block text-[10px] uppercase font-mono">Purity Standard</span>
                  <span className="text-white font-bold text-sm">100% Certified</span>
                </div>
                <div className="bg-stone-900/60 p-3 rounded-xl border border-amber-500/10">
                  <span className="text-stone-500 block text-[10px] uppercase font-mono">Insurance</span>
                  <span className="text-amber-400 font-bold text-sm">Global Transit Cover</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. HERITAGE GOLD METRICS --- */}
      <section className="border-b border-amber-500/20 bg-[#050404] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-amber-500/10">
          <div className="flex flex-col items-center px-4">
            <span className="text-amber-400 font-serif text-4xl font-light mb-1">42+</span>
            <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Years of Heritage</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-amber-400 font-serif text-4xl font-light mb-1">100%</span>
            <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Conflict-Free Gems</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-amber-400 font-serif text-4xl font-light mb-1">GIA</span>
            <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Certified Diamonds</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-amber-400 font-serif text-4xl font-light mb-1">Bespoke</span>
            <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">Custom Design</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & CRAFTSMANSHIP GRID --- */}
      <section id="craft" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE ATELIER STANDARD ]</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">Forged in Excellence</h2>
          <p className="text-stone-400 font-light">Every masterpiece undergoes hundreds of hours of intricate hand-carving, stone-setting, and rigorous quality audits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#12100e] border border-amber-500/20 p-10 rounded-2xl hover:border-amber-500/50 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform font-serif">✦</div>
            <h3 className="text-2xl font-serif text-white mb-3">Custom Diamond Setting</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">Work directly with our master gemologists to hand-select rare diamonds and design bespoke heirlooms.</p>
          </div>
          <div className="bg-[#12100e] border border-amber-500/20 p-10 rounded-2xl hover:border-amber-500/50 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform font-serif">⚖</div>
            <h3 className="text-2xl font-serif text-white mb-3">Heritage Gold Purity</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">Guaranteed hallmarked 24K and 18K gold refined using state-of-the-art spectroscopic assay testing.</p>
          </div>
          <div className="bg-[#12100e] border border-amber-500/20 p-10 rounded-2xl hover:border-amber-500/50 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform font-serif">⌛</div>
            <h3 className="text-2xl font-serif text-white mb-3">Horological Restoration</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">Specialized maintenance and antique restoration for vintage luxury timepieces and complex complications.</p>
          </div>
        </div>
      </section>

      {/* --- 4. PRIVATE COMMISSION & FOOTER --- */}
      <section id="collection" className="py-28 px-6 bg-black border-t border-amber-500/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-600/10 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-amber-400 mb-8 rotate-45 shadow-xl">
            <span className="-rotate-45 font-serif italic text-2xl font-bold">R</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Enter The Private Vault.</h2>
          <p className="text-stone-400 text-sm mb-12 font-light leading-relaxed">
            Private viewings are strictly by appointment at our secure atelier or via a secured virtual vault walkthrough.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/catalogue" className="px-12 py-5 bg-gradient-to-r from-amber-600 to-yellow-500 text-stone-950 font-bold text-xs uppercase tracking-[0.25em] rounded-sm hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 shadow-[0_0_35px_rgba(245,158,11,0.3)]">
              Request Private Access
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-amber-950 text-[10px] font-mono uppercase tracking-widest text-stone-600">
             © 2026 Rajat Heritage Jewels & Timepieces. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}