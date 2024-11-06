// Funkcija, kuri suranda didžiausią skaičių masyve
function max(numbers) {
  return Math.max(...numbers);
}

// Pavyzdys
const numbers = [1, 5, 10, 9, 10, 1];
console.log("Didžiausias skaičius masyve:", max(numbers)); // Tikimasi rezultato 10
