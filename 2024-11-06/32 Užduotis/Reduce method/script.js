function sandauga(masyvas) {
  return masyvas.reduce(
    (kaupiklis, dabartineReiksme) => kaupiklis * dabartineReiksme,
    1
  );
}

// Pavyzdžiai
console.log(sandauga([2, 4, 6])); // Rezultatas: 48
console.log(sandauga([-10, 10])); // Rezultatas: -100
