const clearBtn = document.querySelector('.clear')
const display = document.querySelector('.display')
const digit9 = document.querySelector('.digit9')
const digit8 = document.querySelector('.digit8')
const digit7 = document.querySelector('.digit7')
const digit6 = document.querySelector('.digit6')
const digit5 = document.querySelector('.digit5')
const digit4 = document.querySelector('.digit4')
const digit3 = document.querySelector('.digit3')
const digit2 = document.querySelector('.digit2')
const digit1 = document.querySelector('.digit1')
const digit0 = document.querySelector('.digit0')
const plus = document.querySelector('.plus')
const multiply = document.querySelector('.times')
const equals = document.querySelector('.equals')
const divide = document.querySelector('.divide')
const minus = document.querySelector('.minus')
const decimal = document.querySelector('.decimal')
const percent = document.querySelector('.percent')
const plusOrMinus = document.querySelector('.plusOrMinus')
let firstNumber = 0;
let secondNumber;
let operation = '';


const clearCalculator = () => {
    firstNumber = 0;
    operation = '';
    display.innerHTML = `<h1>${firstNumber}</h1>`
    secondNumber = 0;
}

const plusOp = () => {
    operation = 'plus'
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    console.log(operation)
}

const multiplyOp = () => {
    operation = 'multiply'
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    console.log(firstNumber)
    console.log(operation)
}

const divideOp = () => {
    operation = 'divide'
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    console.log(operation)
}
const minusOp = () => {
    operation = 'minus'
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    console.log(operation)
}
const number9 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 9
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '9'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '9'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 9
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}



const number8 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 8
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '8'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '8'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 8
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number7 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 7
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '7'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '7'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 7
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number6 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 6
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '6'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '6'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 6
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number5 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 5
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '5'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '5'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 5
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number4 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 4
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '4'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '4'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 4
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number3 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 3
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '3'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '3'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 3
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number2 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 2
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '2'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '2'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 2
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number1 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 1
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (firstNumber !== 0 && operation === ''){
        firstNumber = firstNumber + '1'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '1'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 1
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

const number0 = () => {
    if (firstNumber === 0 && operation === '') {
        firstNumber = 0
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if ( operation === ''){
        firstNumber = firstNumber + '0'
    display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if ( secondNumber !== null && operation !== '') {
    secondNumber = secondNumber + '0'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else if (secondNumber !== 0 && operation !== ''){
        secondNumber = secondNumber + '0'
    display.innerHTML = `<h1>${secondNumber}</h1>`
    } else {
        secondNumber = 0
    display.innerHTML = `<h1>${secondNumber}</h1>`

    }
}

addDecimal = () => {
    if (display.innerHTML === `<h1>${firstNumber}</h1>`) {
        display.innerHTML = `<h1>${firstNumber}.</h1>`
        firstNumber = `${firstNumber}.`
    } else if (display.innerHTML === `<h1>${secondNumber}</h1>`) {
        display.innerHTML = `<h1>${secondNumber}.</h1>`
        secondNumber = `${secondNumber}.`
    }
}

const equalsOp = () => {
    if (operation === 'plus') {
        secondNumber = parseFloat(secondNumber)
        display.innerHTML = `<h1>${firstNumber + secondNumber}</h1>`
        firstNumber = firstNumber + secondNumber
        secondNumber = 0
    } else if (operation === 'multiply') {
        secondNumber = parseFloat(secondNumber)
        display.innerHTML = `<h1>${firstNumber * secondNumber}</h1>`
        firstNumber = firstNumber * secondNumber
        secondNumber = 0
    } else if (operation === 'divide') {
        secondNumber = parseFloat(secondNumber)
        display.innerHTML = `<h1>${firstNumber / secondNumber}</h1>`
        firstNumber = firstNumber / secondNumber
        secondNumber = 0
    } else if (operation === 'minus') {
        secondNumber = parseFloat(secondNumber)
        display.innerHTML = `<h1>${firstNumber - secondNumber}</h1>`
        firstNumber = firstNumber - secondNumber
        secondNumber = 0
    }
}

const toPercent = () => {
    console.log(firstNumber)
    if (display.innerHTML === `<h1>${firstNumber}</h1>`) {
        firstNumber = firstNumber / 100
        display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (display.innerHTML === `<h1>${secondNumber}</h1>`) {
        secondNumber = secondNumber / 100
        display.innerHTML = `<h1>${secondNumber}</h1>`
    }
}

const toPlusOrMinus = () => {
    if (display.innerHTML === `<h1>${firstNumber}</h1>` && firstNumber > 0) {
        firstNumber = `-${firstNumber}`
        display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (display.innerHTML === `<h1>${firstNumber}</h1>` && firstNumber < 0) {
        firstNumber = firstNumber *= -1
        display.innerHTML = `<h1>${firstNumber}</h1>`
    } else if (display.innerHTML === `<h1>${secondNumber}</h1>` && secondNumber > 0) {
        secondNumber = `-${secondNumber}`
        display.innerHTML = `<h1>${secondNumber}</h1>`
    } else if (display.innerHTML === `<h1>${secondNumber}</h1>` && secondNumber < 0) {
        secondNumber = secondNumber *= -1
        display.innerHTML = `<h1>${secondNumber}</h1>`
    }
}

clearBtn.addEventListener('click', () => clearCalculator())
digit9.addEventListener('click', () => number9())
digit8.addEventListener('click', () => number8())
digit7.addEventListener('click', () => number7())
digit6.addEventListener('click', () => number6())
digit5.addEventListener('click', () => number5())
digit4.addEventListener('click', () => number4())
digit3.addEventListener('click', () => number3())
digit2.addEventListener('click', () => number2())
digit1.addEventListener('click', () => number1())
digit0.addEventListener('click', () => number0())
plus.addEventListener('click', () => plusOp())
multiply.addEventListener('click', () => multiplyOp())
divide.addEventListener('click', () => divideOp())
minus.addEventListener('click', () => minusOp())
equals.addEventListener('click', () => equalsOp())
decimal.addEventListener('click', () => addDecimal())
percent.addEventListener('click', () => toPercent())
plusOrMinus.addEventListener('click', () => toPlusOrMinus())