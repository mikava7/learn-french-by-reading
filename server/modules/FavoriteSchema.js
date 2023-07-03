// favorite.js
import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    // Additional properties for the favorite word
    // ...
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favorite", FavoriteSchema);
