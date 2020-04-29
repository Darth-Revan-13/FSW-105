//Make a function that will return any given string into all caps followed by the same string all lowercase.
function capitalAndLowerCase(str) {
    var capitalAndLower = str.toUpperCase() + str.toLowerCase();
    return "Output: " + capitalAndLower;
}
console.log(capitalAndLowerCase("Hello"));

console.log("----------------------------------------------------------");
//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findMiddleIndex(str) {
    var stringMiddle = Math.floor(str.length / 2);
    return "Result: " + stringMiddle;
}
console.log(findMiddleIndex("Volbeat"));
console.log(findMiddleIndex("Five Finger Death Punch"));

console.log("----------------------------------------------------------");
//Make a function that uses slice() and the other functions you've written to return the first half of the string.
function slicingStrings(str) {
    var firstHalf = str.slice(0, 8);
    return "First Half: "
}
console.log(slicingStrings("Avenged Sevenfold"));

console.log("----------------------------------------------------------");
//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
function capitalizeAndLower(str) {
    var firstHalf = str.slice(0, 3);
    var secondHalf = str.slice(4, 7);
    var capitalizeFirstHalf = firstHalf.toUpperCase();
    return "Output: " + capitalizeFirstHalf + secondHalf;
}
console.log(capitalizeAndLower("Slipknot"));

console.log("----------------------------------------------------------");