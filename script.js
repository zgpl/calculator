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

let firstNumber;
let operator;
let secondNumber;

const operate = function (firstNumber, operator, secondNumber) {
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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            display.textContent = "0";
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else if (button.classList.contains('number')) { 
            if (display.textContent === "0" || ["+", "-", "*", "/"].includes(display.textContent)) {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            } 
            if (operator === '') {
                firstNumber = display.textContent;
            } else {
                secondNumber = display.textContent;
            }
        } else if (button.classList.contains('operator')) {
            if (button.textContent === "=") {
            firstNumber = Number(firstNumber);
            secondNumber = Number(secondNumber);
            display.textContent = operate(firstNumber, operator, secondNumber);
            } else {
               operator = button.textContent;
                } 
            } currentDisplay = display.textContent;
    });
});
