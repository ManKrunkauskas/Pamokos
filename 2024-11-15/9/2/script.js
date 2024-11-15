function is_Blank(input) {
  return typeof input === "string" && input.trim() === "";
}

console.log(is_Blank(""));
console.log(is_Blank("abc"));
console.log(is_Blank("   "));
console.log(is_Blank(null));
