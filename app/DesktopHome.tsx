'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DesktopHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCurrency, setModalCurrency] = useState('USD');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col relative">
      {/* DESKTOP NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
          <span>RAJAT<span className="text-blue-600"> | TECH</span></span>
        </Link>
        
        <div className="flex gap-8 text-sm font-bold tracking-tight text-slate-500">
          <Link href="/services" className="relative group hover:text-slate-900 transition-colors">
            Services
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/projects" className="relative group hover:text-slate-900 transition-colors">
            Work / Projects
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/catalogue" className="relative group hover:text-slate-900 transition-colors">
            Catalogue
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
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all shadow-lg cursor-pointer"
        >
          Work With Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-8xl font-black tracking-tight mb-8 text-slate-900 leading-[1.05] max-w-5xl mx-auto">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">High-Scale</span> Digital Products.
        </h1>
        <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium">
          From complex payment panels to real-time AI processing pipelines. We engineer secure, fast, and scalable ecosystems.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="px-8 py-3.5 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md">
            View Our Work
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 text-sm font-bold bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
          >
            Start a Project
          </button>
        </div>
      </main>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted architecture powering</p>
          <div className="flex flex-wrap justify-center gap-12 text-2xl font-black text-slate-300">
            <span>WE PAY PANELS</span>
            <span>DROXY MODS</span>
            <span>AI PIPELINES</span>
            <span>SECURE GATEWAYS</span>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4 text-slate-900">Built for Performance. Engineered for Scale.</h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Whether you need the <strong>We Pay Payment Panel</strong>, automated <strong>Voice & Media Processing</strong>, or complex setups like the <strong>Droxy BGMI Mod & Server Freeze</strong> gateways, we deliver flawless execution.
            </p>
            <Link href="/projects" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2">
              See all projects and case studies &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">⚡</div><div className="font-bold text-slate-900">Zero Downtime</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">🛡️</div><div className="font-bold text-slate-900">E2E Encryption</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">🚀</div><div className="font-bold text-slate-900">Next.js & Java</div></div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"><div className="text-blue-600 text-2xl mb-2">📊</div><div className="font-bold text-slate-900">High Volume</div></div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black tracking-tight mb-4">Ready to scale your vision?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Let's discuss your next big project. Reach out to us through our secure official channels below.</p>
          <div className="grid grid-cols-4 gap-4">
            <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-blue-600 transition-all"><div className="text-2xl mb-1">💬</div><div className="font-bold text-sm">Telegram</div><div className="text-slate-400 text-xs mt-1">@airajat</div></a>
            <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-green-600 transition-all"><div className="text-2xl mb-1">📱</div><div className="font-bold text-sm">WhatsApp</div><div className="text-slate-400 text-xs mt-1">+91 60059 54388</div></a>
            <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800 p-6 rounded-2xl hover:bg-rose-600 transition-all"><div className="text-2xl mb-1">✉️</div><div className="font-bold text-sm">Email</div><div className="text-slate-400 text-xs mt-1">airajat.tech</div></a>
            <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-6 rounded-2xl hover:bg-fuchsia-600 transition-all"><div className="text-2xl mb-1">📸</div><div className="font-bold text-sm">Instagram</div><div className="text-slate-400 text-xs mt-1">airajat.tech</div></a>
          </div>
        </div>
      </section>

      {/* POPUP MODAL FOR START A PROJECT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] max-w-xl w-full shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full uppercase tracking-wider">
                Direct Inquiry
              </span>
              <h2 className="text-2xl font-black mt-3 text-white">Start Your Project</h2>
              <p className="text-slate-400 text-sm mt-1">Fill out the details below to initiate communication with our engineering team.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="414e3e90-fece-49f0-b749-9bb79279af21" />
              <input type="hidden" name="subject" value="New Project Inquiry from Homepage" />
              <input type="hidden" name="currency_preference" value={modalCurrency} />
              <input type="hidden" name="full_mobile_number" value={`${countryCode} ${mobileNumber}`} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all text-sm" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mobile Number</label>
                  <div className="flex gap-2">
                    <select 
                      value={countryCode} 
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded-xl px-2 py-3 text-white font-bold text-xs focus:outline-none max-w-[110px]"
                    >
                      <option value="+91" className="bg-slate-900">+91 (India)</option>
                      <option value="+1" className="bg-slate-900">+1 (USA/Canada)</option>
                      <option value="+44" className="bg-slate-900">+44 (UK)</option>
                      <option value="+971" className="bg-slate-900">+971 (UAE)</option>
                      <option value="+61" className="bg-slate-900">+61 (Australia)</option>
                    </select>
                    <input 
                      type="tel" 
                      name="phone_number" 
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required 
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none" 
                      placeholder="9876543210" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expected Timeline</label>
                  <select name="timeline" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none cursor-pointer">
                    <option value="Urgent (ASAP)" className="bg-slate-900">Urgent (ASAP)</option>
                    <option value="1-2 Weeks" className="bg-slate-900">1-2 Weeks</option>
                    <option value="1 Month" className="bg-slate-900">1 Month</option>
                    <option value="Flexible" className="bg-slate-900">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project Scope & Requirements</label>
                <textarea name="message" rows={3} required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all text-sm resize-none" placeholder="Describe your features, backend needs, or specific scope..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer mt-2">
                Submit Inquiry
              </button>
              
              <p className="text-center text-slate-400 text-xs font-mono pt-1">
                ⚡ Usually replies in 24 hours
              </p>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-xs font-mono">
        <p>© {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
      </footer>
    </div>
  );
}