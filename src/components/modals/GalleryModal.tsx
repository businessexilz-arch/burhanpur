import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../../data/gallery';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, onNavigate }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 text-white text-left">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 sm:p-6 bg-stone-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FDCD81] block mb-1">
              {item.tag} • Burhanpur Chronicle
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
              {item.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold shrink-0"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
