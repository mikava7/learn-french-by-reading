import express from "express";
import { getAllWords } from "../contollers/vocabularyController.js";

const vocabularyRouter = express.Router();

vocabularyRouter.get("/lesson/vocabulary", getAllWords);

export default vocabularyRouter;
