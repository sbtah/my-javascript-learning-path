// for (let i = 10; i < 101; i += 10) {
//     // console.log(i);
// }

// messages = [
//     'Yoyio',
//     'Yoyi123o',
//     'Yoyi124124o',
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i]);
// };

// // Challenge..
// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i]);
// };


// let sentence = ['Hello', 'my', 'name', 'is', 'Grzegorz'];
// let greeting = document.getElementById('greeting-el');

// for (i = 0; i < sentence.length; i++) {
//     greeting.textContent += `${sentence[i]} `;
// }


let player1Time = 122;
let player2Time = 109;

function getFastestOne() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return 'It was a tie!'
    }
};

let fastestRace = getFastestOne()



function totalRaceTime() {
    return player2Time + player1Time;
};

let totalTime = totalRaceTime();



let randomCard = Math.floor(Math.random() * 21) + 1;


let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse && givesCertificate) {
    generateCertificate();
};

function generateCertificate() {
    console.log('Generating Certificate...');
};

let castleToRent = {
    location: 'Austria',
    build: '1918',
    numberOfRooms: 38,
    isAvailable: true,
    availableCars: ['Toyota', 'Mercedes', 'BWM']
}

console.log(castleToRent.isAvailable);
console.log(castleToRent.availableCars[0]);


let person = {
    name: 'Grze',
    age: 22,
    country: 'Poland',
    logData: function () {
        return `${this.name} is ${this.age} and lives in ${this.country}.`
    }
};

let age = 22;

if (age < 6) {
    console.log('Free');
} else if (age >= 6 && age <= 17) {
    console.log('Child discount.');
} else if (age >= 18 && age <= 26) {
    console.log('Student discount.');
} else if (age >= 27 && age <= 66) {
    console.log('Full price.');
} else {
    console.log('Senior discount.');
};


let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan'];

for (i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i]);
};