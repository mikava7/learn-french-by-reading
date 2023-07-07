import express from "express";
import { getAllChapters } from "../contollers/bookContoller.js";
const bookRouter = express.Router();

bookRouter.get("/books/chapters", getAllChapters);
export default bookRouter;
