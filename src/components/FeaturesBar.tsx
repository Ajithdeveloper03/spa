import { Shield, Moon, Zap, Heart, Activity, Leaf } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Relieve Stress', desc: 'Ease tension and calm your mind' },
  { icon: Moon, title: 'Improve Sleep', desc: 'Enjoy deeper, more restful rest' },
  { icon: Zap, title: 'Restore Energy', desc: 'Recharge your body and spirit' },
  { icon: Heart, title: 'Enhance Circulation', desc: 'Boost blood flow and vitality' },
  { icon: Activity, title: 'Boost Immunity', desc: 'Support your natural defenses' },
  { icon: Leaf, title: 'Detoxify', desc: 'Cleanse and rejuvenate your body' },
];

export default function FeaturesBar() {
  return (
    <section className="bg-[#1a1008] border-y border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-full border border-[#c9a84c]/40 flex items-center justify-center mb-3 group-hover:bg-[#c9a84c] transition-colors">
                <f.icon size={20} className="text-[#c9a84c] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white text-sm font-semibold mb-1">{f.title}</h3>
              <p className="text-white/50 text-xs leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
