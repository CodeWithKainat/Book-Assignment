// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

function characterType(character) {
    var ascii = character.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        console.log("Input is a number.");
    } else if (ascii >= 65 && ascii <= 90) {
        console.log("Input is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        console.log("Input is a lowercase letter.");
    } else {
        console.log("Input is not a number or letter.");
    }
}

var input = prompt("Enter a character:");
characterType(input);

//         2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var firstNumber = parseInt(prompt("Enter the first number:"));
var secondNumber = parseInt(prompt("Enter the second number:"));

if (firstNumber > secondNumber) {
console.log("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
console.log("The larger number is: " + secondNumber);
} else {
console.log("Both numbers are equal.");
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = parseInt(prompt("Enter a number:"));

if (number > 0) {
console.log("The number is positive.");
} else if (number < 0) {
console.log("The number is negative.");
} else {
console.log("The number is zero.");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter a character:").toLowerCase();

var vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(character)) {
console.log("The character is a vowel.");
} else {
console.log("The character is not a vowel.");
}

// User
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.   in javascript

var correctPassword = "MySecretPassword";

var userPassword = prompt("Enter your password:");

if (userPassword === "") {
console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
console.log("Correct! The password you entered matches the original password.");
} else {
console.log("Incorrect password.");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// } 

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
} else {
greeting = "Good evening";
}


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
console.log("Good evening!");
} else if (time >= 2000 && time <= 2359) {
console.log("Good night!");
} else {
console.log("Invalid time format entered.");
}