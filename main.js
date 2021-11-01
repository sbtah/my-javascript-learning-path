// Arrays

// const fruits =['apples', 'oranges', 'bananas'];

// fruits[3] = 'grapes';
// fruits.push('pears'); // aka append in python.
// fruits.unshift('mangos'); // puts item at the begining of the array.

// const new_arr = []
// new_arr.push(fruits.pop()); // push last value from fruits array to new_arr array.

// console.log(fruits);
// console.log(new_arr);
// console.log(Array.isArray(fruits)); // checks if specified variable is an array.
// console.log(fruits.indexOf('oranges')); // returns index number of specified value from array.


// Objects

// const person = {
// 	firstName: 'Joe',
// 	lastName: 'Black',
// 	age: 30,
// 	email: 'joe.black@gmail.com',
// 	hobbies: ['karate', 'running', 'judo'],
// 	address: {
// 		street: 'Jabłeczna 21',
// 		city: 'Kołobrzeg',
// 		state: 'Zachodniopomorskie'
// 	}
// }

// console.log(person.address.city);
// const {firstName, lastName, address: {city}} = person;
// console.log(firstName, lastName, city);
// person.secondName = 'Moe';
// console.log(person);


// Arrays of Objects

// const todos = [
// 	{
// 		id: 1,
// 		text: 'Take out trash',
// 		isCompleted: false
// 	},
// 	{
// 		id: 2,
// 		text: 'Wash your hands',
// 		isCompleted: true
// 	},
// 	{
// 		id: 3,
// 		text: 'Make a poo',
// 		isCompleted: false
// 	},

// ];

// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos); // This change object into json.
// console.log(todoJSON);

// // For loops 

// for (let i = 10; i >= 1; i--) {
// 	if (i % 2 === 0) console.log(`For loop number ${i}`);
// }


// // While Loops

// let val = 10;
// while (val > 1) {
// 	console.log(`Current value of val is: ${val}`);
// 	val--;
// };


// Looping through an array.


// for (let i=0; i < todos.length; i++) {
// 	console.log(todos[i].text);
// }

// // For of loops

// for (let todo of todos) {
// 	console.log(todo.id);
// }

// // High order array methods.
// // forEach, map, filter

// const todoCompleted = todos.filter(function(todo) {
// 	return todo.isCompleted === false;
// }).map(function(todo) {
// 	return todo.text;
// })

// console.log(todoCompleted);

// const x = 11;
// const y = 11;

// if (x > 10 && y > 10) {
// 	console.log('x is greater then 10 and y is greater then 10!');
// };

// const x = 11;
// const color = x > 10 ? 'Red' : 'Blue';
// switch(color) {
// 	case 'Red':
// 		console.log('Color is Red!');
// 		break;
// 	case 'Blue':
// 		console.log('Color is Blue!');
// 		break;
// 	default:
// 		console.log('Color is NOT Red or Blue!');
// };

// function addNums(x = 1, y = 1) {
// 	return x + y;
// };

// console.log(addNums(11, 11));


// const newAddNums = (x = 2, y = 2) => x + y;

// console.log(newAddNums(222, 212));


// // OOP pre ES6


// function Person(firstName, lastName, email) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.email = email;
// 	this.dob = new Date(dob);
// };

// Person.prototype.getBirthYear = function () {
// 	return this.dob.getFullYear();
// };

// Person.prototype.getFullName  = function () {
// 	return `${this.firstName} ${this.lastName}`;
// };



// // Instantiate.

// const person1 = new Person(firstName='Grzegorz', lastName='Zygan', email='grze@wp.pl', dob='11-28-1983');
// const person2 = new Person(firstName='Bubu', lastName='Babinski', email='bubu@wp.pl', dob='1-22-1993');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// OOP Classes

// class Person {
// 	constructor(firstName, lastName, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.dob = new Date(dob);
// 	}
// 	getBirthYear() {
// 		return this.dob.getFullYear();
// 	}
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// };

// const person1 = new Person(firstName='Grzegorz', lastName='Zygan', dob='11-27-1983');

// console.log(person1.getFullName());
// console.log(person1.dob)
// console.log(person1.getBirthYear());

// DOM !!! yea!