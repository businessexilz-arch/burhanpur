import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink } from 'lucide-react';

interface VisitStoreSectionProps {
  onOpenOrderModal: () => void;
}

export const VisitStoreSection: React.FC<VisitStoreSectionProps> = ({ onOpenOrderModal }) => {
  const [mapZoom, setMapZoom] = useState(1);
  const storeAddress = 'Prakash Talkies, Loharmandi Rd, Patidar Colony, Burhanpur, Madhya Pradesh 450331';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Prakash Talkies Loharmandi Rd Patidar Colony Burhanpur Madhya Pradesh 450331'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-10 pb-4 border-b border-[#EADFCB]">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817]">
            DIRECTIONS & STORE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#311401] mt-1">
            Visit Our Store
          </h2>
          <p className="text-[#51443D] text-sm sm:text-base mt-2">
            Experience the aroma of freshly fried mawa jalebi in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Store Details & Actions */}
          <div className="lg:col-span-5 bg-[#FFF1EA] border border-[#EADFCB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-sm">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFEADE] text-[#7B5817] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#C25E2E]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#311401]">Store Address</h4>
                  <p className="text-xs sm:text-sm text-[#51443D] mt-1 leading-relaxed">
                    {storeAddress}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFEADE] text-[#7B5817] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#7B5817]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#311401]">Store Timings</h4>
                  <p className="text-xs sm:text-sm text-[#311401] font-semibold mt-1">
                    Open Daily: 10:00 AM – 11:00 PM
                  </p>
                  <p className="text-[11px] text-[#51443D] mt-0.5">
                    Hot kadhai batches continuously throughout evening hours
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFEADE] text-[#7B5817] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#7B5817]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#311401]">Contact & Assistance</h4>
                  <p className="text-xs sm:text-sm text-[#311401] font-semibold mt-1">
                    Phone: +91 98765 43210
                  </p>
                  <p className="text-[11px] text-[#51443D] mt-0.5">
                    WhatsApp support available all day
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#EADFCB] flex flex-wrap gap-2.5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-[#FFEADE] border border-[#EADFCB] text-[#311401] text-xs font-semibold shadow-xs transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#7B5817]" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#FFEADE] hover:bg-[#FCD8C1] border border-[#EADFCB] text-[#311401] text-xs font-semibold shadow-xs transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#7B5817]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-[0.98] mt-1"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Styled Map of Burhanpur */}
          <div className="lg:col-span-7 bg-[#FFF1EA] border border-[#EADFCB] rounded-2xl overflow-hidden relative min-h-[380px] flex flex-col justify-between shadow-sm">
            
            {/* Map Header Overlay */}
            <div className="p-4 bg-white/85 backdrop-blur-md border-b border-[#EADFCB] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-[#311401]">
                  Burhanpur City Map • Loharmandi & Patidar Colony
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setMapZoom(Math.max(0.8, mapZoom - 0.2))}
                  className="w-7 h-7 rounded-md bg-[#FFEADE] text-[#311401] text-xs font-bold flex items-center justify-center hover:bg-[#FCD8C1]"
                  title="Zoom Out"
                >
                  -
                </button>
                <button
                  onClick={() => setMapZoom(Math.min(1.6, mapZoom + 0.2))}
                  className="w-7 h-7 rounded-md bg-[#FFEADE] text-[#311401] text-xs font-bold flex items-center justify-center hover:bg-[#FCD8C1]"
                  title="Zoom In"
                >
                  +
                </button>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#311401] text-white text-[11px] font-medium ml-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Stylized SVG Map Canvas */}
            <div className="relative flex-1 overflow-hidden bg-[#FCE8DB] flex items-center justify-center p-6 select-none">
              
              <div
                className="w-full h-full max-w-lg transition-transform duration-300 relative flex items-center justify-center"
                style={{ transform: `scale(${mapZoom})` }}
              >
                {/* SVG Cartographic Illustration */}
                <svg viewBox="0 0 500 350" className="w-full h-full">
                  {/* Background Ground */}
                  <rect width="500" height="350" fill="#F8E5D6" rx="16" />

                  {/* Tapti River representation */}
                  <path
                    d="M0,70 Q140,110 260,60 T500,80"
                    fill="none"
                    stroke="#BBD7E9"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,70 Q140,110 260,60 T500,80"
                    fill="none"
                    stroke="#8AB8D6"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <text x="50" y="65" fill="#4B779A" fontSize="11" fontWeight="600" letterSpacing="2">
                    TAPTI RIVER
                  </text>

                  {/* Roads in Burhanpur */}
                  {/* Lalbagh / Station Road */}
                  <path d="M60,350 L180,180 L350,150 L500,140" fill="none" stroke="#E3C4AF" strokeWidth="14" />
                  <path d="M60,350 L180,180 L350,150 L500,140" fill="none" stroke="#FFFFFF" strokeWidth="6" />

                  {/* Loharmandi Road */}
                  <path d="M180,180 L250,220 L310,290" fill="none" stroke="#E3C4AF" strokeWidth="18" />
                  <path d="M180,180 L250,220 L310,290" fill="none" stroke="#FFFFFF" strokeWidth="8" />

                  {/* Shahpur Link Road */}
                  <path d="M250,220 L440,240" fill="none" stroke="#E3C4AF" strokeWidth="10" />
                  <path d="M250,220 L440,240" fill="none" stroke="#FFFFFF" strokeWidth="4" />

                  {/* Area Labels */}
                  <text x="80" y="280" fill="#83746C" fontSize="11" fontWeight="600">
                    Lalbagh Road
                  </text>
                  <text x="350" y="270" fill="#83746C" fontSize="11" fontWeight="600">
                    Shahpur Road
                  </text>
                  <text x="170" y="150" fill="#83746C" fontSize="11" fontWeight="600">
                    Subhash Chowk
                  </text>

                  {/* Patidar Colony Zone */}
                  <rect x="200" y="195" width="130" height="70" rx="10" fill="#FDCD81" fillOpacity="0.25" stroke="#FDCD81" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="215" y="212" fill="#7B5817" fontSize="10" fontWeight="700">
                    Patidar Colony
                  </text>
                  <text x="215" y="225" fill="#51443D" fontSize="9">
                    Prakash Talkies
                  </text>

                  {/* Burhanpur Mawa Jalebi Pulsing Pin */}
                  <g transform="translate(265, 230)">
                    {/* Ripple animation circle */}
                    <circle cx="0" cy="0" r="16" fill="#C25E2E" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="0" cy="0" r="10" fill="#C25E2E" />
                    <circle cx="0" cy="0" r="4" fill="#FFFFFF" />

                    {/* Marker Callout Bubble */}
                    <g transform="translate(-85, -55)">
                      <rect width="170" height="42" rx="8" fill="#311401" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
                      <polygon points="85,42 80,48 90,48" fill="#311401" />
                      <text x="85" y="18" fill="#FDCD81" fontSize="10" fontWeight="700" textAnchor="middle">
                        BURHANPUR MAWA JALEBI
                      </text>
                      <text x="85" y="32" fill="#FFFFFF" fontSize="9" textAnchor="middle">
                        Loharmandi Rd (Fresh Kadhai)
                      </text>
                    </g>
                  </g>

                  {/* Landmark 2: Historical Asirgarh Fort Direction */}
                  <g transform="translate(420, 40)">
                    <circle cx="0" cy="0" r="4" fill="#7B5817" />
                    <text x="-10" y="-8" fill="#7B5817" fontSize="9" fontWeight="600" textAnchor="end">
                      ↑ To Asirgarh Fort
                    </text>
                  </g>
                </svg>
              </div>

            </div>

            {/* Bottom Status bar */}
            <div className="p-3 bg-white/90 border-t border-[#EADFCB] text-center text-xs text-[#51443D]">
              <span>5 mins from Burhanpur Railway Station • Ample two-wheeler & car parking available</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
