import mongoose from "mongoose";

const BooksDetailsSchema = new mongoose.Schema(
  {
    chapter: {
      type: Number,
      required: true,
    },
    chapterTitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BookDetails", BooksDetailsSchema);
