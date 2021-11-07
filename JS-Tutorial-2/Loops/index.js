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



let randomNumber = Math.random() * 6;
console.log(randomNumber);
