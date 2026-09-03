'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Standalone_Security({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'waf' | 'threat' | 'rasp'>('waf');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#09090b] text-zinc-300 min-h-screen font-sans selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP SECURITY NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#09090b]/90 backdrop-blur-2xl border-b border-red-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-red-300 hover:text-white transition-colors bg-zinc-900/60 px-4 py-2 rounded-full border border-red-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                🛡️
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-zinc-200">RAJAT \ <span className="text-red-400 font-bold">SHIELD</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#command" className="hover:text-red-400 transition-colors">Command Center</a>
            <a href="#features" className="hover:text-red-400 transition-colors">Bento Grid</a>
            <a href="#why-choose-us" className="hover:text-red-400 transition-colors">Why Choose Us</a>
          </div>

          <a href="#cta" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.4)]">
            Deploy Shield
          </a>
        </div>
      </nav>

      {/* --- 1. HERO COMMAND CENTER --- */}
      <section id="command" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Background Grid & Red Glow */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-red-500/5 border border-red-500/20 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(239,68,68,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-red-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold">Threat Defense Perimeter Active</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Zero-Trust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 drop-shadow-sm">
              Architecture.
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-zinc-400 max-w-3xl mb-12 font-light leading-relaxed">
            Neutralize zero-day exploits before they execute. Enterprise-grade AI threat intelligence, automated RASP, and continuous cloud posture management.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center mb-16">
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:-translate-y-1 text-center">
              Deploy Shield
            </a>
            <a href="#cta" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md text-center">
              Read SOC2 Docs
            </a>
          </div>
        </div>

        {/* Hero Terminal Console */}
        <div className="relative z-10 w-full max-w-4xl mx-auto bg-black/60 backdrop-blur-2xl rounded-2xl border border-zinc-800 p-1 shadow-2xl">
          <div className="bg-zinc-900/50 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden border border-white/5">
            <div className="flex gap-2 mb-4 border-b border-zinc-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            <div className="space-y-2 text-zinc-400">
              <p><span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> Initializing global defense network...</p>
              <p><span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> Establishing encrypted tunnel: <span className="text-white">AES-256-GCM</span> [OK]</p>
              <p className="text-red-400 animate-pulse">WARNING: Unauthorized access attempt detected at IP: 192.168.x.x</p>
              <p><span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> Executing auto-mitigation protocol... <span className="text-emerald-400 font-bold">THREAT NEUTRALIZED (12ms)</span></p>
              <p><span className="text-emerald-500">➜</span> <span className="text-blue-400">~</span> System State: <span className="text-white font-bold bg-emerald-500/20 text-emerald-400 px-2 rounded">SECURE</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. LIVE METRICS TICKER --- */}
      <section className="border-y border-zinc-800/50 bg-black/40 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 font-mono text-xs sm:text-sm">
          <div className="flex flex-col">
            <span className="text-zinc-500 uppercase tracking-widest mb-1">Endpoints Secured</span>
            <span className="text-white font-bold text-xl">14,204,912</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 uppercase tracking-widest mb-1">Threats Blocked (24h)</span>
            <span className="text-red-400 font-bold text-xl">842.5K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 uppercase tracking-widest mb-1">Avg Mitigation Time</span>
            <span className="text-emerald-400 font-bold text-xl">&lt; 15ms</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500 uppercase tracking-widest mb-1">Compliance</span>
            <span className="text-white font-bold text-xl">SOC2 / ISO27001</span>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID FEATURES --- */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Absolute Visibility. <br/><span className="text-zinc-500">Zero Compromise.</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Our multi-layered defense architecture ensures that your application logic, databases, and APIs remain impenetrable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: WAF (Wide) */}
          <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:bg-zinc-900/80 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Next-Gen WAF & DDoS</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">L7 traffic filtering with ML-based pattern recognition. Absorbs massive volumetric attacks while keeping legitimate API traffic blazing fast.</p>
            </div>
            <div className="relative z-10 mt-6 flex gap-2">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">100Tbps Capacity</span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-1 rounded">Edge Deployed</span>
            </div>
          </div>

          {/* Card 2: Threat Intel (Square) */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:bg-zinc-900/80 transition-colors relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">AI Threat Intel</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Behavioral anomaly detection across your entire VPC using federated machine learning models.</p>
            </div>
            {/* Mock Graph */}
            <div className="w-full h-24 mt-6 flex items-end justify-between gap-1 border-b border-zinc-800 pb-2">
              {[40, 25, 60, 30, 85, 45, 90, 20].map((h, i) => (
                <div key={i} className={`w-full rounded-t-sm ${h > 70 ? 'bg-red-500' : 'bg-zinc-700'}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Card 3: RASP (Square) */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:bg-zinc-900/80 transition-colors">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Runtime Protection</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Application self-protection (RASP) blocks SQL injection and memory tampering from within the code execution layer.</p>
            </div>
            <div className="mt-6 p-3 bg-black rounded-lg border border-zinc-800 font-mono text-[10px] text-zinc-500 break-words">
              [RASP_AGENT] Hooks injected.<br/>
              [STATUS] Memory safe.<br/>
              <span className="text-emerald-500">Monitoring process PID: 1042</span>
            </div>
          </div>

          {/* Card 4: Secret Vault (Wide) */}
          <div className="md:col-span-2 bg-[linear-gradient(110deg,#18181b,45%,#27272a,55%,#18181b)] bg-[length:200%_100%] animate-[shimmer_8s_infinite] border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-white mb-4">Secret Leak Prevention</h3>
            <p className="text-zinc-400 text-base max-w-lg mb-6">
              Hardcode a password by mistake? We intercept git pushes, block API leaks in CI/CD pipelines, and automatically rotate compromised tokens.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold flex-wrap">
              <span className="flex items-center gap-2 text-white"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> GitHub App</span>
              <span className="flex items-center gap-2 text-white"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> GitLab CI</span>
              <span className="flex items-center gap-2 text-white"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> AWS KMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#040405] border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-red-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE SHIELD ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Security Teams Trust Rajat Shield</h2>
            <p className="text-zinc-400 font-light">Proactive threat mitigation designed to stay ahead of sophisticated nation-state actors and zero-day vulnerabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3">100% Autonomous Remediation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Zero human lag time. Automated defense protocols isolate compromised containers instantly upon threat trigger.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Compliance Auditing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Real-time posture mapping guarantees continuous readiness for SOC2, HIPAA, ISO27001, and GDPR audits.</p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Performance Penalty</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Kernel-level eBPF optimization ensures your microservices run at maximum speed with negligible latency overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. DEEP ARCHITECTURE PIPELINE --- */}
      <section className="py-24 border-t border-zinc-800/50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-white mb-16">The Mitigation Pipeline</h2>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-zinc-800 via-red-500/50 to-zinc-800 -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 bg-zinc-950 border border-zinc-800 p-8 rounded-2xl w-full max-w-sm">
                <div className="w-12 h-12 mx-auto bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xl font-black text-zinc-400 mb-6 shadow-xl">1</div>
                <h4 className="text-white font-bold text-lg mb-2">Traffic Ingestion</h4>
                <p className="text-zinc-500 text-sm">All edge traffic is routed through globally distributed proxy nodes.</p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-red-950/20 border border-red-900/50 p-8 rounded-2xl w-full max-w-sm backdrop-blur-xl">
                <div className="w-12 h-12 mx-auto bg-red-900 border border-red-500 rounded-full flex items-center justify-center text-xl font-black text-white mb-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]">2</div>
                <h4 className="text-red-400 font-bold text-lg mb-2">AI Inspection</h4>
                <p className="text-zinc-400 text-sm">Payloads are instantly analyzed for malicious signatures and zero-day behaviors.</p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-zinc-950 border border-zinc-800 p-8 rounded-2xl w-full max-w-sm">
                <div className="w-12 h-12 mx-auto bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xl font-black text-zinc-400 mb-6 shadow-xl">3</div>
                <h4 className="text-white font-bold text-lg mb-2">Action & Routing</h4>
                <p className="text-zinc-500 text-sm">Threats are dropped silently; clean traffic is forwarded to your origin servers.</p>
              </div>
           </div>
        </div>
      </section>

      {/* --- 6. HIGH CONVERSION CTA FOOTER --- */}
      <section id="cta" className="relative py-32 overflow-hidden border-t border-zinc-800 bg-[#09090b]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-red-900/30 via-zinc-950 to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            Stop Breaches. <br/> Start Building.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
            Join 4,000+ engineering teams who sleep better at night knowing their infrastructure is protected by RAJAT \ SECURITY.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="#cta" className="px-10 py-5 rounded-xl bg-white text-black font-black text-sm uppercase tracking-wider hover:bg-zinc-200 transition shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center">
              Start Free Trial
            </a>
            <a href="#cta" className="px-10 py-5 rounded-xl bg-transparent border border-zinc-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-900 transition text-center">
              Talk to an Expert
            </a>
          </div>
          <p className="mt-8 text-xs text-zinc-600 font-mono uppercase tracking-widest">
            No credit card required • SOC2 Compliant
          </p>

          <div className="mt-24 pt-8 border-t border-zinc-800/80 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             <span>© 2026 Rajat Security Systems. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-red-400 transition-colors">Compliance</a>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}