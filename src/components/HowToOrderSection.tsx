import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HowToOrderSectionProps {
  onOpenOrderModal: () => void;
}

export const HowToOrderSection: React.FC<HowToOrderSectionProps> = ({ onOpenOrderModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Sweets',
      desc: 'Apni favourite sweets select karo — Mawa Jalebi, Gulab Jamun, Barfi, ya Namkeen.',
    },
    {
      num: '02',
      title: 'Order on WhatsApp',
      desc: 'Product aur quantity WhatsApp par bhejo with single tap message generation.',
    },
    {
      num: '03',
      title: 'Get Fresh Sweets',
      desc: 'Burhanpur mein pickup ya convenient home delivery choose karo garam sweets ke liye.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817] block">
          EFFORTLESS ORDERING
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#311401] mt-1">
          How To Order
        </h2>
        <p className="text-[#51443D] text-sm sm:text-base mt-2 max-w-lg mx-auto">
          Ghar baithe ya dukan se pickup karein teen aasan steps mein.
        </p>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#FFF1EA] border border-[#EADFCB] relative flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#311401] block">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#311401] mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#51443D] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered WhatsApp Action */}
        <div className="mt-10">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Start Your Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
