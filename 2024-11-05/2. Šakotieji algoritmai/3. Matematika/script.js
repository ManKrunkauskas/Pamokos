// Prompt the user to enter 5 grades separated by spaces
const gradesInput = prompt(
  "Įveskite 5 Petriuko pažymius palikdami tarpą tarp jų:"
);

// Split the input into an array of numbers
const grades = gradesInput.split(" ").map(Number);

// Calculate the average grade
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// Determine the number of candies
let candies;
if (average > 9) {
  candies = 3;
} else if (average >= 7) {
  candies = 2;
} else {
  candies = 1;
}

// Output the result to the console
console.log(`Petriukas gaus ${candies} saldainius(į).`);
