import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => {
  res.json({ message: "Task routes are working." });
});

export default router;
