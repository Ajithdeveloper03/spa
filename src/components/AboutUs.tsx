import { Check } from 'lucide-react';

const points = [
  'Certified, professionally trained reflexologists',
  'Private VIP suites for a truly personalized experience',
  'Premium oils, hot towels, and aromatic therapies',
  'Tranquil, spa-grade ambiance designed for deep relaxation',
];

export default function AboutUs() {
  return (
    <section className="bg-[#0d0905] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Reflexology treatment"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#c9a84c] text-black px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold leading-none">10+</div>
              <div className="text-xs font-semibold tracking-wider mt-1">YEARS EXPERIENCE</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] mb-3">ABOUT US</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Your Sanctuary for<br />Holistic Foot Care
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              At Foot Pulse Reflexology, we blend ancient reflexology techniques with modern
              wellness practices to deliver an experience that relaxes the body, calms the mind,
              and restores balance. Our certified therapists are dedicated to your well-being in
              a serene, luxurious setting.
            </p>

            <div className="space-y-3 mb-8">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-white/80 text-sm">{p}</span>
                </div>
              ))}
            </div>

            <button className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black px-6 py-3 text-sm font-semibold tracking-wider transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
