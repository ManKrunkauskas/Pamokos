function visiTeigiami(skaiciai) {
  return skaiciai.every((skaicius) => skaicius > 0);
}

// Pavyzdžiai
console.log(visiTeigiami([1, 2, 3, 4, 5])); // Turėtų išvesti true
console.log(visiTeigiami([1, 2, -3, 4, 5])); // Turėtų išvesti false
console.log(visiTeigiami([0, 0, 1])); // Turėtų išvesti false
