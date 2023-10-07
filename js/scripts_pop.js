// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sumbitButton");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// Get the text in the input box
var content = document.getElementById("email");

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("sumbitButton");
  btn.onclick = function() {
      modal.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
// change the placeholder text back
span.onclick = function() {
  modal.style.display = "none";
  content.placeholder = "Anything want to search?";
  content.classList.remove("red-placeholder");
  content.style.fontWeight = 400;
}

// When the user clicks anywhere outside of the modal, close it
// change the placeholder text back 

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     content.placeholder = "Anything want to search?";
//     content.classList.remove("red-placeholder");
//     content.style.fontWeight = 400;
//   }
// }


// Get the modal
var modal = document.getElementById("myModal");
var scrollableContent = modal.querySelector(".modal-dialog-scrollable");

// calculate maximum height
var windowHeight = window.innerHeight;
var maxContentHeight = windowHeight * 0.7;

// set maximum height to modal body
scrollableContent.style.maxHeight = maxContentHeight + "px";