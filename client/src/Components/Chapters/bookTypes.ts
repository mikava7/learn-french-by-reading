export interface Chapter {
  chapter: number;
  content: string;
  title: string;
  unknownWords: {
    id: number;
    word: string;
    definition: string;
    translation: string;
  }[];
}

export interface Book {
  id: number;
  author: string;
  bookTitle: string;
  chapters: Chapter[];
}

export interface ChaptersProps {
  troisMous: Book[];
}
