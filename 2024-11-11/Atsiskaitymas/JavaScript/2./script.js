const positives = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("Pateikti neteisingi duomenys. Laukiamas masyvas.");
    return;
  }

  return arr.filter((num) => num > 0);
};

console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-5, -2, -3]));
console.log(positives("neteisingi duomenys"));
