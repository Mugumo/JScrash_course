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

//arrays of objects

const todos = [
    {
        id:1,
        text:'Buy cashew milk for Mary.',
        isCompleted: true
    },
    {
        id:2,
        text:'Lunch with Grace.',
        isCompleted: true

    },
    {
        id:3,
        text:'3km run.',
        isCompleted: false

    }
];

console.log(todos[1]);

// json stringify

const jsonTodos = JSON.stringify(todos);
console.log(jsonTodos);

// for 

for(let i=0; i<=11; i++){
    console.log(i);
};

// while

let i = 0;

while(i<=10) {
    console.log(`While loop number: ${i}`);
    i++;
}


// looping through arrays

for(let i=0; i<=todos.length; i++){
    console.log(todos[i]);
};

for(let todo of todos){
    console.log(`${todo.id}. ${todo.text}`);
}

//high order array methods

// for each, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text;
})

console.log('bananas');
console.log(todoText);

const completedTodos = todos.filter(function(todo){
    return todo.isCompleted === true;

})

console.log(completedTodos);

const completedTextTodos = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(completedTextTodos);

// conditionals

//if else
const x = 11;

if (x===10){
    console.log(`x is 10`);
} else if (x >10){
    console.log(`x is greater than 10`);
} 
else {
    console.log(`x is not 10`);
}

// conditional or ||, and &&

const a = 4;
const b = 10;

if (a>5 || b<10){
    console.log('This is the truth')
}
else if (a === 4 && b === 10){
    console.log('a lucky draw!');
}
else {
    console.log('LIAR');
}

// ternary operator

const l = 13;
const color = l > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red' : 
        console.log(` color is red`);
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('I do not see no colour here');
}