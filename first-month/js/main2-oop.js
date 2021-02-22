// Constructer 
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dop = new Date(dob);

// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Instantiate object
// const person1 = new Person('Ameen' , 'Yasin' , '2-16-2020');

// console.log(person1.getBirthYear);


class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('Ameen' , 'Yasin' , '2-16-2020');

console.log(person1.getFullName());
console.log(person1.getBirthYear());
