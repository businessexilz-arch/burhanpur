import React from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/gallery';

interface SweetMomentsGalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const SweetMomentsGallery: React.FC<SweetMomentsGalleryProps> = ({ onSelectImage }) => {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-10 pb-4 border-b border-[#EADFCB]">
          <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817]">
            VISUAL CHRONICLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#311401] mt-1">
            Sweet Moments
          </h2>
          <p className="text-[#51443D] text-sm sm:text-base mt-2">
            From simmering iron kadhais to festive dining tables in Burhanpur.
          </p>
        </div>

        {/* 6 Photo Grid: 3 cols x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EADFCB] bg-[#FFEADE] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Dark Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-left text-white">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-[#FDCD81]">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
