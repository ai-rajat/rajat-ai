import { useState, useEffect } from 'react';

export default function Agency_Standalone_VideoEditor({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<'hook' | 'color' | 'audio'>('hook');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#09090b] text-[#fafafa] min-h-screen font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      
      {/* --- 0. INTEGRATED EDITORIAL STUDIO NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#09090b]/90 backdrop-blur-2xl border-b border-neutral-800 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
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
              <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)] font-mono font-bold text-xs">
                ▶
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-neutral-200">RAJAT \ <span className="text-red-500 font-bold">TECH</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            <a href="#showcase" className="hover:text-red-500 transition-colors">Reels Showcase</a>
            <a href="#timeline" className="hover:text-red-500 transition-colors">Timeline HUD</a>
            <a href="#workflow" className="hover:text-red-500 transition-colors">Color Grading</a>
          </div>

          <a href="#showcase" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-500 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.4)]">
            Book Editor
          </a>
        </div>
      </nav>

      {/* --- 1. CINEMATIC VIDEO EDITOR HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-32 pb-20 z-10 border-b border-neutral-800">
        
        {/* Red Ambient Glow & Dark Suite Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[#09090b]/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80" 
            alt="Video Editing Suite" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite] opacity-30"
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-red-400 text-xs tracking-[0.25em] uppercase font-bold">Cinematic Reels & Content Hub</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[1.05] text-white">
              High-Retention Video Editing & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                Aesthetic Visual Stories.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-400 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
              Transforming raw footage into viral Instagram Reels and high-impact cinematic clips using VN Video Editor, CapCut, and advanced color grading workflows.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#showcase" className="bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-xl transition shadow-[0_0_35px_rgba(239,68,68,0.4)] uppercase tracking-wider text-xs">
                Watch Reel Showcase
              </a>
            </div>
          </div>

          {/* Right: Interactive Timeline HUD Card */}
          <div className="lg:col-span-5 bg-neutral-900/90 backdrop-blur-2xl p-8 rounded-2xl border border-red-500/30 shadow-2xl font-mono text-xs relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] uppercase px-3 py-1 font-bold rounded-bl">
              Live NLE Timeline HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
              <button 
                onClick={() => setActiveWorkflow('hook')}
                className={`text-xs px-3.5 py-1.5 rounded transition ${activeWorkflow === 'hook' ? 'bg-red-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}
              >
                0-5s Hook
              </button>
              <button 
                onClick={() => setActiveWorkflow('color')}
                className={`text-xs px-3.5 py-1.5 rounded transition ${activeWorkflow === 'color' ? 'bg-red-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}
              >
                Color Grade
              </button>
              <button 
                onClick={() => setActiveWorkflow('audio')}
                className={`text-xs px-3.5 py-1.5 rounded transition ${activeWorkflow === 'audio' ? 'bg-red-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400'}`}
              >
                Audio Sync
              </button>
            </div>

            <div className="space-y-4">
              {activeWorkflow === 'hook' && (
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
                  <div className="flex justify-between text-red-400 font-bold">
                    <span> AGGRESSIVE VISUAL HOOK</span>
                    <span>00:00:04</span>
                  </div>
                  <div className="text-neutral-400">Kinetic typography pop-ups, speed ramp zoom, and sound design impact to prevent scroll drop-off.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-400 border-t border-neutral-900">
                    <span>Retention Boost: +34%</span>
                    <span>Pacing: Fast</span>
                  </div>
                </div>
              )}
              {activeWorkflow === 'color' && (
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
                  <div className="flex justify-between text-red-400 font-bold">
                    <span> MOODY CINEMATIC LOOK</span>
                    <span>Rec.709 HDR</span>
                  </div>
                  <div className="text-neutral-400">Teal and orange contrast balance with crushed blacks and ambient glow mapping for night drives.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-amber-400 border-t border-neutral-900">
                    <span>Platform: Instagram / TikTok</span>
                    <span>LUT: Custom Moody</span>
                  </div>
                </div>
              )}
              {activeWorkflow === 'audio' && (
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2">
                  <div className="flex justify-between text-red-400 font-bold">
                    <span> BEAT DROP SYNCHRONIZATION</span>
                    <span>44.1 kHz Stereo</span>
                  </div>
                  <div className="text-neutral-400">Transient matching for engine roars and rhythmic cuts synced directly to trending audio beats.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-cyan-400 border-t border-neutral-900">
                    <span>LUFS: -14 Standard</span>
                    <span>Clean Mix</span>
                  </div>
                </div>
              )}

              <div className="space-y-3 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                <div className="flex justify-between text-neutral-400 text-[10px]">
                  <span>00:00:00</span>
                  <span>00:00:05 (Hook)</span>
                  <span>00:00:15</span>
                </div>
                <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-red-600 w-1/4 h-full"></div>
                  <div className="bg-amber-500 w-1/2 h-full"></div>
                  <div className="bg-emerald-500 w-1/4 h-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Export Bitrate</span>
                  <span className="text-white font-bold text-sm">85 Mbps (4K)</span>
                </div>
                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">Avg Retention</span>
                  <span className="text-emerald-400 font-bold text-sm">84% Rating</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. TECHNICAL SPECS STRIP --- */}
      <section className="border-b border-neutral-800 bg-[#060608] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800 font-mono text-xs">
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-4xl mb-1">4K 60FPS</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px]">Master Output</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-4xl mb-1">84%</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px]">Viewer Retention</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-white font-bold text-3xl sm:text-4xl mb-1">CapCut / VN</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px]">Pro Workflows</span>
          </div>
          <div className="flex flex-col items-center px-4 hidden md:flex">
            <span className="text-white font-bold text-3xl sm:text-4xl mb-1">@rajat.tech</span>
            <span className="text-red-500 uppercase tracking-widest text-[10px]">Aesthetic Standard</span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & EDITING WORKFLOW GRID --- */}
      <section id="timeline" className="py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-red-500 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ PRECISION POST-PRODUCTION ]</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Engineered for Viral Reach</h2>
          <p className="text-neutral-400 font-light">Every frame is calculated to maximize engagement, aesthetic depth, and audience retention across Instagram and YouTube Shorts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-2xl hover:border-red-500/50 transition-colors group">
            <div className="text-red-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-2xl font-bold text-white mb-3">5-Second Retention Hooks</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Crafting aggressive visual openings, audio pacing sync, and kinetic typography overlays to minimize viewer drop-off.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-2xl border-red-500/30 hover:border-red-500/50 transition-colors group">
            <div className="text-red-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-2xl font-bold text-white mb-3">Aesthetic Driving Clips</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Curating moody night drives, ambient lighting edits, and smooth speed ramps optimized for Instagram page @rajat.tech.</p>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-10 rounded-2xl hover:border-red-500/50 transition-colors group">
            <div className="text-red-500 text-3xl font-mono mb-6 group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-2xl font-bold text-white mb-3">Pro Export & Bitrate</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">Exporting via CapCut and VN Video Editor with custom vertical aspect ratios and crystal-clear compression settings.</p>
          </div>
        </div>
      </section>

      {/* --- 4. SHOWCASE CTA & FOOTER --- */}
      <section id="showcase" className="py-28 px-6 bg-black border-t border-neutral-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/30 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 mb-8 text-2xl font-mono shadow-lg">
            ▶
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to Go Viral?</h2>
          <p className="text-neutral-400 text-sm mb-12 font-light leading-relaxed">
            Send your raw footage and let's craft high-retention cinematic reels that elevate your brand and audience reach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#showcase" className="px-12 py-5 bg-red-600 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl hover:bg-red-500 transition-all duration-300 shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              Watch Full Reel Showcase
            </a>
          </div>
          
          <div className="mt-20 pt-6 border-t border-neutral-900 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
             © 2026 Rax Studio Video Production & Post-Production. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}