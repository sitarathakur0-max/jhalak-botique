import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'gallery', label: 'Style Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f9f6f0]/95 backdrop-blur-md border-b border-[#dfd4c2]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left font-serif text-2xl tracking-normal text-[#183526] hover:text-[#b8734e] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#183526] focus-visible:rounded"
            aria-label="Jhalak Boutique - Home"
          >
            Jhalak Boutique
          </button>

          {/* Zone 2: 4-5 single-line text links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2d4538]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#183526] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#183526] ${
                    isActive ? 'text-[#183526] font-semibold' : 'text-[#506357]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#b8734e]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-white bg-[#183526] hover:bg-[#274d39] active:bg-[#10241a] rounded transition-all cursor-pointer shadow-sm hover:shadow whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183526]"
            >
              Send Enquiry
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183526] hover:text-[#b8734e] transition-colors focus-visible:outline-2 focus-visible:outline-[#183526]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#dfd4c2] bg-[#f9f6f0] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#2d4538]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded transition-colors ${
                    isActive ? 'bg-[#f0e8dc] text-[#183526] font-semibold' : 'hover:bg-[#f3ece2] text-[#3d5447]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-center px-4 py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#183526] hover:bg-[#274d39] rounded transition-colors"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
