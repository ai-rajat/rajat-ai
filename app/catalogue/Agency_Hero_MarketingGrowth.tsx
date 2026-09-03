'use client';

import { useState, useEffect } from 'react';

export default function Agency_Hero_MarketingGrowth({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'meta' | 'google' | 'tiktok'>('meta');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* --- 0. INTEGRATED GROWTH NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-800 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono font-bold text-xs">
                📈
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-neutral-200">SCALE \ <span className="text-emerald-400 font-bold">GROWTH</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <a href="#metrics" className="hover:text-emerald-400 transition-colors">Case Studies</a>
            <a href="#audit" className="hover:text-emerald-400 transition-colors">Funnels</a>
            <a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#audit" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Get Growth Audit
          </a>
        </div>
      </nav>

      {/* --- 1. HUGE HERO SECTION --- */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <section className="relative min-h-[100vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-40 pb-28 border-b border-neutral-800 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 text-xs tracking-[0.25em] uppercase font-bold">Growth & Conversion Agency</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
              Data-Driven Growth & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Explosive Revenue Scaling.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-12 font-light leading-relaxed tracking-wide">
              Scale customer acquisition, optimize conversion funnels, and maximize return on ad spend (ROAS) with performance marketing campaigns.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#audit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-2xl transition shadow-[0_0_40px_rgba(16,185,129,0.4)] uppercase tracking-wider text-xs">
                Get Free Growth Audit
              </a>
              <a href="#metrics" className="bg-neutral-900 hover:bg-neutral-800 text-emerald-300 font-medium px-10 py-5 rounded-2xl transition border border-emerald-950 uppercase tracking-wider text-xs">
                Explore Case Studies
              </a>
            </div>
          </div>

          {/* Interactive Growth Performance HUD Card */}
          <div className="lg:col-span-5 bg-neutral-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-emerald-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] uppercase px-4 py-1.5 font-bold rounded-bl-2xl">
              Live Campaign HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
              <button onClick={() => setActiveChannel('meta')} className={`text-xs px-4 py-2 rounded-xl transition ${activeChannel === 'meta' ? 'bg-emerald-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Meta Ads</button>
              <button onClick={() => setActiveChannel('google')} className={`text-xs px-4 py-2 rounded-xl transition ${activeChannel === 'google' ? 'bg-emerald-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>Google PPC</button>
              <button onClick={() => setActiveChannel('tiktok')} className={`text-xs px-4 py-2 rounded-xl transition ${activeChannel === 'tiktok' ? 'bg-emerald-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}>TikTok Scale</button>
            </div>

            <div className="space-y-4 bg-neutral-950 p-6 rounded-2xl border border-neutral-800">
              {activeChannel === 'meta' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Monthly Ad Spend</span><span className="text-white font-bold">$120,000</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Attributed Revenue</span><span className="text-emerald-400 font-bold">$408,000 (3.4x ROAS)</span></div>
                </>
              )}
              {activeChannel === 'google' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Search Intent Spend</span><span className="text-white font-bold">$85,000</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Attributed Revenue</span><span className="text-emerald-400 font-bold">$357,000 (4.2x ROAS)</span></div>
                </>
              )}
              {activeChannel === 'tiktok' && (
                <>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Spark Ads Spend</span><span className="text-white font-bold">$50,000</span></div>
                  <div className="flex justify-between items-center"><span className="text-neutral-400">Attributed Revenue</span><span className="text-emerald-400 font-bold">$195,000 (3.9x ROAS)</span></div>
                </>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-neutral-800 text-neutral-400 flex justify-between">
              <span>CAC Drop: -42%</span>
              <span className="text-emerald-400 font-bold">Target Exceeded (+340%)</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-neutral-800 bg-[#060608] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">+340%</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Average ROAS Lift</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">-42%</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Customer Acquisition Cost</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">$45M+</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Client Ad Spend Scaled</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-5xl mb-2">8.4%</span>
            <span className="text-emerald-400 uppercase tracking-widest text-[10px]">Funnel Conversion Rate</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & ACQUISITION GRID --- */}
      <section id="audit" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ PERFORMANCE ENGINE ]</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Engineered for Scale</h2>
          <p className="text-neutral-400 font-light">We combine creative iteration, rigorous funnel optimization, and attribution data to turn marketing into a predictable revenue machine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-emerald-500/50 transition-colors group">
            <div className="text-emerald-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-2xl font-bold text-white mb-3">Omnichannel Acquisition</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Executing high-converting ad strategies across Meta, Google Ads, LinkedIn, and TikTok platforms with dynamic creative testing.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl border-emerald-500/30 hover:border-emerald-500/50 transition-colors group">
            <div className="text-emerald-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-2xl font-bold text-white mb-3">Conversion Rate Optimization</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">A/B testing landing pages, streamlining checkout friction, and building high-intent user funnels for maximum average order value.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-3xl hover:border-emerald-500/50 transition-colors group">
            <div className="text-emerald-400 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-2xl font-bold text-white mb-3">Attribution & Analytics</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Advanced server-side tracking, custom attribution dashboards, and real-time revenue analytics to eliminate guesswork.</p>
          </div>
        </div>
      </section>

      {/* --- 4. CASE STUDIES & IMPACT METRICS --- */}
      <section id="metrics" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#060608] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-800 pb-8">
            <div>
              <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ VERIFIED RESULTS ]</span>
              <h2 className="text-4xl sm:text-6xl font-black text-white">Proven Case Studies</h2>
            </div>
            <p className="text-neutral-400 max-w-md text-sm leading-relaxed">See how we scaled e-commerce brands and SaaS giants from 6 figures to 8 figures in record quarterly cycles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="E-Commerce Scale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2 block">D2C E-Commerce • Scale</span>
              <h3 className="text-2xl font-bold text-white mb-3">Scaling Direct-to-Consumer Apparel to $12M ARR</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Restructured media buying funnels and overhauled creative testing frameworks, scaling monthly revenue from $40k to over $1M.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 group-hover:underline">Read Case Study →</span>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group overflow-hidden">
              <div className="h-72 bg-neutral-950 rounded-2xl mb-6 overflow-hidden relative border border-neutral-800">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" alt="SaaS Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
              </div>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2 block">B2B SaaS • Pipeline Growth</span>
              <h3 className="text-2xl font-bold text-white mb-3">Tripling Qualified Pipeline for B2B Cloud Platform</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">Implemented multi-touch attribution and LinkedIn ABM campaigns, reducing cost-per-lead by 55% while doubling enterprise demos.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 group-hover:underline">Read Case Study →</span>
            </div>
          </div>
        </div>
      </section>

            {/* --- 5. GRAND FOOTER CTA (ABSOLUTELY LAST) --- */}
      <section className="py-32 px-6 bg-black border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-8 text-3xl font-mono shadow-2xl">
            📈
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">Ready for Explosive Revenue Growth?</h2>
          <p className="text-neutral-400 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto">
            Book a complimentary growth audit and discover hidden revenue leaks in your current acquisition funnel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="#audit" className="px-12 py-5 bg-emerald-600 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              Claim Free Growth Audit
            </a>
            <a href="#metrics" className="px-12 py-5 bg-neutral-900 text-emerald-300 font-medium text-xs uppercase tracking-[0.25em] rounded-2xl hover:bg-neutral-800 transition border border-emerald-950">
              View Case Studies
            </a>
          </div>
          
          <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
             <span>© 2026 Scale Growth & Conversion Agency. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">Partner Portal</a>
               <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
             </div>
          </div>
        </div>
      </section>


      {/* --- 6. WHY CHOOSE US SECTION (NOW PLACED AT THE VERY END, RIGHT BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE SCALE ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Choose Us Over Traditional Agencies?</h2>
            <p className="text-neutral-400 font-light">We don't sell vanity metrics like impressions or clicks. We obsess over net profit, customer lifetime value, and compounding growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Skin in the Game</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Our incentive is tied directly to your top-line revenue growth. When you scale, we win together.</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Creative Testing Engine</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">We churn out 30+ high-performing ad variations monthly using custom UGC and motion graphics pipelines.</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-6 text-lg">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Server-Side Tracking</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">Bypass iOS privacy restrictions with advanced CAPI setup ensuring 99.8% data attribution accuracy.</p>
            </div>
          </div>
        </div>
      </section>

          </div>
  );
}