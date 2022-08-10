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

// event listener on button

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // document.querySelector('#my-form').style.background = '#ccc';
    // document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').children[1].textContent = 'Goodbye';
    ul.children[2].textContent = 'Fernando';

});

ul.addEventListener('mouseover',(e)=>{
    ul.children[0].innerHTML = '<p><i>Quiet</i></p>';
});
ul.addEventListener('mouseout',(e)=>{
    ul.children[0].innerHTML = '<h1>LOUD</h1>';
});
