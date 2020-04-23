var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
function oldEnough(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("They are of age to see Mad Max.")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("They are not of age to see Mad Max")
        }
    }
}
oldEnough();

console.log("--------------------------------------");

//Log to the console a personalized message
function oldEnoughName(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is of age to see Mad Max.")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not of age to see Mad Max")
        }
    }
}
oldEnoughName();

console.log("--------------------------------------");
//Check to see if the movie goer is a male or female for an even more personalized message
function oldEnoughNameAndGender(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "male"){
            var gender = "He";
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "female"){
            var gender = "She";
        };
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is of age to see Mad Max." + gender + "'s allowed into the movies.")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not of age to see Mad Max." + gender + "'s not allowed into the movies.")
        };
    }
}
oldEnoughNameAndGender();

console.log("--------------------------------------");
//Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
for (var i = 0; i < 101; i++){
    if (i % 2 == 0) {
        console.log("The number is even.")
    }else{
        console.log("The number is odd.")
    }
}