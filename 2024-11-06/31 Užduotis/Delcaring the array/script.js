// Masyvo deklaravimas
const myArray = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// 1. Atspausdinti trečią elementą masyve
console.log("Trečias masyvo elementas:", myArray[2]); // Masyvai prasideda nuo 0, todėl trečias elementas yra indeksu 2

// 2. Pakeisti "thursday" reikšmę į null
myArray[4] = null;

// 3. Atspausdinti elemento, kurį pakeitėme į null 2 žingsnyje, poziciją (indeksą)
console.log(
  "Elemento, kurį pakeitėme į null, indeksas:",
  myArray.indexOf(null)
);
