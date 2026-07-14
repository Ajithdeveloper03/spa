import { Crown, Wifi, Coffee, Music, Sparkles, Lock } from 'lucide-react';

const amenities = [
  { icon: Lock, label: 'Private Suite' },
  { icon: Music, label: 'Soothing Music' },
  { icon: Coffee, label: 'Complimentary Tea' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Sparkles, label: 'Aromatherapy' },
  { icon: Crown, label: 'Premium Service' },
];

export default function VIPSuites() {
  return (
    <section className="bg-[#0d0905] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] mb-3">VIP SUITES</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              An Exclusive Retreat<br />Just for You
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Step into our private VIP suites, designed for ultimate comfort and discretion.
              Enjoy personalized treatments in a serene atmosphere with premium amenities,
              ambient lighting, and dedicated service from our top therapists.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                    <a.icon size={16} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white/80 text-sm">{a.label}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#c9a84c] hover:bg-[#b8943d] text-black font-semibold px-6 py-3 text-sm tracking-wider transition-colors">
              RESERVE A SUITE
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <img
              src="https://images.pexels.com/photos/3998014/pexels-photo-3998014.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="VIP Suite"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm border border-[#c9a84c]/40 px-4 py-2">
              <div className="flex items-center gap-2">
                <Crown size={16} className="text-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest">VIP EXPERIENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
