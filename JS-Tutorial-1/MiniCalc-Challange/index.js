let num1 = 8;
let num2 = 2;
let result = 0;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
sumEL = document.getElementById('sum-el');


function add() {
    console.log('This adds!');
    result = num1 + num2;
    sumEL.textContent = result;
};

function subtract() {
    console.log('This subtracts!');
    result = num1 - num2;
    sumEL.textContent = result;
};

function divide() {
    console.log('This divides!');
    result = num1 / num2;
    sumEL.textContent = result;
};

function multiply() {
    console.log('This multiplies!');
    result = num1 * num2;
    sumEL.textContent = result;
};