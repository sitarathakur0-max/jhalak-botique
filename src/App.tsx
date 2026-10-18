/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, StyleItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StyleModal } from './components/StyleModal';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedStyle, setSelectedStyle] = useState<StyleItem | null>(null);
  
  // Enquiry prefill state
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [prefilledCategory, setPrefilledCategory] = useState<string>('Modest Wear Consultation');

  const handleInquireFromStyle = (item: StyleItem) => {
    let category = 'Modest Wear Consultation';
    if (item.category === 'everyday') category = 'Everyday Styles Enquiry';
    if (item.category === 'semiformal') category = 'Semi-Formal Design Question';

    setPrefilledCategory(category);
    setPrefilledMessage(
      `Hello Jhalak Boutique, I am interested in consulting regarding the "${item.title}" style concept (${item.categoryLabel}). Please advise on bespoke tailoring and consultations.`
    );
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f0] text-[#1c2e24]">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Dynamic Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectStyle={(item) => setSelectedStyle(item)}
          />
        )}

        {currentPage === 'collections' && (
          <CollectionsPage
            onNavigate={handleNavigate}
            onSelectStyle={(item) => setSelectedStyle(item)}
            onInquireStyle={handleInquireFromStyle}
          />
        )}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && (
          <ContactPage
            prefilledMessage={prefilledMessage}
            prefilledCategory={prefilledCategory}
          />
        )}
      </main>

      {/* Style Details & Inspection Modal */}
      <StyleModal
        item={selectedStyle}
        onClose={() => setSelectedStyle(null)}
        onInquire={handleInquireFromStyle}
      />

      {/* Minimal Factual Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
