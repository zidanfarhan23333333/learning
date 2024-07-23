import express from "express";
import authModel from "../models/auth.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { user_id, email, name, password } = req.body;
    const user = new authModel({ user_id, email, name, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(400).json({ error: err.message });
  }
});

export default router;
