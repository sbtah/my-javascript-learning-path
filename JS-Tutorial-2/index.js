let allCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.getElementById('player-el');
let player = {
    name: 'Grze',
    chips: 145,
};


playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    };
};


function startGame() {

    if (allCards.length < 2) {

        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        sum = firstCard + secondCard;
        allCards.push(firstCard);
        allCards.push(secondCard);
        renderGame();
    };
};


function renderGame() {

    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'You got Blackjack!';
        hasBlackJack = true;
    } else {
        message = 'Sorry you lost!';
        isAlive = false;
    };

    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    cardsEl.textContent = "Cards: ";

    for (i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + ", ";
    };
};


function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        allCards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
};


// ====================================================================== //
// ====================================================================== //
// Challenge 1.
let age = 20;

if (age < 21) {
    console.log('You can not enter the club');
} else {
    console.log('Welcome');
};


// Challenge 2.
let age2 = 144;

if (age2 < 100) {
    console.log('Not elegible');
} else if (age2 === 100) {
    console.log('Here is your birthday card from a King!');
} else {
    console.log('Not elegible, you already gotten a card!')
};

// Challenge 3.
let featuredPosts = [
    'Check out my Netflix Clone',
    'Here is a code for my project.',
    "I just relaunched my portfolio"
];

// Challenge 4.
let messages = [
    "hello bob",
    'how is it going?',
    'All good bro',
];
let newMesage = 'Same here!';
messages.push(newMesage);
console.log(messages);
messages.pop('Same here!');
console.log(messages);

// Using splice method!
// let index = messages.indexOf('hello bob');
// console.log(index);
// messages.splice(index, 1);
// console.log(messages);