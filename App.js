import React from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Library Management</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;