// 1. Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime() {
    let currentDate = new Date();
    let datetimeElement = document.getElementById("datetime");
    
    // Format the date and time
    let options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' 
    };
    let formattedDateTime = currentDate.toLocaleDateString(undefined, options);
    
    // Display the formatted date and time
    datetimeElement.innerText = formattedDateTime;
  }
  
  displayCurrentDateTime();

  
//   2. Write a function that takes first & last name and then it
// greets the user using his full name

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "! Welcome!");
  }
  
  // Example usage
  greetUser("John", "Doe");
  
//   3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addNumbers() {
    let num1 = parseFloat(prompt("first number:"));
    let num2 = parseFloat(prompt("second number:"));
    
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers.";
    }
    
    let sum = num1 + num2;
    return sum;
  }
  
  let result = addNumbers();
  document.write("<br>"+"The sum is: " + result);


//   4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser  in javascript

function calculate(num1, num2, operator) {
    let result;
  
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    } else {
      return "Invalid operator. Please enter a valid operator: +, -, *, /";
    }
  
    document.write("<br>"+"Result: " + result);
  }
  
  calculate(5, 3, '+');
  
//   5. Write a function that squares its argument.

  function square(number) {
    return number * number;
  }
  
  console.log(square(5)); 
  console.log(square(8)); 
  console.log(square(-3));
  

//   6. Write a function that computes factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  console.log(factorial(5));
  console.log(factorial(8)); 
  console.log(factorial(0)); 
  
//   7. Write a function that take start and end number as inputs
//   & display counting in your browser.

function count(start, end) {
    if (start > end) {
      document.write("Invalid range. Start number should be less than or equal to the end number.");
      return;
    }
  
    for (let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  count(1, 5);

//   8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Page 1 of 4function | JAVASCRIPT
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
      return number * number;
    }
  
    let baseSquared = calculateSquare(base);
    let perpendicularSquared = calculateSquare(perpendicular);
    let hypotenuseSquared = baseSquared + perpendicularSquared;
    let hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
  }
  
  // Example usage
  let result1 = calculateHypotenuse(3, 4);
  console.log(result1); // Output: 5
  

//   9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculateRectangleArea() {
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    let height = parseFloat(prompt("Enter the height of the rectangle:"));
  
    if (isNaN(width) || isNaN(height)) {
      return "Invalid input";
    }
  
    let area = width * height;
    return area;
  }
  
  let resultt = calculateRectangleArea();
  document.write("area of a rectangle"+resultt); 
  
//   10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Reverse the formatted string
  let reversedStr = formattedStr.split('').reverse().join('');
  
  // Check if the formatted string and reversed string are equal
  return formattedStr === reversedStr;
}

// Example usage
let word = "madam";
console.log(isPalindrome(word)); // Output: true

let phrase = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(phrase)); // Output: true

let notPalindrome = "hello";
console.log(isPalindrome(notPalindrome)); // Output: false

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


function capitalizeFirstLetter(str) {
  let words = str.split(' ');

  let capitalizedWords = words.map(word => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  });

  let capitalizedStr = capitalizedWords.join(' ');

  return capitalizedStr;
}

// Example usage
let inputStr = prompt("Write text that you want to convert in uppercase");
console.log(capitalizeFirstLetter(inputStr)); // Output: 'The Quick Brown Fox'
 
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {

  const words = str.split(' ');

  let longestWord = '';

  words.forEach(word => {
  
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// Example usage
let inputString = prompt("enter the text to find the longest word");
console.log(findLongestWord(inputStr)); // Output: 'Development'


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  return count;
}

let inputStrig = 'JSResourceS.com';
let inputLetter = 'o';
console.log(countLetterOccurrences(inputStrig, inputLetter));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// •
// •
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// •
// •
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle =2πr
// Area of circleπr2
// =
function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
  const area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}

const radius = 5;
calcCircumference(radius);
calcArea(radius); 





















  

























