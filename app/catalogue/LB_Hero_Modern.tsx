import { useState, useEffect } from 'react';

export default function LB_Hero_Modern({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'coffee' | 'bakery' | 'gourmet'>('coffee');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f0d0b] text-[#f5f2eb] min-h-screen font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED ARTISAN CAFÉ NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#0f0d0b]/90 backdrop-blur-2xl border-b border-amber-500/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
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
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <span className="font-serif text-[#0f0d0b] font-bold text-sm">☕</span>
              </div>
              <span className="font-serif tracking-[0.25em] uppercase text-xs hidden sm:block text-amber-100">RAJAT <span className="text-amber-500 font-light">ROASTERY</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-amber-200/70">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Artisan Menu</a>
            <a href="#roastery" className="hover:text-amber-400 transition-colors">Bean-to-Cup</a>
            <a href="#ambience" className="hover:text-amber-400 transition-colors">Atmosphere</a>
          </div>

          <a href="#reserve" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-amber-500 hover:bg-amber-400 text-stone-950 px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
            Book a Table
          </a>
        </div>
      </nav>

      {/* --- 1. WARM ARTISAN CAFÉ HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-amber-500/10">
        
        {/* Background Warm Lighting & Café Interior */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0f0d0b]/40 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-[#0f0d0b]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b]/90 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" 
            alt="Artisan Café Brew" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_25s_ease-in-out_infinite]"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 backdrop-blur-md shadow-sm">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-amber-200 text-xs tracking-widest uppercase font-semibold">Rated 4.9/5 by Local Foodies</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5vrem] font-serif font-light tracking-tight mb-6 leading-[1.05] text-white">
              Artisan Coffee & <br />
              <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-orange-400">
                Wood-Fired Delights.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
              Experience the finest handcrafted signature brews, artisanal sourdough pastries, and gourmet dining crafted fresh daily by expert chefs.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#menu" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-full transition shadow-[0_0_30px_rgba(245,158,11,0.4)] uppercase tracking-wider text-xs">
                Explore Full Menu
              </a>
              <a href="#reserve" className="bg-black/60 hover:bg-black/80 text-white font-medium px-8 py-4 rounded-full transition backdrop-blur-md border border-white/20 uppercase tracking-wider text-xs">
                Book a Table
              </a>
            </div>
          </div>

          {/* Right: Interactive Live Menu Preview Card */}
          <div className="lg:col-span-5 bg-[#181512]/80 backdrop-blur-2xl p-8 rounded-[32px] border border-amber-500/20 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-400 text-[9px] uppercase px-3 py-1 border-b border-l border-amber-500/30 rounded-bl font-mono">
              Daily Fresh Batch HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
              <button 
                onClick={() => setActiveMenu('coffee')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeMenu === 'coffee' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-black/40 text-gray-400'}`}
              >
                Signature Brews
              </button>
              <button 
                onClick={() => setActiveMenu('bakery')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeMenu === 'bakery' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-black/40 text-gray-400'}`}
              >
                Sourdough
              </button>
              <button 
                onClick={() => setActiveMenu('gourmet')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeMenu === 'gourmet' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-black/40 text-gray-400'}`}
              >
                Wood-Fired
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeMenu === 'coffee' && (
                <div className="bg-black/50 p-4 rounded-2xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Ethiopian Yirgacheffe Pour-Over</span>
                    <span className="text-amber-400">$6.50</span>
                  </div>
                  <div className="text-gray-400 font-light">Notes of jasmine, bergamot, and wild blueberry. Roasted fresh in small batches.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-white/5">
                    <span>Origin: Sidama, Ethiopia</span>
                    <span>Single Origin</span>
                  </div>
                </div>
              )}
              {activeMenu === 'bakery' && (
                <div className="bg-black/50 p-4 rounded-2xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Cardamom Bun & Sourdough Croissant</span>
                    <span className="text-amber-400">$5.00</span>
                  </div>
                  <div className="text-gray-400 font-light">Laminated with French cultured butter and baked to a golden crisp every morning at 5 AM.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-white/5">
                    <span>Status: Freshly Baked</span>
                    <span>Limited Batch</span>
                  </div>
                </div>
              )}
              {activeMenu === 'gourmet' && (
                <div className="bg-black/50 p-4 rounded-2xl border border-amber-500/20 space-y-2">
                  <div className="flex justify-between font-serif text-white text-base">
                    <span>Truffle & Wild Mushroom Wood-Fired Pizza</span>
                    <span className="text-amber-400">$18.00</span>
                  </div>
                  <div className="text-gray-400 font-light">Fior di latte, roasted garlic cream, wild chanterelles, and black truffle oil drizzle.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-300 font-mono border-t border-white/5">
                    <span>Oven: Oak Wood-Fired</span>
                    <span>Chef's Special</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                  <span className="text-gray-500 block text-[10px] uppercase font-mono">Bean Roast</span>
                  <span className="text-white font-bold text-sm">Medium-Light</span>
                </div>
                <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                  <span className="text-gray-500 block text-[10px] uppercase font-mono">Organic Flour</span>
                  <span className="text-amber-400 font-bold text-sm">100% Stone-Ground</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. LIVE ROASTERY TELEMETRY TICKER --- */}
      <section className="border-y border-amber-500/10 bg-[#0c0a08] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-widest font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Roaster Temp: <strong className="text-white">212°C (First Crack)</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Daily Pastry Yield: <strong className="text-amber-400">450 Loaves/Buns</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Ethical Sourcing: <strong className="text-white">Direct Trade</strong></span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & EXPERIENCE GRID --- */}
      <section id="menu" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ CRAFTED WITH PASSION ]</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white mb-6">The Roastery Experience</h2>
          <p className="text-gray-400 font-light">From seed to cup and flour to crust, discover the meticulous dedication behind every single item served at our bar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#14110e] border border-amber-500/10 p-10 rounded-[32px] hover:border-amber-500/40 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform">☕</div>
            <h3 className="text-2xl font-serif text-white mb-3">Micro-Lot Brew Bar</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Featuring rare single-origin beans brewed via Chemex, V60, or siphon bar by our champion baristas.</p>
          </div>
          <div className="bg-[#14110e] border border-amber-500/10 p-10 rounded-[32px] hover:border-amber-500/40 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🌾</div>
            <h3 className="text-2xl font-serif text-white mb-3">Wild-Ferment Bakery</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Our signature sourdough starters are nurtured daily, creating breads with superior flavor and gut-friendly properties.</p>
          </div>
          <div className="bg-[#14110e] border border-amber-500/10 p-10 rounded-[32px] hover:border-amber-500/40 transition-colors group">
            <div className="text-amber-400 text-3xl mb-6 group-hover:scale-110 transition-transform">🔥</div>
            <h3 className="text-2xl font-serif text-white mb-3">Wood-Fired Kitchen</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">Open-flame culinary creations powered by seasoned oak wood, imparting a smoky, unforgettable depth of flavor.</p>
          </div>
        </div>
      </section>

      {/* --- 4. AMBIENCE & SUSTAINABILITY --- */}
      <section id="ambience" className="py-24 border-t border-amber-500/10 bg-[#0b0907]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-light text-white mb-6">A Space Designed for Connection</h2>
          <p className="text-gray-400 text-sm mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in acoustic calm surrounded by living botanical walls, reclaimed walnut timber furniture, and natural sunlight pouring through massive factory glass windows.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-amber-300 uppercase tracking-widest">
            <span className="bg-[#14110e] px-5 py-2.5 rounded-full border border-amber-500/20">🌱 100% Compostable Packaging</span>
            <span className="bg-[#14110e] px-5 py-2.5 rounded-full border border-amber-500/20">☀️ Solar Powered Roastery</span>
            <span className="bg-[#14110e] px-5 py-2.5 rounded-full border border-amber-500/20">🤝 Farmer Equity Program</span>
          </div>
        </div>
      </section>

      {/* --- 5. RESERVATION & FOOTER CTA --- */}
      <section id="reserve" className="py-28 px-6 bg-black border-t border-amber-500/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-600/10 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-8 text-2xl shadow-lg">
            🥐
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">Reserve Your Table Today</h2>
          <p className="text-gray-400 text-sm mb-10 font-light leading-relaxed">
            Whether it's a quiet morning corner for journaling or a lively weekend brunch with loved ones, we've saved a seat for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/reserve" className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-[0.2em] rounded-full transition shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              Book a Table Online
            </a>
            <a href="/menu" className="px-10 py-4 bg-[#14110e] hover:bg-[#1f1b17] text-amber-200 font-medium text-xs uppercase tracking-[0.2em] rounded-full transition border border-amber-500/20">
              View Seasonal Menu
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-gray-600">
             © 2026 Rajat Roastery & Artisan Kitchen. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}