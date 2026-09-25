import React, { useState } from 'react';
import { X, Star, Heart } from 'lucide-react';
import { ReviewItem } from '../../data/reviews';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ReviewItem) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [role, setRole] = useState('Burhanpur Resident');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Burhanpur Customer',
      rating,
      comment: comment.trim(),
      date: 'Just now',
      verified: true,
    };

    onAddReview(newRev);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#EADFCB] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#311401] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#FDCD81] fill-[#FDCD81]" />
            <h3 className="font-serif text-lg font-bold">Share Your Experience</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 text-left space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-[#311401] uppercase tracking-wider mb-2">
              Your Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-amber-500 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'fill-amber-500 text-amber-500' : 'text-stone-300'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-[#7B5817] ml-2">
                {rating} / 5 Stars
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#311401] mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Manish Patil"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFCB] bg-[#FFF8F5] text-xs font-medium focus:outline-none focus:border-[#7B5817]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#311401] mb-1">
              Location / Label
            </label>
            <input
              type="text"
              placeholder="e.g., Burhanpur Local / Indore Visitor"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFCB] bg-[#FFF8F5] text-xs font-medium focus:outline-none focus:border-[#7B5817]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#311401] mb-1">
              Your Review / Taste Feedback
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us about the crispiness, mawa flavor, and freshness of the sweets..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFCB] bg-[#FFF8F5] text-xs font-medium focus:outline-none focus:border-[#7B5817]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#311401] hover:bg-[#4A2810] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              Submit Community Review
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
