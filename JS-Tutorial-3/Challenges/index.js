// Challenge 1

const box = document.getElementById('box');

box.addEventListener("click", function () {
    console.log("I want to open the box!");
})

const container = document.getElementById('container');
container.innerHTML = '<button id="box" onclick="buy()">BUY</button>';

function buy() {
    container.innerHTML += '<p>Thanks!</p>';
};


const recipient = 'James';
const sender = 'Grze';

const email = `
Hey ${recipient}!
How is it going?
Cheers ${sender}
`;
