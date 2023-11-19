let operand1 = "";
let operand2 = "";
let operator = "";
let savedNumber = "";

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.displayContent');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

//add event listeners for number keys
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click',displayScreen);
}



function displayScreen(e) {
    let num = e.target.innerText;
    display.innerHTML = num;
    
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'x') {
        return multiply(num1, num2);
    } else if (operator === '÷') {
        return divide(num1, num2);
    } else {
        return null;
    }
}

