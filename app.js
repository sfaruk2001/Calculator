let operand1 = "";
let operand2 = "";
let operator = "";

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('button.operator');
const display = document.querySelector('.displayContent');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

//add event listeners for number keys
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', processNum);
}

//add event listener for operator keys
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', processOperator);
}

//add event listener for equals key
equals.addEventListener('click', equalFunc);

function processOperator(e) {
    if (!operand1) {
        return;     
    }

    if (operator && (operand1 && operand2)) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = '';
        displayScreen(operand1);
    }

    operator = e.target.innerText;
    console.log("operator:" + operator);

      
    if (operand1 && operand2) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = '';
        console.log("op1:" + operand1);
        displayScreen(operand1);
    }
}


function processNum(e) {
    const number = e.target.innerText;
    if (!operand1) {
        operand1 += number;
        console.log("op1:" + operand1);
        displayScreen(operand1);
    } else if (operand1 && !operator) {
        operand1 += number;
        console.log("op1:" + operand1);
        displayScreen(operand1);
    } else  {
        resetDisplay();
        operand2 += number;
        console.log("op2:" + operand2);
        displayScreen(operand2);
        
    }
}

function equalFunc() {
    operand1 = operate(operand1, operand2, operator);
    operand2 = '';
    operator = '';
    console.log("eq func op1: " + operand1);
    displayScreen(operand1);
}





function displayScreen(num) {
    display.innerHTML = num;
    
}

function resetDisplay() {
    display.innerHTML = '';
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
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return null;
    }
}

