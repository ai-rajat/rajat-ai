'use client';
import { useState } from 'react';
import NavBar from './NavBar';

// Shop Hub Components & Grid
import LB_Hero_Modern from './LB_Hero_Modern';
import LB_Hero_Minimal from './LB_Hero_Minimal';
import LB_Hero_BoldCTA from './LB_Hero_BoldCTA';
import LB_Hero_EcoGreen from './LB_Hero_EcoGreen';
import LB_Hero_LuxuryGold from './LB_Hero_LuxuryGold';
import LB_Hero_TechRepair from './LB_Hero_TechRepair';
import LB_Services_Grid from './LB_Services_Grid';

// Real Estate Hub Components & Grid
import RE_Hero_LuxuryVilla from './RE_Hero_LuxuryVilla';
import RE_Hero_UrbanApartment from './RE_Hero_UrbanApartment';
import RE_Hero_SuburbanHome from './RE_Hero_SuburbanHome';
import RE_Hero_Commercial from './RE_Hero_Commercial';
import RE_Hero_Beachfront from './RE_Hero_Beachfront';
import RE_Hero_Penthouse from './RE_Hero_Penthouse';
import RE_Services_Grid from './RE_Services_Grid';

// SaaS Hub Components & Grid
import SAAS_Hero_AICopilot from './SAAS_Hero_AICopilot';
import SAAS_Hero_Fintech from './SAAS_Hero_Fintech';
import SAAS_Hero_DevOps from './SAAS_Hero_DevOps';
import SAAS_Hero_CRM from './SAAS_Hero_CRM';
import SAAS_Hero_Security from './SAAS_Hero_Security';
import SAAS_Hero_ProjectMgmt from './SAAS_Hero_ProjectMgmt';
import SAAS_Services_Grid from './SAAS_Services_Grid';

// Agency & Portfolio Hub Components
import Agency_Hero_CreativeStudio from './Agency_Hero_CreativeStudio';
import Agency_Hero_DevPortfolio from './Agency_Hero_DevPortfolio';
import Agency_Hero_VideoEditor from './Agency_Hero_VideoEditor';
import Agency_Hero_MarketingGrowth from './Agency_Hero_MarketingGrowth';
import Agency_Hero_UIUXDesigner from './Agency_Hero_UIUXDesigner';
import Agency_Hero_FreelanceConsultant from './Agency_Hero_FreelanceConsultant';

export default function Page() {
  const [activeHub, setActiveHub] = useState<'shop' | 'real-estate' | 'saas' | 'agency' | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  // Shop Hub Categories
  const shopShops = [
    { id: 'modern-cafe', title: 'Cafe & Restaurant', desc: 'Dark theme with ambient imagery and booking CTA', badge: 'Popular', component: <LB_Hero_Modern /> },
    { id: 'minimal-store', title: 'Minimalist Boutique', desc: 'Clean white background with elegant typography', badge: 'Clean', component: <LB_Hero_Minimal /> },
    { id: 'bold-fitness', title: 'Gym & Fitness Center', desc: 'High-energy vibrant layout with strong conversion', badge: 'High Conversion', component: <LB_Hero_BoldCTA /> },
    { id: 'eco-green', title: 'Organic Wellness & Clinic', desc: 'Soft green theme with natural and sustainable feel', badge: 'Wellness', component: <LB_Hero_EcoGreen /> },
    { id: 'luxury-gold', title: 'Luxury Boutique & Jewellers', desc: 'Sophisticated dark and gold elegant royal look', badge: 'Premium', component: <LB_Hero_LuxuryGold /> },
    { id: 'tech-repair', title: 'Tech & Gadget Repair Hub', desc: 'Sleek tech blue theme focused on fast service quotes', badge: 'Utility', component: <LB_Hero_TechRepair /> },
  ];

  // Real Estate Hub Categories
  const realEstateShops = [
    { id: 'luxury-villa', title: 'Ultra Luxury Villa & Mansion', desc: 'Architectural masterpiece private estates with panoramic views', badge: 'Exclusive', component: <RE_Hero_LuxuryVilla /> },
    { id: 'urban-apartment', title: 'High-Rise City Condos', desc: 'Modern smart-home integrated luxury downtown suites', badge: 'Popular', component: <RE_Hero_UrbanApartment /> },
    { id: 'suburban-home', title: 'Spacious Suburban Homes', desc: 'Peaceful green neighborhoods with large manicured lawns', badge: 'Family', component: <RE_Hero_SuburbanHome /> },
    { id: 'commercial', title: 'Commercial Office Spaces', desc: 'Grade-A corporate hubs and high footfall retail showrooms', badge: 'Business', component: <RE_Hero_Commercial /> },
    { id: 'beachfront', title: 'Waterfront & Beachfront Estates', desc: 'Direct oceanfront villas with private coastline access', badge: 'Luxury', component: <RE_Hero_Beachfront /> },
    { id: 'penthouse', title: 'Sky Penthouses', desc: 'Multi-level private rooftop terraces and 360 views', badge: 'Elite', component: <RE_Hero_Penthouse /> },
  ];

  // SaaS Hub Categories
  const saasShops = [
    { id: 'ai-copilot', title: 'AI Copilot & LLM Wrapper', desc: 'Futuristic dark neon UI with prompt simulation box', badge: 'AI Native', component: <SAAS_Hero_AICopilot /> },
    { id: 'fintech-saas', title: 'Fintech & Treasury Engine', desc: 'Automated invoicing, tax compliance, and revenue tracking', badge: 'Finance', component: <SAAS_Hero_Fintech /> },
    { id: 'devops-sentinel', title: 'DevOps & Cloud Sentinel', desc: 'Terminal aesthetic with real-time cluster health monitoring', badge: 'Tech', component: <SAAS_Hero_DevOps /> },
    { id: 'crm-pipeline', title: 'CRM & Pipeline Automation', desc: 'High-conversion sales Kanban boards and AI lead scoring', badge: 'Growth', component: <SAAS_Hero_CRM /> },
    { id: 'cyber-security', title: 'Cybersecurity & Threat Intel', desc: 'Defense-grade dark mode with zero-trust firewall matrix', badge: 'Security', component: <SAAS_Hero_Security /> },
    { id: 'project-mgmt', title: 'Minimalist Workspace & Sprint', desc: 'Real-time sprint boards, velocity charts, and docs', badge: 'Productivity', component: <SAAS_Hero_ProjectMgmt /> },
  ];

  // Agency & Portfolio Hub Categories
  const agencyShops = [
    { id: 'creative-studio', title: 'Creative Digital Studio', desc: 'Bold typography agency look with interactive visual cards', badge: 'Agency', component: <Agency_Hero_CreativeStudio /> },
    { id: 'dev-portfolio', title: 'Developer & AI Specialist', desc: 'Code-snippet highlights, GitHub stats, and tech stack', badge: 'Developer', component: <Agency_Hero_DevPortfolio /> },
    { id: 'video-editor', title: 'Cinematic Video Editor', desc: 'Reel timeline aesthetic, bitrate settings, and hooks', badge: 'Creator', component: <Agency_Hero_VideoEditor /> },
    { id: 'marketing-growth', title: 'Growth Hacking Agency', desc: 'High-conversion ROAS metrics and revenue scaling funnels', badge: 'Marketing', component: <Agency_Hero_MarketingGrowth /> },
    { id: 'uiux-designer', title: 'UI/UX Product Designer', desc: 'Clean case-study layout with Figma design token systems', badge: 'Designer', component: <Agency_Hero_UIUXDesigner /> },
    { id: 'freelance-consultant', title: 'Executive Tech Advisor', desc: 'Strategic consulting milestones and booking calendar', badge: 'Advisory', component: <Agency_Hero_FreelanceConsultant /> },
  ];

  // 1. Agar koi specific design khula hai
  if (selectedDesign) {
    if (activeHub === 'shop') {
      const shop = shopShops.find(s => s.id === selectedDesign);
      return (
        <main className="relative">
          <NavBar theme={shop?.id} onBack={() => setSelectedDesign(null)} />
          {shop?.component}
          <LB_Services_Grid theme={shop?.id} />
        </main>
      );
    } else if (activeHub === 'real-estate') {
      const prop = realEstateShops.find(p => p.id === selectedDesign);
      return (
        <main className="relative">
          <NavBar theme={prop?.id} onBack={() => setSelectedDesign(null)} />
          {prop?.component}
          <RE_Services_Grid theme={prop?.id} />
        </main>
      );
    } else if (activeHub === 'saas') {
      const saas = saasShops.find(s => s.id === selectedDesign);
      return (
        <main className="relative">
          <NavBar theme={saas?.id} onBack={() => setSelectedDesign(null)} />
          {saas?.component}
          <SAAS_Services_Grid theme={saas?.id} />
        </main>
      );
    } else if (activeHub === 'agency') {
      const agency = agencyShops.find(a => a.id === selectedDesign);
      return (
        <main className="relative">
          <NavBar theme={agency?.id} onBack={() => setSelectedDesign(null)} />
          {agency?.component}
        </main>
      );
    }
  }

  // 2. Agar Shop Hub ki list khuli hai
  if (activeHub === 'shop') {
    return (
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={() => setActiveHub(null)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-md">
            ← Back to Master Hub
          </button>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Store & Business Hub</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Select a Shop Design to Preview</h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto font-medium">Tap on any business card below to open its dedicated front page layout instantly.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopShops.map((shop) => (
            <div key={shop.id} onClick={() => setSelectedDesign(shop.id)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-3">{shop.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition">{shop.title}</h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{shop.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900">
                <span>View Layout</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 3. Agar Real Estate Hub ki list khuli hai
  if (activeHub === 'real-estate') {
    return (
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={() => setActiveHub(null)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-md">
            ← Back to Master Hub
          </button>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Real Estate Hub</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Select a Property Design to Preview</h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto font-medium">Tap on any property card below to preview its exclusive real estate presentation.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realEstateShops.map((prop) => (
            <div key={prop.id} onClick={() => setSelectedDesign(prop.id)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-3">{prop.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition">{prop.title}</h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{prop.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900">
                <span>View Property Layout</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 4. Agar SaaS Hub ki list khuli hai
  if (activeHub === 'saas') {
    return (
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={() => setActiveHub(null)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-md">
            ← Back to Master Hub
          </button>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="bg-indigo-100 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">SaaS & AI Startup Hub</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Select a SaaS Platform to Preview</h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto font-medium">Tap on any software card below to preview its exclusive product landing page.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saasShops.map((saas) => (
            <div key={saas.id} onClick={() => setSelectedDesign(saas.id)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-indigo-900 bg-indigo-100 px-2.5 py-1 rounded-md inline-block mb-3">{saas.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">{saas.title}</h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{saas.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900">
                <span>View SaaS Layout</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 5. Agar Agency Hub ki list khuli hai
  if (activeHub === 'agency') {
    return (
      <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={() => setActiveHub(null)} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition shadow-md">
            ← Back to Master Hub
          </button>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="bg-purple-100 text-purple-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Agency & Portfolio Hub</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Select an Agency Portfolio to Preview</h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto font-medium">Tap on any card below to preview its custom creator or agency showcase.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencyShops.map((agency) => (
            <div key={agency.id} onClick={() => setSelectedDesign(agency.id)} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col justify-between group transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-purple-900 bg-purple-100 px-2.5 py-1 rounded-md inline-block mb-3">{agency.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">{agency.title}</h3>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{agency.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900">
                <span>View Portfolio Layout</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 6. Main Landing Page (Hub Selection - Pure White Theme with 4 Hub Cards)
  return (
    <main className="min-h-screen bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
          RAJAT \ TECH • MASTER SHOWCASE HUB
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 mb-4 text-gray-900">
          Select Your Industry Showcase
        </h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto font-medium">
          Choose a sector below to explore high-end custom web design layouts tailored for clients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Shop Hub Card */}
        <div 
          onClick={() => setActiveHub('shop')}
          className="bg-white border border-gray-200 p-8 rounded-3xl cursor-pointer hover:shadow-2xl hover:border-amber-500 transition-all duration-300 group shadow-md flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🛍️</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition">Store & Business Hub</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Explore 6 bespoke layouts including Cafes, Boutiques, Gyms, and Tech Repair hubs.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-amber-600 text-sm">
            <span>Open Shop Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* Real Estate Hub Card */}
        <div 
          onClick={() => setActiveHub('real-estate')}
          className="bg-white border border-gray-200 p-8 rounded-3xl cursor-pointer hover:shadow-2xl hover:border-amber-500 transition-all duration-300 group shadow-md flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🏰</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition">Real Estate Hub</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Explore 6 high-end layouts including Luxury Villas, Condos, and Penthouses.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-amber-600 text-sm">
            <span>Open Real Estate Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* SaaS & AI Hub Card */}
        <div 
          onClick={() => setActiveHub('saas')}
          className="bg-white border border-gray-200 p-8 rounded-3xl cursor-pointer hover:shadow-2xl hover:border-indigo-600 transition-all duration-300 group shadow-md flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">⚡</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition">SaaS & AI Hub</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Explore 6 cutting-edge software layouts including AI Copilots, Fintech, and DevOps.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-indigo-600 text-sm">
            <span>Open SaaS Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* Agency & Portfolio Hub Card */}
        <div 
          onClick={() => setActiveHub('agency')}
          className="bg-white border border-gray-200 p-8 rounded-3xl cursor-pointer hover:shadow-2xl hover:border-purple-600 transition-all duration-300 group shadow-md flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🎨</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition">Agency & Portfolio Hub</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Explore 6 creator portfolios including Developer, Video Editor, UI/UX, and Growth Agency.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-purple-600 text-sm">
            <span>Open Agency Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </main>
  );
}