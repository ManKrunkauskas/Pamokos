function sumaSkaiciu(skaiciai) {
  return skaiciai.reduce((suma, skaicius) => suma + skaicius, 0);
}

// Pavyzdys
console.log(sumaSkaiciu([1, 345, 8]));
