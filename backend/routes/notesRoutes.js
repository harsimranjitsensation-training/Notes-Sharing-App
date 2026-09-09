import express from "express";
import { createNote } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-note", protect, createNote);

export default router;