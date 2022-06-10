// Player robot name and attributes

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

// Enemy robot name and attributes

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//console.log(enemyNames, enemyHealth, enemyAttack);

//Function expression
    var fight = function(enemyName) {
        //window.alert("Welcome To Robot Gladiators!!");
        while(enemyHealth > 0) {
    //console.log("success");
    


    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //console.log(promptFight);
    if (promptFight === "FIGHT" || promptFight === "fight") 
{
//continue with code
//Player attacks
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". ");
    
//Enemy health check
    if (enemyHealth <= 0) {
        console.log(enemyName + " has died");
    } else {
        console.log(enemyName + " now has " + enemyHealth + " health remaining ");
    }
    
//Enemy attacks
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". ");
    
//Player health check
    if (playerHealth <= 0) {
        console.log(playerName + " has died");
    } else { 
        console.log(playerName + " now has " + playerHealth + " health remaining ");}
//If player skips
    }else if (promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
            console.log(playerName + " now has " + playerMoney + " coins left.");
        }else {//cancelling confirmSkip window
            fight();
        }
    }else {
    window.alert("You need to choose a valid option. Try again."); {
        fight();
        }
    }
    
    }

};

// Function Loop called
    for (i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        //debugger;
        fight(enemyNames[i]);
}