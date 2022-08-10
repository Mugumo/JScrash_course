//DOM

const form = document.getElementById('my-form');

console.log(form);

//single selector
console.log(document.querySelector('.container'));

//iterative selector
const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));



// manipulating DOM


//remove entire list

const ul = document.querySelector('.items');

ul.remove();