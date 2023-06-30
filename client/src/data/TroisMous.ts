import { chapterContent } from "./chpterContent";
import { UnknownWords } from "./UnknownWords";
import { v4 as uuidv4 } from "uuid";

let idCounter = 0;
let chapter = 0;
interface Chapter {
  chapter: number;
  title: string;
  content: string;
  unknownWords: any;
}

interface Book {
  id: number;
  author: string;
  bookTitle: string;
  chapters: Chapter[];
}

export const troisMous: Book[] = [
  {
    id: idCounter++,
    author: "Alexandre Dumas", // Author defined at the book level
    bookTitle: "Les Trois Mousquetaires",
    chapters: [
      {
        chapter: ++chapter,
        title: "BATTEZ-VOUS, SURTOUT SI SE BATTRE EST DÉFENDU!",
        content: chapterContent[0],
        unknownWords: UnknownWords[0],
      },
      {
        chapter: ++chapter,
        title: "PREMIÈRE BATAILLE ",
        content: chapterContent[1],
        unknownWords: UnknownWords[1],
      },
      {
        chapter: ++chapter,
        title: "LA LETTRE POUR MONSIEUR DE TRÉVILLE ET MILADY  ",
        content: chapterContent[2],
        unknownWords: UnknownWords[2],
      },
      {
        chapter: ++chapter,
        title: "L’ARRIVÉE DE D’'ARTAGNAN À PARIS  ",
        content: chapterContent[3],
        unknownWords: UnknownWords[3],
      },
      {
        chapter: ++chapter,
        title: "EN ATTENDANT MONSIEUR DE TRÉVILLE  ",
        content: chapterContent[4],
        unknownWords: UnknownWords[4],
      },
      {
        chapter: ++chapter,
        title: "MONSIEUR DE TRÉVILLE ET SES MOUSQUETAIRES  ",
        content: chapterContent[5],
        unknownWords: UnknownWords[5],
      },
    ],
  },
];
