const g = 9.8; // laisvojo kritimo pagreitis

// Prašome naudotojo įvesti aukštį
const height = parseFloat(
  prompt("Įveskite aukštį, iš kurio šoka parašiutininkas (metrai):")
);
if (isNaN(height) || height <= 0) {
  console.log("Įveskite tinkamą aukštį.");
  return;
}

// Prašome naudotojo įvesti parašiuto išsiskleidimo laiką
const time = parseFloat(
  prompt("Įveskite laiką, per kurį išsiskleidžia parašiutas (sekundės):")
);
if (isNaN(time) || time <= 0) {
  console.log("Įveskite tinkamą laiką.");
  return;
}

// Apskaičiuojame kritimo laiką
const fallTime = Math.sqrt((2 * height) / g);

// Patikriname, ar parašiutas išsiskleis laiku ir išvedame rezultatą į konsolę
if (time <= fallTime) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("Parašiutas neišsiskleis");
}
