import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageCircle, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* CTA Bar */}
      <section className="relative bg-[#0d0905] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0905] via-[#0d0905]/80 to-[#0d0905]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Relax & Restore?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the ultimate in foot reflexology luxury.
            Your journey to wellness begins here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8943d] text-black font-semibold px-6 py-3 text-sm tracking-wider transition-colors">
              <Calendar size={16} />
              <span>BOOK APPOINTMENT</span>
            </button>
            <button className="flex items-center gap-2 border border-white/60 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] font-semibold px-6 py-3 text-sm tracking-wider transition-colors">
              <MessageCircle size={16} />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1008] border-t border-[#c9a84c]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 40 50" className="w-7 h-9 text-[#c9a84c]" fill="currentColor">
                  <path d="M20 2C14 2 8 8 8 16c0 5 2.5 9 6 12l-3 14h18l-3-14c3.5-3 6-7 6-12C32 8 26 2 20 2zm0 4c4.4 0 8 4 8 10s-3.6 10-8 10-8-4-8-10S15.6 6 20 6z"/>
                </svg>
                <div>
                  <div className="text-[#c9a84c] font-bold text-sm tracking-widest">FOOT PULSE</div>
                  <div className="text-[#c9a84c] font-bold text-sm tracking-widest">REFLEXOLOGY</div>
                </div>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Your sanctuary for holistic foot care. Relax, recharge, and restore with our
                premium reflexology treatments.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c] transition-colors group"
                  >
                    <Icon size={15} className="text-[#c9a84c] group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">QUICK LINKS</h4>
              <ul className="space-y-2.5">
                {['Home', 'About Us', 'Services', 'VIP Suites', 'Gallery', 'Testimonials'].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">OUR SERVICES</h4>
              <ul className="space-y-2.5">
                {[
                  'Classic Foot Reflexology',
                  'Aromatherapy Foot Ritual',
                  'Hot Stone Foot Therapy',
                  'VIP Signature Retreat',
                  'Corporate Wellness',
                  'Gift Cards',
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">CONTACT US</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <span className="text-white/55 text-sm">123 Wellness Street, Serenity Plaza, New York, NY 10001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#c9a84c] shrink-0" />
                  <span className="text-white/55 text-sm">(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#c9a84c] shrink-0" />
                  <span className="text-white/55 text-sm">hello@footpulse.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                  <span className="text-white/55 text-sm">Mon–Sun: 9:00 AM – 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#c9a84c]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © 2024 Foot Pulse Reflexology. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-white/40 hover:text-[#c9a84c] text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-[#c9a84c] text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-[#c9a84c] text-xs transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
