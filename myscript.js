
// Get the container element
var inputContainer = document.getElementById("text");
// Get all inputfields inside the container
let input = inputContainer.getElementsByClassName("input");


for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", function() {
    console.log("active");
    rocket.classList.add("start");
    // Add the active class to the current inputfield
    this.className += " active";
  })
  input[i].addEventListener('focusout',  function(ev, data) {
    let rocket = document.getElementById("rocket");
    var current = document.getElementsByClassName("active");
  // If there's no active class
  if (current.length > 0) { 
    current[0].className = current[0].className.replace("active", "notactive");
    rocket.classList.remove("start");
    console.log("no active class");
  }  
}
)}

