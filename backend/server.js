import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  mongoose.connect(
    "mongodb+srv://riteshtamang1027_db_user:oxJhRSA1ZSWuiIHx@cluster0.yiawzdq.mongodb.net/?appName=Cluster0"
  );
  console.log("MongoDB connected successfully.");
} catch (error) {
  console.log("Connected failed.", error);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("The Server is running at http://localhost:4000");
});
