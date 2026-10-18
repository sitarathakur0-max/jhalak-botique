import React from 'react';
import { PageId } from '../types';
import { BOUTIQUE_INFO, BOUTIQUE_ETHOS } from '../data/boutiqueData';
import { MapPin, ArrowRight } from 'lucide-react';
import modestImg from '../assets/images/jhalak_modest_wear_1792238557329.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Editorial Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
            <span>Verified Local Business</span>
            <span aria-hidden="true">·</span>
            <span>Tajpura, Lahore</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#183526] font-normal tracking-tight text-balance">
            Rooted in Tajpura. Dedicated to Modest Elegance.
          </h1>

          <div className="space-y-4 text-base text-[#3d5246] leading-relaxed">
            <p>
              <strong className="text-[#183526] font-semibold">Jhalak Boutique</strong> is a local
              clothing boutique situated at Ali Mohammad Bazaar, Dubai Chowk, Tajpura in Lahore, Pakistan.
            </p>
            <p>
              Serving women who appreciate modest wear and everyday-to-semi-formal Pakistani attire,
              our boutique offers thoughtful garment curation grounded in comfortable cuts, graceful
              draping, and tasteful embellishments suited to local cultural aesthetics.
            </p>
            <p>
              Rather than generic mass fashion, our philosophy emphasizes garments that feel natural,
              dignified, and wearable—whether you are dressing for household routines, work commitments,
              or festive family gatherings in Lahore.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] rounded transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <span>Submit an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#183526] hover:text-[#b8734e] transition-colors cursor-pointer"
            >
              <span>Explore Designs</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-[#dfd4c2] shadow-xl bg-[#e8ded0]">
            <img
              src={modestImg}
              alt="Modest wear Pakistani kurta ensemble"
              className="w-full h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-[#183526] text-[#dfd4c2] text-xs">
              <span className="font-serif text-sm text-[#f9f6f0] block mb-0.5">
                Modest Silhouette in Sage &amp; Forest
              </span>
              Curated styling inspiration representing our modest wear ethos.
            </div>
          </div>
        </div>
      </div>

      {/* Verified Facts & Neighborhood Context */}
      <div className="bg-[#f2ece0] border border-[#dfd4c2] rounded-xl p-8 sm:p-12 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#b8734e] font-semibold block mb-2">
            Verified Information
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#183526]">
            Authentic Boutique Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f9f6f0] border border-[#dfd4c2] p-6 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#738279] font-medium block">
              Business Name &amp; Classification
            </span>
            <p className="font-serif text-xl text-[#183526]">{BOUTIQUE_INFO.name}</p>
            <p className="text-xs text-[#506357]">Local Clothing Boutique (Women&apos;s Apparel)</p>
          </div>

          <div className="bg-[#f9f6f0] border border-[#dfd4c2] p-6 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#738279] font-medium block">
              Verified Physical Address
            </span>
            <p className="font-serif text-lg text-[#183526] flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#b8734e] shrink-0 mt-1" />
              <span>{BOUTIQUE_INFO.location.fullAddress}</span>
            </p>
            <p className="text-xs text-[#506357]">
              Located in Ali Mohammad Bazaar at Dubai Chowk.
            </p>
          </div>

          <div className="bg-[#f9f6f0] border border-[#dfd4c2] p-6 rounded-lg space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#738279] font-medium block">
              Specialized Scope
            </span>
            <p className="font-serif text-lg text-[#183526]">Modest &amp; Everyday Pret</p>
            <p className="text-xs text-[#506357]">
              Everyday wear, modest tunics, and semi-formal celebratory attire.
            </p>
          </div>
        </div>
      </div>

      {/* Ethos Breakdown */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#b8734e] font-semibold">
            Boutique Values
          </span>
          <h2 className="font-serif text-3xl text-[#183526]">
            Our Guiding Aesthetic Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOUTIQUE_ETHOS.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#f9f6f0] border border-[#dfd4c2] p-6 sm:p-8 rounded-lg space-y-3"
            >
              <span className="font-serif text-xl text-[#b8734e] font-semibold">0{idx + 1}.</span>
              <h3 className="font-serif text-xl text-[#183526]">{item.title}</h3>
              <p className="text-xs text-[#506357] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
