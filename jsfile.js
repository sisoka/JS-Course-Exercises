// // function changeColor (element, updatedColor){
// //     element.style.color = updatedColor;
// // }

// var title = document.getElementById("h1");
// // var button = document.getElementById("myButton");


// // button.addEventListener("click", changeColor.bind(title,'red'));

// document.addEventListener("DOMContentLoaded", function() {
//     // Code to manipulate elements goes here
//     var button = document.querySelector("button");
//     button.addEventListener("click", function() {
//       title.style.color = 'red';
//     });
//   });


//   "use strict";

// function foo(x) {
//   function bar(x) {
//     let y = 2;
//     console.log(`Inner x: ${x}, Inner y: ${y}`);
//   }
//   bar(x);
//   console.log(`Outer x: ${x}`);
// }

// let x = 10; // Global variable
// foo(1);
// console.log(`Global x: ${x}`);

function foo(x){  
   x = 9;
   console.log(x);
}
let x = 1;
foo();