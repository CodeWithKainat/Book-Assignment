//     1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
let a = 10;

console.log("The vblue of a is: " + a);

++a;
console.log("The value of ++a is: " + a);

console.log("Now the value of a is: " + a);

console.log("The value of a++ is: " + a++);

console.log("Now the value of a is: " + a);

console.log("The value of --a is: " + --a);

console.log("Now the value of a is: " + a);

console.log("The value of a-- is: " + a--);

console.log("Now the value of a is: " + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var b = 2, c = 1;
var result = --b - --c + ++c + c--;

console.log("b is", b);
console.log("c is", c);
console.log("result is", result);
  
// 3. Write a program that takes input a name from user &
// greet the user.

var name = prompt("Enter your name:");
document.write("Hello, " + name + "! Welcome!");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var number = prompt("Enter a number:");

if (number === null || number === "") {
  number = 5;
}

number = Number(number);

var table = "";
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  table += number + " x " + i + " = " + result + "<br>";
}

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write(table);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// Page 2 of 3ALERTS | JAVASCRIPT
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");


var totalMarks = 100;

var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

document.write("<h2>Subject Total Marks Obtained Marks</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total Marks</td><td>" + (totalMarks * 3) + "</td></tr>");
document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");

