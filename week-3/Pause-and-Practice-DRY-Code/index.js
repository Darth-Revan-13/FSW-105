//Write a function that accepts two numbers as parameters, and returns the sum.
function addingTwoNumbers(num1, num2){
    return num1 + "+" + num2 + "=" + (num1 + num2);
}
addingTwoNumbers();
console.log("-------------------------------");
//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNumber(num1, num2, num3){
    var largest = Math.max(num1, num2, num3);
    return largest;
}
largestNumber();
console.log("-------------------------------");
//Write a function that accepts one number as a parameter, and returns whether that number is even or odd.
function EvenOrOdd(){
    for (var i = 0; i < 101; i++){
        if (i % 2 == 0) {
            console.log("The number is even.")
        }else{
            console.log("The number is odd.")
        }
    }
}
EvenOrOdd();
console.log("-------------------------------");
//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
