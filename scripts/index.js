 Array akan names
 const akanNames = [
  ["Akosua", "Kwasi"], // Sunday
  ["Adwoa", "Kwadwo"], // Monday
  ["Abena", "Kwabena"], // Tuesday
  ["Akua", "Kwaku"], // Wednesday
  ["Yaa", "Kofi"], // Thursday
  ["Afia", "Kwame"], // Friday
  ["Ama", "Kwame"], // Saturday
];
function getAkanName(day, month, year) {
    // Extract century (CC) and year (YY)
    const CC = Math.floor(year / 100);
    const YY = year%100;
