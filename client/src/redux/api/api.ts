// authApi.js
import axios from "axios";

const API_URL = "http://localhost:5500/api/auth";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
