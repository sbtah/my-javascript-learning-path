// document.getElementById('count-el').innerText = 5
// let firtsBatch = 5;
// let secondBatch = 12;
// let count = firtsBatch + secondBatch;
// console.log(count);

// // Challange 1...
let myAge = 36;
const humanToDogRatio = 7;
myDogAge = myAge * humanToDogRatio;
// console.log(myDogAge);


// // Challange 2...
let bonusPoints = 50
bonusPoints += 50;
bonusPoints -= 75;
bonusPoints += 45;
// console.log(bonusPoints);


// Race Counter challenge ...
function countdown() {
    for (let i = 5; i > 0; i--) {
        console.log(i);

    }
    console.log('Go!');
}
// countdown()


// Sum of all laps function challenge... 
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function lapTime(x, y, z) {
    return x + y + z;
};
// console.log(lapTime(lap1, lap2, lap3));



// Increment number o laps challange ....
let lapsCompleted = 0;

function inrementLaps() {
    lapsCompleted += 1;

};
inrementLaps();
inrementLaps();
inrementLaps();
// console.log(lapsCompleted);


let username = 'per';
let message = 'You have three new notifications';
let messageToUser = `${message} ${username}!`


// Next Challenge ....
let myName = 'Grzegorz';
let greeting = 'Hi my name is:';
let myGreeting = `${greeting} ${myName}`;
// console.log(myGreeting);


// Welcome Challange ....
let welcomeEl = document.getElementById('welcome-el');
let welcomeName = 'Grzegorz';
let welocomeGreeting = 'Welcome back';
let newGreeting = `${welocomeGreeting} ${welcomeName}`

welcomeEl.innerText = newGreeting;
welcomeEl.innerText += ':)'


// Counter App
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.innerText = count
}

function save() {
    let currentCount = ` ${count} - `;
    saveEl.innerText += currentCount;
};
// save()



