import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/auth.js";
import authRouter from "./routes/auth.js";

const app = express();
const port = process.env.PORT;
// const db = mongoose.connection;

app.use(express.json());
app.use("/register", authRouter);

import profileRouter from './routes/profiles.js'

app.use('/profiles', profileRouter);

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Connected to DB.");
  app.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
});
