import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Regular Client',
    text: 'The VIP suite experience was beyond anything I expected. The ambiance, the therapist, the aromatherapy — pure bliss. I left feeling completely renewed.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'James Carter',
    role: 'First-time Visitor',
    text: 'I came in with chronic foot pain from running. After one session of hot stone therapy, I felt immediate relief. The therapists truly know their craft.',
    avatar: 'https://images.pexels.com/photos/220457/pexels-photo-220457.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Emily Chen',
    role: 'Wellness Enthusiast',
    text: 'Foot Pulse has become my monthly ritual. The aromatherapy foot ritual is divine — I sleep better for days after every visit. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1a1008] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] mb-3">TESTIMONIALS</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a84c]/40" />
            <span className="text-[#c9a84c] text-lg">✦</span>
            <span className="h-px w-10 bg-[#c9a84c]/40" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0d0905] border border-[#c9a84c]/15 p-6 relative hover:border-[#c9a84c]/40 transition-colors"
            >
              <Quote size={32} className="text-[#c9a84c]/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#c9a84c]/40"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#c9a84c]/70 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
