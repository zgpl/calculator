const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

let firstNumber = '';
let operator = '';
let secondNumber = '';

const operate = function (firstNumber, operator, secondNumber) {
    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    console.log(expression);
    if (operator == '+') {
        return add(firstNumber, secondNumber);
      } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
       } else if (operator == '*') {
        return multiply(firstNumber, secondNumber);
        } else if (operator == '/') {
        return divide(firstNumber, secondNumber);
      } else {
        return null;
      }
};

const buttons = document.querySelectorAll('.buttons button')
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const display = document.querySelector('.display');
let currentDisplay = display.textContent;
let readyToAppendNumbers = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            display.textContent = "0";
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else if (button.classList.contains('number')) { 
            if (display.textContent === "0" || readyToAppendNumbers) {
                display.textContent = button.textContent;
                // idk if i need to reset this: readyToAppendNumbers = false;
            } else {
                display.textContent += button.textContent;
            } 
            if (operator === '') {
                firstNumber = Number(display.textContent);
            } else {
                secondNumber = Number(display.textContent);
            }
        } else if (button.classList.contains('operator')) {
            if (button.textContent === "=") {
            readyToAppendNumbers = false;
            const result = operate(firstNumber, operator, secondNumber);
            display.textContent = result;
            } else {
                if (firstNumber && operator && secondNumber) {
                    const result = operate(firstNumber, operator, secondNumber);
                    display.textContent = result; 
                    firstNumber = result;
                    secondNumber = '';
                }
                    operator = button.textContent;
                    readyToAppendNumbers = true;
                } 
            } currentDisplay = display.textContent;
    });
});