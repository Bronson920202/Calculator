var val1 = 100;
var val2 = 200;
var oper = "*";



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
//function to store inputs from user
