//.filter
//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function greaterThanFive(arr) {
    const result = arr.filter(function(num){
        if (num >= 5) {
            return num;
    }});
    return result;
}

console.log(">-----------.filter Stuff-----------<");

console.log("Output 1: [" + greaterThanFive([3, 6, 8, 2]) + "]");

//Given an array of numbers, return a new array that only includes the even numbers.
function evenNumbers(arr) {
    const result = arr.filter(function(num) {
        if (num % 2 == 0) {
            return num;
    }});
    return result;
}

console.log("Output 2: [" + evenNumbers([3, 6, 8, 2]) + "]");

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function string(arr) {
    const result = arr.filter(function(str) {
        if (str.length <= 5) {
            return str;
    }});
    return result;
}

console.log("Output 3: [" + string(["dog", "wolf", "by", "family", "eaten", "camping"]));

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleInTheIlluminati(arr) {
    const result = arr.filter(function(str) {
        if (peopleInTheIlluminati.member == true) {
            return arr;
    }});
    return result;
}

console.log("Output 4: [" + peopleInTheIlluminati([{name: "Angelina Jolie", member: true}, {name: "Eric Jones", member: false}, {name: "Paris Hilton", member: true}, {name: "Kayne West", member: false}, {name:"Bob Ziroll", member: true}]) + "]");

//Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

function peopleOfAge(arr) {
    const result = arr.filter(function(str) {
        if (peopleOfAge.age >= 18) {
            return arr;
    }});
    return result;
}

console.log("Output 5: [" + peopleOfAge([{name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}]));

//.map stuff
//Make an array of numbers that are doubles of the first array
function doublingNumbers(arr) {
    const result = arr.map(function(num) {
        return num * 2;
    });
    return result;
}

console.log(">-----------.map Stuff-----------<")

console.log("Output 1: [" + doublingNumbers([2, 5, 100]) + "]");

//Take an array of numbers and make them strings
function numberToString(arr) {
    const result = arr.map(String);
    return result;
}

console.log("Output 2: [" + numberToString([2, 5, 100]));

//Capitalize each of an array of names
function capitalization(arr) {
    const result = arr.map(toUpperCase());
    return result;
}

console.log("Output 3: [" + capitalization(["john", "JACOB", "jinGleHeimer", "schmidt"]) + "]");

//Make an array of strings of the names
function names(arr) {
    return names.name;
}

console.log("Output 4: [" + names([{name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}]) + "]");

//Make an array of strings of the names saying whether or not they can go to The Matrix
function movieStrings(arr) {
    const result = arr.map(function() {
        if (movieStrings.age >= 18) {
            var ofAge = "is of age to see The Matrix.";
        } else if (movieStrings.age < 18) {
            var ofAge = "is not of age to see The Matrix.";
    }});
}

console.log("Output 5: [" + movieStrings.name([{name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}]) + ofAge + "]");

//Make an array of the names in h1s, and the ages in h2s
function h1h2(arr) {
    const result = arr.map(function(obj) {
        return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>";
    });
    return result;
}

console.log("Output 6: [" + h1h2([{name: "Angelina Jolie", age: 80}, {name: "Eric Jones", age: 2}, {name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}]) + "]");

//.reduce() Stuff
//Turn an array of numbers into a total of all the numbers
function totalOfArray(arr) {
    const result = arr.reduce(function(finalAddition, num) {
        finalAddition = finalAddition + num;
        return finalAddition;
    });
    return result;
}

console.log(">-----------.reduce stuff-----------<");
console.log("Output 1: [" + totalOfArray([1, 2, 3]) + "]");

//Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    const result = arr.reduce(arr.toString());
    return result;
}

console.log("Output 2: [" + stringConcat([1, 2, 3]));

//Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:"Bob", age: 30, voted: true},
    {name:"Jake", age: 32, voted: true},
    {name:"Kate", age: 25, voted: false},
    {name:"Sam", age: 20, voted: false},
    {name:"Phil", age: 21, voted: true},
    {name:"Ed", age: 55, voted: true},
    {name:"Tami", age: 54, voted: true},
    {name:"Mary", age: 31, voted: false},
    {name:"Becky", age: 43, voted: false},
    {name:"Joey", age: 41, voted: true},
    {name:"Jeff", age: 30, voted: true},
    {name:"Zack", age: 19, voted: false}
];
function totalVoters(arr) {
    const result = voters.reduce(function(final, voters) {
        if(voter.voted) {
            final++
        }
        return final;
    }, 0);
    return result;
}

console.log("Output 3: " + totalVoters(voters));

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky sack", price: 5},
    {title: "Gold fidget spinner", price: 2000},
    {title: "Second Tesla Model S", price: 90000}
]
function totalCost(arr) {
    const result = 
}