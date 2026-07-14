import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Classic Foot Reflexology',
    desc: 'Traditional pressure-point techniques targeting key reflex zones to release tension and restore balance throughout the body.',
    price: '$49',
    duration: '45 min',
    img: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Aromatherapy Foot Ritual',
    desc: 'Essential oils combined with soothing massage strokes to calm the senses, hydrate the skin, and deepen relaxation.',
    price: '$69',
    duration: '60 min',
    img: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Hot Stone Foot Therapy',
    desc: 'Warm volcanic stones glide along reflex points to melt away stress, improve circulation, and energize tired feet.',
    price: '$79',
    duration: '70 min',
    img: 'https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'VIP Signature Retreat',
    desc: 'Our premium full-body experience combining reflexology, aromatherapy, and hot stones in a private luxury suite.',
    price: '$129',
    duration: '90 min',
    img: 'https://images.pexels.com/photos/7349295/pexels-photo-7349295.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section className="bg-[#1a1008] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] mb-3">OUR SERVICES</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Treatments Crafted for You</h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c9a84c]/40" />
            <span className="text-[#c9a84c] text-lg">✦</span>
            <span className="h-px w-10 bg-[#c9a84c]/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#0d0905] border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-colors group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#c9a84c] text-black text-xs font-bold px-3 py-1">
                  {s.price}
                </div>
              </div>
              <div className="p-5">
                <div className="text-[#c9a84c]/70 text-xs mb-2">{s.duration}</div>
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Book Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
