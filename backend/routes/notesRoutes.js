import express from "express";
import { createNote, getAllNotes } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-note", protect, createNote);
router.get("/getNotes", getAllNotes);

export default router;