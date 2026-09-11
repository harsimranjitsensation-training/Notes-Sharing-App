import express from "express";
import { createNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-note", protect, createNote);
router.get("/getNote/:id", getNoteById);
router.get("/getNotes", getAllNotes);
router.put("/updateNote/:id", protect, updateNote);


export default router;