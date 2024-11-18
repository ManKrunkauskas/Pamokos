function protect_email(email) {
  const [localPart, domain] = email.split("@");
  const visiblePart = localPart.slice(0, Math.min(localPart.length, 5));
  return `${visiblePart}...@${domain}`;
}

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("short@example.com"));
console.log(protect_email("a@b.com"));
