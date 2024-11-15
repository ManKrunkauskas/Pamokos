function calculate_age(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const currentMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();
  const currentDay = today.getDate();
  const birthDay = birthDate.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
