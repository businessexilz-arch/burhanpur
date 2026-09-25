import React from 'react';
import { MessageCircle, Milk, Sparkles, Flame } from 'lucide-react';
import signatureDishImage from '@/src/assets/images/mawa_jalebi_signature_1790259021738.jpg';

interface SignatureCraftSectionProps {
  onOpenOrderModal: (sweetId?: string) => void;
}

export const SignatureCraftSection: React.FC<SignatureCraftSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="bg-[#241103] text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FDCD81]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & 3 Pillars */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#FDCD81] block">
              SIGNATURE CRAFT
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Burhanpur Ka Asli Swaad
            </h2>

            {/* Prose */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Crispy jalebi, rich mawa aur traditional taste — ek aisa combination jo Burhanpur ki 
              meethaas ko represent karta hai. Unlike standard flour jalebis, our mawa jalebi 
              features a rich condensed milk foundation, fried slow to a deep dark finish before being 
              immersed in spiced saffron nectar.
            </p>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#FDCD81]/20 text-[#FDCD81] flex items-center justify-center mb-3">
                  <Milk className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Pure Mawa Core</h4>
                  <p className="text-[11px] text-stone-400 mt-1 leading-snug">Rich buffalo milk khoya base</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#FDCD81]/20 text-[#FDCD81] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Saffron Infusion</h4>
                  <p className="text-[11px] text-stone-400 mt-1 leading-snug">Kashmiri kesar & cardamom</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#FDCD81]/20 text-[#FDCD81] flex items-center justify-center mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Warm & Fresh</h4>
                  <p className="text-[11px] text-stone-400 mt-1 leading-snug">Direct from hot kadhai</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => onOpenOrderModal('mawa-jalebi')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFEADE] hover:bg-white text-[#311401] text-xs sm:text-sm font-semibold shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Order Mawa Jalebi on WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Signature Plate Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl max-w-lg w-full aspect-square group">
              <img
                src={signatureDishImage}
                alt="Original Burhanpur Mawa Jalebi served on handcrafted plate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/15 flex items-center justify-between">
                <span className="text-xs text-stone-200 font-medium">Glistening with Kesar & Roasted Khoya</span>
                <span className="text-xs font-serif text-[#FDCD81] font-bold">Generational Recipe</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
