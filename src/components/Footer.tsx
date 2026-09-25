import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF1EA] border-t border-[#EADFCB] text-[#51443D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EADFCB]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#311401] block">
                BURHANPUR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#7B5817] font-bold uppercase block mt-0.5">
                MAWA JALEBI
              </span>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#FFEADE] text-[#7B5817] text-[10px] font-bold tracking-wider uppercase">
                Fresh • Hot • Traditional
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#51443D] leading-relaxed max-w-sm">
              Crafting Burhanpur's legendary black-brown mawa jalebi using authentic slow-cooked 
              dairy khoya, pure saffron syrup, and generational craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#EADFCB] flex items-center justify-center text-[#7B5817] hover:bg-[#FFEADE] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#EADFCB] flex items-center justify-center text-[#7B5817] hover:bg-[#FFEADE] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#EADFCB] flex items-center justify-center text-[#7B5817] hover:bg-[#FFEADE] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#311401]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sweets" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  Our Sweets
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  About Us & Heritage
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  Visual Chronicle
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#311401] hover:underline underline-offset-4 transition-colors">
                  Store & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Store Location & Timings Column */}
          <div className="lg:col-span-4 text-left space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#311401]">
              Visit Our Store
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-[#51443D]">
              <MapPin className="w-4 h-4 text-[#C25E2E] shrink-0 mt-0.5" />
              <span>
                Prakash Talkies, Loharmandi Rd, Patidar Colony, Burhanpur, Madhya Pradesh 450331
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#51443D]">
              <Clock className="w-4 h-4 text-[#7B5817] shrink-0" />
              <span>Open Daily: 10:00 AM – 11:00 PM</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#51443D]">
              <Phone className="w-4 h-4 text-[#7B5817] shrink-0" />
              <span>Direct Orders: +91 98765 43210</span>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFEADE] hover:bg-[#FCD8C1] text-[#311401] text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#83746C]">
          <p>© 2026 Burhanpur Mawa Jalebi. All rights reserved.</p>
          <div className="flex items-center gap-4 tracking-widest text-[11px] font-bold text-[#7B5817] uppercase">
            <span>AUTHENTIC HERITAGE RECIPE</span>
            <span>•</span>
            <span>BURHANPUR, MP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
