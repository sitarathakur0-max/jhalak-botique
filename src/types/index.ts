export type PageId = 'home' | 'collections' | 'gallery' | 'about' | 'contact';

export type CollectionCategory = 'all' | 'modest' | 'everyday' | 'semiformal';

export interface StyleItem {
  id: string;
  title: string;
  category: 'modest' | 'everyday' | 'semiformal';
  categoryLabel: string;
  image: string;
  aspectRatio: string;
  silhouette: string;
  paletteDescription: string;
  craftDetails: string;
  stylingNotes: string;
}

export interface GalleryPiece {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  editorialNote: string;
  focusArea: string;
  spanClass?: string;
}

export interface EnquirySubmission {
  id: string;
  name: string;
  contact: string;
  category: string;
  message: string;
  createdAt: string;
}
