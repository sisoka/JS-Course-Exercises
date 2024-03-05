// ---------------------------------- Task 1 ---------------------------------- //
/* DESCRIPTION:
   Write a function that creates and returns an object with methods that
   operate on a private variable (count, initially set to 0)
*/

// YOUR CODE HERE
// function createCounter(){
//     let initialValue = 0;
//     let counter = {
//         getCount : function (){
//             return initialValue;
//         },
//         increment : function (){
//             initialValue = initialValue + 1;
//         },
//         decrement : function (){
//             initialValue = initialValue - 1;
//         },
//     }
//     return counter;
// }

// // TEST
// const counter = createCounter();
// console.log(counter.getCount()); // Expected output: 0
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount()); // Expected output: 1


// ---------------------------------- Task 2 ---------------------------------- //
/* DESCRIPTION:
   Create a function named 'calculateTotalPrice' that calculates the total price of items in a shopping cart.
   Each item in the cart is represented as an object with 'name' and 'price' properties.
   The function should take an array of items as input and return the total price.
*/

// YOUR CODE HERE

// function calculateTotalPrice(shoppingCart){
//     let sumOfPrices = 0;
//     for (let i = 0; i < shoppingCart.length; i++) {
//         const item = shoppingCart[i];
//         sumOfPrices = sumOfPrices + item.price;
//     }

//     return sumOfPrices;
// }
// TEST
// const shoppingCart = [
//     { name: "T-shirt", price: 20 },
//     { name: "Jeans", price: 50 },
//     { name: "Shoes", price: 80 }
// ];
// console.log(calculateTotalPrice(shoppingCart)); // Expected output: 150


// ---------------------------------- Task 3 ---------------------------------- //
/* DESCRIPTION:
   Create a function named 'createStudent' that returns an object representing a student.
   The object should have properties for 'name', 'age', and 'grades',
   where 'grades' is an array of numbers.
   Additionally, the object should have a method named 'calculateAverageGrade'
   that calculates and returns the average grade of the student.
*/

// YOUR CODE HERE

// function createStudent(name, age, grades){
//     let student = {
//         name : name,
//         age  : age,
//         grades : grades,
//         calculateAverageGrade : function(){
//             let sum = 0;
//             for (let i = 0; i < grades.length; i++) {
//                 const currentGrade = grades[i];
//                 sum = sum + currentGrade;
//             }
//             if (grades.length > 0){
//                 return sum / grades.length;
//             }
//             else{
//                 return 0;
//             }
//         }
//     }
//     return student;
// }

// // TEST
// const student1 = createStudent("John", 20, [80, 85, 90]);
// console.log(student1.calculateAverageGrade()); // Expected output: 85



// ---------------------------------- Task 4 ---------------------------------- //
/* DESCRIPTION:
   Implement a function named 'memoize' that takes a function with a single
   argument as input and returns a memoized version of that function.

   The memoized function should internally maintain a cache, typically an object,
   to store the results of previous function calls mapped to their input arguments.
   When invoked with a new argument, the memoized function first checks if the result
   for that argument exists in the cache. If found, it returns the cached result
   without invoking the original function. If not found, the original function is called
   with the argument, and its result is stored in the cache before being returned.

   To implement memoization, the memoized function can use closure to create and update
   the cache, ensuring its persistence between function calls. The argument passed
   to the memoized function serves as the key for accessing and storing values in the cache.

   This optimization technique enhances the performance of functions with deterministic behavior
   and is particularly useful for scenarios where the same function is repeatedly called
   with identical arguments, such as recursive algorithms or dynamic programming solutions.
*/


// YOUR CODE HERE

function memoize(f){
   const cache = {};

   function wrapper(x){
      if(cache[x]){
         return cache[x]
      }
      else{
         let result = f(x)
         cache[x] = result;
         return result;
      }
   };
   
   return wrapper;
}

// TEST
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);
console.time('first');
console.log(memoizedFibonacci(10)); // Expected output: 55
console.timeEnd('first');

console.time('second');
console.log(memoizedFibonacci(10)); // Expected output: 55 (calculated efficiently with memoization)
console.timeEnd('second');