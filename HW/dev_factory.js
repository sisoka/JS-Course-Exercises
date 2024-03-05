"use strict";
let devFactory = function (name, salary) {
    // YOUR CODE HERE
    let _salary = salary;
    const developer = {
        name: name,
        getSalary() {
            return _salary;
        },
        increaseSalary(incrValue, pass){
            if (pass == 'abracadabra'){
                _salary += incrValue;
                return _salary;
            }
            else{
                console.log(`Wrong password! ${this.name} salary will not be increased!`);
            }
        }
    };

    return developer;
}

let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);

// *** OUTPUT ***
// Peter salary is 1000
// Maria salary is 1200

// Wrong password! Maria salary will not be increased!