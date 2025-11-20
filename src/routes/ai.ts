import { Router } from "express";
import { generateAIContent } from "../controllers/ai.controller";
import { authenticate } from "../middleware/auth";

const router = Router();

// POST /ai/generate
router.post("/generate", generateAIContent)

export default router
