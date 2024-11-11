function sumEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i < n; i += 2) {
      sum += i;
    }
    console.log("Suma:", sum);
  }
  
  sumEvenNumbers(20);
  