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
 //formula to calculate 
  const result = (((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4) + ((26 * (month + 1)) / 10) + day) % 7;


  
const isFemale = result % 2 === 0; // Even results are female names, odd are male
    return isFemale ? akanNames[result][0] : akanNames[result][1];
}
