import mongoose from "mongoose";

const VocabularySchema = new mongoose.Schema({
  word: String,
  translation: String,
});

export default mongoose.model("Vocabulary", VocabularySchema);
