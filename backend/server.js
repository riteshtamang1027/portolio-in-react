import express from "express";
import connectDB from "./src/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// mongoDB connection
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(process.env.APP_PORT, () => {
  console.log(
    `The Server is running at http://localhost:${process.env.APP_PORT}`
  );
});
