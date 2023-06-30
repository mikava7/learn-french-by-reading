import { chapterContent } from "./chpterContent";
let idCounter = 0;
interface Book {
  id: number;
  chapters: number;
  author: string;
  bookTitle: string;
  chapterTitle?: string;
  chapterContent: string;
  unknownWords: { word: string; translation: string }[];
}
export const book: Book[] = [
  {
    id: ++idCounter,
    chapters: 10,
    author: "John Doe",
    bookTitle: "My Book",
    chapterTitle: "Chapter 1",
    chapterContent: chapterContent[0] + chapterContent[1],

    unknownWords: [
      { word: "word1", translation: "translation1" },
      { word: "word2", translation: "translation2" },
      // Additional unknown words
    ],
  },
];
