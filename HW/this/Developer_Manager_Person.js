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
}

function Manager (name, age, developers){
    Person.apply(this,[name, age]);
    this.developers = developers;
}

let person = new Person("Maria Popova", 23);
let developer = new Developer("Petar Petrov", 19, ["team player", "responsible"]);
let manager = new Manager("Bill Gates", 43, [developer]);

person.greet();
developer.greet();
manager.greet();
// Hi, I'm Maria Popova and I'm 23 years old
// Hi, I'm Petar Petrov and I'm 19 years old
// Hi, I'm Bill Gates and I'm 43 years old