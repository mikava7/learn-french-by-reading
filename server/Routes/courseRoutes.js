import express from "express";
import {
  getDialogueForLesson,
  getAllVocabulary,
  getVerbConjugation,
  getVerbExercise,
} from "../contollers/courseContoller.js";

const courseRouter = express.Router();

// Get all dialogues
courseRouter.get("/course/dialogues/:lessonNumber", getDialogueForLesson);
courseRouter.get("/course/vocabulary/:lessonNumber", getAllVocabulary);
courseRouter.get("/course/verb-conjugation/:lessonNumber", getVerbConjugation);
courseRouter.get("/course/verb-exercise/:lessonNumber", getVerbExercise);

export default courseRouter;
