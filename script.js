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
    if (operator === '+') {
        return add(firstNumber, secondNumber);
      } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
       } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
        } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
      } else {
        return null;
      }
};

const buttons = document.querySelectorAll('.buttons button')
const numberButtons = document.querySelectorAll('.number');
const decimalPointButton = document.querySelector('.decimal-point');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearEntryButton = document.querySelector('.clear-entry');
const allClearButton = document.querySelector('.all-clear');
const display = document.querySelector('.display');
let currentDisplay = display.textContent;

let replaceDisplayOnNextInput = false;
let decimalIsBanned = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('decimal-point')) {
            if (decimalIsBanned === true) {
            } else {
                display.textContent += '.';
                decimalIsBanned = true;
            }
        } else if (button.classList.contains('clear-entry')) {
            display.textContent = '0';
            decimalIsBanned = false;
        } else if (button.classList.contains('all-clear')) {
            display.textContent = '0';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            decimalIsBanned = false;
        } else if (button.classList.contains('number')) { 
            if (display.textContent === '0' || replaceDisplayOnNextInput) {
                display.textContent = button.textContent;
                replaceDisplayOnNextInput = false;
            } else {
                display.textContent += button.textContent;
            } 
            if (operator === '') {
                firstNumber = Number(display.textContent);
            } else {
                secondNumber = Number(display.textContent);
            }
        } else if (button.classList.contains('operator')) {
            decimalIsBanned = false;
            if (button.textContent === '=') {
                if (firstNumber === '' && operator === '' && secondNumber === '') {
                    display.textContent = '0';
                } else if (firstNumber !== '' && operator === '' && secondNumber === '') {
                    display.textContent = firstNumber;
                } else if (firstNumber !== '' && operator !== '' && secondNumber === '') {
                    display.textContent = '0';
                } else {
                    replaceDisplayOnNextInput = true;
                    if (secondNumber === 0) {
                        display.textContent = "naughty!"; 
                    } else {
                        const initialResult = operate(firstNumber, operator, secondNumber);
                        const result = Math.round(initialResult * 100) / 100;
                        display.textContent = result; 
                    }
                }
            } else {
                if (firstNumber && operator && secondNumber) {
                    let result;
                    if (secondNumber === 0) {
                        display.textContent = "naughty!"; 
                        firstNumber = '';
                        secondNumber = '';  
                        operator = '';
                        replaceDisplayOnNextInput = true;
                    } else {
                        const initialResult = operate(firstNumber, operator, secondNumber);
                        const result = Math.round(initialResult * 100) / 100;
                        display.textContent = result;
                        firstNumber = result;
                        secondNumber = ''; 
                    }
                }
                    operator = button.textContent;
                    replaceDisplayOnNextInput = true;
                } 
            } currentDisplay = display.textContent;
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        equalButton.click();
    } else if (event.key === 'Backspace') {
        clearEntryButton.click();
    }  else {
        buttons.forEach(button => {
        if (event.key === button.textContent) {
            button.click();
    }
    });
    }  
    });