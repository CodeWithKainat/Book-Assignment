 // 1. Write a program that take two numbers & add them in a
        // new variable. Show the result in your browser.
        // Define the two numbers
        var number1 = 5;
        var number2 = 10;

        var number1 = parseFloat(prompt("Enter the first number:"));

        var number2 = parseFloat(prompt("Enter the second number:"));

        var sum = number1 + number2;

        document.write("The sum of " + number1 + " and " + number2 + " is " + sum + ".");

        // 2. Repeat task1 for subtraction, multiplication, division &
        // modulus.



        var number1 = 10;
        var number2 = 5;

        var subtraction = number1 - number2;


        var multiplication = number1 * number2;


        var division = number1 / number2;


        var modulus = number1 % number2;

        document.write("Subtraction: " + number1 + " - " + number2 + " = " + subtraction + "<br>");
        document.write("Multiplication: " + number1 + " * " + number2 + " = " + multiplication + "<br>");
        document.write("Division: " + number1 + " / " + number2 + " = " + division + "<br>");
        document.write("Modulus: " + number1 + " % " + number2 + " = " + modulus + "<br>");


        // 3. Do the following using JS Mathematic Expressions
        // a. Declare a variable.
        // b. Show the value of variable in your browser like “Value
        // after variable declaration is: ??”.
        // c. Initialize the variable with some number.
        // d. Show the value of variable in your browser like “Initial
        // value: 5”.
        // e. Increment the variable.
        // f. Show the value of variable in your browser like “Value
        // after increment is: 6”.
        // g. Add 7 to the variable.
        // h. Show the value of variable in your browser like “Value
        // Page 1 of 9MATH EXPRESSIONS | JAVASCRIPT
        // after addition is: 13”.
        // i. Decrement the variable.
        // j. Show the value of variable in your browser like “Value
        // after decrement is: 12”.
        // k. Show the remainder after dividing the variable’s value
        // by 3.
        // l. Output : “The remainder is : 0”.


        var num;

        document.write("Value after variable declaration is: " + num + "<br>");

        num = 5;

        document.write("Initial value: " + num + "<br>");

        num++;

        document.write("Value after increment is: " + num + "<br>");

        num += 7;

        document.write("Value after addition is: " + num + "<br>");

        num--;

        document.write("Value after decrement is: " + num + "<br>");

        var remainder = num % 3;

        document.write("The remainder is: " + remainder);

        // 4. Cost of one movie ticket is 600 PKR. Write a script to
        // store
        // ticket price in a variable & calculate the cost of buying 5
        // tickets
        // to a movie. Example output:

        var ticketPrice = 600;

        var totalCost = ticketPrice * 5;

        document.write("The cost of buying 5 tickets is " + totalCost + " PKR.");


        // 5. Write a script to display multiplication table of any
        // number in your browser. E.g

        var number = parseInt(prompt("Enter a number to display its multiplication table:"));


        document.write("<h2>Multiplication Table of " + number + "</h2>");
        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            document.write(number + " x " + i + " = " + result + "<br>");
        }

        // 6. The Temperature Converter: It’s hot out! Let’s make a
        // converter based on the steps here.
        // a. Store a Celsius temperature into a variable.
        // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
        // c. Now store a Fahrenheit temperature into a variable.
        // d. Convert it to Celsius & output “NNoF is NNoC”.
        // Conversion Formulae:
        // Celsius to Fahrenheit conversion

        var celsiusTemp = 30;
        var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
        document.getElementById("result").innerHTML = celsiusTemp + "°C is " + fahrenheitTemp + "°F.<br>";

        // Fahrenheit to Celsius conversion
        var fahrenheitTemp2 = 86;
        var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
        document.getElementById("result").innerHTML += fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C.";


        // 7. Write a program to implement checkout process of a
        // shopping cart system for an e-commerce website. Store
        // the following in variables
        // Page 4 of 9MATH EXPRESSIONS | JAVASCRIPT
        // a. Price of item 1
        // b. Price of item 2
        // c. Ordered quantity of item 1
        // d. Ordered Quantity of item 2
        // e. Shipping charges
        // Compute the total cost & show the receipt in your browser.

        // Store the price and quantity of items
        var item1Price = 500;
        var item2Price = 800;
        var item1Quantity = 2;
        var item2Quantity = 3;

        // Store the shipping charges
        var shippingCharges = 100;

        // Calculate the total cost
        var item1Cost = item1Price * item1Quantity;
        var item2Cost = item2Price * item2Quantity;
        var totalCost = item1Cost + item2Cost + shippingCharges;

        // Display the receipt in the browser
        document.write("<h2>shopping cart</h2>");
        document.write("Item 1 Price: " + item1Price + " PKR<br>");
        document.write("Item 1 Quantity: " + item1Quantity + "<br>");
        document.write("Item 1 Cost: " + item1Cost + " PKR<br>");
        document.write("<br>");
        document.write("Item 2 Price: " + item2Price + " PKR<br>");
        document.write("Item 2 Quantity: " + item2Quantity + "<br>");
        document.write("Item 2 Cost: " + item2Cost + " PKR<br>");
        document.write("<br>");
        document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
        document.write("<br>");
        document.write("Total Cost: " + totalCost + " PKR");

        // 8. Store total marks & marks obtained by a student in 2
        // variables. Compute the percentage & show the result in
        // your browser

        var totalMarks = 980;
        var marksObtained = 804;


        var percentage = (marksObtained / totalMarks) * 100;

        document.write("<h2>mark sheet</h2>");
        document.write("Total Marks: " + totalMarks + "<br>");
        document.write("Marks Obtained: " + marksObtained + "<br>");
        document.write("Percentage: " + percentage + "%");

        // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
        // script to convert the total currency to Pakistani Rupees.
        // Perform all calculations in a single expression.
        // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
        // and 1 Saudi Riyal = 28 Pakistani Rupee)
        // Conversion rates
        var usdToPkrRate = 104.80;
        var sarToPkrRate = 28;

        // Total currency
        var usdAmount = 10;
        var sarAmount = 25;

        // Convert to Pakistani Rupees
        var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

        // Display the result in the browser
        document.write("<h2>Currency In PKR</h2>");
        document.write("Total US Dollars: " + usdAmount + "<br>");
        document.write("Total Saudi Riyals: " + sarAmount + "<br>");
        document.write("Total Pakistani Rupees: " + totalPkr);

        // 10. Write a program to initialize a variable with some
        // number and do arithmetic in following sequence:
        // a. Add 5
        // b. Multiply by 10
        // c. Divide the result by 2
        // Perform all calculations in a single expression
        // Initialize the variable
        var number = 10;

        var result = ((number + 5) * 10) / 2;

        document.write("<h2>Arithmetic Operations</h2>");
        document.write("Initial Number: " + number + "<br>");
        document.write("Result: " + result);

        // 11. The Age Calculator: Forgot how old someone is?
        // Calculate it!
        // a. Store the current year in a variable.
        // b. Store their birth year in a variable.
        // c. Calculate their 2 possible ages based on the stored
        // values.
        // Output them to the screen like so: “They are either NN or NN
        // years old”.
        // Store the current year and birth year

        var currentYear = new Date().getFullYear();
        var birthYear = 2002; // Assuming the birth year is 1990

        // Calculate the two possible ages
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;

        // Display the ages on the screen
        document.write("<h2>Age Calculator</h2>");
        document.write("Current Year: " + currentYear + "<br>");
        document.write("Birth Year: " + birthYear + "<br>");
        document.write("They are either " + age1 + " or " + age2 + " years old.");

        // 12. The Geometrizer: Calculate properties of a circle.
        // a. Store a radius into a variable.
        // Page 7 of 9MATH EXPRESSIONS | JAVASCRIPT
        // b. Calculate the circumference based on the radius, and
        // output “The circumference is NN”.
        // (Hint : Circumference of a circle = 2 π r , π = 3.142)
        // Calculate the area based on the radius, and output “The
        // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

        // Store the radius of the circle
        var radius = 5; // Assuming the radius is 5

        // Calculate the circumference and area
        var circumference = 2 * Math.PI * radius;
        var area = Math.PI * Math.pow(radius, 2);

        // Display the results on the screen
        document.write("<h2>The Geometrizer</h2>");
        document.write("Radius: " + radius + "<br>");
        document.write("The circumference is " + circumference.toFixed(2) + "<br>");
        document.write("The area is " + area.toFixed(2));


        // 13. The Lifetime Supply Calculator: Ever wonder how
        // much a “lifetime supply” of your favorite snack is?
        // Wonder no more.
        // a. Store your favorite snack into a variable
        // b. Store your current age into a variable.
        // c. Store a maximum age into a variable.
        // d. Store an estimated amount per day (as a number).
        // e. Calculate how many would you eat total for the rest of
        // your life.
        // Output the result to the screen like so: “You will need
        // NNNN to last you until the ripe old age of NN”.


        // var favoriteSnack = "Chocolates";
        // var currentAge = 15;
        // var maximumAge = 65;
        // var amountPerDay = 3;
        // var remainingYears = maximumAge - currentAge;
        // var totalSnacks = remainingYears * 365 * amountPerDay;

        // var result = "You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".";
        // document.getElementById("resultTask13").innerHTML = result;
        // Step 1: Store your favorite snack into a variable
var favoriteSnack = "Chips";

// Step 2: Store your current age into a variable
var currentAge = 30;

// Step 3: Store a maximum age into a variable
var maximumAge = 80;

// Step 4: Store an estimated amount per day (as a number)
var snacksPerDay = 2;

// Step 5: Calculate how many snacks you would eat for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var snacksPerYear = snacksPerDay * 365;
var totalSnacks = snacksPerYear * yearsRemaining;

// Output the result to the screen
document.write("<h2>The lifetime supply caccolator</h2>");
document.write("<br>"+"favoriteSnack"+favoriteSnack+"<br>" +"currentAge" +currentAge +"<br>" +"maximumAge"+maximumAge+"<br>"+"snacksPerDay"+snacksPerDay)
document.write("You will need " + totalSnacks +"</br>"+ " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

