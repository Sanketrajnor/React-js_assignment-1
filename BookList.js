import React from 'react';

const BookList = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
    { title: 'Book 2', author: 'Author 2', genre: 'Genre 2' },
    { title: 'Book 3', author: 'Author 3', genre: 'Genre 3' },
  ];

  const styling = {
    color: "blue",
    backgroundColor: "yellowgreen",
    borderRadius : "50px",
    };

    const styleh3 = {
        color: "Red",
        backgroundColor: "darkgreen",
        borderRadius : "50px",
        };
  return (
    <div>
      <h1 style={styleh3}>Book List</h1>
      {books.map((book, index) => (
        <div key={index}>
          <h3 style={styling}>Title: {book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookList;
