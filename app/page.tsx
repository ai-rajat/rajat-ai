import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <header className="w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white">
              RAJAT <span className="text-blue-500">|</span> TECH
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link
              href="#services"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition hidden sm:inline-block"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition hidden sm:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="mailto:airajat.tech@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition shadow-lg shadow-blue-600/20"
            >
              LET'S TALK
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            OUR PORTFOLIO
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Systems Built for <span className="text-blue-500">Scale</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Explore our production-grade architecture. From automated trading bots to casino gaming portals, we deliver flawless execution for high-volume ecosystems.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div id="services" className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-md mb-4">
                Trading Automation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Telegram Crypto & Forex Signals Bot & Panel
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                High-performance automated Telegram bot integrated with a real-time web control panel. Delivers instant crypto and forex alerts with high uptime and speed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs sm:text-sm text-slate-400">
              <span>Stack: Node.js, Python, PostgreSQL</span>
              <span className="text-blue-400 font-medium">Production Ready</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1 rounded-md mb-4">
                High-Volume Gaming
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Casino Gaming & Betting Portal Engine
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Robust backend and UI architecture built to handle concurrent user transactions, real-time odds calculation, and secure state management.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs sm:text-sm text-slate-400">
              <span>Stack: Next.js, WebSockets, Redis</span>
              <span className="text-purple-400 font-medium">High Concurrency</span>
            </div>
          </div>
        </div>

        {/* Contact/CTA Section */}
        <div id="pricing" className="mt-20 sm:mt-32 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to build your next high-scale system?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Get in touch for enterprise-grade architecture, custom automation bots, or web application engineering.
          </p>
          <a
            href="mailto:airajat.tech@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-blue-600/30 text-sm sm:text-base"
          >
            Start a Project
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-8 text-center text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} RAJAT.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}