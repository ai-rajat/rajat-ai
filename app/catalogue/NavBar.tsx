'use client';

interface NavBarProps {
  theme?: string;
  onBack?: () => void;
}

export default function NavBar({ theme = 'minimal-store', onBack }: NavBarProps) {
  return (
    <>
      {onBack && (
        <div className="fixed top-4 left-4 z-[9999]">
          <button 
            onClick={onBack}
            className="bg-slate-900/90 border border-slate-800 text-white px-4 py-2.5 rounded-xl font-medium shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:bg-blue-600 hover:border-blue-500 transition flex items-center gap-2 text-xs uppercase tracking-wider font-mono cursor-pointer backdrop-blur-md"
          >
            ← Hub
          </button>
        </div>
      )}
    </>
  );
}