import React from 'react';
import { Star, CheckCircle, Plus } from 'lucide-react';
import { ReviewItem } from '../data/reviews';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onOpenAddReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onOpenAddReview }) => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#EADFCB]">
          <div className="text-left">
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#7B5817]">
              COMMUNITY LOVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#311401] mt-1">
              What Our Customers Say
            </h2>
            <p className="text-[#51443D] text-sm sm:text-base mt-2">
              Real feedback from sweet lovers across Burhanpur.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenAddReview}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FFEADE] hover:bg-[#FCD8C1] border border-[#EADFCB] text-[#311401] text-xs font-semibold transition-all shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#7B5817]" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#FFF1EA] border border-[#EADFCB] flex flex-col justify-between text-left hover:shadow-md transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#311401] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 mt-6 border-t border-[#EADFCB]/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#311401]">{rev.name}</h4>
                  <p className="text-[11px] text-[#7B5817]">{rev.role}</p>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
