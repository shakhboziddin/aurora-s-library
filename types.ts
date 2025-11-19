export type ViewState = 'home' | 'search' | 'categories' | 'favorites' | 'profile' | 'reading' | 'for-aurora' | 'book-details';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  year: number;
  content: string; // In a real app, this would be fetched
  rating: number;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  gradient: string;
}

export interface ReadingSettings {
  fontSize: number;
  theme: 'light' | 'dark' | 'aurora';
  fontFamily: 'serif' | 'sans';
}
