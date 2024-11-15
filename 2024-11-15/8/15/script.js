function quarter_of_the_year(date) {
  const month = date.getMonth();
  return Math.floor(month / 3) + 1;
}

console.log(quarter_of_the_year(new Date(2015, 1, 21)));
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
