import axios from "axios";

c

export const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


