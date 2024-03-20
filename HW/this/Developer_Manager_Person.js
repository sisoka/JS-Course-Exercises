// function Person (name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
//     };
// }

// function Developer(name, age, skillset){
//     Person.apply(this,[name, age]);
//     this.skillset = skillset;
// }

// function Manager (name, age, developers){
//     Person.apply(this,[name, age]);
//     this.developers = developers;
// }

// let developer1 = new Developer("Maria Popova", 23,["Python","Machine Learning"]);
// let developer2 = new Developer("Petar Petrov", 19, ["JavaScript","Angular","React","Vue"]);
// let manager = new Manager("Bill Gates", 43, [developer1, developer2]);

// developer1.greet();
// developer2.greet();
// manager.greet();
// // Hi, I'm Maria Popova and I'm 23 years old
// // Hi, I'm Petar Petrov and I'm 19 years old
// // Hi, I'm Bill Gates and I'm 43 years old



//TASK 2

function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
    };
}

function Developer(name, age, skillset){
    Person.apply(this,[name, age]);
    this.skillset = skillset;
    this.greet = function(){
        console.log(`I know ${this.skillset.join(',')}`)
    };
}

function Manager (name, age, developers){
    Person.apply(this,[name, age]);
    this.developers = developers;
    this.greet = function(){
        let devNames = this.developers.map(dev => dev.name).join(',');
        console.log(`I manage ${devNames}`);
    };
}

let developer1 = new Developer("Maria Popova", 23,["Python","Machine Learning"]);
let developer2 = new Developer("Petar Petrov", 19, ["JavaScript","Angular","React","Vue"]);
let manager = new Manager("Bill Gates", 43, [developer1, developer2]);

developer1.greet();
developer2.greet();
manager.greet();