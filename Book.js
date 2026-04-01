import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  issued: { type: Boolean, default: false }
});

export default mongoose.model("Book", bookSchema);