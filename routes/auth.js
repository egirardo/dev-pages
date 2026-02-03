import { User, validate } from "./../schemas/user.js";
import bcrypt from "bcrypt";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const mockData = await User.create({
    username: "Laura",
    password: "LLLdfsfs",
  });
  return res.json({ data: mockData });
});

export default router;
