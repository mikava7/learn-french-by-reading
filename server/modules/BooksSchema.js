import mongoose from "mongoose";

//define Book schema

const BooksSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  author: { type: String, required: true },
  id: Number,
  chapters: Number,
});
export default mongoose.model("Books", BooksSchema);
