// 1. Show an alert box on click on a link.

function showAlert() {
    alert("Link clicked!");
  }

//   2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showAlert(message) {
    alert(message);
  }

//   3. Display 10 student records in table and each row should contain a delete
//   button. If you click on a button to delete a record, entire row should be
//   deleted.

  function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var rowData = getRowData(row);

    console.log("Before deletion: ");
    console.log(rowData);

    row.parentNode.removeChild(row);

    console.log("After deletion: ");
    console.log(rowData);
  }

  function getRowData(row) {
    var rowData = [];

    for (var i = 0; i < row.cells.length - 1; i++) {
      rowData.push(row.cells[i].innerHTML);
    }

    return rowData;
  }

//   4. Display an image in browser. Change the picture on mouseover and set the
// //   first picture on mouseout.

function changeImage(imagePath) {
    var image = document.getElementById("myImage");
    image.src = imagePath;
  }
  
  
  //   5. Show a counter in browser. Counter should increase on click on increase
  //   button and decrease on click on decrease button. And show updated counter
  //   value in browser.



  var counter = 0;
  var counterValueElement = document.getElementById("counterValue");

  function increaseCounter() {
    counter++;
    counterValueElement.textContent = counter;
  }

  function decreaseCounter() {
    if (counter > 0) {
      counter--;
      counterValueElement.textContent = counter;
    }
  }













