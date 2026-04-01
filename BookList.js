import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  const issueBook = async (id) => {
    await axios.put(`http://localhost:5000/api/books/issue/${id}`);
    fetchBooks();
  };

  const returnBook = async (id) => {
    await axios.put(`http://localhost:5000/api/books/return/${id}`);
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.title} - {book.author}</h3>
          <p>Status: {book.issued ? "Issued" : "Available"}</p>

          {!book.issued ? (
            <button onClick={() => issueBook(book._id)}>Issue</button>
          ) : (
            <button onClick={() => returnBook(book._id)}>Return</button>
          )}

          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;