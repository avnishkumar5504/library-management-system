import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/library");

app.use("/api/books", bookRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});