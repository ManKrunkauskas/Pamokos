function lastday(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
