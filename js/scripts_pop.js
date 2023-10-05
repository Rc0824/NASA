// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sumbitButton");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];

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
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// 获取模态框和滚动容器
var modal = document.getElementById("myModal");
var scrollableContent = modal.querySelector(".modal-dialog-scrollable");

// 计算视窗高度的80%
var windowHeight = window.innerHeight;
var maxContentHeight = windowHeight * 0.7;

// 设置滚动容器的max-height
scrollableContent.style.maxHeight = maxContentHeight + "px";