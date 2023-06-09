// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    return Math.pow(a, b);
  }
  
  let base = parseFloat(prompt("Enter the base value:"));
  let exponent = parseFloat(prompt("Enter the exponent value:"));
  
  let result = power(base, exponent);
  console.log(result);
  
//   2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020,

function isLeapYear(year) {
    let isLeap = false;
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      isLeap = true;
    }
  
    return isLeap;
  }
  
  let inputYear = parseInt(prompt("Enter a year:"));
  
  let isLeap = isLeapYear(inputYear);
  console.log(isLeap);
  
//   3. If the lengths of the sides of a triangle are denoted by a, b, and
//   c, then area of triangle is given by
//   area = S(S − a)(S − b)(S − c)
//   where, S = ( a + b + c ) / 2

function calculateArea(a, b, c) {
    let s = calculateSemiPerimeter(a, b, c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
  function calculateSemiPerimeter(a, b, c) {
    let s = (a + b + c) / 2;
    return s;
  }
  
  // Get input from the user
  let sideA = parseInt(prompt("Enter the length of side A:"));
  let sideB = parseInt(prompt("Enter the length of side B:"));
  let sideC = parseInt(prompt("Enter the length of side C:"));
  
  // Calculate and display the area of the triangle
  let triangleArea = calculateArea(sideA, sideB, sideC);
  console.log("Triangle area"+triangleArea);
  

//   4. Write a function that receives marks received by a student in 3
//   subjects and returns the average and percentage of these
//   marks. there should be 3 functions one is the mainFunction
//   and other are for average and percentage. Call those functions
//   from mainFunction and display result in mainFunction.

function calculateAverageAndPercentage() {
    const subject1Marks = parseInt(prompt("Enter marks for subject 1:"));
    const subject2Marks = parseInt(prompt("Enter marks for subject 2:"));
    const subject3Marks = parseInt(prompt("Enter marks for subject 3:"));
  
    const totalMarks = subject1Marks + subject2Marks + subject3Marks;
    const averageMarks = totalMarks / 3;
    const percentageMarks = (totalMarks / 300) * 100;
  
    console.log("Average Marks:", averageMarks);
    console.log("Percentage:", percentageMarks, "%");
  }
  
  // Call the function to calculate and display the result
  calculateAverageAndPercentage();
  

//   5. You have learned the function indexOf. Code your own custom
//   function that will perform the same functionality. You can code
//   for single character as of now.

function customIndexOf(string, searchChar) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === searchChar) {
        return i;
      }
    }
    return -1;
  }

  const str = "Hello, world!";
  const char = "o";
  const index = customIndexOf(str, char);
  console.log(index); 

//   6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function removeVowels(sentence) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result1 = "";
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      if (!vowels.includes(char)) {
        result1 += sentence[i];
      }
    }
  
    return result1;
  }
  
  // Example usage:
  const sentence = prompt("write sentence to remove vowels.");
  const result1 = removeVowels(sentence);
  console.log(result1); 


//   7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function countSuccessiveVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    text = text.toLowerCase();
  
    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i];
      const nextChar = text[i + 1];
  
      switch (currentChar) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          if (vowels.includes(nextChar)) {
            count++;
          }
          break;
      }
    }
  
    return count;
  }
  
  const sentence1 = prompt("Write sentence for counting vowels","Pleases read this application and give me gratuity")
  const result2 = countSuccessiveVowels(sentence1);
  console.log(result2); 
  
  // 8. The distance between two cities (in km.) is input through the
  // keyboard. Write four functions to convert and print this
  // distance in meters, feet, inches and centimeters in javascript

  function convertToMeters(kilometers) {
    return kilometers * 1000;
  }
  
  function convertToFeet(kilometers) {
    return kilometers * 3280.84;
  }
  
  function convertToInches(kilometers) {
    return kilometers * 39370.1;
  }
  
  function convertToCentimeters(kilometers) {
    return kilometers * 100000;
  }
  
  function printDistanceConversions(kilometers) {
    const meters = convertToMeters(kilometers);
    const feet = convertToFeet(kilometers);
    const inches = convertToInches(kilometers);
    const centimeters = convertToCentimeters(kilometers);
  
    console.log("Distance in meters:", meters);
    console.log("Distance in feet:", feet);
    console.log("Distance in inches:", inches);
    console.log("Distance in centimeters:", centimeters);
  }
  
  // example
  const distanceInKilometers = parseFloat(prompt("Enter distance between two cities in kilometers:"));
  printDistanceConversions(distanceInKilometers);
  
  // 9. Write a program to calculate overtime pay of employees.
  // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
  // worked above 40 hours. Assume that employees do not work
  // for fractional part of an hour.
  
  function calculateOvertimePay(hoursWorked) {
    const standardHours = 40;
    const overtimeRate = 12.00;
  
    if (hoursWorked <= standardHours) {
      return 0;
    } else {
      const overtimeHours = hoursWorked - standardHours; 
      const overtimePay = overtimeHours * overtimeRate; 
      return overtimePay;
    }
  }
  
  const hours = parseFloat(prompt("Enter the number of hours worked:"));
  const overtimePay = calculateOvertimePay(hours);
  console.log("Overtime Pay:", overtimePay);
  
  // 10. A cashier has currency notes of denominations 10, 50 and
  // 100. If the amount to be withdrawn is input through the
  // keyboard in hundreds, find the total number of currency notes
  // of each denomination the cashier will have to give to the
  // withdrawer.

  function calculateCurrencyNotes(amount) {
    const denomination100 = 100; 
    const denomination50 = 50; 
    const denomination10 = 10; 
  
    let notes100 = 0;
    let notes50 = 0; 
    let notes10 = 0; 
  
    if (amount >= denomination100) {
      notes100 = Math.floor(amount / denomination100); 
      amount %= denomination100; 
    }
  
    if (amount >= denomination50) {
      notes50 = Math.floor(amount / denomination50); 
      amount %= denomination50; 
    }
  
    if (amount >= denomination10) {
      notes10 = Math.floor(amount / denomination10);
      amount %= denomination10;
    }
  
    return {
      notes100,
      notes50,
      notes10
    };
  }
  
  const amount = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  const currencyNotes = calculateCurrencyNotes(amount);
  console.log("Number of 100 rupee notes:", currencyNotes.notes100);
  console.log("Number of 50 rupee notes:", currencyNotes.notes50);
  console.log("Number of 10 rupee notes:", currencyNotes.notes10);
  
















