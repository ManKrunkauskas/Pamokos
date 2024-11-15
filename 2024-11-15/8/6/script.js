function add_minutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
