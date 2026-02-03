import { User, validate } from "./../schemas/user.js";
import bcrypt from "bcrypt";
import express from "express";

const router = express.Router();

router.get("/register", async (req, res) => {
  const mockData = await new User.create({
    username: "Laura",
    password: "LLL",
  });
  return res.json({ data: mockData });
});
