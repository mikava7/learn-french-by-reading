import BookDetails from "./modules/BookDetails";

export const getBooks = async (req, res) => {
  try {
    const books = await BookDetails.find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "No books",
    });
  }
};

// export const addBook = async (req, res) => {
//   try {
//     const {
//       author,
//       bookTitle,
//       chapter,
//       chapterTitle,
//       unknownWords,
//       translation,
//     } = req.body;

//     // Create a new book document
//     const newBook = new BookDetails({
//       author,
//       bookTitle,
//       chapter,
//       chapterTitle,
//       unknownWords,
//       translation,
//     });

//     // Save the new book to the database
//     const savedBook = await newBook.save();

//     res.status(201).json(savedBook);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message || "Error adding book",
//     });
//   }
// };
