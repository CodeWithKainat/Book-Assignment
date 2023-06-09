// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// Prompt the user for their favorite mobile phone model
let favoriteModel = prompt("Enter your favorite mobile phone model:");

// Calculate the length of the user input
let inputLength = favoriteModel.length;

// Display the length of the user input in the browser
document.write("My favourite phone is:" + favoriteModel + ("lenght of string:") + inputLength);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser 
let letter = "Pakistani";
let index = letter.indexOf("n");
document.write("<br>" + "The index of the letter 'n' in the word 'Pakistani' is: " + index);
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
let word = "Hello World";
let lastIndex = word.lastIndexOf("l");
document.write("<br>" + "The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex);
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let worrd = "Pakistani";
let character = worrd.charAt(3);
document.write("<br>" + "The character at the 3rd index in the word 'Pakistani' is: " + character);

// 6. Repeat Q1 using string concat() method. in javascript
// Prompt the user for their first name
let firrstName = prompt("Enter your first name:");

let lasstName = prompt("Enter your last name:");
let fuullName = firrstName.concat(" ", lasstName);

alert("Hello, " + fuullName + "! Welcome.");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
let wrd = "Hyderabad";
let replacedWord = wrd.replace("Hyder", "Islam");
document.write("<br>" + "After replacement: " + replacedWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let message = "Ali and Sami are best friends. They play cricket and football together.";
// /g for global search
let replacedMessage = message.replace(/and/g, "&");
document.write("<br>" + "After replacement: " + replacedMessage);
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
let str = "472";
let num = Number(str);
document.write("<br>" + "value" + str)
document.write("<br>" + "Type: " + typeof str);

document.write("<br>" + "Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>")
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput = prompt("Enter your input to convert in uppercase:");
let uppercaseInput = userInput.toUpperCase();
document.write("Converted to uppercase: " + uppercaseInput);

// 11.
// Write a program that takes user input. Convert and
// show the input in title case.
// Prompt the user for input

let usersInput = prompt("Enter your name:");

let words = usersInput.toLowerCase().split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let titleCaseInput = words.join(" ");
document.write("<br>" + "Converted to title case: " + titleCaseInput);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var numb = 35.36;
var numToString = num.toString().replace(".", "");
document.write("<br>" + "Result: " + numToString);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Prompt the user for a username

let username = prompt("Enter your username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  username = prompt("Please enter a valid username without these symbols [@ . , !]:");
}
document.write("<br>"+"Username without symbol: " + username);

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// Define the array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInfo = prompt("Enter an item you want to search:");

var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInfo.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let password = prompt("Enter a password:");

if (
  password.length < 6 ||    
  !/[a-zA-Z]/.test(password) ||              
  !/\d/.test(password) ||                       
  /^\d/.test(password)                         
) {
  password = prompt("Enter a valid password that contains alphabets and numbers,should not start with a number and at least 6 characters long. :");
}

document.write("Password: " + password +"<br>");

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

let university = "University of Karachi";
let characters = university.split("");
for (var i = 0; i < characters.length; i++) {
  document.write(characters[i] + "<br>");
}
// 17. Write a program to display the last character of a user
// input.

// Prompt the user for input
var usrInput = prompt("Enter your input todisplay last character:");

// Get the last character
var lastCharacter = usrInput.charAt(usrInput.length - 1);

// Display the last character
document.write("Last character of input is: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string
// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";

var lowercaseSentence = sentence.toLowerCase();

var wordi = lowercaseSentence.split(" ");

var count = 0;
for (var i = 0; i < wordi.length; i++) {
  if (wordi[i] === "the") {
    count++;
  }
}

document.write("<br>"+"Number of occurrences of 'the' in the above string is: " + count);
































