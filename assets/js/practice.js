// Player robot name and attributes

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log (playerName, playerHealth, playerAttack, playerMoney);

// Enemy robot name and attributes

var enemyName = ("Roborto");
var enemyHealth = 50;
var enemyAttack = 12;

// Welcome message

var fight = function () {
}

var promptFight = window.prompt ("Would you like to fight? You can choose to fight or skip");
if (promptFight === "FIGHT" || promptFight === "fight") {
    console.log ("fight");
    window.alert ("Welcome To Robot Gladiators!");

// If fight, Player robot attacks
enemyHealth = enemyHealth - playerAttack;
    console.log (enemyName + " was attacked by " + playerName + ".");
    console.log (enemyName + " now has " + enemyHealth + " health remaining. ");

// Check enemy health
if (enemyHealth <= 0) {
    window.alert ("Enemy robot has died");
} else (enemyHealth >= 0) 
    window.alert (enemyName + " still has " + enemyHealth + " health remaing.");

// Enemy robot counterattacks
playerHealth = playerHealth - enemyAttack;
    console.log (playerName + " was attacked by " + enemyName + ".");
    console.log (playerName + " now has " + playerHealth + " health remaining. ");

// Check Player health
if (playerHealth <= 0) {
    window.alert ("Player's robot has died")
}else (playerHealth >= 0) 
    window.alert (playerName + " still has " + playerHealth + " health left. ");
}
// End of fight sequence

// If player chooses to skip
else if (promptFight === "SKIP" || promptFight === "skip") {
    window.alert(playerName + " has chosen to skip ");
    var confirmSkip = window.confirm(playerName + " Are you sure? ");
}
if (confirmSkip) {
    window.alert(playerName + " has skipped this match and forfeits two coins. ");
    console.log(playerMoney = playerMoney - 2 + " coins left for " + playerName);
}
//else if 
//    window.alert("You must choose another option."

