import heroImg from '../assets/images/jhalak_hero_pakistan_fashion_1792238556162.jpg';
import modestImg from '../assets/images/jhalak_modest_wear_1792238557329.jpg';
import everydayImg from '../assets/images/jhalak_everyday_style_1792238585464.jpg';
import semiformalImg from '../assets/images/jhalak_semiformal_inspiration_1792238559098.jpg';
import galleryImg from '../assets/images/jhalak_editorial_gallery_1792238558997.jpg';
import { StyleItem, GalleryPiece } from '../types';

export const BOUTIQUE_INFO = {
  name: 'Jhalak Boutique',
  tagline: 'Style That Feels Like You',
  category: 'Clothing Boutique',
  focus: "Modest wear, everyday ensembles & semi-formal women's clothing",
  location: {
    bazaar: 'Ali Mohammad Bazaar',
    chowk: 'Dubai Chowk',
    neighborhood: 'Tajpura',
    city: 'Lahore',
    country: 'Pakistan',
    fullAddress: 'Ali Mohammad Bazaar, Dubai Chowk, Tajpura, Lahore, Pakistan'
  },
  disclaimer: 'Visual images presented on this website are illustrative style inspirations and design references. They illustrate color palettes, silhouettes, and textile craft rather than pre-stocked inventory.'
};

export const STYLE_ITEMS: StyleItem[] = [
  {
    id: 'modest-silhouette-sage-emerald',
    title: 'Panelled Long Tunic & Textured Dupatta',
    category: 'modest',
    categoryLabel: 'Modest Wear',
    image: modestImg,
    aspectRatio: '3:4',
    silhouette: 'Relaxed elongated straight cut with contrast vertical piping and modest mandarin placket',
    paletteDescription: 'Forest green, soft sage, and natural unbleached beige',
    craftDetails: 'Crisp woven texture with clean contrast line seams and tasselled woven stole drape',
    stylingNotes: 'Designed for graceful daily coverage with breathability and refined drape'
  },
  {
    id: 'everyday-pret-oatmeal-copper',
    title: 'Earth-Tone Kurta & Straight Trouser Ensemble',
    category: 'everyday',
    categoryLabel: 'Everyday Styles',
    image: everydayImg,
    aspectRatio: '3:4',
    silhouette: 'Easy-fitting classic kurta silhouette paired with cropped straight-leg trousers',
    paletteDescription: 'Warm oatmeal beige accented with muted terracotta and copper stitches',
    craftDetails: 'Subtle geometric thread embroidery along the neckline and cuffs with handcrafted loop buttons',
    stylingNotes: 'Effortless all-day comfort suited for neighborhood visits, errands, and daily work'
  },
  {
    id: 'semiformal-copper-emerald-silk',
    title: 'Embellished Silk Kurta & Scalloped Organza Veil',
    category: 'semiformal',
    categoryLabel: 'Semi-Formal Inspiration',
    image: semiformalImg,
    aspectRatio: '3:4',
    silhouette: 'Flattering A-line structured tunic with wide-hem trousers and fluid organza dupatta',
    paletteDescription: 'Muted copper bronze paired with rich forest emerald green',
    craftDetails: 'Intricate neckline zari and delicate tilla threadwork paired with scalloped embroidered borders',
    stylingNotes: 'Sophisticated festive balance for family gatherings, dinners, and semi-formal occasions'
  },
  {
    id: 'heritage-courtyard-emerald-drape',
    title: 'Courtly Embroidered Kameez with Draped Dupatta',
    category: 'semiformal',
    categoryLabel: 'Semi-Formal Inspiration',
    image: heroImg,
    aspectRatio: '16:9',
    silhouette: 'Classic traditional Pakistani straight silhouette with wide palazzo trousers',
    paletteDescription: 'Deep forest green and warm camel beige with antique copper motifs',
    craftDetails: 'Paisley neckline needlecraft, border tilla edging, and tassel finishing on dupatta pallu',
    stylingNotes: 'Timeless cultural proportion celebrating Pakistani textile heritage with understated refinement'
  }
];

export const GALLERY_PIECES: GalleryPiece[] = [
  {
    id: 'gallery-editorial-textile',
    title: 'Artistry in Thread & Silk',
    image: galleryImg,
    subtitle: 'Textile Focus',
    editorialNote: 'Close-up study of paisley threadwork, raw silk weave, and muted copper metallic embellishments, highlighting the tactile nuance of traditional needlecraft.',
    focusArea: 'Embroidery Detail & Material Texture',
    spanClass: 'md:col-span-2'
  },
  {
    id: 'gallery-modest-drape',
    title: 'Quiet Balance in Sage & Forest',
    image: modestImg,
    subtitle: 'Silhouette Study',
    editorialNote: 'A study in elongated proportions and restrained panelling, demonstrating how modest cuts achieve modern grace through disciplined lines.',
    focusArea: 'Modest Form & Linear Panelling',
    spanClass: 'md:col-span-1'
  },
  {
    id: 'gallery-everyday-craft',
    title: 'Neutral Warmth & Geometric Stitches',
    image: everydayImg,
    subtitle: 'Daily Pre-a-Porter',
    editorialNote: 'Lightweight breathable fabrication with earthen tones, highlighting how subtle neckline detailing transforms everyday staples.',
    focusArea: 'Everyday Practicality & Warm Neutrals',
    spanClass: 'md:col-span-1'
  },
  {
    id: 'gallery-semiformal-scallop',
    title: 'Luster of Copper & Organza',
    image: semiformalImg,
    subtitle: 'Semi-Formal Composition',
    editorialNote: 'Exploration of complementary dual-tones—brushed copper and forest green—accentuated by scalloped organza borders and delicate metallic tilla.',
    focusArea: 'Dual-Tone Harmony & Delicate Veiling',
    spanClass: 'md:col-span-1'
  },
  {
    id: 'gallery-courtyard-heritage',
    title: 'Sunlight & Traditional Form',
    image: heroImg,
    subtitle: 'Heritage Setting',
    editorialNote: 'Traditional Pakistani kameez captured in natural architectural light, reflecting the authentic charm of Lahore craftsmanship.',
    focusArea: 'Atmospheric Presence & Courtyard Architecture',
    spanClass: 'md:col-span-2'
  }
];

export const BOUTIQUE_ETHOS = [
  {
    title: 'Modest Silhouettes',
    description: 'Generous cuts, flowing dupattas, and graceful lengths that prioritize comfort, personal dignity, and modern aesthetic balance.'
  },
  {
    title: 'Everyday Wearability',
    description: 'Thoughtfully constructed pieces in breathable fabrics, designed for the daily rhythms of Pakistani women with enduring simplicity.'
  },
  {
    title: 'Semi-Formal Finesse',
    description: 'Subtle thread embellishments and refined color palettes tailored for celebratory moments without overwhelming excess.'
  }
];
