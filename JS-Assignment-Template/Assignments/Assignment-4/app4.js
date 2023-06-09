    // 1. Declare 3 variables in one statement.
    let variable1, variable2, variable3; 
    //    2. Declare 5 legal & 5 illegal variable names.
     legalVariablenames:
    1. `myVariable`
    2. `userName`
    3. `num1`
    4. `_privateVar`
    5. `$money`
     
    illegalVariablenames:
    1. `123variable` 
    2. `my-variable`
    3. `var` 
    4. `function`
    5. `true` 
    
    // 3. Display this in your browser
    // a) A heading stating “Rules for naming JS variables”
    // b) Variable names can only contain ______, ______,
    // ______ and ______.
    // For example $my_1stVariable
    // c) Variables must begin with a ______, ______ or
    // _____. For example $name, _name or name
    // d) Variable names are case _________
    // e) Variable names should not be JS _________
    
    
    
    
    
        // Create heading element
        var heading = document.createElement("h1");
        heading.textContent = "Rules for naming JS variables";
        document.body.appendChild(heading);
    
        // Create paragraph elements
        var paragraph1 = document.createElement("p");
        paragraph1.textContent = "Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable";
        document.body.appendChild(paragraph1);
    
        var paragraph2 = document.createElement("p");
        paragraph2.textContent = "Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name";
        document.body.appendChild(paragraph2);
    
        var paragraph3 = document.createElement("p");
        paragraph3.textContent = "Variable names are case-sensitive";
        document.body.appendChild(paragraph3);
    
        var paragraph4 = document.createElement("p");
        paragraph4.textContent = "Variable names should not be JS reserved keywords";
        document.body.appendChild(paragraph4);
