import Vocabulary from "../modules/Vocabulary.js";

export const getAllWords = async (req, res) => {
  try {
    const vocabulary = await Vocabulary.find({});
    res.status(200).json(vocabulary);
  } catch (error) {
    console.log(error);
  }
};
