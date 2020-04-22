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