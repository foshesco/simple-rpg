let player;

const playerRoll = Math.floor(Math.random() * 101);
const enemyRoll = Math.floor(Math.random() * 101);

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        // Who attacks first?
        getPlayerRoll = playerRoll;
        getEnemyRoll = enemyRoll;
        console.log("Player roll: " + getPlayerRoll);
        console.log("Enemy roll: " + getEnemyRoll);

        // Player attacks
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                calcBaseDamage = player.strength * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 / 2) + 1);
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Enemy attacks
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 / 2) + 1);
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        // Get player and enemy health
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        if (getPlayerRoll >= getEnemyRoll) {
            playerFirst = function () {
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;

                console.log("player moves1");
                $("#player-img").animate({
                    marginRight: '-250px',
                    marginTop: '-10px',
                    height: '190px',
                    width: '190px',
                }, 500);
                console.log("player moves1");
                $("#player-img").animate({
                    marginRight: '250px',
                    marginTop: '-10px',
                    height: '190px',
                    width: '190px',
                }, 1500);

                console.log("timeout 3, 2, 1...")

                // alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    alert("You win! Refresh the browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
            enemySecond = function () {
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;

                console.log("enemy moves1");
                $("#enemyimg").animate({
                    marginLeft: '-125px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 500);
                console.log("enemy moves1");
                $("#enemyimg").animate({
                    marginLeft: '125px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 1500);

                // // alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lost! Refresh the browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        else if (getEnemyRoll >= getPlayerRoll) {
            enemyFirst = function () {
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;

                console.log("enemy moves2");
                $("#enemyimg").animate({
                    marginLeft: '-125px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 500);
                console.log("enemy moves2");
                $("#enemyimg").animate({
                    marginLeft: '125px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 1500);

                console.log("timeout 3, 2, 1...")

                // alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lose! Refresh the browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }

            playerSecond = function () {
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;

                console.log("player moves2");
                $("#player-img").animate({
                    marginRight: '-250px',
                    marginTop: '-10px',
                    height: '190px',
                    width: '190px',
                }, 500);
                console.log("player moves2");
                $("#player-img").animate({
                    marginRight: '250px',
                    marginTop: '-10px',
                    height: '190px',
                    width: '190px',
                }, 1500);

                // alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    alert("You win! Refresh the browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }
}