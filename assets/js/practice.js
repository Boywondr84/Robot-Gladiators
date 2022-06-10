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
        while(enemyHealth > 0 && playerHealth > 0) {
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
        window.alert(enemyName + " has died");
        console.log(playerMoney = playerMoney + 20);
        window.alert(playerName + " earned 20 coins!");
        break;
    } else {
        console.log(enemyName + " now has " + enemyHealth + " health remaining ");
    }
    
//Enemy attacks
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". ");
    
//Player health check
    if (playerHealth <= 0) {
        window.alert(playerName + " has died");
        break;
    } else { 
        console.log(playerName + " now has " + playerHealth + " health remaining ");}
//If player skips
    }else if (promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log(playerName + " now has " + playerMoney + " coins left.");
            break;
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
    if (playerHealth > 0) {
        window.alert("Welcome To Robot Gladiators!! Round " + ( i + 1 )); 
    }else {
        window.alert(playerName + " has been defeated! GAME OVER! ");
        break;
    }
        //debugger;
        fight(pickedEnemyName);
}