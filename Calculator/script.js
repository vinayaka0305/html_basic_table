const numberButtons = document.querySelectorAll('[data-numbers]');
const currentDisplay = document.querySelector('[data-current-operand]');
const previousDisplay = document.querySelector('[data-previous-operand]');
const dataallclear = document.querySelector('[data-all-clear]')
const dataDelete = document.querySelector('[data-delete]')
const dataEquals = document.querySelector('[data-equals]')
const operations = document.querySelectorAll('[data-operations]')

let currentOperand = '';
let previousOperand = '';
let selectedOperand = '';

numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const number = button.textContent;
        currentOperand += number;
        currentDisplay.textContent = currentOperand;
    });
});

dataallclear.addEventListener('click', function () {
    currentOperand = '';
    previousOperand = '';
    selectedOperand = '';
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
})

dataDelete.addEventListener('click', function () {
    let displayTextContent = currentDisplay.textContent;
    if (displayTextContent.length > 0) {
        displayTextContent = displayTextContent.slice(0, -1);
        currentDisplay.textContent = displayTextContent;
        currentOperand = displayTextContent
    }
})

operations.forEach(function (operationButtons) {
    operationButtons.addEventListener('click', function () {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            calculate()
        }
        selectedOperand = operationButtons.textContent;
        previousOperand = currentOperand;
        currentOperand = '';
        previousDisplay.textContent = previousOperand + '' + selectedOperand;
        currentDisplay.textContent = '';
    })
})

dataEquals.addEventListener('click', function () {
    if (currentOperand === '' || previousOperand === '') return;
    calculate();
    selectedOperand = '';
    previousOperand = '';
})

function calculate() {
    const num1 = parseFloat(previousOperand);
    const num2 = parseFloat(currentOperand);

    if (isNaN(num1) || isNaN(num2)) return;

    let result;
    switch (selectedOperand) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    previousOperand = result.toString();
    selectedOperand = '';
    previousDisplay.textContent = '';
    currentDisplay.textContent = result.toString();

}



