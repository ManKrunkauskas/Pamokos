function is_weekend(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();

  if (day === 0 || day === 6) {
    return "weekend";
  } else {
    return undefined;
  }
}

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
