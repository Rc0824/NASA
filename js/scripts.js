const onoffswitch = document.getElementById('myonoffswitch');
const gcseSearch = document.getElementsByClassName('google_search');

onoffswitch.addEventListener('change', function() {
  if (this.checked) {
    gcseSearch[0].style.display = "block";
    console.log("checked");
  } else {
    gcseSearch[0].style.display = "none";
    console.log("unchecked");
  }
});