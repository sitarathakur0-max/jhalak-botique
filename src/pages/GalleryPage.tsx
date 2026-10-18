import React, { useState } from 'react';
import { GalleryPiece } from '../types';
import { GALLERY_PIECES, BOUTIQUE_INFO } from '../data/boutiqueData';
import { Maximize2, Sparkles, X, Compass } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<GalleryPiece | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editorial Lookbook</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#183526] font-normal tracking-tight">
          Style &amp; Textile Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#3d5246] leading-relaxed">
          A visual exploration of Pakistani garment architecture, subtle needlework, and harmonic
          color pairings curated by Jhalak Boutique in Tajpura, Lahore.
        </p>
        <p className="text-xs text-[#738279] italic max-w-xl mx-auto">
          {BOUTIQUE_INFO.disclaimer}
        </p>
      </div>

      {/* Asymmetric Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {GALLERY_PIECES.map((piece) => (
          <div
            key={piece.id}
            className={`group relative bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${piece.spanClass || ''}`}
          >
            <div className="relative overflow-hidden bg-[#e8ded0] h-[340px] sm:h-[420px]">
              <img
                src={piece.image}
                alt={piece.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for editorial readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Text overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#dfd4c2] bg-[#183526]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                    {piece.subtitle}
                  </span>
                  
                  <button
                    onClick={() => setSelectedPiece(piece)}
                    className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors cursor-pointer"
                    aria-label={`Enlarge ${piece.title}`}
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#f9f6f0] leading-snug">
                    {piece.title}
                  </h2>
                  <p className="text-xs text-[#dfd4c2] leading-relaxed line-clamp-2">
                    {piece.editorialNote}
                  </p>
                  <div className="pt-2 text-[11px] text-[#c7beaf] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#b8734e]" />
                    <span>{piece.focusArea}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPiece && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPiece(null)}
        >
          <div
            className="relative bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPiece(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#183526]/80 hover:bg-[#183526] text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPiece.image}
                alt={selectedPiece.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-[#f9f6f0] text-[#1c2e24]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#b8734e] font-semibold">
                <span>{selectedPiece.subtitle}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedPiece.focusArea}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#183526]">
                {selectedPiece.title}
              </h3>
              <p className="text-sm text-[#3d5246] leading-relaxed">
                {selectedPiece.editorialNote}
              </p>
              <p className="text-[11px] text-[#738279] pt-2 border-t border-[#dfd4c2]">
                Location reference: Jhalak Boutique · Ali Mohammad Bazaar, Dubai Chowk, Tajpura, Lahore.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
