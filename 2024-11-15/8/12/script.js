function min_date(dates) {
  const dateObjects = dates.map((date) => new Date(date));

  const minDate = new Date(Math.min(...dateObjects.map((d) => d.getTime())));

  return minDate.toISOString().split("T")[0];
}

console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
