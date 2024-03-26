// // /* -------------------------------- TASK 1 -------------------------------- */ filter words starting wit T letter
// const text = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."

// console.log(text.split(' ').filter(word => word.startsWith('t') && word.length > 2));


// // /* -------------------------------- TASK 2 -------------------------------- */: Sum of squares of even numbers

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// let initialValue = 0;
// let sum = numbers.reduce((acc,el)=>{
//     if (el % 2==0){
//         return acc + el**2;
//     }
//     return acc;
// },initialValue);

// console.log(sum);

// TASK 3 calculate product prices

// Given is next Array of Objects:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------------------------------------------------------- */
/*                                   TASK3:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPrice function, so that it will return the sum of all
// products price
// function calcTotalPrice(products) {

// 	let sum = products.reduce((acc, el)=>{
//         return acc + el.price;
//     },0);

//     return sum;
// }

// // TEST
// let totalPrice = calcTotalPrice(products)
// console.log(totalPrice);

// EXPECTED OUTPUT:
// 10


/* -------------------------------------------------------------------------- */
/*                                   TASK4:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPriceByCategory function, so that it will return the
// price sum of all products matching the given catgory

// function calcTotalPriceByCategory(products, category) {
//     let initialValue = 0;
// 	let result = products.filter(x => x.category == category).reduce((acc,el)=>{
//         return acc + el.price;
//     }, initialValue);

//     return result;
// }

// // TEST
// let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
// console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5


/* -------------------------------- TASK 5 -------------------------------- */
// Given is an array of objects: todos.
// Your task is to create a new array of objects: newTodos, which maps the values of todos so that a todo.completed value is inverted 
//for given todoID
// Make sure, that the original todos array is not changed!

const todos = [
    {
      "title": "Lean HMTL",
      "completed": true,
      "id": 1
    },
    {
      "title": "Lean React",
      "completed": false,
      "id": 2
    }
];

const todoID = 2;

/* ----------------------------- YOUR CODE HERE ----------------------------- */

let jsonString = JSON.stringify(todos);

let newTodos = JSON.parse(jsonString);

newTodos.filter(x => x.id == todoID).map(x => x.completed = !x.completed);

/* ---------------------------------- TEST ---------------------------------- */
console.log(`Original todos:`, todos);
console.log(`New todos:`, newTodos);


/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// Original todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: false, id: 2 }
// ]
// New todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: true, id: 2 }
// ]





