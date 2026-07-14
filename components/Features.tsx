import { UserCheck, ShieldCheck, Sparkles, Key, Leaf, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'EXPERT\nTHERAPISTS',
    description: 'Trained professionals with years of experience in reflexology.',
  },
  {
    icon: ShieldCheck,
    title: 'HYGIENIC &\nSAFE',
    description: 'Clean, sanitized and well-maintained environment.',
  },
  {
    icon: Sparkles,
    title: 'PREMIUM\nAMBIENCE',
    description: 'Soothing interiors designed for your complete relaxation.',
  },
  {
    icon: Key,
    title: 'EXCLUSIVE VIP\nSUITES',
    description: 'Private suites for the ultimate luxury experience.',
  },
  {
    icon: Leaf,
    title: 'NATURAL\nWELLNESS',
    description: 'Holistic therapies that promote healing and well-being.',
  },
  {
    icon: HeartPulse,
    title: 'TOTAL\nRELAXATION',
    description: 'Refresh your mind, body and soul in a peaceful space.',
  },
];

export default function Features() {
  return (
    <section className="w-full bg-cream py-8 sm:py-12">
      <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-5 group">
                <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-12 h-12 text-gold-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-cormorant text-lg sm:text-xl font-bold text-[#004d40] uppercase mb-2 tracking-wide whitespace-pre-line">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-sm font-normal text-[#004d40]/80 leading-relaxed max-w-[200px] mx-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
