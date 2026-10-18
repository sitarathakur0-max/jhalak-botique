import React from 'react';
import { PageId, StyleItem } from '../types';
import { BOUTIQUE_INFO, STYLE_ITEMS, BOUTIQUE_ETHOS } from '../data/boutiqueData';
import { ArrowRight, MapPin, Sparkles, Compass } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectStyle: (item: StyleItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectStyle }) => {
  const heroStyle = STYLE_ITEMS.find((s) => s.id === 'heritage-courtyard-emerald-drape') || STYLE_ITEMS[0];
  const featuredShowcase = STYLE_ITEMS.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-4">
              
              {/* Subtle Unboxed Editorial Kicker */}
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#b8734e] font-semibold">
                <span>Tajpura, Lahore</span>
                <span aria-hidden="true">·</span>
                <span>Pakistani Women&apos;s Boutique</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#183526] font-normal leading-[1.12] tracking-tight text-balance">
                Style That Feels Like You.
              </h1>

              {/* Supporting Copy Grounded in Verified Facts */}
              <p className="text-base sm:text-lg text-[#3d5246] leading-relaxed max-w-xl">
                Located in Ali Mohammad Bazaar at Dubai Chowk, Tajpura, Jhalak Boutique curates
                modest silhouettes, effortless everyday pret, and graceful semi-formal inspirations
                designed for the discerning Pakistani woman.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('collections');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] rounded transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Explore the Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#dfd4c2]" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#183526] border border-[#183526]/30 hover:border-[#183526] hover:bg-[#183526]/5 rounded transition-all cursor-pointer"
                >
                  <span>Visit &amp; Inquire</span>
                </button>
              </div>

              {/* Verified Location Marker */}
              <div className="pt-6 border-t border-[#dfd4c2]/80 flex items-start gap-3 text-xs text-[#506357]">
                <MapPin className="w-4 h-4 text-[#b8734e] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#183526] font-medium">Boutique Address:</strong>{' '}
                  {BOUTIQUE_INFO.location.fullAddress}
                </p>
              </div>

            </div>

            {/* Right Asymmetric Editorial Image Column */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Decorative architectural background shadow block in muted copper */}
                <div className="absolute -inset-2 sm:-inset-4 bg-[#b8734e]/10 rounded-2xl transform rotate-1 pointer-events-none" />
                
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#dfd4c2] bg-[#ece4d6]">
                  <img
                    src={heroStyle.image}
                    alt="Pakistani editorial fashion featuring deep forest green kameez and warm beige drape"
                    className="w-full h-[440px] sm:h-[540px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle editorial photo tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#183526]/90 backdrop-blur-md text-[#f9f6f0] px-4 py-3 rounded-lg flex items-center justify-between text-xs">
                    <div>
                      <span className="font-serif text-sm tracking-wide block text-[#f9f6f0]">
                        Courtly Emerald &amp; Camel Drape
                      </span>
                      <span className="text-[#c7beaf] text-[11px]">
                        Illustrative style inspiration · Tajpura curation
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectStyle(heroStyle)}
                      className="text-xs uppercase font-semibold text-[#b8734e] hover:text-[#dfd4c2] underline transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COLLECTION SHOWCASE SECTION */}
      <section className="bg-[#f2ece0] py-20 border-y border-[#dfd4c2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#b8734e] font-semibold mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Curated Aesthetics</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#183526] font-normal tracking-tight">
                The Three Pillars of Jhalak
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#183526] hover:text-[#b8734e] transition-colors cursor-pointer"
            >
              <span>View All Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredShowcase.map((item) => (
              <div
                key={item.id}
                className="group bg-[#f9f6f0] border border-[#dfd4c2] rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8ded0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#183526]/85 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] font-medium tracking-wide rounded">
                    {item.categoryLabel}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-[#183526] group-hover:text-[#b8734e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#506357] leading-relaxed line-clamp-2">
                      {item.craftDetails}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#dfd4c2]/70 flex items-center justify-between text-xs">
                    <span className="text-[#738279] italic">Concept Reference</span>
                    <button
                      onClick={() => onSelectStyle(item)}
                      className="font-semibold text-[#183526] hover:text-[#b8734e] transition-colors cursor-pointer"
                    >
                      Examine Cut →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Factual Inspiration Disclaimer */}
          <p className="mt-8 text-center text-xs text-[#738279]">
            Note: All displayed imagery illustrates design styles, fabric drape, and needlework concepts for consultation.
          </p>

        </div>
      </section>

      {/* 3. BOUTIQUE ETHOS & CRAFT PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#b8734e] font-semibold block">
              Ethos &amp; Tailoring
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#183526] leading-tight">
              Honoring Everyday Modesty with Lahore Craftsmanship
            </h2>
            <p className="text-sm leading-relaxed text-[#3d5246]">
              At Jhalak Boutique in Tajpura, our focus is bringing refined aesthetics to daily life.
              Whether you seek relaxed silhouettes for household routines or delicate embroidery
              for family celebrations, we focus on garments that feel authentic, respectful, and timeless.
            </p>

            <div className="space-y-5 pt-2">
              {BOUTIQUE_ETHOS.map((ethos, index) => (
                <div key={ethos.title} className="flex gap-4 items-start">
                  <span className="font-serif text-lg text-[#b8734e] font-semibold shrink-0 pt-0.5">
                    0{index + 1}.
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm text-[#183526] mb-1">
                      {ethos.title}
                    </h3>
                    <p className="text-xs text-[#506357] leading-relaxed">
                      {ethos.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#183526] text-[#dfd4c2] p-8 sm:p-12 rounded-xl relative overflow-hidden shadow-lg border border-[#274d39]">
              <div className="max-w-lg space-y-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#b8734e] font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Personal Consultation</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f9f6f0] leading-snug">
                  Have a specific silhouette or fabric idea in mind?
                </h3>
                <p className="text-sm text-[#c7beaf] leading-relaxed">
                  We welcome questions regarding modest tailoring, everyday kurtas, and custom styling questions.
                  Send an enquiry with your preferences, and our boutique staff will assist you.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#183526] bg-[#dfd4c2] hover:bg-white rounded transition-colors cursor-pointer"
                  >
                    <span>Contact Jhalak Boutique</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VISIT & LOCATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0e9dc] border border-[#dfd4c2] p-8 sm:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="text-xs uppercase tracking-wider text-[#b8734e] font-semibold">
              Boutique Location
            </div>
            <h3 className="font-serif text-2xl text-[#183526]">
              Ali Mohammad Bazaar, Dubai Chowk
            </h3>
            <p className="text-sm text-[#506357]">
              Tajpura, Lahore, Pakistan · Welcoming local patrons for modest &amp; everyday women&apos;s wear.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183526] hover:bg-[#274d39] rounded transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            Submit an Enquiry
          </button>
        </div>
      </section>

    </div>
  );
};
