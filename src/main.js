const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' && emailInput.value === ''){
        msg.classList.remove('disappearing');
        msg.classList.add('error');
        msg.textContent = 'Please enter all fields';
        setTimeout(()=>{msg.classList.add('disappearing');}, 2000);
    }else if(nameInput.value === ''){
        msg.classList.remove('disappearing');
        msg.textContent = 'Please enter name';
        setTimeout(()=>{msg.classList.add('disappearing');}, 2000);
    }else if(emailInput.value === ''){
        msg.classList.remove('disappearing');
        msg.textContent = 'Please enter email';
        setTimeout(()=>{msg.classList.add('disappearing');}, 2000);
    }else{
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
            )
        userList.appendChild(li);

        //clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}
