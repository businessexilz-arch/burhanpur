import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesStrip } from './components/FeaturesStrip';
import { OurSweetsSection } from './components/OurSweetsSection';
import { SignatureCraftSection } from './components/SignatureCraftSection';
import { HeritageSection } from './components/HeritageSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { DeliverySection } from './components/DeliverySection';
import { SweetMomentsGallery } from './components/SweetMomentsGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitStoreSection } from './components/VisitStoreSection';
import { PreFooterCta } from './components/PreFooterCta';
import { Footer } from './components/Footer';

// Modals
import { OrderModal } from './components/modals/OrderModal';
import { DeliveryModal } from './components/modals/DeliveryModal';
import { GalleryModal } from './components/modals/GalleryModal';
import { AddReviewModal } from './components/modals/AddReviewModal';

import { SweetItem } from './data/sweets';
import { GALLERY_DATA, GalleryItem } from './data/gallery';
import { INITIAL_REVIEWS, ReviewItem } from './data/reviews';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedSweetId, setSelectedSweetId] = useState<string>('mawa-jalebi');
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState<boolean>(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState<boolean>(false);
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [cartCount, setCartCount] = useState<number>(1);

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sweets', 'about', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenOrder = (sweetId?: string) => {
    if (sweetId) {
      setSelectedSweetId(sweetId);
    }
    setIsOrderModalOpen(true);
  };

  const handleSelectSweet = (sweet: SweetItem) => {
    setSelectedSweetId(sweet.id);
    setIsOrderModalOpen(true);
  };

  const handleGalleryNavigate = (direction: 'next' | 'prev') => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_DATA.findIndex((g) => g.id === selectedGalleryItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % GALLERY_DATA.length;
      setSelectedGalleryItem(GALLERY_DATA[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
      setSelectedGalleryItem(GALLERY_DATA[prevIndex]);
    }
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#251911] font-sans antialiased selection:bg-[#FDCD81] selection:text-[#311401]">
      {/* Navigation Header */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrder()}
        activeSection={activeSection}
        cartCount={cartCount}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenOrderModal={handleOpenOrder} />

        {/* 4 Feature Highlights Strip */}
        <FeaturesStrip onOpenOrderModal={() => handleOpenOrder()} />

        {/* Artisanal Sweets Section (8 items with category tabs) */}
        <OurSweetsSection onSelectSweet={handleSelectSweet} />

        {/* Signature Craft (Dark section) */}
        <SignatureCraftSection onOpenOrderModal={handleOpenOrder} />

        {/* Heritage & Roots (Burhanpur Kadhai & Tradition) */}
        <HeritageSection />

        {/* How To Order (3 simple steps) */}
        <HowToOrderSection onOpenOrderModal={() => handleOpenOrder()} />

        {/* Burhanpur Town Delivery Service Strip */}
        <DeliverySection
          onOpenDeliveryModal={() => setIsDeliveryModalOpen(true)}
          onOpenOrderModal={() => handleOpenOrder()}
        />

        {/* Sweet Moments Visual Chronicle (6 photos) */}
        <SweetMomentsGallery onSelectImage={(item) => setSelectedGalleryItem(item)} />

        {/* Customer Reviews & Feedback */}
        <ReviewsSection
          reviews={reviews}
          onOpenAddReview={() => setIsAddReviewModalOpen(true)}
        />

        {/* Visit Our Store & Interactive Burhanpur Map */}
        <VisitStoreSection onOpenOrderModal={() => handleOpenOrder()} />

        {/* Big Pre-Footer Call to Action Banner */}
        <PreFooterCta onOpenOrderModal={() => handleOpenOrder()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button for mobile & desktop */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenOrder()}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 border-2 border-white"
          aria-label="Order on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialSweetId={selectedSweetId}
      />

      <DeliveryModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        onOpenOrderModal={() => {
          setIsDeliveryModalOpen(false);
          setIsOrderModalOpen(true);
        }}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onNavigate={handleGalleryNavigate}
      />

      <AddReviewModal
        isOpen={isAddReviewModalOpen}
        onClose={() => setIsAddReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
}
