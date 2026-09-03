export default function LB_Services_Grid({ theme = 'minimal-store' }: { theme?: string }) {
  const themeStyles: Record<string, any> = {
    'modern-cafe': {
      bg: 'bg-[#111]',
      text: 'text-white',
      card: 'bg-[#1a1a1a] border-white/5',
      iconBg: 'bg-amber-500 text-black',
      title: 'text-white',
      desc: 'text-gray-400',
      watermark: 'text-white opacity-[0.02]',
      line: 'bg-amber-500'
    },
    'minimal-store': {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      card: 'bg-white border-gray-100',
      iconBg: 'bg-black text-white',
      title: 'text-black',
      desc: 'text-gray-500',
      watermark: 'text-black opacity-[0.03]',
      line: 'bg-black'
    },
    'bold-fitness': {
      bg: 'bg-black',
      text: 'text-white',
      card: 'bg-zinc-900 border-red-900/30',
      iconBg: 'bg-red-600 text-white',
      title: 'text-white',
      desc: 'text-gray-400',
      watermark: 'text-white opacity-[0.03]',
      line: 'bg-red-600'
    },
    'eco-green': {
      bg: 'bg-emerald-900',
      text: 'text-white',
      card: 'bg-emerald-950 border-emerald-800/50',
      iconBg: 'bg-emerald-500 text-emerald-950',
      title: 'text-emerald-50',
      desc: 'text-emerald-200/70',
      watermark: 'text-emerald-100 opacity-[0.03]',
      line: 'bg-emerald-500'
    },
    'luxury-gold': {
      bg: 'bg-stone-900',
      text: 'text-amber-50',
      card: 'bg-stone-950 border-amber-900/30',
      iconBg: 'bg-gradient-to-r from-amber-600 to-yellow-500 text-black',
      title: 'text-amber-100',
      desc: 'text-stone-400',
      watermark: 'text-amber-500 opacity-[0.03]',
      line: 'bg-amber-500'
    },
    'tech-repair': {
      bg: 'bg-slate-900',
      text: 'text-white',
      card: 'bg-slate-800 border-slate-700',
      iconBg: 'bg-cyan-600 text-white',
      title: 'text-white',
      desc: 'text-slate-400',
      watermark: 'text-cyan-500 opacity-[0.03]',
      line: 'bg-cyan-500'
    }
  };

  const current = themeStyles[theme] || themeStyles['minimal-store'];

  const services = [
    {
      id: 1,
      icon: '✦',
      title: 'Premium Quality',
      desc: 'We use only the finest materials and top-tier resources to ensure unmatched excellence in every service we provide.',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Rapid Execution',
      desc: 'Time is money. Our streamlined process guarantees rapid turnaround times without compromising on the final quality.',
    },
    {
      id: 3,
      icon: '💎',
      title: 'Bespoke Experience',
      desc: 'Every client is unique. We tailor our approach to perfectly align with your specific vision, goals, and requirements.',
    },
  ];

  return (
    <section className={`py-24 ${current.bg} relative overflow-hidden transition-colors duration-500`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black whitespace-nowrap pointer-events-none select-none tracking-tighter z-0 ${current.watermark}`}>
        RAJAT \ TECH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className={`${current.desc} font-bold tracking-widest text-sm uppercase`}>Our Expertise</span>
          <h2 className={`text-3xl md:text-5xl font-extrabold mt-2 tracking-tight ${current.title}`}>Why Choose Us</h2>
          <div className={`w-16 h-1 mx-auto mt-6 ${current.line}`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`${current.card} p-8 rounded-2xl border hover:-translate-y-2 transition-all duration-300 group shadow-lg`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md ${current.iconBg} transform group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${current.title}`}>{service.title}</h3>
              <p className={`${current.desc} leading-relaxed font-medium`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}