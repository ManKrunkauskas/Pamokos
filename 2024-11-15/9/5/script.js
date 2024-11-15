function abbrev_name(name) {
  const parts = name.split(" ");
  if (parts.length > 1) {
    return `${parts[0]} ${parts[1][0]}.`;
  }
  return name;
}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("John"));
console.log(abbrev_name("Alice Johnson Lee"));
