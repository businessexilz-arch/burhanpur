import React from 'react';
import { MessageCircle } from 'lucide-react';

interface PreFooterCtaProps {
  onOpenOrderModal: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="bg-[#311401] text-white py-20 sm:py-28 relative overflow-hidden text-center">
      {/* Subtle Background Radial Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FDCD81]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#FDCD81] block">
          Artisanal Pure Khoya Confections
        </span>

        {/* Display Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Meetha Ho To <br className="hidden sm:inline" />
          <span className="italic text-[#FDCD81]">Burhanpur Mawa Jalebi</span> Ka!
        </h2>

        {/* Subtitle */}
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Fresh sweets are just a WhatsApp message away. Send us your order details and enjoy 
          authentic Burhanpur tradition.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FFEADE] hover:bg-white text-[#311401] text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span>Order Now on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
