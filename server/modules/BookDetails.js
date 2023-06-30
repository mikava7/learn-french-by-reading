import mongoose from "mongoose";

const BooksDetailsSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    bookTitle: {
      type: String,
      required: true,
    },
    chapter: {
      type: Number,
      required: true,
    },
    chapterTitle: {
      type: String,
      required: true,
    },
    unknownWords: {
      type: Array,
    },
    translation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BookDetails", BooksDetailsSchema);
