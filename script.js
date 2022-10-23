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


var inputLineIndex = 1; 
var inputObjects = {

    1 : [],
}; 

arrayWithAllButtons.forEach(button => {
    button.addEventListener('click', userInputs);
});
arrayWithOperators.forEach(button => {
    button.addEventListener('click', createNewArray);
});
equalButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearAll);
deleteButton.removeEventListener('click', userInputs);
deleteButton.addEventListener('click', deleteLastNumber);




const add = (initialValue, valueToAdd) => initialValue + valueToAdd;
const sub = (initialValue, valueToAdd) => initialValue - valueToAdd;
const multiply = (initialValue, valueToAdd) => initialValue * valueToAdd;
const divide = (initialValue, valueToAdd) => initialValue / valueToAdd;

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

function operate(value1, operator, value2) {

    if (operator === "+") { return add(value1, value2) }
    if (operator === "-") { return sub(value1, value2) }
    if (operator === "*") { return multiply(value1, value2) }
    if (operator === "/") { return divide(value1, value2) }
}
// create a function to display input on calculator screen
function displayNumbers(array) {
    let removeCommas;
    removeCommas = array.join("");
   return screenPara.textContent = removeCommas;


}

//function to store inputs from user
function userInputs(index) {
    if (inputObjects["1"].length >= 20) return;
    inputObjects["1"].push(this.textContent);

    displayNumbers(inputObjects["1"]);

}

function clearAll() {
    for(obj in inputObjects){
        if(inputObjects.hasOwnProperty(obj)){
            delete inputObjects[obj];
        }
    }
    inputLineIndex = 0;
    screenPara.textContent = "";
    createNewArray();
}

function deleteLastNumber() {
    inputObjects["1"].pop();
   return displayNumbers(inputObjects["1"]);
}

function createNewArray() {
    inputLineIndex++;
    const convertToString = inputLineIndex.toString();
    inputObjects[convertToString] = [];
    console.log(inputObjects);
}