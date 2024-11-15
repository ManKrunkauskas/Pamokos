function curday(separator) {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0"); // Add leading zero if needed
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = today.getFullYear();

  return `${month}${separator}${day}${separator}${year}`;
}

// Test Data
console.log(curday("/")); // "MM/DD/YYYY"
console.log(curday("-")); // "MM-DD-YYYY"
