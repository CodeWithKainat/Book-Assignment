// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var number = prompt("Enter a positive number/integer:");
var parsedNumber = parseInt(number);

// The isNaN() function is used to determine if a value is NaN (Not a Number). By using the ! (negation) operator, it checks if parsedNumber is not NaN. If parsedNumber is indeed a valid number, this condition will evaluate to true.

if (!isNaN(parsedNumber) && parsedNumber > 0) {

  document.write("Number: " + parsedNumber + "<br>");

  let roundedValue = Math.round(parsedNumber);
  document.write("Rounded Value: " + roundedValue + "<br>");

  let floorValue = Math.floor(parsedNumber);
  document.write("Floor Value: " + floorValue + "<br>");

  let ceilValue = Math.ceil(parsedNumber);
  document.write("Ceiling Value: " + ceilValue + "<br>");
} else {
  document.write("Invalid input. Please enter a positive integer.");
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Get the number from the user
var number = prompt("Enter a negative floating-point number:");

var parsedNumber = parseFloat(number);

if (!isNaN(parsedNumber) && parsedNumber < 0) {
  document.write("Number: " + parsedNumber + "<br>");

  let roundedValue = Math.round(parsedNumber);
  document.write("Rounded Value: " + roundedValue + "<br>");

  let floorValue = Math.floor(parsedNumber);
  document.write("Floor Value: " + floorValue + "<br>");

  let ceilValue = Math.ceil(parsedNumber);
  document.write("Ceiling Value: " + ceilValue + "<br>");
} else {
  document.write("Invalid input. Please enter a negative floating-point number.");
}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let numbern = prompt("Enter a number for absolute value:");

let parsetNumber = parseFloat(numbern);

let absoluteValue = Math.abs(parsetNumber);

document.write("The absolute value of " + parsetNumber + " is " + absoluteValue);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:  

// random number between 1 and 6 
let diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<br>" + "Dice Value: " + diceValue);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// ternary operator
let randomNumber = Math.random();

let coinValue = (randomNumber < 0.5) ? "Heads" : "Tails";

document.write("<br>" + "Coin toss: " + coinValue);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
let randomNum = Math.floor(Math.random() * 100) + 1;

document.write("Random Number: " + randomNum);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms\

let yourWeight = prompt("Enter your weight:");
let weight = parseFloat(yourWeight);
 document.write("<br>" +"Your weight is: " + weight + " kilograms");

//  8. Write a program that stores a random secret number from
//  1 to 10 in a variable. Ask the user to input a number
//  between 1 and 10. If the user input equals the secret
//  number, congratulate the user.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("enter a number between 1 and 10:"));

if (userGuess === secretNumber) {
  document.write("<br>"+"Congratulations! You guessed the correct number!");
} else {
  // Provide feedback to the user
  document.write("<br>"+"Oops! try again: " + secretNumber);
}














