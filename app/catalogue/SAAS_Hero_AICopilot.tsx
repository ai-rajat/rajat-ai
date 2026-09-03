'use client';

import { useState, useEffect } from 'react';

export default function SAAS_Standalone_AICopilot({ onBack }: { onBack?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeQuery, setActiveQuery] = useState<'patch' | 'query' | 'deploy'>('patch');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#030712] text-zinc-300 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative">
      
      {/* --- 0. INTEGRATED VVIP SAAS NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#030712]/90 backdrop-blur-2xl border-b border-indigo-500/20 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            {onBack && (
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 px-4 py-2 rounded-full border border-indigo-700/50 backdrop-blur-md"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Hub
              </button>
            )}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                ⚡
              </div>
              <span className="font-mono tracking-[0.25em] uppercase text-xs hidden sm:block text-white font-bold">SYNAPSE \ <span className="text-indigo-400 font-light">AI</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            <a href="#architecture" className="hover:text-indigo-400 transition-colors">Architecture</a>
            <a href="#features" className="hover:text-indigo-400 transition-colors">Bento Grid</a>
            <a href="#docs" className="hover:text-indigo-400 transition-colors">API Reference</a>
          </div>

          <a href="#build" className="text-[10px] font-bold uppercase tracking-[0.25em] bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(79,70,229,0.4)]">
            Start Building
          </a>
        </div>
      </nav>

      {/* Dynamic Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

      {/* --- 1. FULL SCREEN AI INTERFACE HERO --- */}
      <section className="relative min-h-[100vh] flex flex-col xl:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 pt-32 pb-20 z-10 gap-16">
        
        {/* Left Typography & CTA (Asymmetric Layout) */}
        <div className="w-full xl:w-5/12 text-left relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-md">
            <svg className="w-4 h-4 text-indigo-400 animate-spin" viewBox="0 0 24 24" fill="none"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <span className="text-indigo-300 text-[10px] sm:text-xs tracking-widest uppercase font-bold">Copilot Engine v5.0 Live</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.05] text-white">
            Intelligence <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Unleashed.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-lg mb-12 font-light leading-relaxed">
            Not just another wrapper. Build, fine-tune, and deploy autonomous AI agents that actually execute complex multi-step workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <a href="#build" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(79,70,229,0.6)] hover:-translate-y-1 text-center">
              Start Building
            </a>
            <a href="#docs" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900/50 backdrop-blur border border-zinc-800 text-zinc-300 font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2">
              <span className="text-indigo-400 font-mono">{"</>"}</span> API Reference
            </a>
          </div>
        </div>

        {/* Right Floating ChatGPT-style UI Mockup */}
        <div className="w-full xl:w-7/12 relative z-20">
          <div className="bg-[#0f111a]/80 backdrop-blur-3xl border border-zinc-800/50 rounded-3xl shadow-[0_0_80px_rgba(79,70,229,0.15)] overflow-hidden flex flex-col h-[600px]">
            
            {/* Header */}
            <div className="h-16 border-b border-zinc-800/50 flex items-center px-6 justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center p-1.5 shadow-lg">
                  <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">SYNAPSE_LLM_70B</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Response Time: 12ms</div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-zinc-800 px-3 py-1 rounded text-xs font-mono text-zinc-400">Context: 128k</span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              
              {/* Query Selector Tabs */}
              <div className="flex gap-2 pb-2 border-b border-zinc-800/40">
                <button onClick={() => setActiveQuery('patch')} className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg font-mono transition ${activeQuery === 'patch' ? 'bg-indigo-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}>Code Patch</button>
                <button onClick={() => setActiveQuery('query')} className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg font-mono transition ${activeQuery === 'query' ? 'bg-indigo-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}>Vector RAG</button>
                <button onClick={() => setActiveQuery('deploy')} className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg font-mono transition ${activeQuery === 'deploy' ? 'bg-indigo-600 text-white font-bold' : 'bg-zinc-900 text-zinc-400'}`}>Agent Workflow</button>
              </div>

              {/* User Message */}
              <div className="flex gap-4 max-w-[85%] ml-auto justify-end">
                <div className="bg-indigo-600 text-white text-sm p-4 rounded-2xl rounded-tr-sm shadow-md">
                  {activeQuery === 'patch' && "Analyze the Q3 server logs and write a Python script to patch the memory leak in the Redis cache."}
                  {activeQuery === 'query' && "Search internal Notion docs for enterprise security compliance protocol v4."}
                  {activeQuery === 'deploy' && "Spin up an isolated VPC worker node and execute automated regression test suite."}
                </div>
              </div>

              {/* System Processing State */}
              <div className="flex gap-4 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
                </div>
                <div className="bg-[#1a1d24] text-zinc-300 text-sm p-4 rounded-2xl rounded-tl-sm border border-zinc-800/50 w-full space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                    Executing Autonomous Workflow...
                  </div>
                  <ul className="text-[11px] font-mono text-zinc-500 space-y-1 pl-6 list-disc marker:text-zinc-700">
                    <li className="text-zinc-400">Fetching logs from Datadog API (✓)</li>
                    <li className="text-zinc-400">Isolating memory spike at 04:00 UTC (✓)</li>
                    <li className="text-zinc-300 font-bold">Generating patch script...</li>
                  </ul>
                  
                  {/* Code Snippet Block */}
                  <div className="mt-4 bg-[#0a0c10] border border-zinc-800 rounded-xl overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-2 bg-[#13161f] border-b border-zinc-800 text-[10px] font-mono text-zinc-400">
                      <span>{activeQuery === 'patch' ? 'redis_patch.py' : activeQuery === 'query' ? 'vector_search.json' : 'cluster_worker.yaml'}</span>
                      <span className="text-emerald-400">Ready</span>
                    </div>
                    <div className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                      {activeQuery === 'patch' && (
                        <>
                          <span className="text-pink-400">import</span> redis<br/>
                          <span className="text-pink-400">import</span> gc<br/><br/>
                          <span className="text-indigo-400">def</span> <span className="text-blue-400">flush_stale_cache</span>(client):<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;keys = client.keys(<span className="text-amber-300">'session:old:*'</span>)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">if</span> keys:<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;client.delete(*keys)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gc.collect() <span className="text-zinc-500"># Force garbage collection</span>
                        </>
                      )}
                      {activeQuery === 'query' && (
                        <>
                          &#123;<br/>
                          &nbsp;&nbsp;<span className="text-blue-300">"match"</span>: <span className="text-amber-300">"SOC2 Type II Protocol"</span>,<br/>
                          &nbsp;&nbsp;<span className="text-blue-300">"confidence"</span>: <span className="text-orange-400">0.994</span>,<br/>
                          &nbsp;&nbsp;<span className="text-blue-300">"vector_index"</span>: <span className="text-amber-300">"notion_internal_kb"</span><br/>
                          &#125;
                        </>
                      )}
                      {activeQuery === 'deploy' && (
                        <>
                          <span className="text-purple-400">apiVersion</span>: v1<br/>
                          <span className="text-purple-400">kind</span>: WorkerNode<br/>
                          <span className="text-purple-400">spec</span>:<br/>
                          &nbsp;&nbsp;replicas: <span className="text-orange-400">3</span><br/>
                          &nbsp;&nbsp;image: synapse/ai-worker:v5
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-[#0f111a] border-t border-zinc-800/50">
              <div className="bg-[#1a1d24] border border-zinc-700/50 rounded-xl flex items-center p-2 px-4 shadow-inner">
                <input type="text" placeholder="Command your AI agent..." className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-zinc-500" readOnly />
                <button className="bg-indigo-600 hover:bg-indigo-500 p-2 rounded-lg transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. FLOATING STATS TICKER --- */}
      <section className="relative z-20 border-y border-zinc-800/30 bg-[#0a0c10]/80 backdrop-blur-xl py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-white font-black text-2xl">400B+</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Parameters</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <div className="text-white font-black text-2xl">&lt;14ms</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Time to First Token</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <div className="text-white font-black text-2xl">SOC2</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Enterprise Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID ARCHITECTURE --- */}
      <section id="architecture" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">The AI layer for <br/><span className="text-zinc-600">modern infrastructure.</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Stop relying on public APIs. Bring the model to your data. Fine-tune on your private repositories securely.</p>
        </div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 (Tall) */}
          <div className="lg:row-span-2 bg-[#0a0c10] border border-zinc-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">RAG Pipeline Native</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Connect your internal Notion, Jira, and GitHub repositories. Our vector database instantly creates embeddings so the AI grounds its answers in your company's reality.</p>
            </div>
            {/* Visual */}
            <div className="flex-1 border border-zinc-800 bg-[#13161f] rounded-2xl p-4 flex flex-col gap-3 justify-end relative">
               <div className="w-full flex items-center justify-between text-xs text-zinc-500 font-mono bg-[#0f111a] p-2 rounded">
                 <span>Notion.csv</span> <span className="text-indigo-400">Embedding...</span>
               </div>
               <div className="w-full flex items-center justify-between text-xs text-zinc-500 font-mono bg-[#0f111a] p-2 rounded">
                 <span>GitHub_Repo</span> <span className="text-emerald-400">Vectorized ✓</span>
               </div>
               <div className="w-full flex items-center justify-between text-xs text-zinc-500 font-mono bg-[#0f111a] p-2 rounded border border-indigo-500/30">
                 <span>Query_Search</span> <span className="text-white font-bold">0.04ms</span>
               </div>
            </div>
          </div>

          {/* Box 2 (Wide) */}
          <div className="lg:col-span-2 bg-[#0a0c10] border border-zinc-800 rounded-3xl p-8 hover:border-fuchsia-500/50 transition-colors relative overflow-hidden flex items-center">
             <div className="w-1/2 relative z-10 pr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Zero-Shot Fine Tuning</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Adjust model behavior without writing Python scripts. Use our UI to inject system prompts, strict guardrails, and tone guidelines instantly.</p>
            </div>
            <div className="w-1/2 relative z-10 border-l border-zinc-800 pl-8">
               <div className="bg-[#13161f] rounded-xl p-4 border border-zinc-700 font-mono text-[10px] text-indigo-300">
                 System.Prompt = """ <br/>
                 <span className="text-zinc-400">You are a senior DevOps engineer. Never apologize. Only output executable bash scripts or YAML configs. Reject questions about non-technical topics.</span><br/>
                 """ <br/>
                 <span className="text-emerald-400">Strict_Mode: ENABLED</span>
               </div>
            </div>
          </div>

          {/* Box 3 (Standard) */}
          <div className="bg-[#0a0c10] border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">Zero data retention. Your prompts are never used to train our base models. Hosted in single-tenant VPCs.</p>
            </div>
            <div className="flex gap-2">
               <span className="bg-zinc-900 border border-zinc-700 text-white text-xs px-3 py-1 rounded-full">SOC2 Type II</span>
               <span className="bg-zinc-900 border border-zinc-700 text-white text-xs px-3 py-1 rounded-full">HIPAA</span>
            </div>
          </div>

          {/* Box 4 (Standard) */}
          <div className="bg-[#0a0c10] border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3">Function Calling</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">Let the AI execute actions. Trigger external APIs, send Slack messages, or run database queries autonomously.</p>
            </div>
             <div className="bg-[#13161f] text-cyan-400 font-mono text-xs p-3 rounded-lg border border-zinc-800 text-center">
               {"{"} trigger: "webhook" {"}"}
             </div>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE US SECTION (PLACED BEFORE FOOTER) --- */}
      <section className="py-32 px-6 sm:px-10 lg:px-16 bg-[#05080f] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-indigo-400 text-xs uppercase tracking-[0.3em] font-mono font-bold mb-3 block">[ THE SYNAPSE ADVANTAGE ]</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">Why Engineers Choose Synapse AI</h2>
            <p className="text-zinc-400 font-light"> Built by developers, for developers. We remove the boilerplate of AI orchestration so you can ship intelligent features in hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a0c10] border border-zinc-800 p-8 rounded-3xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-6 text-lg font-mono">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Sub-14ms Latency</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Optimized Triton inference engine running on bare-metal H100 clusters globally.</p>
            </div>
            <div className="bg-[#0a0c10] border border-zinc-800 p-8 rounded-3xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-6 text-lg font-mono">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal SDK Support</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Drop-in replacement for OpenAI endpoints with native Python, Node.js, and Go client libraries.</p>
            </div>
            <div className="bg-[#0a0c10] border border-zinc-800 p-8 rounded-3xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-6 text-lg font-mono">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Deterministic Output</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">JSON schema enforcement ensures your AI never returns malformed responses or hallucinated keys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. DARK GRADIENT CTA FOOTER --- */}
      <section id="build" className="relative py-32 overflow-hidden border-t border-zinc-800/50 bg-[#030712]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#030712] to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tighter">
            Build the future. <br/> <span className="text-indigo-400">One prompt at a time.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md mx-auto">
            <a href="#build" className="flex-1 py-5 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-wider hover:bg-zinc-200 transition shadow-[0_0_30px_rgba(255,255,255,0.15)] text-center">
              Get API Keys
            </a>
            <a href="#docs" className="flex-1 py-5 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm uppercase tracking-wider hover:bg-zinc-800 transition text-center">
              Read Docs
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
             <span>© 2026 Synapse AI Infrastructure. All rights reserved.</span>
             <div className="flex gap-6">
               <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-indigo-400 transition-colors">Security</a>
             </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}