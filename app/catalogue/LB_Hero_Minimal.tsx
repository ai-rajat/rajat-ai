import { useState, useEffect } from 'react';

export default function LB_Standalone_MinimalBoutique({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'coord' | 'linen' | 'footwear'>('coord');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fafafa] text-[#111111] min-h-screen font-sans selection:bg-black selection:text-white overflow-hidden">
      
      {/* --- 0. INTEGRATED ATELIER NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 hover:text-black transition-colors bg-gray-100 px-4 py-2 rounded-full border border-gray-200"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="font-serif tracking-[0.3em] uppercase text-sm font-bold text-black">RAJAT <span className="font-light text-gray-400">STUDIO</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500">
            <a href="#catalog" className="hover:text-black transition-colors">Catalog</a>
            <a href="#craftsmanship" className="hover:text-black transition-colors">Atelier Craft</a>
            <a href="#lookbook" className="hover:text-black transition-colors">Lookbook</a>
          </div>

          <a href="#catalog" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
            Shop Catalog
          </a>
        </div>
      </nav>

      {/* --- 1. MINIMALIST ATELIER HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-gray-200">
        
        {/* Soft Neutral Editorial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/60 mix-blend-overlay z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-[#fafafa]/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80" 
            alt="Minimalist Fashion Editorial" 
            className="w-full h-full object-cover object-center scale-105 opacity-80"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-block border border-gray-300 text-gray-800 bg-white/80 text-[10px] font-mono uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-8 backdrop-blur-md shadow-sm">
              Atelier Collection • Limited Edition
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight mb-6 leading-[1.05] text-black font-serif">
              Curated Essentials for the <br />
              <span className="font-bold italic text-gray-900">
                Modern Minimalist.
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl mb-10 font-medium leading-relaxed tracking-wide">
              Discover our exclusive range of premium plissé coord sets, tailored linen shirts, and handcrafted footwear designed for effortless elegance.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#catalog" className="bg-black hover:bg-gray-800 text-white font-bold px-10 py-4 rounded-full transition tracking-[0.2em] text-xs uppercase shadow-2xl">
                Shop The Catalogue
              </a>
            </div>
          </div>

          {/* Right: Interactive Lookbook Preview Card */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-2xl p-8 rounded-[32px] border border-gray-200 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-black text-white text-[9px] uppercase px-3 py-1 rounded-bl-xl font-mono">
              Lookbook HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-gray-200 pb-4">
              <button 
                onClick={() => setActiveCategory('coord')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeCategory === 'coord' ? 'bg-black text-white font-bold' : 'bg-gray-100 text-gray-500'}`}
              >
                Plissé Coord
              </button>
              <button 
                onClick={() => setActiveCategory('linen')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeCategory === 'linen' ? 'bg-black text-white font-bold' : 'bg-gray-100 text-gray-500'}`}
              >
                Linen Shirts
              </button>
              <button 
                onClick={() => setActiveCategory('footwear')}
                className={`text-xs px-3.5 py-1.5 rounded-full transition font-mono ${activeCategory === 'footwear' ? 'bg-black text-white font-bold' : 'bg-gray-100 text-gray-500'}`}
              >
                Footwear
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeCategory === 'coord' && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-2">
                  <div className="flex justify-between font-serif text-black text-base">
                    <span>Signature Plissé Coord Set</span>
                    <span className="font-bold">$180.00</span>
                  </div>
                  <div className="text-gray-600 font-light">Architectural accordion pleats with an effortless relaxed drape. Wrinkle-resistant luxury fabric.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-gray-500 font-mono border-t border-gray-200">
                    <span>Material: Japanese Recycled Poly</span>
                    <span>Unisex Fit</span>
                  </div>
                </div>
              )}
              {activeCategory === 'linen' && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-2">
                  <div className="flex justify-between font-serif text-black text-base">
                    <span>Oversized French Linen Shirt</span>
                    <span className="font-bold">$120.00</span>
                  </div>
                  <div className="text-gray-600 font-light">Woven from premium Normandy flax. Breathable, lightweight, and tailored with mother-of-pearl buttons.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-gray-500 font-mono border-t border-gray-200">
                    <span>Material: 100% Organic Linen</span>
                    <span>Pre-Washed</span>
                  </div>
                </div>
              )}
              {activeCategory === 'footwear' && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-2">
                  <div className="flex justify-between font-serif text-black text-base">
                    <span>Minimalist Leather Slip-Ons</span>
                    <span className="font-bold">$210.00</span>
                  </div>
                  <div className="text-gray-600 font-light">Handcrafted vegetable-tanned calfskin leather featuring a sleek low-profile silhouette.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-gray-500 font-mono border-t border-gray-200">
                    <span>Craft: Florence Atelier</span>
                    <span>Limited 50 Pairs</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-gray-100 p-3 rounded-xl border border-gray-200">
                  <span className="text-gray-500 block text-[10px] uppercase font-mono">Sustainability</span>
                  <span className="text-black font-bold text-sm">Zero Waste Cut</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-xl border border-gray-200">
                  <span className="text-gray-500 block text-[10px] uppercase font-mono">Delivery</span>
                  <span className="text-black font-bold text-sm">Carbon Neutral</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. ATELIER STATS BAND --- */}
      <section className="border-b border-gray-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
          <div className="flex flex-col items-center px-4">
            <span className="text-black font-serif text-4xl font-light mb-1">100%</span>
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Organic Fibers</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-black font-serif text-4xl font-light mb-1">Zero</span>
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Plastic Packaging</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-black font-serif text-4xl font-light mb-1">Hand</span>
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Finished Details</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-black font-serif text-4xl font-light mb-1">Global</span>
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Express Shipping</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & CRAFTSMANSHIP GRID --- */}
      <section id="craftsmanship" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE PHILOSOPHY ]</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-black mb-6">Designed to Endure</h2>
          <p className="text-gray-600 font-light">We reject fast fashion in favor of timeless proportions, exquisite fabrics, and uncompromising ethical production standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 p-10 rounded-[32px] hover:border-black transition-colors group shadow-sm">
            <div className="text-2xl mb-6 font-serif font-bold text-gray-400 group-hover:text-black transition-colors">01 /</div>
            <h3 className="text-2xl font-serif text-black mb-3">Conscious Sourcing</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">Every yard of linen, cotton, and plissé fabric is certified organic and traceable back to ethical family-run mills.</p>
          </div>
          <div className="bg-white border border-gray-200 p-10 rounded-[32px] hover:border-black transition-colors group shadow-sm">
            <div className="text-2xl mb-6 font-serif font-bold text-gray-400 group-hover:text-black transition-colors">02 /</div>
            <h3 className="text-2xl font-serif text-black mb-3">Architectural Drapes</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">Our garments are engineered through meticulous pattern-making to create fluid, gender-neutral silhouettes that move with you.</p>
          </div>
          <div className="bg-white border border-gray-200 p-10 rounded-[32px] hover:border-black transition-colors group shadow-sm">
            <div className="text-2xl mb-6 font-serif font-bold text-gray-400 group-hover:text-black transition-colors">03 /</div>
            <h3 className="text-2xl font-serif text-black mb-3">Zero-Waste Atelier</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">Fabric scraps are repurposed into artisan accessories or recycled into new threads, ensuring complete circularity.</p>
          </div>
        </div>
      </section>

      {/* --- 4. CATALOGUE CTA & FOOTER --- */}
      <section id="catalog" className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center text-white mb-8 text-xl font-serif">
            R
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-light mb-6">Elevate Your Wardrobe.</h2>
          <p className="text-gray-400 text-sm mb-10 font-light leading-relaxed">
            Explore the complete catalogue of minimalist essentials. Timeless pieces tailored for the discerning individual.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/shop" className="px-10 py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-gray-200 transition-all duration-300 shadow-xl">
              Shop The Catalogue
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-gray-800 text-[10px] font-mono uppercase tracking-widest text-gray-500">
             © 2026 Rajat Studio Minimalist Atelier. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}