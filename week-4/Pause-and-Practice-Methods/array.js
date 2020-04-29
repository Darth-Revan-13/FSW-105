var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//Remove the last item from the vegetable array.
function arrayPractice() {
    //Remove the last item from the vegetable array.
    vegetables.pop();
    console.log("Vegetables Array: " + vegetables);
    //Remove the first item from the fruit array.
    fruit.shift();
    console.log("Fruit Array" + fruit);
    //Find the index of "orange."
    var orangeIndex = fruit.indexOf("orange");
    console.log(orangeIndex);
    //Add that number to the end of the fruit array
    var addNumberToEnd = fruit.push(orangeIndex);
    console.log(addNumberToEnd);
    //Use the length property to find the length of the vegetable array.
    var lengthOfVegetableArray = vegetables.length;
    console.log(lengthOfVegetableArray);
    //Add that number to the end of the vegetable array.
    var addLengthToEnd = vegetables.push(lengthOfVegetableArray);
    console.log(addLengthToEnd);
    //Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);
    console.log(food);
    //Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);
    console.log(food);
    //Reverse your array.
    food.reverse();
    console.log(food);
    //Turn the array into a string and return it.
    food.join();
    return food;
}

console.log(arrayPractice);
console.log("-----------------------------------------------------------");