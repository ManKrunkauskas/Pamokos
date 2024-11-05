// Prompt the user to enter the start and end of the interval
const start = parseInt(prompt("Įveskite intervalo pradžia:"));
const end = parseInt(prompt("Įveskite intervalo pabaigą:"));

// Initialize a counter for numbers divisible by 6
let count = 0;

// Loop through the interval and count numbers divisible by 6
for (let i = start; i <= end; i++) {
    if (i % 6 === 0) {
        count++;
    }
}

// Output the result to the console
console.log(`Reikalingų marškinėlių skaičius: ${count}`);
