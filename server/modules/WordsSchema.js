import mongoose from "mongoose";

const WordsSchema = new mongoose.Schema({
  word: String,
  definition: String,
  translation: String,
  bookDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookDetails",
  },
});

export default mongoose.model("Words", WordsSchema);
