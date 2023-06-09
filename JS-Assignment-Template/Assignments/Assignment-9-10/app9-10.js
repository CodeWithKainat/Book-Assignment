// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
    
var cityName = prompt("Enter a city name:");

if (cityName === "Karachi") {

  console.log("Welcome to the city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender (male/female):");

gender = gender.toLowerCase();

if (gender === "male") {
  console.log("Good Morning Sir.");
} else if (gender === "female") {
  console.log("Good Morning Ma'am.");
} else {
  console.log("Invalid gender.");
}

// 3. Write a program to take input color of road traffic signal

var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

color = color.toLowerCase();

var signalColor = "";
var message = "";

switch (color) {
  case "red":
    signalColor = "Red";
    message = "Must Stop";
    break;
  case "yellow":
    signalColor = "Yellow";
    message = "Ready to move";
    break;
  case "green":
    signalColor = "Green";
    message = "Move now";
    break;
  default:
    signalColor = "Invalid Color";
    message = "Invalid input. Please enter a valid color (red, yellow, or green).";
    break;
}

var tableHTML = `
  <table>
    <tr>
      <th>Signal Color</th>
      <th>Message</th>
    </tr>
    <tr>
      <td>${signalColor}</td>
      <td>${message}</td>
    </tr>
  </table>
`;

document.write(tableHTML);

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");

remainingFuel = parseFloat(remainingFuel);

if (remainingFuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("You have enough fuel in your car");
}


// task 5--------------------->
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}

if (true){
  alert("True");
}
if (false){
  alert("False");
}

if("car" < "cat"){
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table: 

var marksSubject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var marksSubject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var marksSubject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

var totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;
var percentage = (totalMarksObtained / totalMarks) * 100;

var grade = "";
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

var remarks = "";
switch (grade) {
  case "A+":
    remarks = "Excellent!";
    break;
  case "A":
    remarks = "Very Good!";
    break;
  case "B":
    remarks = "Good";
    break;
  case "C":
    remarks = "Satisfactory";
    break;
  case "D":
    remarks = "Pass";
    break;
  default:
    remarks = "Fail";
    break;
}
var tableHTML = `
  <table>
    <tr>
      <th>Total Marks</th>
      <th>Marks Obtained</th>
      <th>Percentage</th>
      <th>Grade</th>
      <th>Remarks</th>
    </tr>
    <tr>
      <td>${totalMarks}</td>
      <td>${totalMarksObtained}</td>
      <td>${percentage.toFixed(2)}%</td>
      <td>${grade}</td>
      <td>${remarks}</td>
    </tr>
  </table>
`;

document.write(tableHTML);



// task   7......................>
const secretNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  console.log(" Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  console.log("Close enough");
} else {
  console.log("Try again!");
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3

let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
  console.log("The number is divisible by 3.");
} else {
  console.log("The number is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.  in javascripe

let numbr = parseInt(prompt("Enter a number:"));

if (numbr % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”  in  javascript


let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today's Weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today's weather is so Cool.");
} else {
  console.log("The temperature is too low.");
}



// 11.
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


let firstNumber = parseFloat(prompt("Enter the first number:"));

let secondNumber = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  console.log("Invalid operation. Please try again.");
}

if (result !== undefined) {
  console.log("Result: " + result);
}

