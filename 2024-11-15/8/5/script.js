function compare_dates(date1, date2) {
  if (date1.getTime() === date2.getTime()) {
    return "Date1 = Date2";
  } else if (date1.getTime() > date2.getTime()) {
    return "Date1 > Date2";
  } else {
    return "Date2 > Date1";
  }
}

console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
);
console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
);
