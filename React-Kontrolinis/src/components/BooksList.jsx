import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../api";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const loadBooks = async () => {
    try {
      const data = await getBooks();
      console.log("Knygų sąrašas užkrautas:", data);
      setBooks(data);
    } catch (error) {
      console.error("Nepavyko gauti knygų sąrašo:", error);
    }
  };

  const handleToggleReserved = async (id, reserved) => {
    console.log(
      "Keičiama rezervacija... ID:",
      id,
      "Dabartinė būsena:",
      reserved
    );
    try {
      const response = await fetch(`http://localhost:3500/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reserved: !reserved }),
      });
      if (!response.ok)
        throw new Error("Nepavyko pakeisti rezervacijos būsenos");
      const updatedBook = await response.json();
      console.log("Atnaujinta knyga:", updatedBook);

      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Nepavyko pakeisti rezervacijos būsenos:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h2>Knygų Sąrašas</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={book.cover || "https://via.placeholder.com/100"}
              alt={book.title}
              style={{
                width: "100px",
                height: "150px",
                marginRight: "1rem",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>Kategorija: {book.category}</p>
              <p>Kaina: {book.price} €</p>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => handleToggleReserved(book.id, book.reserved)}
                style={{
                  backgroundColor: book.reserved ? "#f44336" : "#4CAF50",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {book.reserved ? "Grąžinti" : "Išduoti skaitytojui"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
