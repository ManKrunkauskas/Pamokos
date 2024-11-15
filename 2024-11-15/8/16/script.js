function days_passed(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const differenceInTime = date - startOfYear;
  return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
}

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
