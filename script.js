const allButtons = document.querySelectorAll('.buttons');
const allNumberButtons = document.querySelectorAll('.numberButton');
const allOperatorButtons = document.querySelectorAll('.operators');
const screen = document.querySelector('#screen');
const screenPara = document.querySelector('#screenPara');

const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

const arrayWithAllButtons = Array.from(allButtons);
const arrayWithNumberButtons = Array.from(allNumberButtons);
const arrayWithOperators = Array.from(allOperatorButtons);


var inputLineIndex = 0; 
var inputArray = [];

arrayWithNumberButtons.forEach(button => {
    button.addEventListener('click', userInputs);
});
arrayWithOperators.forEach(button => {
    button.addEventListener('click', nextPosInArray);
});
// equalButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteLastNumber);




// const add = (initialValue, valueToAdd) => initialValue + valueToAdd;
// const sub = (initialValue, valueToAdd) => initialValue - valueToAdd;
// const multiply = (initialValue, valueToAdd) => initialValue * valueToAdd;
// const divide = (initialValue, valueToAdd) => initialValue / valueToAdd;

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

// function operate(value1, operator, value2) {

//     if (operator === "+") { return add(value1, value2) }
//     if (operator === "-") { return sub(value1, value2) }
//     if (operator === "*") { return multiply(value1, value2) }
//     if (operator === "/") { return divide(value1, value2) }
// }
// create a function to display input on calculator screen

//TODO
//loop thrue all propertys in object and display.
const displayNumbers = (array => screenPara.textContent = array.join(""));

function createArrayElementFromInput(buttonValue){
   
    if(inputArray[inputLineIndex] === undefined){
        inputArray.push(buttonValue);
    }
    else {
        const newElementValue = inputArray[inputLineIndex] + buttonValue;
        inputArray[inputLineIndex] = newElementValue;
    }
} 

//function to store inputs from user
function userInputs() {
    createArrayElementFromInput(this.value);
    displayNumbers(inputArray);
}

function clearAll() {
    inputArray.length = 0;
    inputLineIndex = 0;
    screenPara.textContent = "";
    nextPosInArray();
}

function deleteLastNumber() {

    let lastElementValue = [...inputArray[inputLineIndex]];
    if(lastElementValue.length <= 0 && inputArray.length !== 1){ 
        inputArray.pop();
        inputArray.pop();
        inputLineIndex = inputLineIndex - 2; 
        displayNumbers(inputArray);
    }
    else {
        lastElementValue.pop();
    inputArray[inputLineIndex] = lastElementValue.join("");
    displayNumbers(inputArray);
    }
    

    
    
}

function nextPosInArray() {
    
    inputLineIndex++;
    inputArray.push(this.textContent);
    displayNumbers(inputArray);
    inputLineIndex++;
    console.log(inputArray);
};