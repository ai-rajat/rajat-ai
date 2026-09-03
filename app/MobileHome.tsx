'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
          <span>
            RAJAT<span className="text-blue-600"> | TECH</span>
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl shadow-md transition-transform active:scale-95 z-50 cursor-pointer"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* PREMIUM FULL-SCREEN OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-[58px] bg-slate-900 text-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">
                Quick Navigation
              </p>
              <div className="flex flex-col gap-1">
                <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">
                  <span>⚡ Services</span><span className="text-blue-500">&rarr;</span>
                </Link>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">
                  <span>🚀 Work / Projects</span><span className="text-blue-500">&rarr;</span>
                </Link>
                <Link href="/catalogue" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">
                  <span>🛍️ Catalogue</span><span className="text-blue-500">&rarr;</span>
                </Link>
                <Link href="/team" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">
                  <span>👥 Leadership</span><span className="text-blue-500">&rarr;</span>
                </Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)} className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100">
                  <span>💎 Pricing</span><span className="text-blue-500">&rarr;</span>
                </Link>
              </div>
            </div>

            <button 
              onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
              className="w-full text-center py-4 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          <div className="text-center text-slate-500 text-[10px] font-mono pb-6 pt-4 border-t border-slate-800">
            RAJAT.AI Mobile Architecture
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center px-5 pt-14 pb-10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50/60 rounded-full blur-[90px] -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-[9px] font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>

        <h1 className="mx-auto max-w-[340px] text-[32px] leading-[1.08] font-black tracking-[-1.5px] text-slate-900">
          We Build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            High-Scale
          </span>{' '}
          Digital Products.
        </h1>

        <p className="mx-auto mt-4 max-w-[330px] text-[13px] leading-6 text-slate-500 font-medium">
          From complex payment panels to real-time AI processing pipelines.
          We engineer secure, fast, and scalable ecosystems.
        </p>

        <div className="flex flex-col gap-3 mt-6 mx-auto max-w-[330px] w-full">
          <Link
            href="/projects"
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-[13px] font-bold shadow-md shadow-blue-600/20 text-center transition-all hover:bg-blue-700 active:scale-95"
          >
            View Our Work
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-3.5 bg-white border-2 border-slate-900 text-slate-900 rounded-xl text-[13px] font-bold text-center transition-all hover:bg-slate-900 hover:text-white cursor-pointer shadow-sm active:scale-95"
          >
            Start a Project ✨
          </button>
        </div>
      </main>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-8 px-4 text-center">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          Trusted architecture powering
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-black text-slate-400 max-w-xs mx-auto">
          <span>WE PAY PANELS</span>
          <span>DROXY MODS</span>
          <span>AI PIPELINES</span>
          <span>SECURE GATEWAYS</span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-14 px-5 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black tracking-tight mb-3 text-slate-900">
            Built for Performance. Engineered for Scale.
          </h2>
          <p className="text-slate-500 text-xs leading-relaxed">
            Whether you need the <strong className="text-slate-800">We Pay Payment Panel</strong>, automated <strong className="text-slate-800">Voice & Media Processing</strong>, or complex setups like the <strong className="text-slate-800">Droxy BGMI Mod & Server Freeze</strong> gateways, we deliver flawless execution.
          </p>
          <Link href="/projects" className="inline-block mt-4 text-xs font-bold text-blue-600 hover:text-blue-700">
            See all projects and case studies &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-500 active:scale-95 cursor-pointer">
            <div className="text-blue-600 text-xl mb-1.5">⚡</div>
            <div className="font-bold text-xs text-slate-900">Zero Downtime</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-500 active:scale-95 cursor-pointer">
            <div className="text-blue-600 text-xl mb-1.5">🛡️</div>
            <div className="font-bold text-xs text-slate-900">E2E Encryption</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-500 active:scale-95 cursor-pointer">
            <div className="text-blue-600 text-xl mb-1.5">🚀</div>
            <div className="font-bold text-xs text-slate-900">Next.js & Java</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-500 active:scale-95 cursor-pointer">
            <div className="text-blue-600 text-xl mb-1.5">📊</div>
            <div className="font-bold text-xs text-slate-900">High Volume</div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-slate-900 text-white py-14 px-4 text-center">
        <h2 className="text-[23px] leading-tight font-black mb-3">
          Ready to scale your vision?
        </h2>

        <p className="text-slate-400 text-[12px] leading-5 mb-8 max-w-[300px] mx-auto">
          Let's discuss your next big project. Reach out through our official channels.
        </p>

        <div className="grid grid-cols-2 gap-3 max-w-[350px] mx-auto">
          <a href="https://t.me/airajat" target="_blank" rel="noopener noreferrer" className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-blue-600 transition-all group">
            <div className="text-xl mb-1">💬</div>
            <div className="font-bold text-xs text-white">Telegram</div>
            <div className="text-slate-400 text-[10px]">@airajat</div>
          </a>

          <a href="https://wa.me/916005954388" target="_blank" rel="noopener noreferrer" className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-green-600 transition-all group">
            <div className="text-xl mb-1">📱</div>
            <div className="font-bold text-xs text-white">WhatsApp</div>
            <div className="text-slate-400 text-[10px]">+91 60059 54388</div>
          </a>

          <a href="mailto:airajat.tech@gmail.com" className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-rose-600 transition-all group">
            <div className="text-xl mb-1">✉️</div>
            <div className="font-bold text-xs text-white">Email</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>

          <a href="https://instagram.com/airajat.tech" target="_blank" rel="noopener noreferrer" className="bg-slate-800/90 p-4 rounded-xl text-left border border-slate-700/50 hover:bg-fuchsia-600 transition-all group">
            <div className="text-xl mb-1">📸</div>
            <div className="font-bold text-xs text-white">Instagram</div>
            <div className="text-slate-400 text-[10px]">airajat.tech</div>
          </a>
        </div>
      </section>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] max-w-md w-full shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm cursor-pointer">
              ✕
            </button>

            <div className="mb-5">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Direct Inquiry
              </span>
              <h2 className="text-xl font-black mt-2 text-white">Start Your Project</h2>
              <p className="text-slate-400 text-xs mt-1">Fill out details below for your architecture needs.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-3">
              <input type="hidden" name="access_key" value="414e3e90-fece-49f0-b749-9bb79279af21" />
              <input type="hidden" name="subject" value="New Project Inquiry from Mobile Homepage" />
              <input type="hidden" name="full_mobile_number" value={`${countryCode} ${mobileNumber}`} />

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none" placeholder="John Doe" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none" placeholder="john@company.com" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Number</label>
                <div className="flex gap-2">
                  <select 
                    value={countryCode} 
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-xl px-1.5 py-2.5 text-white font-bold text-[10px] focus:outline-none max-w-[95px] cursor-pointer"
                  >
                    <option value="+91" className="bg-slate-900">+91 (India)</option>
                    <option value="+1" className="bg-slate-900">+1 (USA/Canada)</option>
                    <option value="+44" className="bg-slate-900">+44 (UK)</option>
                    <option value="+971" className="bg-slate-900">+971 (UAE)</option>
                  </select>
                  <input 
                    type="tel" 
                    name="phone_number" 
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none" 
                    placeholder="9876543210" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expected Timeline</label>
                <select name="timeline" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none cursor-pointer">
                  <option value="Urgent (ASAP)" className="bg-slate-900">Urgent (ASAP)</option>
                  <option value="1-2 Weeks" className="bg-slate-900">1-2 Weeks</option>
                  <option value="1 Month" className="bg-slate-900">1 Month</option>
                  <option value="Flexible" className="bg-slate-900">Flexible</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Scope & Requirements</label>
                <textarea name="message" rows={2} required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none resize-none" placeholder="Describe requirements..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-md text-xs mt-1 cursor-pointer">
                Submit Inquiry
              </button>

              <p className="text-center text-slate-400 text-[10px] font-mono pt-1">
                ⚡ Usually replies in 24 hours
              </p>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[9px] font-mono">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>

    </div>
  );
}