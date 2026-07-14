import { Calendar, MessageCircle, Shield, Moon, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[580px] flex items-center overflow-hidden bg-[#0d0905]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Foot reflexology massage"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0905]/90 via-[#0d0905]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 pt-32">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Relax • Recharge • Restore
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#c9a84c] leading-snug mb-8">
            Luxury Foot Reflexology<br />with Exclusive VIP Suites
          </h2>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Shield size={16} className="text-[#c9a84c]" />
              <span>Relieve Stress</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Moon size={16} className="text-[#c9a84c]" />
              <span>Improve Sleep</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Zap size={16} className="text-[#c9a84c]" />
              <span>Restore Energy</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8943d] text-black font-semibold px-6 py-3 text-sm tracking-wider transition-colors">
              <span>BOOK APPOINTMENT</span>
              <Calendar size={16} />
            </button>
            <button className="flex items-center gap-2 border border-white/60 hover:border-[#c9a84c] text-white font-semibold px-6 py-3 text-sm tracking-wider transition-colors hover:text-[#c9a84c]">
              <span>WHATSAPP US</span>
              <MessageCircle size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
