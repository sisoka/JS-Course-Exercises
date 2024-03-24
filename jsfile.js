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

// function foo(x){  
//    x = 9;
//    console.log(x);
// }
// let x = 1;
// foo();

// const Person = function(name){
//    this.name = name;
 
//    this.greet = function(name){
//      console.log(`Hi ${name}, I'm ${this.name}`)
//    };
 
//    this.greetArr = name=>{
//      console.log(`Hi ${name}, I'm ${this.name}`)
//    };
//  }
 
//  const pesho = new Person('Pesho');
//  const friends = ['George', 'Ana'];
 
//  friends.forEach(name => pesho.greet.apply(pesho, [name]))
//  friends.forEach(pesho.greetArr)

// let arr = [1,2,3];
// let str = 'abc';

// console.log( [...arr, 9] );       // [1, 2, 3, 9]
// console.log( [9, ...arr] );       // [9, 1, 2, 3]
// console.log( [...arr, ...str] );


// function foo(a, b, ...args){
//    // a = 1, b = 2, args = [3,4,5]
//    console.log(args); //"3, 4, 5"
//  }
//  foo(1, 2, 3, 4, 5);

// let obj = {'a':1,'b':2,'c':3}

// // 'c' will go into c, and the rest of obj into obj2
// let {c,...obj2} = obj

// console.log(c);
// console.log(obj2);