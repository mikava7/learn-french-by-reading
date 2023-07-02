import express from "express";
import connectToDB from "./connect.js";
import BookDetails from "./modules/BookDetails.js";
import Words from "./modules/WordsSchema.js";
import cors from "cors";
const MONGODB_URI =
  "mongodb+srv://imikava365:JOANmadu365A@cluster0.qsvjcyr.mongodb.net/books?retryWrites=true&w=majority";

const PORT = 5500;

const app = express();
app.use(cors());
app.get("/books", async (req, res) => {
  try {
    const books = await BookDetails.find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "No books",
    });
  }
});
app.get("/words", async (req, res) => {
  try {
    const words = await Words.find({});
    res.status(200).json(words);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "No words",
    });
  }
});
const start = async () => {
  try {
    await connectToDB(MONGODB_URI);

    app.get("/", (req, res) => {
      res.send("Hello");
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

start();
