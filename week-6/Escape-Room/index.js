var readlineSync = require('readline-sync');

const playerName = readlineSync.question('Please enter your name: ');
const introduction = 'Welcome ' + $(playerName) + ' to the Escape Room' ;
console.log(introduction);

let isAlive = true;
let hasKey = false;

while(isAlive == true)
{
    const menuOptions = readlineSync.keyIn('Enter 1 to put hand in hole. /n Enter 2 to search room for key. /n Enter 3 to search your person. /n Enter 4 to open the door.', {limit: '$<1-4>'});
    if (menuOptions == 1)
    {
        console.log("You Died..."); //insert Dark Souls death screen here
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false)
    {
        console.log("You search the room for hours and find a note reading: 'What you seek has been with you the entire time'");
    }
    else if (menuOptions == 2 && hasKey == true)
    {
        console.log("Even though you already have the key, you search the room again, spending hours looking for who knows what.");
    }
    else if (menuOptions == 3 && hasKey == false)
    {
        console.log("After searching your person, you find the key hidden in your pocket. How did that get there?");
        hasKey = true;
    }
    else if (menuOptions == 3 && hasKey == true)
    {
        console.log("Okay, thats it. I am taking your key away...");
        console.log("The key vanishes from your hands.");
        hasKey = false;
    }
    else if (menuOptions == 4 && hasKey == false)
    {
        console.log("You try to open the door but nothing happens.");
    }
    else if (menuOptions == 4 && hasKey == true)
    {
        console.log("You insert the key in the door and it is now unlocked. As you open the door you hear a click followed by a loud bang. You are now dead but also are the winner so YAY!!!");
        isAlive = false;
    }
}