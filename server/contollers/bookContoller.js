import BookDatails from "../modules/BookDetails.js";

export const getAllChapters = async (req, res) => {
  try {
    const chapters = await BookDatails.find({});
    if (!chapters) {
      return res.status(404).json("No chapter avialable");
    }
    const num = chapters.length;
    res.status(200).json(chapters);
  } catch (error) {}
};
