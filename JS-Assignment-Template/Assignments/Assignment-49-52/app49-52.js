// 1. Create a signup form and display form data in your web
// page on submission.

function displayFormData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Display form data
    document.getElementById('result').innerHTML = `
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
  }
//   2. Suppose in your webpage there is content area in which
//   you have entered your item details, but user can only see
//   some details on first look. When user clicks on “Read
//   more” button, full detail of that particular item will be
//   displayed.


  function toggleDetails() {
    let details = document.getElementById('item-details');
    let readMoreBtn = document.getElementById('read-more-btn');

    if (details.style.display === 'none') {
      details.style.display = 'block';
      readMoreBtn.textContent = 'Read less';
    } else {
      details.style.display = 'none';
      readMoreBtn.textContent = 'Read more';
    }
  }


//   3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


var students = [];

function addStudent() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var gender = document.querySelector('input[name="gender"]:checked').value;

  var student = {
    name: name,
    age: age,
    gender: gender
  };

  students.push(student);

  displayStudents();

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
}

function displayStudents() {
  var tableBody = document.getElementById('student-table-body');
  tableBody.innerHTML = '';

  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    var ageCell = document.createElement('td');
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    var genderCell = document.createElement('td');
    genderCell.textContent = student.gender;
    row.appendChild(genderCell);

    var editCell = document.createElement('td');
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.dataset.index = i;
    editButton.addEventListener('click', showEditForm);
    editCell.appendChild(editButton);
    row.appendChild(editCell);

    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.index = i;
    deleteButton.addEventListener('click', deleteStudent);
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  }
}

function deleteStudent(event) {
  var index = event.target.dataset.index;
  students.splice(index, 1);
  displayStudents();
}

function showEditForm(event) {
  var index = event.target.dataset.index;
  var student = students[index];

  document.getElementById('edit-name').value = student.name;
  document.getElementById('edit-age').value = student.age;
  document.querySelector('input[name="edit-gender"][value="' + student.gender + '"]').checked = true;

  document.getElementById('hidden-form').style.display = 'block';
}

function saveEditedStudent() {
  var name = document.getElementById('edit-name').value;
  var age = document.getElementById('edit-age').value;
  var gender = document.querySelector('input[name="edit-gender"]:checked').value;

  var index = document.getElementById('edit-index').value;
  students[index].name = name;
  students[index].age = age;
  students[index].gender = gender;

  displayStudents();

  document.getElementById('hidden-form').style.display = 'none';
}
