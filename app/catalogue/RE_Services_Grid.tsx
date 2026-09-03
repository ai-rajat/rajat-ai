export default function RE_Services_Grid() {
  const services = [
    {
      title: "Bespoke Concierge",
      desc: "24/7 on-demand lifestyle management, from chartering private jets to securing exclusive Michelin-star reservations globally.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Tactical Security",
      desc: "Military-grade perimeter defense, biometric entry protocols, and a dedicated team of former elite operatives patrolling the grounds.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Estate Management",
      desc: "Comprehensive structural upkeep, landscape architecture, and preventive maintenance handled silently by our invisible staff.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Private Culinary",
      desc: "In-house Michelin-trained chefs, customized organic nutrition plans, and a fully stocked temperature-controlled wine vault.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 bg-[#0c0a09] border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 border bg-amber-500/10 text-amber-500 border-amber-500/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
            White-Glove Management
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-6">
            The Standard of <span className="italic text-amber-500">Excellence.</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ownership extends beyond the physical walls. Enjoy lifetime access to our globally connected private staff network, ensuring your estate operates with the flawless precision of a 7-star resort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#0f0c0b] border border-stone-800 p-8 hover:border-amber-500/40 transition-all duration-500 group overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full blur-3xl group-hover:bg-amber-600/10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                <div className="text-amber-500 mb-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed group-hover:text-stone-400 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-4 -right-2 text-6xl font-serif font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}