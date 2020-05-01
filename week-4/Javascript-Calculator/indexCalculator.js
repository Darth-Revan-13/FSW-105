const readlineSync = require('readline-sync');

var numOne = readlineSync.questionInt("Enter first number: ");
var numTwo = readlineSync.questionInt("Enter second number: ");
var operationRequested = readlineSync.question("Select an operation: add, sub, mul, div, quit? ");
//Operations

//Add
function addingTwoNumbers(num1, num2){
    return num1 + "+" + num2 + "=" + (num1 + num2);
}
//Subtract
function subtractingTwoNumbers(num1, num2){
    return num1 + "-" + num2 + "=" + (num1 - num2);
}
//Multiply
function multiplyingTwoNumbers(num1, num2){
    return num1 + "*" + num2 + "=" + (num1 * num2);
}
//Divide
function dividingTwoNumbers(num1, num2){
    return num1 + "/" + num2 + "=" + (num1 / num2);
}
//Calculator
if (operationRequested == "add") {
    console.log("Your Result: " + addingTwoNumbers(numOne, numTwo));
} else if(operationRequested == "sub") {
    console.log("Your Result: " + subtractingTwoNumbers(numOne, numTwo));
} else if(operationRequested == "mul") {
    console.log("Your Result: " + multiplyingTwoNumbers(numOne, numTwo));
} else if(operationRequested == "div") {
    console.log("Your Result: " + dividingTwoNumbers(numOne, numTwo));
} else if(operationRequested == "quit") {
    console.log("Thank you for using this calculator.");
}