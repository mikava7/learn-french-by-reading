import axios from "axios";

export const fetchBooksData = async () => {
  try {
    const response = await axios.get("http://localhost:5500/books");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching books data.");
  }
};
