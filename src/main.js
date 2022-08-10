//DOM

const form = document.getElementById('my-form');

console.log(form);

//single selector
console.log(document.querySelector('.container'));

//iterative selector
const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));



// manipulating DOM


// change content of item on list

const ul = document.querySelector('.items');

ul.children[1].textContent = 'Hello';
ul.children[2].innerText = 'Brad';
ul.children[0].innerHTML = '<h1>LOUD</h1>';

//altering style

const btn =  document.querySelector('.btn');
btn.style.background = 'red';