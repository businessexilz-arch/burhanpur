import React from 'react';
import { Clock, Award, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';

interface FeaturesStripProps {
  onOpenOrderModal: () => void;
}

export const FeaturesStrip: React.FC<FeaturesStripProps> = ({ onOpenOrderModal }) => {
  const features = [
    {
      icon: Clock,
      title: 'Freshly Made',
      desc: 'Daily fresh batch preparation',
    },
    {
      icon: Award,
      title: 'Burhanpur Special',
      desc: 'Authentic khoya-rich recipe',
    },
    {
      icon: ShieldCheck,
      title: 'Pure Quality',
      desc: 'Pure mawa, desi ghee & saffron',
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      desc: 'Available across Burhanpur town',
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
      <div className="bg-[#FFF1EA] border border-[#EADFCB] rounded-2xl p-4 sm:p-5 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-2.5 rounded-xl bg-white/70 border border-[#EADFCB]/60 transition-all hover:bg-white hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFEADE] text-[#7B5817] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#7B5817]" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#311401] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#51443D] mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Floating Quick Action Row */}
        <div className="flex justify-end pt-3 pr-1">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#311401] hover:bg-[#4A2810] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order Online</span>
          </button>
        </div>
      </div>
    </section>
  );
};
