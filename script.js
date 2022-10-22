const allButtons = document.querySelectorAll('.buttons');
const screen = document.querySelector('#screen');
const equalButton = document.querySelector('#equal');
const arrayWithButtons = Array.from(allButtons);

var input = [];

arrayWithButtons.forEach(button => {
    button.addEventListener('click', userInputs);
});
equalButton.removeEventListener('click', userInputs);
equalButton.addEventListener('click', userInputs);






//create add function
const add = (initialValue, valueToAdd) => initialValue + valueToAdd;

//create subtract function
const sub = (initialValue, valueToAdd) => initialValue - valueToAdd;
    
//create multiply function
const multiply = (initialValue, valueToAdd) => initialValue * valueToAdd;

//create divide function
const divide = (initialValue, valueToAdd) => initialValue / valueToAdd;

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

const operate = function (value1, operator, value2){
    if(operator === "+"){return add(value1, value2)}
    if(operator === "-"){return sub(value1, value2)}
    if(operator === "*"){return multiply(value1, value2)}
    if(operator === "/"){return divide(value1, value2)}
}
// create a function to display input on calculator screen
function displayNumbers(){
    screen.textContent = input;
}

//function to store inputs from user
function userInputs() {
    input.push(this.textContent);

    displayNumbers();

}