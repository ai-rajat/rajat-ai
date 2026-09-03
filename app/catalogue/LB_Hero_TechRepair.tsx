'import Link from \'next/link\';'
import { useState, useEffect } from 'react';

export default function LB_Hero_TechRepair({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'board' | 'screen' | 'data'>('board');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-mono selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      
      {/* --- 0. INTEGRATED CYBER LAB NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#030712]/90 backdrop-blur-2xl border-b border-cyan-500/20 py-4 shadow-[0_4px_30px_rgba(6,182,212,0.1)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cyan-400 hover:text-white transition-colors bg-cyan-950/60 px-3.5 py-1.5 border border-cyan-800/60 rounded"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-black shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                ⚡
              </div>
              <span className="tracking-[0.25em] uppercase text-xs hidden sm:block font-bold text-white">RAJAT <span className="text-cyan-400">\ LABS</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.25em] text-slate-400">
            <a href="#diagnostics" className="hover:text-cyan-400 transition-colors">Diagnostics</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Micro-Soldering</a>
            <a href="#warranty" className="hover:text-cyan-400 transition-colors">OEM Parts</a>
          </div>

          <a href="#quote" className="text-[10px] font-bold uppercase tracking-[0.2em] bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded transition-all duration-300 shadow-[0_0_20px_rgba(8,145,178,0.4)]">
            Instant Quote
          </a>
        </div>
      </nav>

      {/* --- 1. CYBER-LAB PRECISION HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col justify-center px-4 sm:px-8 lg:px-12 pt-32 pb-20 z-10 border-b border-cyan-950">
        
        {/* Background Grid & Circuit Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d40a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Typography */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-500/40 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-400 text-xs tracking-[0.25em] uppercase font-bold">ISO-9001 Certified Repair Facility</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 leading-[1.05] text-white">
              Revive Your Devices. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                Lightning Fast.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-10 font-light leading-relaxed">
              From micro-soldered motherboard fixes to custom rig assemblies. Original OEM components, instant diagnostics, and lifetime warranty assurance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#quote" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded transition shadow-[0_0_25px_rgba(8,145,178,0.5)] tracking-wider uppercase text-xs">
                Get Instant Quote
              </a>
              <a href="#services" className="bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-medium px-8 py-4 rounded transition border border-cyan-800/50 backdrop-blur-sm tracking-wider uppercase text-xs">
                Explore Lab Services
              </a>
            </div>
          </div>

          {/* Right: Interactive Diagnostics Simulation Card */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 rounded-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative">
            <div className="absolute top-0 right-0 bg-cyan-500/10 text-cyan-400 text-[9px] uppercase px-3 py-1 border-b border-l border-cyan-500/30 rounded-bl">
              Live Terminal HUD
            </div>

            <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
              <button 
                onClick={() => setActiveTab('board')}
                className={`text-xs px-3 py-1.5 rounded transition ${activeTab === 'board' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-950 text-slate-400'}`}
              >
                Motherboard
              </button>
              <button 
                onClick={() => setActiveTab('screen')}
                className={`text-xs px-3 py-1.5 rounded transition ${activeTab === 'screen' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-950 text-slate-400'}`}
              >
                OLED Panel
              </button>
              <button 
                onClick={() => setActiveTab('data')}
                className={`text-xs px-3 py-1.5 rounded transition ${activeTab === 'data' ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-950 text-slate-400'}`}
              >
                Data Recovery
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {activeTab === 'board' && (
                <div className="bg-slate-950 p-4 rounded border border-cyan-950 space-y-2">
                  <div className="text-cyan-400 font-bold"> Micro-Soldered BGA Reballing</div>
                  <div className="text-slate-400">Short circuit detected on VCC_MAIN line. Replacing PMIC chip and restoring traces.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-400 border-t border-slate-900">
                    <span>Status: SUCCESS</span>
                    <span>Yield: 99.8%</span>
                  </div>
                </div>
              )}
              {activeTab === 'screen' && (
                <div className="bg-slate-950 p-4 rounded border border-cyan-950 space-y-2">
                  <div className="text-cyan-400 font-bold"> OEM Glass & Digitizer Swap</div>
                  <div className="text-slate-400">Removing cracked Gorilla Glass under vacuum seal. Calibrating TrueTone sensors.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-emerald-400 border-t border-slate-900">
                    <span>Status: CALIBRATED</span>
                    <span>Time: 25 Mins</span>
                  </div>
                </div>
              )}
              {activeTab === 'data' && (
                <div className="bg-slate-950 p-4 rounded border border-cyan-950 space-y-2">
                  <div className="text-cyan-400 font-bold"> NAND Flash Chip Extraction</div>
                  <div className="text-slate-400">Water-damaged logic board. Direct pin-out data cloning initiated for photo/contact retrieval.</div>
                  <div className="flex justify-between items-center pt-2 text-[10px] text-cyan-300 border-t border-slate-900">
                    <span>Status: CLONING (84%)</span>
                    <span>Safe: 100%</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950 p-3 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Avg Repair Time</span>
                  <span className="text-white font-bold text-sm">38 Minutes</span>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">OEM Warranty</span>
                  <span className="text-cyan-400 font-bold text-sm">Lifetime</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. LIVE TELEMETRY TICKER --- */}
      <section className="border-y border-cyan-950 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-6 text-xs text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Lab Bench 01: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Devices Revived: <strong className="text-white">48,290+</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Success Rate: <strong className="text-cyan-400">99.4%</strong></span>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES & LAB CAPABILITIES GRID --- */}
      <section id="services" className="py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-bold mb-3 block">[ PRECISION ENGINEERING ]</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Advanced Diagnostic Services</h2>
          <p className="text-slate-400 font-light">Equipped with state-of-the-art thermal imaging, digital microscopes, and cleanroom stations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 font-bold text-xl mb-4 group-hover:scale-110 transition-transform">01 //</div>
            <h3 className="text-xl font-bold text-white mb-3">Motherboard Micro-Soldering</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Component-level repair for dead logic boards, shorted capacitors, and torn CPU/GPU traces using professional stereomicroscopes.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 font-bold text-xl mb-4 group-hover:scale-110 transition-transform">02 //</div>
            <h3 className="text-xl font-bold text-white mb-3">Data Recovery & Forensics</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Class-100 cleanroom extraction for severely crushed, burnt, or water-submerged storage media with zero data loss guarantee.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/50 transition-colors group">
            <div className="text-cyan-400 font-bold text-xl mb-4 group-hover:scale-110 transition-transform">03 //</div>
            <h3 className="text-xl font-bold text-white mb-3">Display & Laser Glass Repair</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">Precision fiber-optic laser removal of back glass and factory-grade OLED lamination without replacing entire housing units.</p>
          </div>
        </div>
      </section>

      {/* --- 4. WARRANTY & OEM STANDARDS --- */}
      <section id="warranty" className="py-24 border-t border-cyan-950 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Original OEM Parts Only. No Compromise.</h2>
          <p className="text-slate-400 text-sm mb-10 max-w-2xl mx-auto font-light">
            We source direct manufacturer components. Every repair is rigorously tested across 42 point diagnostics before leaving our cleanroom bench.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-cyan-400 uppercase tracking-widest">
            <span className="bg-cyan-950/60 px-4 py-2 border border-cyan-800/40 rounded">✓ Genuine Apple Parts Partner</span>
            <span className="bg-cyan-950/60 px-4 py-2 border border-cyan-800/40 rounded">✓ Samsung Authorized Components</span>
            <span className="bg-cyan-950/60 px-4 py-2 border border-cyan-800/40 rounded">✓ Lifetime Workmanship Guarantee</span>
          </div>
        </div>
      </section>

      {/* --- 5. CORPORATE FOOTER / QUOTE SECTION --- */}
      <section id="quote" className="py-24 px-4 bg-black border-t border-cyan-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-12 mx-auto rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 text-xl">
            ⚡
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">Ready For Revival?</h2>
          <p className="text-slate-400 text-sm mb-10 font-light">
            Drop off your device at our secure lab or book a courier pickup. Free diagnostic estimates within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/quote" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest transition shadow-[0_0_20px_rgba(8,145,178,0.5)]">
              Request Instant Quote
            </a>
            <a href="/book" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-medium text-xs uppercase tracking-widest transition border border-cyan-800/50">
              Book Repair Slot
            </a>
          </div>
          
          <div className="mt-16 pt-6 border-t border-slate-900 text-[10px] text-slate-600 uppercase tracking-widest">
             © 2026 Rajat Labs. Certified Electronics Repair & Forensic Data Recovery.
          </div>
        </div>
      </section>

    </div>
  );
}