// 1 
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArray = [];

multiArray.push([]);
multiArray.push([]);
multiArray.push([]);

// 2
// Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  var paragraph = document.createElement("p");
  
  for (var i = 0; i < matrix.length; i++) {

    var rowString = matrix[i].join(", ");
    paragraph.innerHTML += rowString + "<br>";
  }
  
  document.body.appendChild(paragraph);
  
//   3
//   Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(i);
  }

  
//   4
//   Write a program to print multiplication table of any
//   number using for loop. Table number & length should be
//   taken as an input from user.

var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

var paragraph = document.createElement("p");

paragraph.innerHTML = "Multiplication table of " + tableNumber + ":"  + "<br>" ;


for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  paragraph.innerHTML += " " + tableNumber + " x " + i + " = " + result + "<br>";
}

document.body.appendChild(paragraph);

// 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

var paragraph = document.createElement("p");

for (var i = 0; i < fruits.length; i++) {
  paragraph.innerHTML += fruits[i] + "<br>";
}

document.body.appendChild(paragraph);


// 6
// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var countingSeries = "Counting: ";
for (var i = 1; i <= 15; i++) {
  countingSeries += i + ", ";
}
document.write(countingSeries.slice(0, -2) + "<br>");

var reverseCountingSeries = "Reverse counting: ";
for (var j = 10; j >= 1; j--) {
  reverseCountingSeries += j + ", ";
}
document.write(reverseCountingSeries.slice(0, -2) + "<br>");

var evenSeries = "Even: ";
for (var k = 0; k <= 20; k += 2) {
  evenSeries += k + ", ";
}
document.write(evenSeries.slice(0, -2) + "<br>");

var oddSeries = "Odd: ";
for (var l = 1; l <= 19; l += 2) {
  oddSeries += l + ", ";
}
document.write(oddSeries.slice(0, -2) + "<br>");

var series = "Series: ";
for (var m = 2; m <= 20; m += 2) {
  series += m + "k, ";
}
document.write(series.slice(0, -2) + "k");

// 7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

var isFound = false;
var index = 0;
for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    isFound = true;
    index = i;
    break;
  }
}
if (isFound) {
  alert(`${userInput} is available at index ${index}`);
} else {
  alert(`we are sorry, ${userInput} is not available in our bakery`);
}

// 8
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
      largestNumber = A[i];
  }
}

var p = document.createElement("p");
p.textContent = "The largest number in the array is: " + largestNumber;
document.body.appendChild(p);

// 9
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}

var p = document.createElement("p");
p.textContent = "The smallest number in the array is: " + smallestNumber;
document.body.appendChild(p);

// 10
// Write a program to print multiples of 5 ranging 1 to
// 100.
var p = document.createElement("p");
var output = "";
for (var i = 1; i <= 20; i++) {
  output += 5 * i + ",";
}

p.textContent = output;
document.body.appendChild(p);


