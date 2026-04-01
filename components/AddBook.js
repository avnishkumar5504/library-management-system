import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = async () => {
    await axios.post("http://localhost:5000/api/books", {
      title,
      author
    });
    alert("Book Added");
  };

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default AddBook;