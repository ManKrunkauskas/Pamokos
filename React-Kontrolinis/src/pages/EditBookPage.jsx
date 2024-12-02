import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Naudojamas navigacijai ir ID gavimui
import { getBooks, updateBook } from "../api";

const EditBookPage = () => {
  const { id } = useParams(); // Gaukite redaguojamos knygos ID iš URL
  const navigate = useNavigate(); // Navigacijos funkcija

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({}); // Klaidos validacijai

  // Užkrauti knygą ir kategorijas
  useEffect(() => {
    const loadBook = async () => {
      try {
        const books = await getBooks(); // Gauti visas knygas
        const foundBook = books.find((b) => b.id === parseInt(id, 10)); // Surasti knygą pagal ID
        if (foundBook) {
          setBook(foundBook);
        } else {
          alert("Knyga nerasta.");
          navigate("/"); // Grįžti į pagrindinį puslapį, jei knygos nėra
        }
      } catch (error) {
        console.error("Nepavyko užkrauti knygos:", error);
      }
    };
    loadBook();
  }, [id, navigate]);

  // Validacija
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

  // Atnaujinti laukų reikšmes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Išsaugoti pakeitimus
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Validacija
    try {
      await updateBook(book); // Atnaujinti knygos informaciją
      alert("Knygos informacija sėkmingai atnaujinta!");
      navigate("/"); // Grįžti į pagrindinį puslapį
    } catch (error) {
      console.error("Nepavyko atnaujinti knygos:", error);
      alert("Įvyko klaida atnaujinant knygos informaciją.");
    }
  };

  return (
    <div>
      <h2>Redaguoti Knygą</h2>
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
        <button type="submit">Išsaugoti Pakeitimus</button>
      </form>
    </div>
  );
};

export default EditBookPage;
