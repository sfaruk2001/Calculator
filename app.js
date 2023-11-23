let operand1 = "";
let operand2 = "";
let operator = "";

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('button.operator');
const display = document.querySelector('.displayContent');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const signButton = document.querySelector('.negPos');
const decimalButton = document.querySelector('.decimal');
const deleteButton = document.querySelector('.delete');

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

clear.addEventListener('click', clearFunc);

signButton.addEventListener('click', signFunc);

decimalButton.addEventListener('click', decimalFunc);

deleteButton.addEventListener('click', backspace);

function processOperator(e) {
    if (!operand1) {
        return;     
    }

    if (operator && (operand1 && operand2)) {
        if (operator === '/' && operand2 === '0' || operand2 === "0.") {
            alert("You Donkey you can't divide by zero!");
            clearFunc();
            return;
        }

        operand1 = operate(operand1, operand2, operator);
        operand2 = '';
        displayScreen(operand1);
    }

    operator = e.target.innerText;
    console.log("operator:" + operator);

      
    /** 
    if (operand1 && operand2) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = '';
        console.log("op1:" + operand1);
        displayScreen(operand1);
    }*/
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

function signFunc() {
    if (!operand1) {
        return;
    }
    

    if (operand1 && !operator) {
        if (Number(operand1) !== 0 && operand1.charAt(0) !== '-' ) {
            operand1 = '-' + operand1;
            displayScreen(operand1);
        } else if (Number(operand1) !== 0 && operand1.charAt(0) === '-' ) {
            operand1 = operand1.substring(1);
            displayScreen(operand1);
        }
    } else  {
        if (Number(operand2) !== 0 && operand2.charAt(0) !== '-' ) {
            operand2 = '-' + operand2;
            displayScreen(operand2);
        } else if (Number(operand2) !== 0 && operand2.charAt(0) === '-' ) {
            operand2 = operand2.substring(1);
            displayScreen(operand2);
        }
    }
}

function decimalFunc(e) {
    
    let dec = e.target.innerText;
    if (!operand1) {
        operand1 += "0.";
        console.log("op1:" + operand1);
        displayScreen(operand1);
    } else if (operand1 && !(String(operand1).includes(".")) && !operator ) {
        operand1 += dec;
        console.log("op1:" + operand1);
        displayScreen(operand1);
    } else if (!operand2.includes('.') && operand1 && operator)  {
        resetDisplay();
        if(!operand2) {
            operand2 += "0.";
            console.log("op2:" + operand2);
            displayScreen(operand2);
        } else {
            operand2 += dec;
            console.log("op2:" + operand2);
            displayScreen(operand2);
        }
       
        
    }
}

function backspace() {
    if (operand1 && !operator) {
        operand1 = operand1.slice(0,-1);
        displayScreen(operand1);
    } else if (operand2) {
        operand2 = operand2.slice(0,-1);
        displayScreen(operand2);
    }
}

function equalFunc() {
    

    if (operand1 && operand2 && operator) {
        if (operator === '/' && operand2 === '0' || operand2 === "0.") {
            alert("You Donkey you can't divide by zero!");
            clearFunc();
            return;
        }

        operand1 = '' + operate(operand1, operand2, operator);
        operand2 = '';
        operator = '';
        console.log("eq func op1: " + operand1);
        displayScreen(operand1);
    }
   
}

function clearFunc() {
    operand1 = '';
    operand2 = '';
    operator = '';
    resetDisplay();
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

