import { chapterContent } from "./chpterContent";
let idCounter = 0;
interface Book {
  id: number;
  chapters: number;
  author: string;
  bookTitle: string;
}
export const book: Book[] = [
  {
    id: ++idCounter,
    chapters: 10,
    author: "Alexandre Dumas",
    bookTitle: "Les Trois Mousquetaires",
  },

  {
    id: ++idCounter,
    chapters: 10,
    author: "Alexandre Dumas",
    bookTitle: "second Book",
  },
];
