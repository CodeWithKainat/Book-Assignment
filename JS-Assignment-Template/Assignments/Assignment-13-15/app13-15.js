// 1. Declare an empty array using JS literal notation to store
// student names in future.
let studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
let futureStudents = {
    names: []
  };
//   3. Declare and initialize a strings array.
let stringsArray = ["apple", "banana", "orange"];
console.log( stringsArray)

// 4. Declare and initialize a numbers array.
let numbArray = [1, 2, 3, 4, 5];
// 5. Declare and initialize a boolean array. in javascript
let bolean = [true, false, true];
console.log(bolean)
// 6. Declare and initialize a mixed array.
let mixArray = [1, "apple", true, { name: "aina", age: 22 }];
console.log(mixArray)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD"
];

let qualificationsList = "Qualifications in Pakistan:<br>";
for (let i = 0; i < qualifications.length; i++) {
  qualificationsList += (i + 1) + ") " + qualifications[i] + "<br>";
}

document.body.innerHTML = qualificationsList;


// 8.
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
let studntNames = ["anna", "Eisha", "sara"];
let studentScores = [430, 380, 450];
let totalMarks = 500;

// Display scores and percentages
for (let i = 0; i < studntNames.length; i++) {
  let score = studentScores[i];
  let percentage = (score / totalMarks) * 100;
  console.log(studntNames[i] + " scored " + score + " out of " + totalMarks + " (" + percentage.toFixed(2) + "%)");
}

// task 9-----------------------
let colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors.join(", ") + "<br>");

let colorToAddBeginning = prompt("Enter a color to add at the beginning:");

colors.unshift(colorToAddBeginning);

document.write("After adding color at the beginning: " + colors.join(", ") + "<br>");

let colorToAddEnd = prompt("Enter a color to add at the end:");

colors.push(colorToAddEnd);

document.write("After adding color at the end: " + colors.join(", ") + "<br>");

colors.unshift("Yellow", "Orange");

document.write("After adding two more colors at the beginning: " + colors.join(", ") + "<br>");

colors.shift();

document.write("After deleting the first color: " + colors.join(", ") + "<br>");

colors.pop();

document.write("After deleting the last color: " + colors.join(", ") + "<br>");

let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color you want to add:");

colors.splice(indexToAdd, 0, colorToAdd);

document.write("After adding color at the desired index: " + colors.join(", ") + "<br>");

let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));

colors.splice(indexToDelete, numberOfColorsToDelete);

document.write("After deleting color(s) from the user-defined position: " + colors.join(", ") + "<br>");
  
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// Define the student scores
var scores = [320, 230, 480, 120];

// Sort the array in ascending order
scores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted scores:", scores);
// 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["karachi", "Lahore", "Pishawar", "multan", "islamabad"];
let selectedCities = cities.slice(0, 3);
console.log("Selected cities:", selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var result = arr.join(" ");

var paragraph = document.createElement("p");
paragraph.textContent = "Single string: " + result;
document.body.appendChild(paragraph);


// 13 Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// Create a new FIFO array
var fifoArray = [];

// Add values to the array
fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");

// Remove values from the array in FIFO order
var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var fourthValue = fifoArray.shift();


var paragraph = document.createElement("p");

var valuesString = "First value: " + firstValue + "<br>"
  + "Second value: " + secondValue + "<br>"
  + "Third value: " + thirdValue + "<br>"
  + "Fourth value: " + fourthValue;

paragraph.innerHTML = valuesString;
document.body.appendChild(paragraph);


// 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// Create a new LIFO array
var lifoArray = [];

// Add values to the array
lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("monitor");

var paragraph = document.createElement("p");

var fourthValue = lifoArray.pop();
var thirdValue = lifoArray.pop();
var secondValue = lifoArray.pop();
var firstValue = lifoArray.pop();

var valuesString = "First value: " + fourthValue + "<br>" +
                   "Second value: " + thirdValue + "<br>" +
                   "Third value: " + secondValue + "<br>" +
                   "Fourth value: " + firstValue;

paragraph.innerHTML = valuesString;

document.body.appendChild(paragraph);


// Array of phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create the select element
var selectElement = document.createElement("select");

// Add options for each manufacturer
for (var i = 0; i < manufacturers.length; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = manufacturers[i];
  optionElement.textContent = manufacturers[i];
  selectElement.appendChild(optionElement);
}

// Append the select element to the document body
document.body.appendChild(selectElement);
