import React, { useState } from "react";
import { addBook } from "../api";

const BookForm = ({ onSuccess }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Užkerta kelią puslapio persikrovimui
    try {
      await addBook(book); // Čia siunčiame knygos duomenis į API
      window.location = "/"; // Po sėkmingo pateikimo grįžtame į pagrindinį puslapį
    } catch (error) {
      console.error("Nepavyko užregistruoti knygos:", error);
      alert("Įvyko klaida registruojant knygą."); // Rodo klaidos pranešimą vartotojui
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Pavadinimas"
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Autorius"
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Kategorija"
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Kaina"
        type="number"
        onChange={handleChange}
        required
      />
      <input
        name="cover"
        placeholder="Paveikslėlio URL"
        onChange={handleChange}
        required
      />
      <button type="submit">Registruoti</button>
    </form>
  );
};

export default BookForm;
