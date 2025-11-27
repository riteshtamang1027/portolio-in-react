import express from "express";
import connectDB from "./src/db.js";
import dotenv from "dotenv";
dotenv.config();
import profile_route from "./src/routes/profile_route.js";
import contact_route from "./src/routes/contact_route.js";

import cors from "cors";

const app = express();
app.use(express.json());

// Middleware to parse URL-encoded data (if sending from HTML form)
app.use(express.urlencoded({ extended: true }));

// mongoDB connection
connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfoliobasedonreactjs-nwgujow47-ritesh-tamangs-projects.vercel.app"
    ],
    credentials: true,
  })
);


// profile route
app.use("/profile", profile_route);

// contact route
app.use("/contact", contact_route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || process.env.APP_PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
