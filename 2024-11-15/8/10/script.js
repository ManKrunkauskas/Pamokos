function yesterday(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() - 1);
  return date;
}

console.log(yesterday("Nov 15, 2014").toString());
console.log(yesterday("Nov 16, 2015").toString());
console.log(yesterday("Nov 17, 2016").toString());
