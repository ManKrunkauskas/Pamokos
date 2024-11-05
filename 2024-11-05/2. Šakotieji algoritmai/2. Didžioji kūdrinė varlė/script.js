// Prašome naudotojo įvesti varlės svorį gramais
const frogWeight = parseFloat(prompt("Kiek sveria varlė? (gramais)"));
if (isNaN(frogWeight) || frogWeight <= 0) {
  console.log("Įveskite tinkamą varlės svorį gramais.");
} else {
  // Prašome naudotojo įvesti norimą stebėti varlių skaičių
  const frogCount = parseInt(prompt("Kiek varlių norima stebėti?"));
  if (isNaN(frogCount) || frogCount <= 0) {
    console.log("Įveskite tinkamą varlių skaičių.");
  } else {
    // Apskaičiuojame bendrą varlių svorį
    const totalWeightKg = (frogWeight * frogCount) / 1000;

    // Patikriname, ar bendras svoris viršija 5 kg
    if (totalWeightKg > 5) {
      console.log("Varlių stebėjimui pakanka");
    } else {
      console.log("Varlių stebėjimui per mažai");
    }
  }
}
