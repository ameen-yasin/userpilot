// console.log(document.getElementById('my-form'));
// // const items = document.querySelector('.items');

// // items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// console.log(ul);
// // ul.remove();

// ul.firstElementChild.textContent='Hello';
// ul.children[1].innerText='Brad';
// ul.lastElementChild.innerHTML='<h3>Hello</h3>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log('clicked');
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
// })


// this part for form validation
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmitI);

function onSubmitI(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('seccess');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}