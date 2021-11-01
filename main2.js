// DOM
// Single selectors.
// const form = document.getElementById('my-form');
// const formSecond = document.querySelector('h1'); // This is newer.
// console.log(formSecond); 

// Multiple element selectors.
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item')); // This is older and targets only HTML classes.
// console.log(document.getElementsByTagName('li')); // targets by HTML tags.

// Looping through selected items.
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove() // removes selected element.
// ul.lastElementChild.remove(); // removes last child element of selected parrent.
// ul.firstElementChild.textContent = 'babubuab'; // grabs first child element and sets new content for it.
// ul.children[1].innerText= 'hello !!!'; // grabs child element by index, change it's content with innerText.
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // inserts HTML of last child element with innerHTML.


// // Event listener.
// const button = document.querySelector('.btn');
// // button.style.background = 'red';
// button.addEventListener('mouseover', (e) => {
// 	e.preventDefault();
// 	document.querySelector('#my-form').style.background = '#ccc';
// 	document.querySelector('body').classList.add('bg-dark');
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


// const reminder = document.querySelector('body');
// reminder.addEventListener('contextmenu', (e) => {
// 	alert('No no no !')
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
	e.preventDefault();

	if (nameInput.value !== '' && emailInput.value !== '') {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
		userList.appendChild(li);
		// Clear fields.
		nameInput.value = '';
		emailInput.value = '';
	} else {
		msg.classList.add('error');
		msg.innerHTML = '<p>Please enter all fields!</p>';
		setTimeout(() => msg.remove(), 3000);
	}
};