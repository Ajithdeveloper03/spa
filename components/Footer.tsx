'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Clock, PhoneCall, Phone, MessageCircle, MapPin, Mail, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" ref={ref} className="w-full bg-darkGreen-950">
      
      {/* Top Contact Bar */}
      <div className="w-full border-t border-b border-darkGreen-800/50">
        <div className="w-full max-w-[1400px] px-6 lg:px-12 mx-auto py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 reveal">
            
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-gold-500" />
              <div>
                <p className="font-montserrat text-xs font-bold text-cream uppercase tracking-widest">OPEN EVERYDAY</p>
                <p className="font-montserrat text-sm text-gold-400">10:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-darkGreen-800" />

            <div className="flex items-center gap-4">
              <PhoneCall className="w-6 h-6 text-gold-500" />
              <div>
                <p className="font-montserrat text-xs font-bold text-cream uppercase tracking-widest">CALL US</p>
                <p className="font-montserrat text-sm text-gold-400">+91 90030 10888</p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-10 bg-darkGreen-800" />

            <div className="flex items-center gap-4">
              <MessageCircle className="w-6 h-6 text-gold-500" />
              <div>
                <p className="font-montserrat text-xs font-bold text-cream uppercase tracking-widest">WHATSAPP US</p>
                <p className="font-montserrat text-sm text-gold-400">+91 90030 10888</p>
              </div>
            </div>

            <button className="flex items-center gap-3 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-montserrat text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300">
              BOOK APPOINTMENT NOW
              <ArrowRight className="w-4 h-4" />
            </button>
            
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-[1400px] px-6 lg:px-12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 reveal delay-100">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="#hero" className="flex items-center mb-6">
              <div className="relative w-44 h-52">
                <Image src="/logo.png" alt="Foot Pulse Logo" fill className="object-contain brightness-0 invert" />
              </div>
            </Link>
            <p className="font-montserrat text-sm font-medium text-cream/80 leading-relaxed max-w-sm">
              Your ultimate destination for luxury foot reflexology. Step into a world of pure relaxation, wellness, and expert care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat text-sm font-bold text-gold-500 uppercase mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'VIP Suites', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-montserrat text-sm font-medium text-cream/70 hover:text-gold-500 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-montserrat text-sm font-bold text-gold-500 uppercase mb-6">OUR SERVICES</h4>
            <ul className="space-y-4">
              {[
                'Luxury Foot Reflexology',
                'Stress Relief Therapy',
                'Sleep Wellness Therapy',
                'VIP Private Suites',
                'Pressure Reflection Experience',
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="font-montserrat text-sm font-medium text-cream/70 hover:text-gold-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat text-sm font-bold text-gold-500 uppercase mb-6">CONTACT US</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold-500 mt-1 shrink-0" />
                <span className="font-montserrat text-sm font-medium text-cream/70 leading-relaxed">
                  No 123, Anna Salai, Chennai,<br />Tamil Nadu - 600002
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="font-montserrat text-sm font-medium text-cream/70">+91 90030 10888</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="font-montserrat text-sm font-medium text-cream/70">info@footpulsewellness.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Link href="#" className="w-10 h-10 rounded-full border-2 border-darkGreen-800 flex items-center justify-center text-cream/70 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border-2 border-darkGreen-800 flex items-center justify-center text-cream/70 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border-2 border-darkGreen-800 flex items-center justify-center text-cream/70 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
