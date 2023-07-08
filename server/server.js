import express from "express";
import { json } from "express";
import connectToDB from "./connect.js";
import BookDetails from "./modules/BookDetails.js";
import Words from "./modules/WordsSchema.js";
import userRouter from "./Routes/userRoutes.js";
import authRouter from "./Routes/authRoutes.js";
import bookRouter from "./Routes/bookRoutes.js";
import vocabularyRouter from "./Routes/vocabularyRoutes.js";
import dotenv from "dotenv";
import { logger, logEvents } from "./midlleware/logger.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const port = 5500 || process.env.PORT;
const MONGODB_URI =
  "mongodb+srv://imikava365:JOANmadu365A@cluster0.qsvjcyr.mongodb.net/books?retryWrites=true&w=majority";

const app = express();
app.use(cookieParser()); // Move cookieParser middleware above route handlers
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(userRouter);
app.use(authRouter);
app.use(bookRouter);
app.use(vocabularyRouter);

app.get("/words", async (req, res) => {
  try {
    const words = await Words.find({});
    res.status(200).json(words);
    console.log(words, words);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "No words",
    });
  }
});

const start = async () => {
  try {
    await connectToDB(process.env.MONGODB_URI);

    app.get("/", (req, res) => {
      res.send("Hello");
    });

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

start();
