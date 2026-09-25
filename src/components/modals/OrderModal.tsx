import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Truck, Store, Check, Sparkles } from 'lucide-react';
import { SWEETS_DATA, SweetItem } from '../../data/sweets';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSweetId?: string;
}

const BURHANPUR_AREAS = [
  { name: 'Patidar Colony (Store Vicinity)', fee: 20, time: '15-20 mins' },
  { name: 'Loharmandi Road', fee: 20, time: '15-20 mins' },
  { name: 'Lalbagh Road', fee: 30, time: '25-30 mins' },
  { name: 'Subhash Chowk & Market', fee: 25, time: '20-25 mins' },
  { name: 'Burhanpur Railway Station Area', fee: 35, time: '25-35 mins' },
  { name: 'Rastipura', fee: 30, time: '25-30 mins' },
  { name: 'Shikarpura / Amravati Gate', fee: 35, time: '30-40 mins' },
  { name: 'Shahpur Road & Outer Town', fee: 45, time: '35-45 mins' },
];

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialSweetId = 'mawa-jalebi',
}) => {
  if (!isOpen) return null;

  const [selectedSweetId, setSelectedSweetId] = useState<string>(initialSweetId);
  const [selectedWeight, setSelectedWeight] = useState<string>('500g');
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [selectedArea, setSelectedArea] = useState<string>(BURHANPUR_AREAS[0].name);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specificAddress, setSpecificAddress] = useState<string>('');
  const [specialInstructions, setSpecialInstructions] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedSweet = SWEETS_DATA.find((s) => s.id === selectedSweetId) || SWEETS_DATA[0];

  // Weight multipliers for pricing
  const getWeightMultiplier = (wt: string) => {
    if (wt.includes('250g')) return 1;
    if (wt.includes('500g')) return 2;
    if (wt.includes('1kg')) return 4;
    if (wt.includes('2kg')) return 8;
    if (wt.includes('6 pcs')) return 1;
    if (wt.includes('12 pcs')) return 2;
    if (wt.includes('24 pcs')) return 4;
    return 1;
  };

  const currentAreaObj = BURHANPUR_AREAS.find((a) => a.name === selectedArea) || BURHANPUR_AREAS[0];
  const itemTotal = selectedSweet.price * getWeightMultiplier(selectedWeight) * quantity;
  const deliveryFee = deliveryType === 'delivery' ? currentAreaObj.fee : 0;
  const grandTotal = itemTotal + deliveryFee;

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Order - Burhanpur Mawa Jalebi*\n` +
      `--------------------------------\n` +
      `*Item:* ${selectedSweet.name}\n` +
      `*Size / Weight:* ${selectedWeight}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Subtotal:* ₹${itemTotal}\n` +
      `*Order Type:* ${deliveryType === 'delivery' ? 'Home Delivery' : 'Store Pickup'}\n` +
      (deliveryType === 'delivery'
        ? `*Area:* ${selectedArea}\n*Address:* ${specificAddress || 'Provided on chat'}\n*Delivery Fee:* ₹${deliveryFee}\n`
        : `*Pickup Location:* Prakash Talkies, Loharmandi Rd\n`) +
      `*Customer:* ${customerName || 'Sweet Lover'}${customerPhone ? ` (${customerPhone})` : ''}\n` +
      (specialInstructions ? `*Special Request:* ${specialInstructions}\n` : '') +
      `*Total Payable:* ₹${grandTotal}\n` +
      `--------------------------------\n` +
      `_Sent from Burhanpur Mawa Jalebi Website_`
    );
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const waUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#EADFCB] overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#311401] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FDCD81]/20 flex items-center justify-center text-[#FDCD81]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg font-bold">Order on WhatsApp</h3>
              <p className="text-[11px] text-[#FDCD81]">Instant preparation & dispatch in Burhanpur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-left max-h-[80vh] overflow-y-auto space-y-5">
          
          {/* Sweet Selection */}
          <div>
            <label className="block text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Select Sweet Item
            </label>
            <select
              value={selectedSweetId}
              onChange={(e) => {
                setSelectedSweetId(e.target.value);
                const sweet = SWEETS_DATA.find((s) => s.id === e.target.value);
                if (sweet && sweet.weightOptions[0]) {
                  setSelectedWeight(sweet.weightOptions[1] || sweet.weightOptions[0]);
                }
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFCB] bg-[#FFF8F5] text-sm text-[#311401] font-medium focus:outline-none focus:border-[#7B5817]"
            >
              {SWEETS_DATA.map((sweet) => (
                <option key={sweet.id} value={sweet.id}>
                  {sweet.name} — Base ₹{sweet.price} ({sweet.unit})
                </option>
              ))}
            </select>
          </div>

          {/* Sweet Preview Mini Bar */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF1EA] border border-[#EADFCB]">
            <img
              src={selectedSweet.image}
              alt={selectedSweet.name}
              className="w-14 h-14 rounded-lg object-cover border border-[#EADFCB]"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#311401]">{selectedSweet.name}</h4>
                <span className="font-serif text-sm font-bold text-[#7B5817]">₹{itemTotal}</span>
              </div>
              <p className="text-[11px] text-[#51443D] line-clamp-1 mt-0.5">{selectedSweet.description}</p>
            </div>
          </div>

          {/* Portion / Weight Options */}
          <div>
            <label className="block text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Portion / Weight
            </label>
            <div className="flex flex-wrap gap-2">
              {selectedSweet.weightOptions.map((wt) => (
                <button
                  key={wt}
                  type="button"
                  onClick={() => setSelectedWeight(wt)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    selectedWeight === wt
                      ? 'bg-[#311401] text-white border-[#311401] shadow-xs'
                      : 'bg-white text-[#51443D] border-[#EADFCB] hover:bg-[#FFEADE]'
                  }`}
                >
                  {wt}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between py-2 border-y border-[#EADFCB]">
            <span className="text-xs font-bold text-[#311401] uppercase tracking-wider">
              Quantity / Packets
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-[#FFEADE] text-[#311401] font-bold text-sm flex items-center justify-center hover:bg-[#FCD8C1]"
              >
                -
              </button>
              <span className="text-sm font-bold text-[#311401] w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-[#FFEADE] text-[#311401] font-bold text-sm flex items-center justify-center hover:bg-[#FCD8C1]"
              >
                +
              </button>
            </div>
          </div>

          {/* Order Type Toggle: Delivery vs Pickup */}
          <div>
            <label className="block text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Delivery Preference
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeliveryType('delivery')}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                  deliveryType === 'delivery'
                    ? 'bg-[#FFEADE] border-[#7B5817] text-[#311401] ring-1 ring-[#7B5817]'
                    : 'bg-white border-[#EADFCB] text-[#51443D] hover:bg-[#FFF8F5]'
                }`}
              >
                <Truck className="w-4 h-4 text-[#7B5817]" />
                <div>
                  <span className="block text-xs font-bold">Home Delivery</span>
                  <span className="block text-[10px] text-[#7B5817]">Direct to your doorstep</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryType('pickup')}
                className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                  deliveryType === 'pickup'
                    ? 'bg-[#FFEADE] border-[#7B5817] text-[#311401] ring-1 ring-[#7B5817]'
                    : 'bg-white border-[#EADFCB] text-[#51443D] hover:bg-[#FFF8F5]'
                }`}
              >
                <Store className="w-4 h-4 text-[#7B5817]" />
                <div>
                  <span className="block text-xs font-bold">Store Pickup</span>
                  <span className="block text-[10px] text-[#7B5817]">Prakash Talkies, Loharmandi</span>
                </div>
              </button>
            </div>
          </div>

          {/* Delivery Area Picker if Home Delivery */}
          {deliveryType === 'delivery' && (
            <div className="space-y-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#EADFCB]">
              <div>
                <label className="block text-xs font-semibold text-[#311401] mb-1">
                  Burhanpur Area / Locality
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#EADFCB] bg-white text-xs font-medium text-[#311401]"
                >
                  {BURHANPUR_AREAS.map((area) => (
                    <option key={area.name} value={area.name}>
                      {area.name} — ₹{area.fee} delivery ({area.time})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#311401] mb-1">
                  House / Street Details
                </label>
                <input
                  type="text"
                  placeholder="e.g., Near Jain Temple, House 42"
                  value={specificAddress}
                  onChange={(e) => setSpecificAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#EADFCB] bg-white text-xs placeholder-stone-400"
                />
              </div>
            </div>
          )}

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#311401] mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g., Rahul Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#EADFCB] bg-white text-xs placeholder-stone-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#311401] mb-1">
                WhatsApp Phone
              </label>
              <input
                type="tel"
                placeholder="e.g., +91 98765 43210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#EADFCB] bg-white text-xs placeholder-stone-400"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-semibold text-[#311401] mb-1">
              Special Notes / Requests (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Serve hot, need gift packing, low sugar"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#EADFCB] bg-white text-xs placeholder-stone-400"
            />
          </div>

          {/* Price Breakdown */}
          <div className="p-3.5 rounded-xl bg-[#FFF1EA] border border-[#EADFCB] text-xs space-y-1.5">
            <div className="flex justify-between text-[#51443D]">
              <span>Sweets Subtotal:</span>
              <span className="font-semibold text-[#311401]">₹{itemTotal}</span>
            </div>
            {deliveryType === 'delivery' && (
              <div className="flex justify-between text-[#51443D]">
                <span>Home Delivery Fee:</span>
                <span className="font-semibold text-[#311401]">₹{deliveryFee}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-[#311401] pt-2 border-t border-[#EADFCB]">
              <span>Total Estimated Amount:</span>
              <span className="text-[#C25E2E] font-serif text-base">₹{grandTotal}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-[#FFF8F5] border-t border-[#EADFCB] px-6 py-4 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleSendWhatsApp}
            className="w-full flex-1 py-3 px-4 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Confirm & Open WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
