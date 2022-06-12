//GAME FUNCTIONS
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


// Player robot name and attributes
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        this.health += 20;
        this.money -+ 7;
        if (this.money >= 7) {
            window.alert("REFILL player's health by 20 for 7 coins.");
            this.health += 20;
            this.money -= 7;
        }else {
            window.alert("You don't have enough money.");
        }
    },
    upgradeAttack: function () {
        this.attack += 6;
        this.money -= 7;
        if (this.money >= 7) {
            window.alert("UPGRADE player's attack by 6 for 7 coins.");
            this.attack += 6;
            this.money -= 7;
        }else {
            window.alert("You don't have enough money.");
        }
    }
};
console.log(playerInfo);

// Enemy robot name and attributes
var enemyInfo = [
{
    name: "Roborto", 
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber (10, 14)
}
];

//console.log(enemyNames, enemyHealth, enemyAttack);

//Function expression

var fight = function(enemy) {
    
    //window.alert("Welcome To Robot Gladiators!!");
    while (enemy.health > 0 && playerInfo.health > 0) {
        //console.log("success");



        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //console.log(promptFight);
        if (promptFight === "FIGHT" || promptFight === "fight") {
            //continue with code
            //Player attacks
            //Generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + ". ");

            //Enemy health check
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died");
                console.log(playerInfo.money = playerInfo.money + 20);
                window.alert(playerInfo.name + " earned 20 coins!");
                break;
            } else {
                console.log(enemy.name + " now has " + enemy.health + " health remaining ");
            }

            //Enemy attacks
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". ");

            //Player health check
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has been defeated! GAME OVER! ");
                break;
            } else {
                console.log(playerInfo.name + " now has " + playerInfo.health + " health remaining ");
            }
            //If player skips
        } else if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you want to quit?");
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log(playerInfo.name + " now has " + playerInfo.money + " coins left.");
                break;
            } else {//cancelling confirmSkip window
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again."); {
                fight();
            }
        }
    }
};
var startGame = function () { //debugger
    //reset player stats
    playerInfo.reset();

    for (i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome To Robot Gladiators!! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            
            //If not at final enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over. Visit the store before the next fight?");
            //If yes,
            if (storeConfirm) {
            shop();
            }
        }
        }else {
            //window.alert("You have lost your robot in battle!");
            break;
        }
    }

endGame();
};

//end game
var endGame = function() {
    window.alert("The game has ended, let's see how you did!");
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You have " + playerInfo.money + " coins left.");
    }else {
        window.alert("You've lost your robot in battle.");
    }
    //would you like to play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }else {
        window.alert("Thank you for playing.");
    }
};
//Shop logic
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to choose.");
// Switch statement
    switch (shopOptionPrompt) {
        case "refill": // new case
        case "REFILL":
            playerInfo.refillHealth();
            break;
        
        case "upgrade": // new case
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
            
        case "leave": // new case
        case "LEAVE":
            window.alert("LEAVE the store");
        // do nothing, function ends
        break;
        default:
            window.alert("You did not pick a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
    };

startGame();