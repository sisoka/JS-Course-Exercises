// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

//Solution
// console.log(Object.keys(student).join(','));

// Sample Output: name,sclass,rollno

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// //Solution
// var {rollno, ...newStudent} = student;
// console.log(student);
// console.log(newStudent);

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// //Solution

// var length = Object.keys(student).length;
// console.log(length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];
// // Solution

// for (let i = 0; i < library.length; i++) {
//     const currentBook = library[i];
//     console.log(`Book ${i + 1}`);
//     console.log(Object.values(currentBook).join());
// }


// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
// Solution

// function Cylinder(height, radius) {
//     this.height = height;
//     this.radius = radius;
//     this.volume = function(){
//         return (Math.PI * Math.pow(radius, 2) * this.height).toFixed(4);
//     }
//   }

// const myCylinder = new Cylinder(7,3);

// console.log(myCylinder.volume());

// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
// Solution

// const array = [0,6,4,3,-2,1];
// const sortedArray = array;
// function swap (position1, position2, arr){
//     var temp = arr[position1];
//     arr[position1] = arr[position2];
//     arr[position2] = temp;
// }

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {        
//         if (array[j] > array[j+1]){
//             swap(j,j+1,array);      
//         }
//     }
// }

// console.log(array);
// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
// Click me to see the solution

// 8. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
// Solution
function logCurrentTime(){

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();        
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(logCurrentTime, 1000);

// 9. Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
// Click me to see the solution

// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
// Click me to see the solution

// 11. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
// Click me to see the solution

// 12. Write a JavaScript function to parse an URL.
// Click me to see the solution

// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
// Click me to see the solution

// 14. Write a JavaScript function to retrieve all the values of an object's properties.
// Click me to see the solution

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// Click me to see the solution

// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// Click me to see the solution

// 17. Write a JavaScript function to check whether an object contains a given property.
// Click me to see the solution

// 18. Write a JavaScript function to check whether a given value is a DOM element.
// Click me to see the solution