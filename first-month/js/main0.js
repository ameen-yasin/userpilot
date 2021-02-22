// let , const 
// string , numbers , null , boolean , unidetfied
let name = 'ameen';
console.log(typeof name)
let age = 22;
// this an old way
console.log('my name is ' + name + ' and i am ' + age);

// Template String
const hello = `my name is ${name} and i'm ${age}`;
console.log(hello);
console.log(hello.length);
console.log(hello.split(''));

// Arrays

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['orange', 'grape', 10, true]
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.push('Apple');
fruits.unshift('Mango');
console.log(Array.isArray(fruits));
console.log(fruits);

console.log(fruits.indexOf('Apple'));



const person = {
    firstName: 'Ameen',
    lastName: 'Yasin',
    age: 22,
    hoppies: ['music', 'sports', 'cars'],
    address: {
        street: 'Lib st.',
        city: 'Rammallah',
        state: 'Palestine'
    }
}

console.log(person.firstName);
console.log(person.address.state);

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

person.email = 'ameen@gmail.com'
console.log(person);


const todos = [
    {
        id: 1,
        text: 'HTML 5',
        isCompleted: true,
    }, 
    {
        id: 2,
        text: 'CSS 3',
        isCompleted: true,
    }, 
    {
        id: 3,
        text: 'JS',
        isCompleted: false,
    }
]

console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoIsCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoIsCompleted);