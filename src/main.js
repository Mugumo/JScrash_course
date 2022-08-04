//console.log("Hello world");

const age = 30;
const f_name = 'John';
const isCool = true;
const place = 'Nairobi';
let z;
const n = null;
// template string
console.log(`My name is ${f_name} and I am ${age} years old`);
console.log(`I live in ${place} and it is ${isCool} that I am cool`);
console.log(typeof isCool);


// string variable properties and methods

const s = "Zachary, Gakuo";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,3).toUpperCase());
console.log(s.split(', '));

/* multi-line comment
that continues on 
and on
and on
until it sees this --> */

//arrays

const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);

const fruits = ['apples', 'oranges', 10, 'pears', true];
console.log(fruits);

console.log(fruits[1]);

fruits[1] = 'bananas';
console.log(fruits);

fruits.push('grapes');
console.log(fruits);

fruits.unshift('guava');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));


//object literals

const person ={
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music', 'art', 'languages', 'tech'],
    details : {
        height : '6ft 0in',
        weight : '80kg',
        skin_colour : 'Brown'
    }
}

console.log(person);

console.log(person.hobbies[1]);

console.log(`${f_name}'s height is ${person.details.height}`);

//destructuring object literals

const {firstName, lastName} = person;

console.log(firstName, lastName);