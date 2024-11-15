function max_date(dates) {
  const dateObjects = dates.map((date) => new Date(date));

  const maxDate = new Date(Math.max(...dateObjects.map((d) => d.getTime())));

  return maxDate.toISOString().split("T")[0];
}

console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
