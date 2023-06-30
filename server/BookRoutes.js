import { getBooks } from "./BookController";
import express from "express";
const bookRouter = express.Router();

bookRouter.get("/book", getBooks);
export default bookRouter;
