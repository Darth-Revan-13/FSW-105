const readlineSync = require('readline-sync');
const name = readlineSync.question('Please type your name: ');
readlineSync.question('Hello ' + name +", Welcome to Dragon Invasion. Press ENTER to begin your adventure!");
// Enemies //
let dragonLord = {
    name = "Dragon Lord",
    health = 250,
    power = Math.floor(Math.random() * (110) + 40)
};
let dragon = {
    name = "Dragon",
    health = 150,
    power = Math.floor(Math.random() * (70) + 20)
};
let lesserDragon = {
    name = "Lesser Dragon",
    health = 100,
    power = Math.floor(Math.random() * (70) + 15)
};
let babyDragon = {
    name = "Baby Dragon",
    health = 60,
    power = Math.floor(Math.random() * (50) + 10)
};
let bandit = {
    name = "Bandit",
    health = 40,
    power = Math.floor(Math.random() * (40) + 5)
};
const enemies = [dragonLord, dragon, lesserDragon, babyDragon, bandit];
const treasure = ['Gold', 'Health Potion', 'Relic', 'Weapons', 'Nothing'];
var prize = [];
let userHealth = 100;
const options = ['Walk north', 'Walk Left', 'Walk Right', 'Walk backwards', 'Exit', 'Inventory'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];
// Game Start //
function game(){
    let arr = enemies;
    const attackPower = Math.floor(Math.random() * (50) + 10);
    const enemies = enemies[Math.floor(Math.random() * enemies.length)];
    // let enemiesHealth.arr[4] = 40;
    // let enemiesHealth.arr[3] = 60;
    // let enemiesHealth.arr[2] = 100;
    // let enemiesHealth.arr[1] = 150;
    // let enemiesHealth.arr[0] = 250;
    // const enemiesPower.arr[4] = Math.floor(Math.random() * (40) + 5);
    // const enemiesPower.arr[3] = Math.floor(Math.random() * (50) + 10);
    // const enemiesPower.arr[2] = Math.floor(Math.random() * (70) + 15);
    // const enemiesPower.arr[1] = Math.floor(Math.random() * (70) + 20);
    // const enemiesPower.arr[0] = Math.floor(Math.random() * (110) + 40);

    const index = readlineSync.keyInSelect(options, 'What will you do?');

    if (options[index] == 'Exit') {
        console.log("Thanks for playing, Dragon Invasion!");
        return userHealth = 0;
    } else if (options[index] == 'Inverntory') {
        console.log(name + ': \n' + userHealth + '\nTreasure' + pickUp);
    } else if (options[index] == 'Walk north') {
        let key = Math.random();
        if (key <= .3) {
            console.log('You continue walking without running into anything...');
        }else if (key >= .3) {
            console.log("You ran into a " + enemies.name + "!");
            while(enemiesHealth > 0 && userHealth > 0) {
                const user = readlineSync.question('What are you going to do? Enter "r" to flee or  "a" to attack: ');
                switch (user){
                    case  'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log('You failed to flee and ' + enemies.name + ' attacked you for ' + enemies.power);
                        } else {
                            console.log('You successfully escaped!');
                            break;
                        }
                    case 'a':
                        enemies.health -= attackPower;
                        console.log('You attacked ' + enemies.name + ' for ' + attackPower + '!');
                        userHealth -= enemies.power;
                        console.log(enemies.name + ' attacked you for ' + enemies.power + '!');
                        console.log('Opponents health: ' + enemie.health + '\n' + 'Your health: ' + userHealth);
                        if (enemies.health <= 0){
                            console.log('You defeated a ' + enemies.name + '!');
                            let loot = Math.random();
                            if (loot <= .4){
                                prize.push(pickUp);
                                console.log('You found ' + pickUp + '!');
                            }
                        } else if(userHealth <= 0){
                            console.log(enemies.name + ' has deafeated you. \n You Died...');
                        }
                }
            }
        }
    }
}
while (userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 100;
    };
    userRestore();
    game();
}