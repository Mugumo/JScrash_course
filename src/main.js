// functions

function addNums(a=1,b=1){
    console.log("below is a sum");
    console.log(a+b);
}

addNums(6,3);

function subtractNums(a,b){
    return a-b;
}

subs = subtractNums(5, 3);

console.log(subs);

console.log(subtractNums(8, 3));

// arrow function 

const concatLetters = (m,n) => `${m}.${n}`;

const multiplyNums = (x,y) =>{

    product = x*y;
    console.log(product);
    console.log("and apparently something else too");
}

multiplyNums(3,4);

initials = concatLetters('Z','G');

console.log(initials);

//array method using arrow function

todos = [
    {
        id : 1,
        text : 'tease Mo',
        done : true
    },
    {
        id : 2,
        text : 'walk for lunch',
        done : false
    },
    {
        id:3,
        text:"hold hands",
        done:true
    }
]

todos.forEach((todo) => console.log(todo));
todos.forEach(todo => {
    console.log(todo.text)
});

const car = [
    {
        number:'KCL700A',
        color: 'green',
        sound: 'vroom'
    },
    {
        number:'KAD608T',
        color: 'BLUE',
        sound: 'vroom'
    },
    {
        number:'KCL700A',
        color: 'green',
        sound: 'vroom'
    }
]
