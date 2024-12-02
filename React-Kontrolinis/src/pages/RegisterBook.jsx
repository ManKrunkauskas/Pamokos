import React, { useState, useEffect } from "react";
import { addBook, getCategories } from "../api"; // Funkcija pridėti knygą ir gauti kategorijas

const RegisterBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const [categories, setCategories] = useState([]); // Laikomos kategorijos iš API
  const [errors, setErrors] = useState({}); // Validacijos klaidos

  // Užkrauna kategorijas iš API
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Nepavyko gauti kategorijų:", error);
      }
    };
    loadCategories();
  }, []);

  // Atlieka formos laukų validaciją
  const validate = () => {
    const newErrors = {};
    if (book.title.length < 3 || book.title.length > 100) {
      newErrors.title = "Pavadinimas turi būti nuo 3 iki 100 simbolių.";
    }
    if (!/^[a-zA-Z\s]+$/.test(book.author)) {
      newErrors.author = "Autoriaus laukelyje gali būti tik raidės ir tarpai.";
    }
    if (!book.category) {
      newErrors.category = "Pasirinkite kategoriją.";
    }
    if (!book.price || isNaN(book.price) || Number(book.price) <= 0) {
      newErrors.price = "Kaina turi būti teigiamas skaičius.";
    }
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(book.cover)) {
      newErrors.cover = "Netinkamas paveikslėlio URL formatas.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Jei nėra klaidų, validacija praėjo
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Jei validacija nepraeina
    try {
      await addBook(book); // Pridėkite knygą į db.json
      alert("Knyga sėkmingai užregistruota!");
      window.location = "/"; // Nukreipkite į pagrindinį puslapį
    } catch (error) {
      console.error("Nepavyko užregistruoti knygos:", error);
      alert("Įvyko klaida registruojant knygą.");
    }
  };

  return (
    <div>
      <h2>Registruoti Naują Knygą</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pavadinimas:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </div>
        <div>
          <label>Autorius:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
          {errors.author && <p style={{ color: "red" }}>{errors.author}</p>}
        </div>
        <div>
          <label>Kategorija:</label>
          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            required
          >
            <option value="">Pasirinkite kategoriją</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
        </div>
        <div>
          <label>Kaina:</label>
          <input
            type="number"
            name="price"
            value={book.price}
            onChange={handleChange}
            required
          />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>
        <div>
          <label>Paveikslėlio URL:</label>
          <input
            type="text"
            name="cover"
            value={book.cover}
            onChange={handleChange}
            required
          />
          {errors.cover && <p style={{ color: "red" }}>{errors.cover}</p>}
        </div>
        <button type="submit">Registruoti</button>
      </form>
    </div>
  );
};

export default RegisterBook;
