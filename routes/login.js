import "dotenv/config";
import { User, validate } from "../schemas/user.js";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const secret = process.env.SECRET;
const jwsExpirySeconds = 300;

const loginRouter = router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(401).send(error.details[0].message);
  } else {
    try {
      let user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.status(400).json({ message: "Incorrect email or password" });
      }

      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      );

      if (!isCorrectPassword) {
        return res.status(400).json({ message: "Incorrect email or password" });
      }

  

      res.redirect("/profile");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
});

export default loginRouter;
