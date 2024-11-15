function days_of_a_year(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeapYear ? 366 : 365;
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));
