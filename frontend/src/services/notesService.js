import axios from "axios";

const BASE_URL = "http://localhost:5000/api/notes";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const createNote = async (noteData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/add-note`,
      noteData,
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getNotes`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNoteById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getNote/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateNote = async (noteData, id) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/updateNote/${id}`,
      noteData,
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/deleteNote/${id}`,
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
