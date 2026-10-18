import React from 'react';
import { PageId } from '../types';
import { BOUTIQUE_INFO } from '../data/boutiqueData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#183526] text-[#dfd4c2] pt-16 pb-12 border-t border-[#274d39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#274d39]/60">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif text-2xl text-[#f9f6f0] tracking-wide">
              {BOUTIQUE_INFO.name}
            </h2>
            <p className="text-sm leading-relaxed text-[#c5bcab] max-w-md">
              A local Pakistani women&apos;s clothing boutique specializing in modest wear,
              comfortable everyday styles, and semi-formal design inspiration.
            </p>
            <div className="pt-2 text-xs text-[#a99f8d]">
              <span className="font-medium text-[#f9f6f0]">Verified Boutique Location:</span>
              <p className="mt-1">{BOUTIQUE_INFO.location.fullAddress}</p>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#dfd4c2]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f9f6f0] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('collections'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f9f6f0] transition-colors cursor-pointer text-left"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f9f6f0] transition-colors cursor-pointer text-left"
                >
                  Style Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f9f6f0] transition-colors cursor-pointer text-left"
                >
                  About the Boutique
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#f9f6f0] transition-colors cursor-pointer text-left"
                >
                  Boutique Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Factual Information & Note */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
              Curator Note
            </h3>
            <p className="text-xs leading-relaxed text-[#a99f8d]">
              {BOUTIQUE_INFO.disclaimer}
            </p>
            <p className="text-xs leading-relaxed text-[#a99f8d] pt-2">
              For style discussions or bespoke consultations, please submit an enquiry through our contact form.
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8f8574] gap-4">
          <p>© 2026 Jhalak Boutique. Ali Mohammad Bazaar, Dubai Chowk, Tajpura, Lahore.</p>
          <p>Pakistani Modest Wear &amp; Pret-a-Porter</p>
        </div>
      </div>
    </footer>
  );
};
