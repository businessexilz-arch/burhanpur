import React, { useState } from 'react';
import { X, Truck, Clock, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

const LOCALITIES = [
  { area: 'Patidar Colony & Loharmandi', fee: 20, time: '15-20 mins', zone: 'Zone 1 (Express)' },
  { area: 'Prakash Talkies Vicinity', fee: 20, time: '15-20 mins', zone: 'Zone 1 (Express)' },
  { area: 'Lalbagh Road', fee: 30, time: '20-30 mins', zone: 'Zone 2 (Central)' },
  { area: 'Subhash Chowk & Bazar', fee: 25, time: '20-25 mins', zone: 'Zone 2 (Central)' },
  { area: 'Burhanpur Railway Station', fee: 35, time: '25-35 mins', zone: 'Zone 3 (Outer)' },
  { area: 'Rastipura', fee: 30, time: '25-30 mins', zone: 'Zone 2 (Central)' },
  { area: 'Shikarpura & Amravati Gate', fee: 35, time: '30-40 mins', zone: 'Zone 3 (Outer)' },
  { area: 'Shahpur Road & Industrial Area', fee: 45, time: '35-45 mins', zone: 'Zone 4 (Extended)' },
];

export const DeliveryModal: React.FC<DeliveryModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderModal,
}) => {
  if (!isOpen) return null;

  const [selectedLocality, setSelectedLocality] = useState(LOCALITIES[0]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#EADFCB] overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#311401] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FDCD81]/20 flex items-center justify-center text-[#FDCD81]">
              <Truck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg font-bold">Burhanpur Delivery Service</h3>
              <p className="text-[11px] text-[#FDCD81]">Check delivery time & fees across town</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-left space-y-5">
          
          <div>
            <label className="block text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Select Your Neighborhood
            </label>
            <select
              value={selectedLocality.area}
              onChange={(e) => {
                const found = LOCALITIES.find((l) => l.area === e.target.value);
                if (found) setSelectedLocality(found);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFCB] bg-[#FFF8F5] text-sm text-[#311401] font-medium"
            >
              {LOCALITIES.map((loc) => (
                <option key={loc.area} value={loc.area}>
                  {loc.area} ({loc.zone})
                </option>
              ))}
            </select>
          </div>

          {/* Result Highlight Card */}
          <div className="p-4 rounded-xl bg-[#FFF1EA] border border-[#EADFCB] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#7B5817] uppercase tracking-wide">
                {selectedLocality.zone}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Available Now
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white rounded-lg border border-[#EADFCB]">
                <div className="flex items-center gap-1.5 text-xs text-[#51443D] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#7B5817]" />
                  <span>Estimated Time</span>
                </div>
                <span className="text-base font-bold text-[#311401]">
                  {selectedLocality.time}
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#EADFCB]">
                <div className="flex items-center gap-1.5 text-xs text-[#51443D] mb-1">
                  <Truck className="w-3.5 h-3.5 text-[#7B5817]" />
                  <span>Delivery Charge</span>
                </div>
                <span className="text-base font-bold text-[#311401]">
                  ₹{selectedLocality.fee}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-[#51443D]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Packed in double-insulated heat-retaining food containers to keep mawa jalebi crispy & warm.</span>
            </div>
          </div>

          {/* Quick neighborhood list */}
          <div>
            <h4 className="text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Coverage Highlights
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#51443D]">
              {LOCALITIES.slice(0, 6).map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#FFF8F5]">
                  <MapPin className="w-3 h-3 text-[#7B5817]" />
                  <span className="truncate">{item.area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action */}
        <div className="bg-[#FFF8F5] border-t border-[#EADFCB] px-6 py-4 flex gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenOrderModal();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Proceed to Order on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
