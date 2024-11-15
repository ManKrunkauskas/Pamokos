function day_of_the_month(date) {
  const day = date.getDate();
  return day.toString().padStart(2, "0");
}

const d = new Date(2015, 10, 2);
console.log(day_of_the_month(d));
