function callNTimes(times, fn) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

// Pavyzdžiui, sukurkime funkciją, kuri atspausdina "Hello, world!"
function hello() {
  console.log("Hello, world!");
}

// Iškviečiame callNTimes funkciją
callNTimes(5, hello);
