
// Write a program that displays current date and time in
// your browser

function displayDateTime() {
    let currentDate = new Date();
    document.write(currentDate.toLocaleString());
  }
  
  displayDateTime(); 

//   2. Write a program that alerts the current month in words.
// For example December.

  // Function to alert the current month in words
function alertCurrentMonth() {
    let months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    
    let currentMonthInWords = months[currentMonth];
    
    alert(currentMonthInWords);
  }
  
  alertCurrentMonth();
    
//   3. Write a program that alerts the first 3 letters of the current
//   day, for example if today is Sunday then alert will show
//   Sun.
 
function alertCurrentDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    
    let currentDayIs = days[currentDay];
    
    alert("Today Is"+" "+ currentDayIs);
  }

  alertCurrentDay();

//   4. Write a program that displays a message “It’s Fun day” if
//   its Saturday or Sunday today

function checkFunDay() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    // sundday=0 and saturday=6
    if (currentDay === 0 || currentDay === 6) {
      alert("It's Fun day");
    } else {
      alert("It's not Fun day");
    }
  }
  checkFunDay();
  
//   5. Write a program that shows the message “First fifteen
//   days of the month” if the date is less than 16th of the month
//   else shows “Last days of the month”.

// Function to check the date and display the message
function checkDate() {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    
    if (currentDay < 16) {
      alert("First fifteen days of the month");
    } else {
      alert("Last days of the month");
    }
  }
  
  // Call the checkDate function
  checkDate();

//   6. Write a program that determines the minutes since
//   midnight, Jan. 1, 1970 and assigns it to a variable that
//   hasn't been declared beforehand. Use any variable you like
//   to represent the Date object

 let currrentDate = new Date();


let milliseconds = currrentDate.getTime();


let minutesSinceMidnight = Math.floor(milliseconds / (1000 * 60));


let dateString = currrentDate.toString();

let currentDateElement = document.getElementById("currentDate");
let millisecondsElement = document.getElementById("milliseconds");
let minutesSinceMidnightElement = document.getElementById("minutesSinceMidnight");

currentDateElement.textContent = "Current Date: " + dateString;
millisecondsElement.textContent = "Milliseconds since Jan. 1, 1970: " + milliseconds;
minutesSinceMidnightElement.textContent = "Minutes since midnight: " + minutesSinceMidnight;

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let currentTime = new Date();

let currentHour = currentTime.getHours();

if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
let laterDate = new Date(2020, 11, 0);

document.write("<br>"+"Later Date:", laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// Create a Date object for the starting date of Ramadan

let  startingDate = new Date(2015, 5, 18);
let  currentDate = new Date();
let  millisecondsDiff = currentDate - startingDate;

let  daysPassed = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

alert( daysPassed + "Days passed since 1st Ramadan " );

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let  referenceDate = new Date();

let  beginningOf2015 = new Date(2015, 0, 1);

let  secondsElapsed = Math.floor((referenceDate - beginningOf2015) / 1000);

document.write("<br>"+"Seconds elapsed since the beginning of 2015: " + secondsElapsed);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// Create a Date object for the current date and time
let curentDate = new Date();

let currentHours = curentDate.getHours();
curentDate.setHours(currentHours + 1);

document.write("<br>"+"Date an hour ahead: " + curentDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let crntDate = new Date();
crntDate.setFullYear(crntDate.getFullYear() - 100);
alert("Date 100 years back: " + crntDate);



// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

let age = prompt("What is your age?");

let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// Page 4 of 5DATE METHODS | JAVASCRIPT
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

let customerName = prompt("Enter Customer Name:");

let currentMonth = prompt("Enter Current Month:");

let numberOfUnits = parseFloat(prompt("Enter Number of Units:"));

let chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));

let latePaymentSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));

let netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = netAmountPayable.toFixed(2);

let grossAmountPayable = parseFloat(netAmountPayable) + latePaymentSurcharge;
grossAmountPayable = grossAmountPayable.toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</p>");


























  