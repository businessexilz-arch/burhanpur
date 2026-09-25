import React, { useState } from 'react';
import { MessageCircle, Search, Sparkles } from 'lucide-react';
import { SWEETS_DATA, SweetItem } from '../data/sweets';

interface OurSweetsSectionProps {
  onSelectSweet: (sweet: SweetItem) => void;
}

export const OurSweetsSection: React.FC<OurSweetsSectionProps> = ({ onSelectSweet }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Sweets');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All Sweets', 'Signature', 'Traditional Mithai', 'Savouries'];

  const filteredSweets = SWEETS_DATA.filter((sweet) => {
    const matchesCategory =
      selectedCategory === 'All Sweets' || sweet.category === selectedCategory;
    const matchesSearch =
      sweet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sweet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sweets" className="py-16 sm:py-24 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#EADFCB]">
          <div className="text-left">
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817]">
              ARTISANAL SELECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#311401] mt-1 tracking-tight">
              Our Special Sweets
            </h2>
            <p className="text-[#51443D] text-sm sm:text-base mt-2">
              Freshness aur traditional taste, har bite mein.
            </p>
          </div>

          {/* Category Tabs & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#83746C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search sweets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-[#EADFCB] rounded-full text-[#311401] placeholder-[#83746C] focus:outline-none focus:border-[#7B5817]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FFEADE] rounded-full overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#311401] text-white shadow-xs'
                      : 'text-[#51443D] hover:text-[#311401]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Product Grid: 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSweets.map((sweet) => (
            <div
              key={sweet.id}
              className="group bg-white rounded-2xl border border-[#EADFCB] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#C89D56] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FFEADE]">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Optional Badge */}
                {sweet.badge && (
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#311401]/90 backdrop-blur-xs text-[#FDCD81] text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#FDCD81]" />
                    <span>{sweet.badge}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Title & Price Row */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#311401] group-hover:text-[#7B5817] transition-colors leading-snug">
                      {sweet.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-base font-bold text-[#311401]">
                        ₹{sweet.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#51443D] mt-2 line-clamp-2 leading-relaxed">
                    {sweet.description}
                  </p>
                </div>

                {/* Unit & Action */}
                <div className="mt-4 pt-3 border-t border-[#F2E8DC]">
                  <div className="text-[10px] tracking-wider font-semibold text-[#83746C] uppercase mb-2">
                    {sweet.unit}
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={() => onSelectSweet(sweet)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Order on WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredSweets.length === 0 && (
          <div className="py-12 text-center text-[#83746C]">
            <p className="text-base font-medium">No sweets found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Sweets');
              }}
              className="mt-3 text-xs text-[#7B5817] font-semibold underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
