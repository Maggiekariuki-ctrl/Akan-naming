 //Array akan names
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
function isValidDate(day, month) {
  if (month <= 0 || month > 12) return false;
  if (day <= 0 || day > 31) return false;
  
  document.getElementById('akanForm').addEventListener('submit', function(e) {
  e.preventDefault();
  


// Example 
const day = 11; // Day of the month
const month = 8; // August
const year = 2000; // Year
  
  


 // The output will be the Akan name for this date
const akanName = getAkanName(day, month, year);
console.log(akanName)