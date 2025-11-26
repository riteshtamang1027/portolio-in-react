import express from "express";
import connectDB from "./src/db.js";
import dotenv from "dotenv";
dotenv.config();
import profile_route from "./src/routes/profile_route.js";
import contact_route from './src/routes/contact_route.js'

import cors from "cors";

const app = express();
app.use(express.json())

// Middleware to parse URL-encoded data (if sending from HTML form)
app.use(express.urlencoded({ extended: true }));

// mongoDB connection
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// profile route
app.use("/profile", profile_route);

// contact route
app.use("/contact",contact_route)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
  console.log(
    `The Server is running at http://localhost:${process.env.APP_PORT}`
  );
});
