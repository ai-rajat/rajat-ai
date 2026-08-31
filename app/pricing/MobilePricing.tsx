'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobilePricing() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [modalCurrency, setModalCurrency] = useState('USD');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleOpenModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const countryCodes = [
    { name: 'Afghanistan', code: '+93' }, { name: 'Albania', code: '+355' }, { name: 'Algeria', code: '+213' },
    { name: 'Andorra', code: '+376' }, { name: 'Angola', code: '+244' }, { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' }, { name: 'Australia', code: '+61' }, { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' }, { name: 'Bahrain', code: '+973' }, { name: 'Bangladesh', code: '+880' },
    { name: 'Belarus', code: '+375' }, { name: 'Belgium', code: '+32' }, { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' }, { name: 'Bhutan', code: '+975' }, { name: 'Bolivia', code: '+591' },
    { name: 'Bosnia and Herzegovina', code: '+387' }, { name: 'Botswana', code: '+267' }, { name: 'Brazil', code: '+55' },
    { name: 'Brunei', code: '+673' }, { name: 'Bulgaria', code: '+359' }, { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' }, { name: 'Cambodia', code: '+855' }, { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' }, { name: 'Cape Verde', code: '+238' }, { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' }, { name: 'Chile', code: '+56' }, { name: 'China', code: '+86' },
    { name: 'Colombia', code: '+57' }, { name: 'Comoros', code: '+269' }, { name: 'Congo', code: '+242' },
    { name: 'Costa Rica', code: '+506' }, { name: 'Croatia', code: '+385' }, { name: 'Cuba', code: '+53' },
    { name: 'Cyprus', code: '+357' }, { name: 'Czech Republic', code: '+420' }, { name: 'Denmark', code: '+45' },
    { name: 'Djibouti', code: '+253' }, { name: 'Dominican Republic', code: '+1809' }, { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' }, { name: 'El Salvador', code: '+503' }, { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' }, { name: 'Estonia', code: '+372' }, { name: 'Ethiopia', code: '+251' },
    { name: 'Fiji', code: '+679' }, { name: 'Finland', code: '+358' }, { name: 'France', code: '+33' },
    { name: 'Gabon', code: '+241' }, { name: 'Gambia', code: '+220' }, { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' }, { name: 'Ghana', code: '+233' }, { name: 'Greece', code: '+30' },
    { name: 'Greenland', code: '+299' }, { name: 'Guatemala', code: '+502' }, { name: 'Guinea', code: '+224' },
    { name: 'Guyana', code: '+592' }, { name: 'Haiti', code: '+509' }, { name: 'Honduras', code: '+504' },
    { name: 'Hong Kong', code: '+852' }, { name: 'Hungary', code: '+36' }, { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' }, { name: 'Indonesia', code: '+62' }, { name: 'Iran', code: '+98' },
    { name: 'Iraq', code: '+964' }, { name: 'Ireland', code: '+353' }, { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' }, { name: 'Jamaica', code: '+1876' }, { name: 'Japan', code: '+81' },
    { name: 'Jordan', code: '+962' }, { name: 'Kazakhstan', code: '+7' }, { name: 'Kenya', code: '+254' },
    { name: 'Kuwait', code: '+965' }, { name: 'Kyrgyzstan', code: '+996' }, { name: 'Laos', code: '+856' },
    { name: 'Latvia', code: '+371' }, { name: 'Lebanon', code: '+961' }, { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' }, { name: 'Libya', code: '+218' }, { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' }, { name: 'Luxembourg', code: '+352' }, { name: 'Macau', code: '+853' },
    { name: 'Malaysia', code: '+60' }, { name: 'Maldives', code: '+960' }, { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' }, { name: 'Mauritius', code: '+230' }, { name: 'Mexico', code: '+52' },
    { name: 'Moldova', code: '+373' }, { name: 'Monaco', code: '+377' }, { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' }, { name: 'Morocco', code: '+212' }, { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar', code: '+95' }, { name: 'Namibia', code: '+264' }, { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' }, { name: 'New Zealand', code: '+64' }, { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' }, { name: 'Nigeria', code: '+234' }, { name: 'North Korea', code: '+850' },
    { name: 'Norway', code: '+47' }, { name: 'Oman', code: '+968' }, { name: 'Pakistan', code: '+92' },
    { name: 'Palestine', code: '+970' }, { name: 'Panama', code: '+507' }, { name: 'Papua New Guinea', code: '+675' },
    { name: 'Paraguay', code: '+595' }, { name: 'Peru', code: '+51' }, { name: 'Philippines', code: '+63' },
    { name: 'Poland', code: '+48' }, { name: 'Portugal', code: '+351' }, { name: 'Qatar', code: '+974' },
    { name: 'Romania', code: '+40' }, { name: 'Russia', code: '+7' }, { name: 'Rwanda', code: '+250' },
    { name: 'Saudi Arabia', code: '+966' }, { name: 'Senegal', code: '+221' }, { name: 'Serbia', code: '+381' },
    { name: 'Singapore', code: '+65' }, { name: 'Slovakia', code: '+421' }, { name: 'Slovenia', code: '+386' },
    { name: 'South Africa', code: '+27' }, { name: 'South Korea', code: '+82' }, { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' }, { name: 'Sudan', code: '+249' }, { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' }, { name: 'Syria', code: '+963' }, { name: 'Taiwan', code: '+886' },
    { name: 'Tajikistan', code: '+992' }, { name: 'Tanzania', code: '+255' }, { name: 'Thailand', code: '+66' },
    { name: 'Tunisia', code: '+216' }, { name: 'Turkey', code: '+90' }, { name: 'Turkmenistan', code: '+993' },
    { name: 'Uganda', code: '+256' }, { name: 'Ukraine', code: '+380' }, { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' }, { name: 'United States', code: '+1' }, { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' }, { name: 'Venezuela', code: '+58' }, { name: 'Vietnam', code: '+84' },
    { name: 'Yemen', code: '+967' }, { name: 'Zambia', code: '+260' }, { name: 'Zimbabwe', code: '+263' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col relative selection:bg-blue-600 selection:text-white">

      {/* MOBILE NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3.5 w-full bg-slate-50/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <Link href="/" className="text-base font-black tracking-tight text-slate-900 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
          <span>
            RAJAT<span className="text-blue-600"> | TECH</span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-xl shadow-md transition-transform active:scale-95 z-50"
        >
          {isOpen ? 'Close ✕' : 'Menu ☰'}
        </button>
      </nav>

      {/* PREMIUM FULL-SCREEN OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] bg-slate-900 text-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">
                Quick Navigation
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>⚡ Services</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>🚀 Work / Projects</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/team"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-slate-100"
                >
                  <span>👥 Leadership</span>
                  <span className="text-blue-500">&rarr;</span>
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 border-b border-slate-800 text-base font-bold text-blue-400"
                >
                  <span>💎 Pricing</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 text-xs font-bold uppercase tracking-wider bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/30"
            >
              Let's Talk
            </Link>
          </div>

          <div className="text-center text-slate-500 text-[10px] font-mono pb-6 pt-4 border-t border-slate-800">
            RAJAT.AI Mobile Architecture
          </div>
        </div>
      )}

      {/* MOBILE PRICING CONTENT */}
      <main className="flex-grow px-5 py-12">
        <div className="text-center mb-10 max-w-sm mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 rounded-full">
            INVESTMENT PLANS
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Transparent Pricing for <span className="text-blue-600">Premium</span> Engineering.
          </h1>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Choose a partnership tier that fits your enterprise needs.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          
          {/* Tier 1 */}
          <div className="bg-white text-slate-900 p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black mb-1">Core Foundation</h3>
              <p className="text-slate-500 text-xs mb-4">High-performance MVPs & data pipelines.</p>
              <div className="mb-6">
                <span className="text-3xl font-black">Custom</span>
                <span className="text-slate-400 text-xs font-medium ml-1.5">/ project</span>
              </div>
              <button 
                onClick={() => handleOpenModal('Core Foundation')}
                className="w-full py-3 text-center text-xs font-bold bg-slate-50 text-slate-900 border border-slate-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all mb-6 shadow-sm"
              >
                Request Quote
              </button>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-600 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> UI/UX Architecture</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Automated Data Collection</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Standard API Integrations</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> 99.9% Uptime Guarantee</li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-white text-slate-900 p-8 rounded-[2.5rem] border border-slate-200 shadow-md flex flex-col justify-between relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow">
              Most Popular
            </div>
            <div>
              <h3 className="text-xl font-black mb-1">Enterprise Scale</h3>
              <p className="text-slate-500 text-xs mb-4">Full-stack web apps, payment panels & routing.</p>
              <div className="mb-6">
                <span className="text-3xl font-black">Custom</span>
                <span className="text-slate-400 text-xs font-medium ml-1.5">/ project</span>
              </div>
              <button 
                onClick={() => handleOpenModal('Enterprise Scale')}
                className="w-full py-3 text-center text-xs font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all mb-6 shadow-md"
              >
                Initiate Project
              </button>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-600 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Everything in Core</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Complex Payment Panels (We Pay)</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Encrypted Security Gateways</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> PostgreSQL & Network Routing</li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="bg-white text-slate-900 p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black mb-1">Dedicated Ops</h3>
              <p className="text-slate-500 text-xs mb-4">Monthly retainer for maintenance & deployment.</p>
              <div className="mb-6">
                <span className="text-3xl font-black">Retainer</span>
                <span className="text-slate-400 text-xs font-medium ml-1.5">/ monthly</span>
              </div>
              <button 
                onClick={() => handleOpenModal('Dedicated Ops')}
                className="w-full py-3 text-center text-xs font-bold bg-slate-50 text-slate-900 border border-slate-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all mb-6 shadow-sm"
              >
                Partner With Us
              </button>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-600 border-t border-slate-100 pt-5">
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Dedicated Engineering Hours</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Zero-Latency Server Tuning</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> End-to-end Operations Oversight</li>
              <li className="flex items-center gap-2.5"><span className="text-blue-500">✓</span> Priority 24/7 Support Channel</li>
            </ul>
          </div>

        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] max-w-md w-full shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <div className="mb-5">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Inquiry Package
              </span>
              <h2 className="text-xl font-black mt-2 text-white">{selectedPlan}</h2>
              <p className="text-slate-400 text-xs mt-1">Fill out the details below for your architecture evaluation.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-3">
             <input type="hidden" name="access_key" value="414e3e90-fece-49f0-b749-9bb79279af21" />
              <input type="hidden" name="subject" value={`New Tier Inquiry: ${selectedPlan}`} />
              <input type="hidden" name="plan" value={selectedPlan} />
              <input type="hidden" name="currency_preference" value={modalCurrency} />
              <input type="hidden" name="full_mobile_number" value={`${countryCode} ${mobileNumber}`} />

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                <input type="text" name="name" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none focus:border-blue-500" placeholder="John Doe" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none focus:border-blue-500" placeholder="john@company.com" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Number</label>
                <div className="flex gap-2">
                  <select 
                    value={countryCode} 
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-xl px-1.5 py-2.5 text-white font-bold text-[10px] focus:outline-none max-w-[95px]"
                  >
                    {countryCodes.map((item, idx) => (
                      <option key={idx} value={item.code}>{item.code} ({item.name})</option>
                    ))}
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
                <select name="timeline" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none">
                  <option value="Urgent (ASAP)">Urgent (ASAP)</option>
                  <option value="1-2 Weeks">1-2 Weeks</option>
                  <option value="1 Month">1 Month</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Estimated Budget</label>
                  <select 
                    value={modalCurrency} 
                    onChange={(e) => setModalCurrency(e.target.value)}
                    className="bg-slate-800 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="EUR">EUR (€)</option>
                  </select>
                </div>
                <select name="estimated_budget" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none">
                  <option value="Custom / Enterprise">Custom / Enterprise Project</option>
                  <option value="Standard Tier">Standard Tier Scope</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Scope</label>
                <textarea name="message" rows={2} required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-white text-xs focus:outline-none resize-none" placeholder="Describe requirements..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-md text-xs mt-1">
                Submit Inquiry
              </button>
            </form>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-[10px] font-mono mt-auto">
        © {new Date().getFullYear()} RAJAT.AI. All rights reserved.
      </footer>
    </div>
  );
}