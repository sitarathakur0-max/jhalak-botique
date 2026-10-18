import React, { useEffect } from 'react';
import { StyleItem } from '../types';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface StyleModalProps {
  item: StyleItem | null;
  onClose: () => void;
  onInquire: (item: StyleItem) => void;
}

export const StyleModal: React.FC<StyleModalProps> = ({ item, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row text-[#1c2e24]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 bg-[#f9f6f0]/80 hover:bg-[#f2ece0] rounded-full text-[#183526] hover:text-[#b8734e] transition-colors focus-visible:outline-2 focus-visible:outline-[#183526]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image preview column */}
        <div className="md:w-1/2 bg-[#ece4d6] relative overflow-hidden flex items-center justify-center min-h-[320px] md:min-h-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[600px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 right-3 bg-[#183526]/85 backdrop-blur-sm text-[#f9f6f0] p-2.5 rounded text-[11px] leading-snug">
            <span className="font-semibold text-[#b8734e] block mb-0.5">Illustrative Style Concept</span>
            Visual aesthetic reference for tailoring, cuts, and color harmony. Not an inventory listing.
          </div>
        </div>

        {/* Content details column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#b8734e] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{item.categoryLabel}</span>
              </div>
              <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#183526] leading-tight">
                {item.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm divide-y divide-[#dfd4c2]/60">
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#738279] block mb-1 font-medium">
                  Silhouette &amp; Cut
                </span>
                <p className="text-[#2b3d32]">{item.silhouette}</p>
              </div>

              <div className="pt-3">
                <span className="text-xs uppercase tracking-wider text-[#738279] block mb-1 font-medium">
                  Palette Harmony
                </span>
                <p className="text-[#2b3d32]">{item.paletteDescription}</p>
              </div>

              <div className="pt-3">
                <span className="text-xs uppercase tracking-wider text-[#738279] block mb-1 font-medium">
                  Needlecraft &amp; Textile Detail
                </span>
                <p className="text-[#2b3d32]">{item.craftDetails}</p>
              </div>

              <div className="pt-3">
                <span className="text-xs uppercase tracking-wider text-[#738279] block mb-1 font-medium">
                  Wearability &amp; Occasion
                </span>
                <p className="text-[#2b3d32]">{item.stylingNotes}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#dfd4c2]">
            <button
              onClick={() => {
                onInquire(item);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] rounded transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>Inquire About This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-2 text-center text-[11px] text-[#738279]">
              Pre-fills your inquiry with this style reference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
