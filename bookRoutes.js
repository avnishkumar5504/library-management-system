import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// Add Book
router.post("/", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// Get Books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Issue Book
router.put("/issue/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { issued: true },
    { new: true }
  );
  res.json(book);
});

// Return Book
router.put("/return/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { issued: false },
    { new: true }
  );
  res.json(book);
});

// Delete Book
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;