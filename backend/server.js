import express from "express";
import connectDB from "./src/db.js";
import dotenv from "dotenv";
dotenv.config();
import profile_route from "./src/routes/profile_route.js";

import cors from "cors";

const app = express();

// mongoDB connection
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

// profile route
app.use("/profile", profile_route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
  console.log(
    `The Server is running at http://localhost:${process.env.APP_PORT}`
  );
});
