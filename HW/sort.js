// //TASK 1
// // Given is an array of users: users = ["Maria", "Ada", "Ivan"];
// // Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted (in ascending order) elements of users array.

// users = ["Maria", "Ada", "Ivan"];

// /* -------------------------- YOUR CODE STARTS HERE ------------------------- */

// let usersSortedAlphabetically = [...users].sort();

// /* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// // TEST CASE (do not modify):
// console.log(`users:\n\t${users}\n`);
// console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`);

// /* -------------------------------------------------------------------------- */
// /*                              EXPECTED OUTPUT:                              */
// /* -------------------------------------------------------------------------- */
// // users:
// //  Maria,Ada,Ivan
// //
// // usersSortedAlphabetically:
// //  Ada,Ivan,Maria


//TASK 2
// Given is an array of todos objects:
const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */



function sortArrayByKey(todos, key){

    function compareFunction(a,b){
        if (a[key] < b[key]){
            return -1;
        }
        else if(a[key] > b[key]){
            return 1;
        }
        return 0;
    }

    return [...todos].sort(compareFunction);
}


/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log( sortArrayByKey(todos, 'priority'))

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]

