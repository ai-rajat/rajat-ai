'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Standalone_DevOps({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'cluster' | 'ebpf' | 'gitops'>('cluster');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] text-zinc-300 min-h-screen font-mono selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* --- 0. INTEGRATED VVIP DEVOPS NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-cyan-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-300 hover:text-white transition-colors bg-zinc-900/60 px-4 py-2 rounded-full border border-cyan-800/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                ⚡
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-white font-bold">SENTINEL \ <span className="text-cyan-400 font-light">OPS</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#why-choose-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a>
            <a href="#deploy" className="hover:text-cyan-400 transition-colors">CLI Install</a>
          </div>

          <a href="#deploy" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            Initialize Cluster
          </a>
        </div>
      </nav>

      {/* --- 1. HERO CONTROL PLANE --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Background Grid & Cyan Glow */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#13202e_1px,transparent_1px),linear-gradient(to_bottom,#13202e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm bg-cyan-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
              <span className="w-2 h-2 rounded-sm bg-cyan-500/50"></span>
              <span className="w-2 h-2 rounded-sm bg-cyan-500/20"></span>
            </div>
            <span className="text-cyan-300 text-xs sm:text-sm tracking-widest font-bold">Kube-Agent v4.2 Deployed</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Absolute <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-sm font-sans italic pr-2">
              Observability.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed font-sans">
            The command center for modern DevOps. Auto-heal Kubernetes clusters, trace microservice bottlenecks, and deploy with zero downtime.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-20 font-sans">
            <a href="#deploy" className="w-full sm:w-auto px-10 py-4 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 text-center">
              Initialize Cluster
            </a>
            <a href="#deploy" className="w-full sm:w-auto px-10 py-4 rounded-md bg-[#0a0a0a] border border-zinc-700 text-cyan-400 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-zinc-900 text-center">
              $ read_docs
            </a>
          </div>
        </div>

        {/* Hero Interactive Terminal & Topology Map */}
        <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
          
          {/* CLI Terminal */}
          <div className="flex-1 bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-[#111] border-b border-zinc-800 px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-zinc-500 tracking-widest">user@devops-sentinel:~</span>
              <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              </div>
            </div>
            <div className="p-6 text-xs sm:text-sm text-zinc-400 leading-relaxed overflow-x-auto whitespace-pre">
              <span className="text-emerald-400">➜</span> <span className="text-cyan-400">~</span> rajat-cli apply -f production-cluster.yaml
              <br/>
              <span className="text-zinc-500">{"["}INFO{"]"} Provisioning nodes across 3 availability zones...</span>
              <br/>
              <span className="text-emerald-500">{"["}OK{"]"} Control plane initialized in us-east-1a (120ms)</span>
              <br/>
              <span className="text-emerald-500">{"["}OK{"]"} Worker nodes attached (3/3)</span>
              <br/>
              <span className="text-zinc-500">{"["}INFO{"]"} Injecting eBPF tracing agents into pods...</span>
              <br/>
              <span className="text-amber-400 animate-pulse">{"["}WARN{"]"} High memory usage detected in redis-cache-0</span>
              <br/>
              <span className="text-emerald-500">{"["}OK{"]"} Auto-scaling triggered. New pod spinning up...</span>
              <br/>
              <span className="text-cyan-400 mt-4 block">Cluster is healthy and receiving traffic. 🚀</span>
            </div>
          </div>

          {/* Topology Map */}
          <div className="flex-1 bg-[#0a0a0a]/90 backdrop-blur-2xl p-6 rounded-xl border border-zinc-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
             <div className="flex justify-between items-center mb-6">
                <span className="text-xs tracking-widest text-cyan-500 uppercase">Live Topology</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">ALL SYSTEMS NOMINAL</span>
             </div>
             
             {/* Fake Network Graph */}
             <div className="flex-grow flex items-center justify-center relative">
                <div className="absolute w-full h-0.5 bg-zinc-800 top-1/2 -translate-y-1/2 z-0"></div>
                
                <div className="flex justify-between w-full z-10 px-4">
                   {/* Node 1 */}
                   <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded bg-zinc-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                     </div>
                     <span className="text-[10px] text-zinc-500">Ingress</span>
                   </div>
                   
                   {/* Node 2 */}
                   <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center relative">
                        <div className="absolute inset-0 border border-cyan-400/20 rounded animate-[ping_3s_infinite]"></div>
                        <span className="text-xs text-white">API</span>
                     </div>
                     <span className="text-[10px] text-zinc-500">Services</span>
                   </div>
                   
                   {/* Node 3 */}
                   <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                        <span className="text-xs text-zinc-400">DB</span>
                     </div>
                     <span className="text-[10px] text-zinc-500">Storage</span>
                   </div>
                </div>
             </div>
             
             <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between text-[10px] text-zinc-500">
               <span>Latency: 4.2ms</span>
               <span>Requests: 14k/sec</span>
             </div>
          </div>

        </div>
      </section>

      {/* --- 2. DEEP SYSTEM METRICS --- */}
      <section className="border-y border-zinc-800/50 bg-[#050505] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-[10px] sm:text-xs tracking-widest text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> US-EAST (N. VIRGINIA)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> EU-CENTRAL (FRANKFURT)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> AP-SOUTH (MUMBAI)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span> AP-EAST (HONG KONG) - SCALING
          </div>
        </div>
      </section>

      {/* --- 3. INFRA BENTO GRID --- */}
      <section id="capabilities" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
        <div className="text-center mb-20 font-mono">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{"{"} capabilities {"}"}</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm">Deploy faster. Monitor deeper. Sleep better.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: Distributed Tracing (Wide) */}
          <div className="md:col-span-2 bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Trace.Analyze()</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">Pinpoint exactly where your microservices are lagging. Our eBPF-powered agents collect OpenTelemetry data with zero overhead.</p>
            </div>
            {/* Waterfall UI Mockup */}
            <div className="relative z-10 mt-6 space-y-1.5">
               <div className="w-full flex items-center text-[10px] font-mono">
                 <div className="w-24 text-zinc-500">GET /api/users</div>
                 <div className="h-2 bg-blue-500/80 rounded w-1/4 ml-4"></div>
               </div>
               <div className="w-full flex items-center text-[10px] font-mono">
                 <div className="w-24 text-zinc-500 text-right pr-2">↳ auth_check</div>
                 <div className="h-2 bg-emerald-500/80 rounded w-16 ml-[calc(25%+1rem)]"></div>
               </div>
               <div className="w-full flex items-center text-[10px] font-mono">
                 <div className="w-24 text-zinc-500 text-right pr-2">↳ db_query</div>
                 <div className="h-2 bg-amber-500/80 rounded w-1/3 ml-[calc(25%+4rem+1rem)]"></div>
               </div>
            </div>
          </div>

          {/* Card 2: Auto-Healing (Square) */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Pod.Heal()</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">AI detects OOM (Out of Memory) errors and automatically restarts or scales pods before failure.</p>
            </div>
            <div className="mt-6 flex flex-col gap-2 font-mono text-[10px]">
              <div className="flex justify-between items-center bg-[#111] p-2 rounded border border-zinc-800 text-zinc-400">
                <span>worker-node-1</span>
                <span className="text-red-400">OOM KILLED</span>
              </div>
              <div className="flex justify-between items-center bg-[#111] p-2 rounded border border-emerald-500/30 text-white">
                <span>worker-node-2</span>
                <span className="text-emerald-400">RUNNING (New)</span>
              </div>
            </div>
          </div>

          {/* Card 3: GitOps (Square) */}
          <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/30 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 font-mono">GitOps.Sync()</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Declarative infrastructure. Push to main, and let ArgoCD sync your desired state safely.</p>
            </div>
            <div className="mt-6 text-[10px] text-zinc-500 font-mono">
              <span className="text-blue-400 font-bold text-lg block mb-1">git push origin main</span>
              ↳ Triggers CI pipeline<br/>
              ↳ Builds Docker image<br/>
              ↳ Updates Helm chart<br/>
              ↳ <span className="text-emerald-400">Cluster state synced</span>
            </div>
          </div>

          {/* Card 4: Metrics (Wide) */}
          <div className="md:col-span-2 bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-8 flex items-center overflow-hidden relative">
            <div className="relative z-10 w-1/2">
               <h3 className="text-xl font-bold text-white mb-2 font-mono">Grafana Native</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-4">Export metrics directly to PromQL compatible dashboards. Monitor CPU, RAM, and custom business metrics seamlessly.</p>
               <a href="#deploy" className="text-xs font-mono text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded hover:bg-cyan-500/10 inline-block">View Dashboards →</a>
            </div>
            {/* Abstract Graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 flex items-center justify-end pr-8">
               <div className="w-48 h-48 border border-cyan-500/50 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <div className="w-32 h-32 border border-blue-500/50 rounded-full flex items-center justify-center border-dashed">
                   <div className="w-16 h-16 border border-emerald-500/50 rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section id="why-choose-us" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#030303] border-t border-zinc-800/50 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE SENTINEL ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why DevOps Engineers Choose Sentinel</h2>
            <p className="text-zinc-400 font-light">Engineered for extreme reliability, low footprint eBPF monitoring, and instant incident response.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Zero Kernel Panics</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Our eBPF tracing agents operate safely in userspace/kernel boundary without risk of crashing production clusters.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Instant PagerDuty Sync</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Route anomaly alerts directly to on-call engineers via Slack, PagerDuty, or custom Webhooks within 50ms.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Multi-Cloud Federation</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Manage AWS EKS, Google GKE, and Azure AKS clusters from a single unified control plane.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. TERMINAL FOOTER CTA --- */}
      <section id="deploy" className="relative py-32 border-t border-zinc-800/50 bg-[#020202]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-cyan-500 font-mono text-5xl mb-6">{">_"}</div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight font-sans">
            Ready to deploy?
          </h2>
          <p className="text-sm text-zinc-500 mb-10 max-w-xl mx-auto font-mono">
            Install the CLI agent in under 2 minutes. No heavy configuration files required.
          </p>
          
          <div className="bg-[#0a0a0a] border border-zinc-700 p-1 flex items-center rounded-md max-w-lg mx-auto mb-8 shadow-2xl">
             <div className="px-4 text-zinc-500 font-mono">$</div>
             <div className="flex-1 text-left text-cyan-300 font-mono text-sm overflow-hidden">
               curl -sL https://rajat.dev/install.sh | bash
             </div>
             <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded text-xs font-bold uppercase transition">Copy</button>
          </div>

          <div className="flex justify-center gap-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition">Documentation</a>
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="#" className="hover:text-cyan-400 transition">Discord</a>
          </div>
        </div>
      </section>
      
    </div>
  );
}