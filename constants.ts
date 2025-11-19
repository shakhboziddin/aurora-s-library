import { Book, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'romance', name: 'Romance', gradient: 'from-pink-500 to-rose-400' },
  { id: 'fantasy', name: 'Fantasy', gradient: 'from-purple-500 to-indigo-400' },
  { id: 'classics', name: 'Classics', gradient: 'from-amber-700 to-orange-400' },
  { id: 'poetry', name: 'Poetry', gradient: 'from-teal-500 to-emerald-400' },
  { id: 'scifi', name: 'Sci-Fi', gradient: 'from-blue-600 to-cyan-400' },
  { id: 'psychology', name: 'Psychology', gradient: 'from-fuchsia-600 to-pink-400' },
];

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://picsum.photos/seed/pride/300/450',
    description: 'A romantic novel of manners that illustrates the damaging effects of pride and prejudice on family and social standing.',
    category: 'Classics',
    year: 1813,
    rating: 4.9,
    isTrending: true,
    content: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.

However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.

"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"

Mr. Bennet replied that he had not.

"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."

Mr. Bennet made no answer.

"Do you not want to know who has taken it?" cried his wife impatiently.

"You want to tell me, and I have no objection to hearing it."

This was invitation enough.

"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."`
  },
  {
    id: '2',
    title: 'Stardust',
    author: 'Neil Gaiman',
    cover: 'https://picsum.photos/seed/stardust/300/450',
    description: 'In the quiet village of Wall, young Tristran Thorn makes a wild promise to the girl he loves: he will retrieve a fallen star for her.',
    category: 'Fantasy',
    year: 1999,
    rating: 4.8,
    isTrending: true,
    content: "There was once a young man who wished to gain his Heart's Desire..."
  },
  {
    id: '3',
    title: 'The Prophet',
    author: 'Kahlil Gibran',
    cover: 'https://picsum.photos/seed/prophet/300/450',
    description: 'A collection of poetic essays that delve into the deepest aspects of life, love, and spirituality.',
    category: 'Poetry',
    year: 1923,
    rating: 4.7,
    isTrending: false,
    content: "Almustafa, the chosen and the beloved, who was a dawn unto his own day, had waited twelve years in the city of Orphalese for his ship that was to return and bear him back to the isle of his birth..."
  },
  {
    id: '4',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    cover: 'https://picsum.photos/seed/norwegian/300/450',
    description: 'A nostalgic story of loss and burgeoning sexuality, told through the eyes of Toru Watanabe in 1960s Tokyo.',
    category: 'Romance',
    year: 1987,
    rating: 4.6,
    isTrending: true,
    content: "I was 37 then, strapped in my seat as the huge 747 plunged through dense cloud cover into Hamburg airport..."
  },
  {
    id: '5',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: 'https://picsum.photos/seed/thinking/300/450',
    description: 'The major work of the Nobel Prize winner in Economics, explaining the two systems that drive the way we think.',
    category: 'Psychology',
    year: 2011,
    rating: 4.5,
    isTrending: false,
    content: "Every author, I suppose, has in mind a setting in which readers of his or her work could benefit from reading it..."
  }
];
