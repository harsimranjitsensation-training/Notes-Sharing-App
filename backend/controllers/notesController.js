import mongoose from "mongoose";
import Notes from "../models/Notes.js";

export const createNote = async (req, res) => {
  const { title, content, semester, subject } = req.body;
  try {
    if (!title || !content || !semester || !subject) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const note = await Notes.create({
      title,
      content,
      semester,
      subject,
      createdBy: req.user.id,
    });

    res.status(200).json({
      message: "Note created successfully",
      note: note,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({
      message: "Note fetched successfully",
      notes: notes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured",
      error: error.message,
    });
  }
};
