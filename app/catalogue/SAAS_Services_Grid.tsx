export default function SAAS_Services_Grid({ theme = 'ai-copilot' }: { theme?: string }) {
  // Ultra-Premium Dynamic Theme Mapping
  const gridStyles: Record<string, any> = {
    'ai-copilot': { bg: 'bg-[#030712]', cardBg: 'bg-[#0a0c10]/80', border: 'border-zinc-800', hoverBorder: 'hover:border-indigo-500/50', accent: 'text-indigo-400', glow: 'bg-indigo-600/10', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' },
    'fintech-saas': { bg: 'bg-[#020617]', cardBg: 'bg-[#0f172a]/50', border: 'border-slate-800', hoverBorder: 'hover:border-emerald-500/50', accent: 'text-emerald-400', glow: 'bg-emerald-600/10', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    'devops-sentinel': { bg: 'bg-[#050505]', cardBg: 'bg-[#0a0a0a]', border: 'border-zinc-800', hoverBorder: 'hover:border-cyan-500/50', accent: 'text-cyan-400', glow: 'bg-cyan-600/10', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
    'crm-pipeline': { bg: 'bg-[#0a0a0a]', cardBg: 'bg-[#111111]', border: 'border-neutral-800', hoverBorder: 'hover:border-amber-500/50', accent: 'text-amber-400', glow: 'bg-amber-600/10', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
    'cyber-security': { bg: 'bg-[#09090b]', cardBg: 'bg-zinc-900/40', border: 'border-zinc-800', hoverBorder: 'hover:border-red-500/50', accent: 'text-red-500', glow: 'bg-red-600/10', badge: 'bg-red-500/10 text-red-400 border-red-500/30' },
    'project-mgmt': { bg: 'bg-[#09090b]', cardBg: 'bg-[#121214]', border: 'border-zinc-800', hoverBorder: 'hover:border-violet-500/50', accent: 'text-violet-400', glow: 'bg-violet-600/10', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
  };

  const current = gridStyles[theme] || gridStyles['ai-copilot'];

  const features = [
    { 
      title: '99.99% Uptime SLA', 
      desc: 'Enterprise-grade reliability backed by redundant multi-region cloud failover clusters.',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    },
    { 
      title: 'SOC2 & ISO Certified', 
      desc: 'Rigorous security compliance ensuring absolute data privacy and encryption standards.',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    { 
      title: 'Lightning-Fast APIs', 
      desc: 'Comprehensive developer documentation and SDKs for Python, Node.js, and Java.',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    { 
      title: '24/7 Priority Support', 
      desc: 'Direct access to senior infrastructure engineers and dedicated customer success managers.',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
  ];

  return (
    <section className={`relative py-32 px-6 ${current.bg} text-white border-t border-white/5 overflow-hidden`}>
      {/* Global Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border ${current.badge} backdrop-blur-md`}>
            <span className={`w-2 h-2 rounded-full bg-current animate-pulse`}></span>
            Enterprise Infrastructure
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Built For Scale & <br/> <span className="text-zinc-500">High-Growth Startups</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            Powering mission-critical operations for global engineering teams with absolute security, redundancy, and zero compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 rounded-3xl ${current.cardBg} border ${current.border} ${current.hoverBorder} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
            >
              {/* Subtle Inner Glow on Hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${current.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-zinc-900 border ${current.border} flex items-center justify-center mb-6 ${current.accent} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Global Network Status Banner */}
        <div className={`mt-16 border ${current.border} rounded-2xl p-6 bg-black/20 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-6`}>
           <div className="flex items-center gap-4">
              <div className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.accent} opacity-40`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${current.bg.replace('bg-', 'bg-')} ${current.accent}`}></span>
              </div>
              <span className="font-mono text-sm text-zinc-300">All global systems operational</span>
           </div>
           <div className="flex gap-4 font-mono text-xs text-zinc-500">
             <span>US-EAST</span>
             <span>•</span>
             <span>EU-WEST</span>
             <span>•</span>
             <span>AP-SOUTH</span>
           </div>
        </div>

      </div>
    </section>
  );
}