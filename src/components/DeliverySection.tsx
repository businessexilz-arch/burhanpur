import React from 'react';
import { Truck, Check, MessageCircle, Navigation } from 'lucide-react';

interface DeliverySectionProps {
  onOpenDeliveryModal: () => void;
  onOpenOrderModal: () => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  onOpenDeliveryModal,
  onOpenOrderModal,
}) => {
  return (
    <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFF1EA] border border-[#EADFCB] rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
          
          {/* Info Side */}
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#7B5817] uppercase">
              <Truck className="w-4 h-4 text-[#7B5817]" />
              <span>BURHANPUR TOWN SERVICE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#311401] leading-tight">
              Fresh Sweets, Delivered to Your Door
            </h3>

            <p className="text-xs sm:text-sm text-[#51443D] leading-relaxed">
              Burhanpur mein home delivery available hai. Delivery charges distance ke according 
              calculate kiye jayenge, ensuring thermal insulated packaging keeps your jalebi warm and crisp.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-[#311401]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7B5817]" />
                <span>Distance-based pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#7B5817]" />
                <span>Sealed packaging</span>
              </div>
            </div>
          </div>

          {/* Action Side */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenDeliveryModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-[#FFEADE] border border-[#EADFCB] text-[#311401] text-xs font-semibold shadow-xs transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#7B5817]" />
              <span>Check Delivery Area</span>
            </button>

            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Check Delivery & Order on WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
