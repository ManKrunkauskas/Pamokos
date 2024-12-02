let books = [];

const handleChange = (e) => {
  setBook({ ...book, [e.target.name]: e.target.value });
};

export const getBooks = async () => {
  try {
    const response = await fetch("http://localhost:3500/books");
    if (!response.ok) throw new Error("Nepavyko gauti knygų sąrašo");
    const data = await response.json();
    console.log("Gauti knygų duomenys:", data);
    return data;
  } catch (error) {
    console.error("Klaida skaitant knygų sąrašą:", error);
    return [];
  }
};

export const addBook = async (book) => {
  try {
    const response = await fetch("http://localhost:3500/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) throw new Error("Nepavyko pridėti knygos");
    const data = await response.json();
    console.log("Pridėta knyga:", data);
    return data;
  } catch (error) {
    console.error("Klaida pridedant knygą:", error);
    throw error;
  }
};

export const toggleReserved = async (id, reserved) => {
  console.log(
    "Keičiama rezervacija knygai su ID:",
    id,
    "Nauja būsena:",
    reserved
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) {
        reject(new Error("Knyga nerasta"));
        return;
      }
      books[bookIndex].reserved = reserved; // Keičia knygos `reserved` reikšmę
      console.log("Atnaujinta knyga:", books[bookIndex]); // Tikrina, ar knyga pasikeitė
      resolve(books[bookIndex]);
    }, 500);
  });
};

export const updateBook = async (book) => {
  try {
    const response = await fetch(`http://localhost:4001/books/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) throw new Error("Nepavyko atnaujinti knygos");
    const data = await response.json();
    console.log("Knyga atnaujinta:", data);
    return data;
  } catch (error) {
    console.error("Klaida atnaujinant knygą:", error);
    throw error;
  }
};

const loadBooks = async () => {
  try {
    const data = await getBooks(); // Gauna naują sąrašą iš Mock API
    console.log("Knygų sąrašas atnaujintas:", data);
    setBooks(data); // Atnaujina būseną
  } catch (error) {
    console.error("Nepavyko gauti knygų sąrašo:", error);
  }
};

export const getCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Romanas", "Detektyvas", "Psichologinis Romanas", "Fantastika"]);
    }, 500);
  });
};
