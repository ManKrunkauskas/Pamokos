function sumPositiveNumbers() {
  let sum = 0;
  while (true) {
    let input = prompt("Įveskite skaičių:");
    let number = parseFloat(input);

    if (isNaN(number)) {
      console.log("Įveskite teisingą skaičių.");
      continue;
    }

    if (number < 0) {
      break;
    }

    sum += number;
  }

  console.log("Teigiamų skaičių suma:", sum);
}
sumPositiveNumbers();
