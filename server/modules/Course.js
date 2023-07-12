import mongoose from "mongoose";

const CourseDataSchema = new mongoose.Schema({
  lesson: Number,
  dialogue: {
    title: {
      type: String,
      required: true,
    },
    content: [
      {
        speaker: String,
        phrase: String,
        translation: String,
      },
    ],
  },

  vocabulary: {
    type: Map,
    of: [String],
  },
  verbsConjugations: [
    {
      verb: String,
      french: [String],
      georgian: [String],
    },
  ],
  verbExercise: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

export default mongoose.model("CourseData", CourseDataSchema);
