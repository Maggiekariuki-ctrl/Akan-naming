function getAkanName(year, month, day) {
  // Extract century (CC) and year (YY) from the input year
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // Calculate the result using the formula
  const result =
    Math.floor(
      CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day
    ) % 7;

  //  Akan names for males and females
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abena",
    "Akua",
    "Yaa",
    "Afia",
    "Ama",
  ];

  // Depending on the result (day of the week), return the Akan name
  if (result === 0) {
    return { male: maleNames[0], female: femaleNames[0] }; // Sunday
  } else if (result === 1) {
    return { male: maleNames[1], female: femaleNames[1] }; // Monday
  } else if (result === 2) {
    return { male: maleNames[2], female: femaleNames[2] }; // Tuesday
  } else if (result === 3) {
    return { male: maleNames[3], female: femaleNames[3] }; // Wednesday
  } else if (result === 4) {
    return { male: maleNames[4], female: femaleNames[4] }; // Thursday
  } else if (result === 5) {
    return { male: maleNames[5], female: femaleNames[5] }; // Friday
  } else {
    return { male: maleNames[6], female: femaleNames[6] }; // Saturday
  }
}

// Example usage
const year = 1992;
const month = 3; //March
const day = 15;

const akanNames = getAkanName(day, month, year);
console.log(`Male Akan Name: ${akanNames.male}`);
console.log(`Female Akan Name: ${akanNames.female}`);
