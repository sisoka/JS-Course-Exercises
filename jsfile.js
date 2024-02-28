// function changeColor (element, updatedColor){
//     element.style.color = updatedColor;
// }

var title = document.getElementById("h1");
// var button = document.getElementById("myButton");


// button.addEventListener("click", changeColor.bind(title,'red'));

document.addEventListener("DOMContentLoaded", function() {
    // Code to manipulate elements goes here
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
      title.style.color = 'red';
    });
  });