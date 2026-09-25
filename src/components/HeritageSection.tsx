import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import kadhaiShopImage from '@/src/assets/images/burhanpur_shop_kadhai_1790259005382.jpg';

export const HeritageSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Kadhai Photo with Overlay Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#EADFCB] shadow-xl aspect-[4/3] group">
              <img
                src={kadhaiShopImage}
                alt="Traditional sweet maker preparing fresh jalebi in Burhanpur kadhai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Overlaid Card matching screenshot */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#EADFCB] shadow-lg flex items-center justify-between text-left">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#311401]">
                    Authentic Kadhai Daily
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#51443D] mt-0.5">
                    Cooked fresh before your eyes in Burhanpur
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FFEADE] flex items-center justify-center shrink-0 ml-3">
                  <ShieldCheck className="w-4 h-4 text-[#7B5817]" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Heritage Copy & Badges */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817] block">
              HERITAGE & ROOTS
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#311401] leading-tight">
              A Taste of Burhanpur
            </h2>

            {/* Sub-italic line */}
            <p className="font-serif italic text-base sm:text-lg text-[#7B5817]">
              A local tradition rooted in authenticity and passion for sweets.
            </p>

            {/* Paragraph */}
            <p className="text-[#51443D] text-sm sm:text-base leading-relaxed">
              Burhanpur is legendary across Madhya Pradesh for its distinctive culinary traditions, 
              especially its thick, dark Mawa Jalebi. At Burhanpur Mawa Jalebi, our daily mission 
              is simple: prepare authentic traditional sweets using only pure mawa, fine ingredients, 
              and genuine craftsmanship for our local community and visiting sweet lovers.
            </p>

            {/* 3 Value Checks */}
            <div className="space-y-3 pt-2">
              
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#311401]">
                <CheckCircle2 className="w-4 h-4 text-[#7B5817] shrink-0" />
                <span>100% Pure Milk & Mawa</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#311401]">
                <CheckCircle2 className="w-4 h-4 text-[#7B5817] shrink-0" />
                <span>No Artificial Colors</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#311401]">
                <CheckCircle2 className="w-4 h-4 text-[#7B5817] shrink-0" />
                <span>Daily Fresh Kadhai Batch</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
