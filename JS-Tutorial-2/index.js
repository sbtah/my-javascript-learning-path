let firstCard = getRandomCard();
let secondCard = getRandomCard();
let allCards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');



function getRandomCard() {
    return 5
};


function startGame() {
    renderGame();
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

    if (sum < 21) {
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