    // Image Modal
    function openModal(image) {
        var modal = document.getElementById('image-modal');
        var modalImage = document.getElementById('modal-image');
        modalImage.src = image.src;
        modal.style.display = 'block';
      }
  
      function closeModal() {
        var modal = document.getElementById('image-modal');
        modal.style.display = 'none';
      }
  
      // Zoom Paragraph
      var zoomParagraph = document.getElementById('zoom-paragraph');
  
      function zoomIn() {
        var fontSize = parseInt(zoomParagraph.style.fontSize) || 16;
        fontSize += 10;
        zoomParagraph.style.fontSize = fontSize + 'px';
      }
  
      function zoomOut() {
        var fontSize = parseInt(zoomParagraph.style.fontSize) || 16;
        fontSize -= 10;
        zoomParagraph.style.fontSize = fontSize + 'px';
      }


// assignment 58-67

// task1
//       Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// 1.
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// Get element of id "main-content" and assign them in a variable.
var mainContent = document.getElementById("main-content");

// Display all child elements of "main-content" element.
console.log("Child elements of main-content:");
console.log(mainContent.children);

// Get all elements of class "render" and show their innerHTML in the browser.
var renderElements = document.getElementsByClassName("render");
console.log("Inner HTML of elements with class 'render':");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// Fill input value whose element id is first-name using JavaScript.
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";

// Repeat for id "last-name" and "email".
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Doe";

var emailInput = document.getElementById("email");
emailInput.value = "johndoe@example.com";


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

 var formContent = document.getElementById("form-content");
 console.log("Node type of element with id 'form-content': " + formContent.nodeType);

 var lastName = document.getElementById("lastName");
 console.log("Node type of element with id 'lastName': " + lastName.nodeType);
 console.log("Node type of its child node: " + lastName.firstChild.nodeType);

 lastName.firstChild.nodeValue = "Last Name: Smith";

 var mainContent = document.getElementById("main-content");
 var firstChild = mainContent.firstElementChild;
 var lastChild = mainContent.lastElementChild;
 console.log("First child of id 'main-content': " + firstChild.textContent);
 console.log("Last child of id 'main-content': " + lastChild.textContent);

 var nextSibling = lastName.nextElementSibling;
 var previousSibling = lastName.previousElementSibling;
 console.log("Next sibling of id 'lastName': " + nextSibling.textContent);
 console.log("Previous sibling of id 'lastName': " + previousSibling.textContent);

 var email = document.getElementById("email");
 var parentNode = email.parentNode;
 console.log("Parent node of element with id 'email': " + parentNode.tagName);
 console.log("Node type of element with id 'email': " + email.nodeType);