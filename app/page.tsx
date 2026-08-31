'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Premium Upgraded Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </div>
        
        {/* Navigation Links with Hover Animations */}
        <div className="hidden md:flex gap-10 text-sm font-bold tracking-tight text-slate-500">
          <Link href="/services" className="relative group hover:text-slate-900 transition-colors">
            Services
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/projects" className="relative group hover:text-slate-900 transition-colors">
            Work / Projects
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/team" className="relative group hover:text-slate-900 transition-colors">
            Leadership
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/pricing" className="relative group hover:text-slate-900 transition-colors">
            Pricing
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        
        <a
          href="#contact"
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-0.5"
        >
          Work With Us
        </a>
      </nav>

      {/* Ultra-Clean Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 bg-blue-50/80 border border-blue-100 rounded-full shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-slate-900 leading-[1.05] max-w-5xl mx-auto">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> <br /> Digital Products.
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems for global clients.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="px-8 py-4 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] text-center transform hover:-translate-y-0.5"
          >
            View Our Work
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-bold bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all text-center transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* Trust Banner */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted architecture powering</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xl md:text-2xl font-black text-slate-300">
            <span className="hover:text-slate-400 transition-colors cursor-default">WE PAY PANELS</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">DROXY MODS</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">AI PIPELINES</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">SECURE GATEWAYS</span>
          </div>
        </div>
      </section>

      {/* Quick Teaser Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-6 text-slate-900">Built for Performance. Engineered for Scale.</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Whether you need the <strong>We Pay Payment Panel</strong>, automated <strong>Voice & Media Processing</strong>, or complex setups like the <strong>Droxy BGMI Mod & Server Freeze</strong> gateways, we deliver flawless execution.
            </p>
            <Link href="/projects" className="text-blue-600 font-bold hover:text-blue-700 transition-colors flex items-center gap-2 group">
              See all projects and case studies 
              <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <div className="font-bold text-slate-900">Zero Downtime</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">🛡️</div>
              <div className="font-bold text-slate-900">E2E Encryption</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">🚀</div>
              <div className="font-bold text-slate-900">Next.js & Java</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-4">📊</div>
              <div className="font-bold text-slate-900">High Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Ready to scale your vision?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss your next big project. Reach out to us through our secure official channels below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-3xl hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💬</div>
              <div className="font-bold text-sm">Telegram</div>
              <div className="text-slate-400 text-xs mt-1 group-hover:text-blue-100">@airajat</div>
            </a>
            
            <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-3xl hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📱</div>
              <div className="font-bold text-sm">WhatsApp</div>
              <div className="text-slate-400 text-xs mt-1 group-hover:text-green-100">+91 60059 54388</div>
            </a>
            
            <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800 p-6 rounded-3xl hover:bg-rose-600 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">✉️</div>
              <div className="font-bold text-sm">Email</div>
              <div className="text-slate-400 text-xs mt-1 group-hover:text-rose-100">airajat.tech@gmail</div>
            </a>
            
            <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-3xl hover:bg-fuchsia-600 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📸</div>
              <div className="font-bold text-sm">Instagram</div>
              <div className="text-slate-400 text-xs mt-1 group-hover:text-fuchsia-100">airajat.tech</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>

    </div>
  );
}