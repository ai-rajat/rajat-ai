'use client';
import { useState } from 'react';
import Link from 'next/link';
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

export default function DesktopCatalogue() {
  const [activeHub, setActiveHub] = useState<'shop' | 'real-estate' | 'saas' | 'agency' | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  // Shop Hub Categories
  const shopShops = [
    { id: 'modern-cafe', title: 'Cafe & Restaurant', desc: 'Dark theme with ambient imagery and booking CTA', badge: 'Popular', component: <LB_Hero_Modern /> },
    { id: 'minimal-store', title: 'Minimalist Boutique', desc: 'Clean background with elegant typography', badge: 'Clean', component: <LB_Hero_Minimal /> },
    { id: 'bold-fitness', title: 'Gym & Fitness Center', desc: 'High-energy vibrant layout with strong conversion', badge: 'High Conversion', component: <LB_Hero_BoldCTA /> },
    { id: 'eco-green', title: 'Organic Wellness & Clinic', desc: 'Soft accent theme with natural and sustainable feel', badge: 'Wellness', component: <LB_Hero_EcoGreen /> },
    { id: 'luxury-gold', title: 'Luxury Boutique & Jewellers', desc: 'Sophisticated dark and royal aesthetic look', badge: 'Premium', component: <LB_Hero_LuxuryGold /> },
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

  // Agency Hub Categories
  const agencyShops = [
    { id: 'creative-studio', title: 'Creative Digital Studio', desc: 'Bold typography agency look with interactive visual cards', badge: 'Agency', component: <Agency_Hero_CreativeStudio /> },
    { id: 'dev-portfolio', title: 'Developer & AI Specialist', desc: 'Code-snippet highlights, GitHub stats, and tech stack', badge: 'Developer', component: <Agency_Hero_DevPortfolio /> },
    { id: 'video-editor', title: 'Cinematic Video Editor', desc: 'Reel timeline aesthetic, bitrate settings, and hooks', badge: 'Creator', component: <Agency_Hero_VideoEditor /> },
    { id: 'marketing-growth', title: 'Growth Hacking Agency', desc: 'High-conversion ROAS metrics and revenue scaling funnels', badge: 'Marketing', component: <Agency_Hero_MarketingGrowth /> },
    { id: 'uiux-designer', title: 'UI/UX Product Designer', desc: 'Clean case-study layout with Figma design token systems', badge: 'Designer', component: <Agency_Hero_UIUXDesigner /> },
    { id: 'freelance-consultant', title: 'Executive Tech Advisor', desc: 'Strategic consulting milestones and booking calendar', badge: 'Advisory', component: <Agency_Hero_FreelanceConsultant /> },
  ];

  // 1. Specific design view
  if (selectedDesign) {
    if (activeHub === 'shop') {
      const shop = shopShops.find(s => s.id === selectedDesign);
      return (
        <main className="relative bg-white text-gray-950 min-h-screen">
          {/* @ts-ignore */}
          <NavBar theme={shop?.id} onBack={() => setSelectedDesign(null)} />
          {shop?.component}
          {/* @ts-ignore */}
          <LB_Services_Grid theme={shop?.id} />
        </main>
      );
    } else if (activeHub === 'real-estate') {
      const prop = realEstateShops.find(p => p.id === selectedDesign);
      return (
        <main className="relative bg-white text-gray-950 min-h-screen">
          {/* @ts-ignore */}
          <NavBar theme={prop?.id} onBack={() => setSelectedDesign(null)} />
          {prop?.component}
          {/* @ts-ignore */}
          <RE_Services_Grid theme={prop?.id} />
        </main>
      );
    } else if (activeHub === 'saas') {
      const saas = saasShops.find(s => s.id === selectedDesign);
      return (
        <main className="relative bg-white text-gray-950 min-h-screen">
          {/* @ts-ignore */}
          <NavBar theme={saas?.id} onBack={() => setSelectedDesign(null)} />
          {saas?.component}
          {/* @ts-ignore */}
          <SAAS_Services_Grid theme={saas?.id} />
        </main>
      );
    } else if (activeHub === 'agency') {
      const agency = agencyShops.find(a => a.id === selectedDesign);
      return (
        <main className="relative bg-white text-gray-950 min-h-screen">
          {/* @ts-ignore */}
          <NavBar theme={agency?.id} onBack={() => setSelectedDesign(null)} />
          {agency?.component}
        </main>
      );
    }
  }

  // 2. Hub list view
  if (activeHub) {
    const listData = 
      activeHub === 'shop' ? shopShops :
      activeHub === 'real-estate' ? realEstateShops :
      activeHub === 'saas' ? saasShops : agencyShops;

    const titleText = 
      activeHub === 'shop' ? 'Store & Business Hub' :
      activeHub === 'real-estate' ? 'Real Estate Hub' :
      activeHub === 'saas' ? 'SaaS & AI Startup Hub' : 'Agency & Portfolio Hub';

    return (
      <main className="min-h-screen bg-white text-gray-950 py-16 px-4 sm:px-6 lg:px-8 relative selection:bg-blue-600 selection:text-white">
        <div className="max-w-6xl mx-auto mb-8">
          <button onClick={() => setActiveHub(null)} className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-blue-600 transition shadow-md cursor-pointer">
            ← Back to Industry Hubs
          </button>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">{titleText}</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 mb-4 text-gray-900">
            Select Layout to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Preview</span>
          </h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto font-medium">Tap on any card below to preview its exclusive layout.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedDesign(item.id)} 
              className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-blue-900 bg-blue-100 group-hover:bg-blue-700 group-hover:text-white px-3 py-1 rounded-lg inline-block mb-4 transition-colors">{item.badge}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed group-hover:text-blue-100 transition">{item.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-500 flex items-center justify-between text-xs font-bold tracking-wider text-blue-600 group-hover:text-white uppercase transition-colors">
                <span>View Layout</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 3. Main Landing Page (Master Hub Cards with Dual Color Heading)
  return (
    <main className="min-h-screen bg-white text-gray-950 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center selection:bg-blue-600 selection:text-white relative">
      {/* Back to Home Button */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-12">
        <Link href="/" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-blue-600 transition shadow-lg inline-flex items-center gap-2 cursor-pointer">
          ← Back to Website
        </Link>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 mt-10">
        <span className="bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
          RAJAT \ TECH • MASTER SHOWCASE HUB
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-4 mb-4 text-gray-900">
          Select Your Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Showcase</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-medium">
          Choose a sector below to explore high-end custom web design layouts tailored for clients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Shop Hub Card */}
        <div 
          onClick={() => setActiveHub('shop')}
          className="bg-white border border-gray-200 p-8 rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🛍️</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition">Store & Business Hub</h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-blue-100 transition">
              Explore 6 bespoke layouts including Cafes, Boutiques, Gyms, and Tech Repair hubs.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-500 flex items-center justify-between font-bold text-blue-600 group-hover:text-white text-xs tracking-wider uppercase transition-colors">
            <span>Open Shop Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* Real Estate Hub Card */}
        <div 
          onClick={() => setActiveHub('real-estate')}
          className="bg-white border border-gray-200 p-8 rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🏰</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition">Real Estate Hub</h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-blue-100 transition">
              Explore 6 high-end layouts including Luxury Villas, Condos, and Penthouses.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-500 flex items-center justify-between font-bold text-blue-600 group-hover:text-white text-xs tracking-wider uppercase transition-colors">
            <span>Open Real Estate Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* SaaS & AI Hub Card */}
        <div 
          onClick={() => setActiveHub('saas')}
          className="bg-white border border-gray-200 p-8 rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">⚡</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition">SaaS & AI Hub</h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-blue-100 transition">
              Explore 6 cutting-edge software layouts including AI Copilots, Fintech, and DevOps.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-500 flex items-center justify-between font-bold text-blue-600 group-hover:text-white text-xs tracking-wider uppercase transition-colors">
            <span>Open SaaS Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>

        {/* Agency & Portfolio Hub Card */}
        <div 
          onClick={() => setActiveHub('agency')}
          className="bg-white border border-gray-200 p-8 rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white active:scale-[0.98] transition-all duration-300 group flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl mb-4 block">🎨</span>
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition">Agency & Portfolio Hub</h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-blue-100 transition">
              Explore 6 creator portfolios including Developer, Video Editor, UI/UX, and Growth Agency.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-blue-500 flex items-center justify-between font-bold text-blue-600 group-hover:text-white text-xs tracking-wider uppercase transition-colors">
            <span>Open Agency Hub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </main>
  );
}