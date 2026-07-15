"use client";

import React from 'react';
import { ArrowRight, Clock, Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#052b22] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-6 px-6 gap-6">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">OPEN EVERYDAY</p>
                <p className="text-white/80 font-montserrat text-sm">10:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">CALL US</p>
                <p className="text-white/80 font-montserrat text-sm">+91 90030 10888</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>

            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-bold tracking-widest font-cormorant text-white mb-1">WHATSAPP US</p>
                <p className="text-white/80 font-montserrat text-sm">+91 90030 10888</p>
              </div>
            </div>
          </div>

          <button className="bg-[#b37a4c] font-montserrat text-white px-8 py-3 rounded hover:bg-[#9c6a42] font-bold text-xs tracking-widest transition-colors flex items-center gap-2">
            BOOK APPOINTMENT NOW <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#043329] text-white py-16 px-6 font-montserrat">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-2 rounded-xl w-max shadow-lg mb-2">
              <img src="/foot-pulse/logo.png" alt="Foot Pulse Logo" className="w-40 md:w-48 h-14 object-contain" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed pr-4">
              Your ultimate destination for luxury foot reflexology. Step into a world of pure relaxation, wellness, and expert care.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4 items-center text-white/80 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <p>+91 90030 10888</p>
              </div>
              <div className="flex gap-4 items-center text-white/80 text-sm">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <p>info@footpulsewellness.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-[#043329] hover:border-gold-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">QUICK LINKS</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">VIP Suites</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">OUR SERVICES</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Luxury Foot Reflexology</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Stress Relief Therapy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sleep Wellness Therapy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">VIP Private Suites</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pressure Reflection Experience</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-gold-500 font-bold mb-6 tracking-wide text-sm">LOCATIONS</h3>
            <ul className="space-y-6 text-white/80 text-sm">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Mylapore Branch</p>
                  <p className="leading-relaxed text-xs">No. 2 & 3, Bishop Wallers Avenue East, C.I.T. Colony, Mylapore, Chennai – 600004<br/>(Opposite Hotel Savera & Near Tamil Koodam Mess)</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">T. Nagar Branch</p>
                  <p className="leading-relaxed text-xs">No. 147, 2nd Floor, Sucans Sivagami Square, G.N. Chetty Road, T. Nagar, Chennai – 600017<br/>(Opposite Virudhunagar Hotel & Near Saravana Stores)</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </footer>
    </>
  );
}
