import React, { useState } from 'react';
import { CollectionCategory, PageId, StyleItem } from '../types';
import { STYLE_ITEMS, BOUTIQUE_INFO } from '../data/boutiqueData';
import { Sparkles, Eye, ArrowRight, Info } from 'lucide-react';

interface CollectionsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectStyle: (item: StyleItem) => void;
  onInquireStyle: (item: StyleItem) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectStyle,
  onInquireStyle,
}) => {
  const [activeCategory, setActiveCategory] = useState<CollectionCategory>('all');

  const categories: { id: CollectionCategory; label: string }[] = [
    { id: 'all', label: 'All Inspirations' },
    { id: 'modest', label: 'Modest Wear' },
    { id: 'everyday', label: 'Everyday Styles' },
    { id: 'semiformal', label: 'Semi-Formal Inspiration' },
  ];

  const filteredItems = activeCategory === 'all'
    ? STYLE_ITEMS
    : STYLE_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Pakistani Attire</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#183526] font-normal tracking-tight">
          Collections &amp; Design Inspiration
        </h1>
        <p className="text-sm sm:text-base text-[#3d5246] leading-relaxed">
          Explore our visual inspirations across modest cuts, daily pret ensembles, and semi-formal
          attire. Each concept serves as a design reference for local consultation and tailoring.
        </p>

        {/* Factual Disclaimer Banner */}
        <div className="mt-4 p-4 bg-[#f0e9dc] border border-[#dfd4c2] rounded-lg text-left text-xs text-[#506357] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#b8734e] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#183526] font-medium">Boutique Inspiration Notice:</strong>{' '}
            {BOUTIQUE_INFO.disclaimer} We do not list stock inventory or fixed prices online.
            Please connect with us for custom requests or visit our boutique at Dubai Chowk, Tajpura.
          </p>
        </div>
      </div>

      {/* Filter Tabs (Functional segmented buttons per frontend design constitution) */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#183526] text-white shadow-sm'
                  : 'bg-[#f0e9dc] text-[#3d5246] hover:bg-[#e6ddcf] hover:text-[#183526]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            {/* Image Box */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ded0]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-3 left-3 bg-[#183526]/85 backdrop-blur-sm text-[#f9f6f0] px-2.5 py-1 text-[11px] font-medium tracking-wide rounded">
                {item.categoryLabel}
              </div>

              {/* Quick inspect overlay button */}
              <button
                onClick={() => onSelectStyle(item)}
                className="absolute inset-0 bg-[#183526]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wider uppercase cursor-pointer"
                aria-label={`Inspect ${item.title}`}
              >
                <span className="bg-[#183526] px-4 py-2 rounded shadow">
                  <Eye className="w-4 h-4 inline-block mr-1.5" />
                  View Design Details
                </span>
              </button>
            </div>

            {/* Info Box */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl text-[#183526] leading-snug group-hover:text-[#b8734e] transition-colors">
                  {item.title}
                </h2>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[#738279] uppercase tracking-wider block font-semibold text-[10px]">
                      Silhouette
                    </span>
                    <p className="text-[#2b3d32]">{item.silhouette}</p>
                  </div>
                  <div>
                    <span className="text-[#738279] uppercase tracking-wider block font-semibold text-[10px]">
                      Color Harmony
                    </span>
                    <p className="text-[#2b3d32]">{item.paletteDescription}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#dfd4c2] flex flex-col gap-2">
                <button
                  onClick={() => onInquireStyle(item)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] rounded transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Inquire About This Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectStyle(item)}
                  className="w-full text-center py-1.5 text-xs font-medium text-[#738279] hover:text-[#183526] transition-colors cursor-pointer"
                >
                  Examine Embroidery &amp; Specs
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Footnote on Local Consultation */}
      <div className="bg-[#f0e9dc] p-8 rounded-lg border border-[#dfd4c2] text-center space-y-3 max-w-2xl mx-auto">
        <h3 className="font-serif text-xl text-[#183526]">
          Interested in Custom Modest or Semi-Formal Tailoring?
        </h3>
        <p className="text-xs text-[#506357] leading-relaxed">
          Share your desired cut, occasion, and sizing parameters. We accommodate bespoke
          inquiries for women in Lahore seeking modest silhouettes and fine threadwork.
        </p>
      </div>

    </div>
  );
};
