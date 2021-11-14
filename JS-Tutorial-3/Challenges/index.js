// // Challenge 1

// const box = document.getElementById('box');

// box.addEventListener("click", function () {
//     console.log("I want to open the box!");
// })

// const container = document.getElementById('container');
// container.innerHTML = '<button id="box" onclick="buy()">BUY</button>';

// function buy() {
//     container.innerHTML += '<p>Thanks!</p>';
// };


// const recipient = 'James';
// const sender = 'Grze';

// const email = `
// Hey ${recipient}!
// How is it going?
// Cheers ${sender}
// `;


// const welcomeEl = document.getElementById('welcome-el');

// function greet(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name}! ${emoji}`
// };

// greet('Wypierdalaj', 'ziutek', ":)");

// function add(x, y) {
//     return x + y;
// };

// function getFirst(arr) {
//     return arr[0];
// };

// Challange
// let player = 'Grze';
// let opponent = 'Dupa';
// const game = 'AmazingFighter';
// let points = 0;
// let hasWon = 0;
// points += 100;
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// };


// // Challenge !
// let myCourses = ['CSS', 'JS', 'UI', 'CleanCode'];

// function logCourse(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };

// // Challange !!

// let localVal = localStorage.getItem('Dupa');
// console.log(localVal);

// // Challenge !!!

// const buttonEl = document.getElementById("lesson-btn");



// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// buttonEl.addEventListener('click', function () {
//     console.log(data[0].score)
// })


function generateSentence(desc, arr) {

    let arrStr = '';

    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) < arr.length - 1) {
            arrStr += arr[i] + ", ";
        } else if (arr.indexOf(arr[i]) === arr.length - 1) {
            arrStr += arr[i];
        }
    }
    return `The ${arr.length} ${desc} are: ${arrStr}`
};

console.log(generateSentence('Best fruits', ['Apple', 'Banana', 'Dupa']));

let testarr = ['Apple', 'Banana', 'Dupa']
console.log(testarr.indexOf('Apple'))
console.log(testarr.length);


// Challenge .....
const imgs = [
    'icon1.png',
    'icon2.png',
    'icon3.png',
]
const imagesEl = document.getElementById('images');


function renderImages() {
    listImages = '';
    for (i = 0; i < imgs.length; i++) {
        listImages += `<img style="margin: 10px;" src="${imgs[i]}">`
    }
    imagesEl.innerHTML = listImages
};

renderImages()