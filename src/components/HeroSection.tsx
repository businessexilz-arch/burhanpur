import React from 'react';
import { MessageCircle, Store, Sparkles, Flame } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_mawa_jalebi_1790258984609.jpg';

interface HeroSectionProps {
  onOpenOrderModal: (sweetId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="home" className="relative overflow-hidden hero-pattern pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FFEADE]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FCE4D6]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEADE] border border-[#EADFCB] text-[#7B5817] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25E2E] animate-pulse" />
              <span>FRESH • HOT • TRADITIONAL</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[60px] leading-[1.1] font-bold text-[#311401] tracking-tight">
              Burhanpur Ki Mashhoor <br className="hidden sm:block" />
              <span className="italic font-normal text-[#4A2810]">Mawa Jalebi</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#51443D] text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Burhanpur ke asli swaad ka maza — fresh Mawa Jalebi aur traditional Indian sweets, 
              made with care and generational craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenOrderModal('mawa-jalebi')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                <span>Order Now on WhatsApp</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFEADE] hover:bg-[#FCD8C1] border border-[#EADFCB] text-[#311401] text-sm sm:text-base font-semibold transition-all hover:shadow-xs"
              >
                <Store className="w-4 h-4 text-[#7B5817]" />
                <span>Visit Our Store</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-medium text-[#51443D]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FFEADE] flex items-center justify-center text-[#7B5817]">
                  <Sparkles className="w-3 h-3 text-[#C25E2E]" />
                </span>
                <span>Pure Dairy Mawa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FFEADE] flex items-center justify-center text-[#7B5817]">
                  <Flame className="w-3 h-3 text-[#C25E2E]" />
                </span>
                <span>Daily Fresh Kadhai</span>
              </div>
            </div>

          </div>

          {/* Right Column: Arched Signature Dish Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Arched Frame Container */}
              <div className="relative overflow-hidden jalebi-arch shadow-2xl border-4 border-[#FFF] bg-[#4A2810] aspect-[3/4]">
                <img
                  src={heroImage}
                  alt="Burhanpur Mawa Jalebi glistening with saffron syrup"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Signature Dish Banner Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center justify-between bg-black/70 backdrop-blur-md border-t border-white/10 text-white">
                  <div>
                    <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#FDCD81]">
                      SIGNATURE DISH
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-white tracking-wide">
                      Original Mawa Jalebi
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#FDCD81]">
                      ₹140
                    </span>
                    <span className="block text-[10px] text-stone-300 font-sans">
                      / 250g
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Accent Tag behind arch */}
              <div className="absolute -top-3 -right-3 -z-10 w-full h-full jalebi-arch bg-[#FDCD81]/30 blur-sm pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
