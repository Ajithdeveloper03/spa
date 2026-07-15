import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Calendar,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Journey to Wellness Section */}
      <section className="bg-[#120e0a] py-16 lg:py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Your Journey to Wellness Starts Here
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
            Step into FOOT PULSE Wellness & Reflexology and discover a place where professional care, comfort, and relaxation come together. Let us help you feel lighter, calmer, and revitalized — one step at a time. Book your appointment today and experience the healing touch of FOOT PULSE.
          </p>
          <button className="bg-[#c9a84c] hover:bg-[#0d370e] hover:text-white text-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors">
            BOOK YOUR APPOINTMENT TODAY
          </button>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-[#0a0805] py-6 border-b border-[#2a251d]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="text-[#c9a84c]" size={30} strokeWidth={1.25} />
              <div>
                <div className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-1">
                  OPEN EVERYDAY
                </div>
                <div className="text-[#fcfaf7] text-[13px] font-semibold tracking-wider">
                  10:00 AM – 10:00 PM
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <PhoneCall className="text-[#c9a84c]" size={30} strokeWidth={1.25} />
              <div>
                <div className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-1">
                  CALL US
                </div>
                <div className="text-[#fcfaf7] text-[13px] font-semibold tracking-wider">
                  +91 90030 10000
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-[#c9a84c]" size={30} strokeWidth={1.25} />
              <div>
                <div className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-1">
                  WHATSAPP US
                </div>
                <div className="text-[#fcfaf7] text-[13px] font-semibold tracking-wider">
                  +91 90030 10000
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-[#d6a54a] hover:bg-[#0d370e] hover:text-white text-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors">
            <span>BOOK APPOINTMENT NOW</span>
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1008] border-t border-[#c9a84c]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4 bg-white/90 p-2 rounded-lg w-fit">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="./logo.png"
                  alt="Foot Pulse Reflexology"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Your sanctuary for holistic foot care. Relax, recharge, and restore
                with our premium reflexology treatments.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#0d370e] hover:border-[#0d370e] transition-colors group"
                  >
                    <Icon
                      size={15}
                      className="text-[#c9a84c] group-hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "VIP Suites",
                  "Gallery",
                  "Testimonials",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">
                OUR SERVICES
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Classic Foot Reflexology",
                  "Aromatherapy Foot Ritual",
                  "Hot Stone Foot Therapy",
                  "VIP Signature Retreat",
                  "Corporate Wellness",
                  "Gift Cards",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider mb-4">
                CONTACT US
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-[#c9a84c] mt-0.5 shrink-0"
                  />
                  <span className="text-white/55 text-sm">
                    123 Wellness Street, Serenity Plaza, New York, NY 10001
                  </span>
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
                  <Clock
                    size={16}
                    className="text-[#c9a84c] mt-0.5 shrink-0"
                  />
                  <span className="text-white/55 text-sm">
                    Mon–Sun: 9:00 AM – 10:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </footer>
    </>
  );
}
