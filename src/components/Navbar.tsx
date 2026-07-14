import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['HOME', 'ABOUT US', 'SERVICES', 'VIP SUITES', 'GALLERY', 'TESTIMONIALS', 'CONTACT'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1008]/95 backdrop-blur-sm border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center justify-center w-10 h-10">
            <svg viewBox="0 0 40 50" className="w-8 h-10 text-[#c9a84c]" fill="currentColor">
              <path d="M20 2C14 2 8 8 8 16c0 5 2.5 9 6 12l-3 14h18l-3-14c3.5-3 6-7 6-12C32 8 26 2 20 2zm0 4c4.4 0 8 4 8 10s-3.6 10-8 10-8-4-8-10S15.6 6 20 6z"/>
              <path d="M16 8c0 0 2 2 4 2s4-2 4-2"/>
            </svg>
          </div>
          <div>
            <div className="text-[#c9a84c] font-bold text-sm leading-tight tracking-widest">FOOT PULSE</div>
            <div className="text-[#c9a84c] font-bold text-sm leading-tight tracking-widest">REFLEXOLOGY</div>
            <div className="text-[#c9a84c]/70 text-[9px] tracking-widest">Relax • Recharge • Restore</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-xs font-semibold tracking-wider transition-colors ${
                item === 'HOME'
                  ? 'text-[#c9a84c] border-b-2 border-[#c9a84c] pb-0.5'
                  : 'text-white/80 hover:text-[#c9a84c]'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block border border-[#c9a84c] text-[#c9a84c] px-4 py-2 text-xs font-semibold tracking-widest hover:bg-[#c9a84c] hover:text-black transition-colors">
            BOOK APPOINTMENT
          </button>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1a1008] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-semibold tracking-wider ${
                item === 'HOME' ? 'text-[#c9a84c]' : 'text-white/80'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 border border-[#c9a84c] text-[#c9a84c] px-4 py-2 text-xs font-semibold tracking-widest">
            BOOK APPOINTMENT
          </button>
        </div>
      )}
    </nav>
  );
}
