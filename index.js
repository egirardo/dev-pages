import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from 'path';
import authRouter from "./routes/auth.js";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/* App Configuration */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/* Routes Definitions */

app.get("/home", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/register", authRouter);

import profileRouter from "./routes/profiles.js";

app.use("/profiles", profileRouter);

app.get("/register", (req, res) => {
  res.render("register", { test: "hehe" });
});

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Connected to DB.");
  app.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
});


