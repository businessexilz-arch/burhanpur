import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShoppingBag, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (sweetId?: string) => void;
  activeSection: string;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, activeSection, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Sweets', href: '#sweets', id: 'sweets' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F5]/95 backdrop-blur-md border-b border-[#EADFCB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a href="#home" className="flex flex-col text-left group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#311401] leading-none">
            BURHANPUR
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#7B5817] font-semibold uppercase mt-1">
            Mawa Jalebi
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'bg-[#FFEADE] text-[#311401] font-semibold shadow-xs'
                    : 'text-[#51443D] hover:text-[#311401] hover:bg-[#FFF1EA]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:+919876543210"
            title="Call Store +91 98765 43210"
            className="w-10 h-10 rounded-full bg-[#FFEADE] hover:bg-[#FCD8C1] text-[#311401] flex items-center justify-center transition-colors border border-[#EADFCB]"
            aria-label="Call store"
          >
            <Phone className="w-4 h-4 text-[#7B5817]" />
          </a>

          {/* Primary WhatsApp Order CTA */}
          <button
            onClick={() => onOpenOrderModal()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#311401] hover:bg-[#4A2810] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            <span>Order on WhatsApp</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-amber-400 text-[#311401] rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Open Timing / Info Pill */}
          <a
            href="#contact"
            title="Store hours: 10 AM - 11 PM"
            className="w-10 h-10 rounded-full border border-[#EADFCB] bg-white text-[#7B5817] flex items-center justify-center hover:bg-[#FFF8F5] transition-colors relative"
            aria-label="Store open hours"
          >
            <Clock className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#FFEADE] text-[#311401] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EADFCB] bg-[#FFF8F5] px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#311401] rounded-lg hover:bg-[#FFEADE] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#311401] text-white text-sm font-semibold shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
