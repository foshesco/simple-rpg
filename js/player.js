let player;

// Make dice on screen
// const playerRoll = Math.floor(Math.random() * 101);
// const enemyRoll = Math.floor(Math.random() * 101);

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
        // How do I set max health value?
        // const getPlayerHealthbar = document.getElementsByTagName("progress")[0].setAttribute("max", player.health);

        // Who attacks first?
        // getPlayerRoll = playerRoll;
        // getEnemyRoll = enemyRoll;
        getPlayerRoll = 100;
        getEnemyRoll = 0;

        console.log("Player roll: " + getPlayerRoll);
        console.log("Enemy roll: " + getEnemyRoll);

        // Player attacks
        let playerAttack = function () {

            // Base damage
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

            // Base damage
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
        let getPlayerLevelUp = document.querySelector(".enemy");

        // Initiate attacks

        // Player rolls higher than enemy and attacks
        if (getPlayerRoll >= getEnemyRoll) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            console.log('total player dmg: ' + totalDamage);

            console.log("player 1 moves forward");
            $("#playerimg")
                .stop(false, true)
                .animate({
                    marginRight: '-330px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 300);
            console.log("player 1 moves backwards");
            $("#playerimg")
                .stop(false, true)
                .animate({
                    marginRight: '330px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 1500);

            console.log("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            // alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                let getProceedScreen = document.querySelector(".proceed");
                $('.interface').fadeOut('slow');
                $('.arena').fadeOut('slow');
                $('.enemy').fadeOut('slow');
                $('.actions').fadeOut('slow');
                $('.header p').fadeOut('slow');
                console.log("fade out");
                $('.dead').fadeIn('slow');
                let getHomeTitle = document.querySelector(".home .end");
                getHomeTitle.innerHTML = "<div> Wow, you won... </div>"
                getProceedScreen.innerHTML = '<div class="title">Now go read a book.</div>';
                $('.home a')
                    .appendTo('.proceed')
                    .show('slow')
                    .animate({
                        fontSize: '70px',
                    }, 2000);

                // alert("You win! Refresh the browser to play again.");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else if (player.health < 50) {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                let getPlayerHealthbar = document.getElementsByClassName("playerhealthbar")[0];
                getPlayerHealthbar.innerHTML = getPlayerHealthbar.setAttribute("value", player.health);

                getPlayerLevelUp.innerHTML = '<div><button onclick="heal()" class="you.heal"> Heal </button> <button onclick="attack()" class="attack"> Increase Attack </button></div>';
                $('.enemy .heal').fadeIn('slow');
                $('.enemy .attack').fadeIn('slow');
                let you = {
                    heal: function () {
                        let getPlayerHealth = document.querySelector(".health-player");
                        getPlayerHealth.innerHTML = 'Health: ' + player.health + 30;
                        let getPlayerHealthbar = document.getElementsByClassName("playerhealthbar")[0];
                        getPlayerHealthbar.innerHTML = getPlayerHealthbar.setAttribute("value", player.health + 30);
                        return;
                    }
                }
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                let getEnemyHealthbar = document.getElementsByClassName("enemyhealthbar")[0];
                getEnemyHealthbar.innerHTML = getEnemyHealthbar.setAttribute("value", enemy.health);

                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                console.log('total enemy dmg: ' + totalDamage);

                // console.log("enemy 2 moves forward");
                // $("#enemyimg").animate({
                //     marginLeft: '-125px',
                //     marginTop: '-50px',
                //     height: '190px',
                //     width: '190px',
                // }, 500);
                // console.log("enemy 2 moves backwards");
                // $("#enemyimg").animate({
                //     marginLeft: '125px',
                //     marginTop: '-50px',
                //     height: '190px',
                //     width: '190px',
                // }, 1500);

                console.log("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

                // Do something here cooler than an alert
                // // alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    // Do something here cooler than an alert
                    let getProceedScreen = document.querySelector(".proceed");
                    $('.interface').fadeOut('slow');
                    $('.arena').fadeOut('slow');
                    $('.enemy').fadeOut('slow');
                    $('.actions').fadeOut('slow');
                    $('.header p').fadeOut('slow');
                    console.log("fade out");
                    $('.dead').fadeIn('slow');
                    let getHomeTitle = document.querySelector(".home .end");
                    getHomeTitle.innerHTML = "<div> Told you... </div>"
                    getProceedScreen.innerHTML = '<div class="title">You Lost. Go Home.</div>';
                    $('.home a')
                        .appendTo('.proceed')
                        .show('slow')
                        .animate({
                            fontSize: '70px',
                        }, 2000);

                    // alert("You lost! Refresh the browser to play again.");
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: 0';
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    let getPlayerHealthbar = document.getElementsByClassName("playerhealthbar")[0];
                    getPlayerHealthbar.innerHTML = getPlayerHealthbar.setAttribute("value", player.health);
                }
            }

            // Enemy rolls higher than player and attacks
        } else if (getEnemyRoll >= getPlayerRoll) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;

            console.log("enemy 1 moves forward");
            $("#enemyimg")
                .stop(false, true)
                .animate({
                    marginLeft: '-330px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 300);
            console.log("enemy 1 moves backwards");
            $("#enemyimg")
                .stop(false, true)
                .animate({
                    marginLeft: '330px',
                    marginTop: '-50px',
                    height: '190px',
                    width: '190px',
                }, 1500);

            console.log("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            // alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                let getProceedScreen = document.querySelector(".proceed");
                $('.interface').fadeOut('slow');
                $('.arena').fadeOut('slow');
                $('.enemy').fadeOut('slow');
                $('.actions').fadeOut('slow');
                $('.header p').fadeOut('slow');
                console.log("fade out");
                $('.dead').fadeIn('slow');
                let getHomeTitle = document.querySelector(".home .end");
                getHomeTitle.innerHTML = "<div> Told you... </div>"
                getProceedScreen.innerHTML = '<div class="title">You Lost. Go Home.</div>';
                $('.home a')
                    .appendTo('.proceed')
                    .show('slow')
                    .animate({
                        fontSize: '70px',
                    }, 2000);

                alert("You lose! Refresh the browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                let getPlayerHealthbar = document.getElementsByClassName("playerhealthbar")[0];
                getPlayerHealthbar.innerHTML = getPlayerHealthbar.setAttribute("value", player.health);

                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;

                // console.log("player 2 moves forward");
                // $("#playerimg").animate({
                //     marginRight: '-250px',
                //     marginTop: '-50px',
                //     height: '190px',
                //     width: '190px',
                // }, 500);
                // console.log("player 2 moves backwards");
                // $("#playerimg").animate({
                //     marginRight: '250px',
                //     marginTop: '-50px',
                //     height: '190px' ,
                //     width: '190px',
                // }, 1500);

                console.log("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                // alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    $('.interface').fadeOut('slow');
                    $('.arena').fadeOut('slow');
                    $('.enemy').fadeOut('slow');
                    $('.actions').fadeOut('slow');
                    $('.header p').fadeOut('slow');
                    console.log("fade out");
                    $('.dead').fadeIn('slow');
                    let getHomeTitle = document.querySelector(".home .end");
                    let getProceedScreen = document.querySelector(".proceed");
                    getHomeTitle.innerHTML = "<div> Wow, you won... </div>"
                    getProceedScreen.innerHTML = '<div class="title">Now go read a book.</div>';
                    $('.home a')
                        .appendTo('.proceed')
                        .show('slow')
                        .animate({
                            fontSize: '70px',
                        }, 2000);

                    // alert("You win! Refresh the browser to play again.");
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    let getEnemyHealthbar = document.getElementsByClassName("enemyhealthbar")[0];
                    getEnemyHealthbar.innerHTML = getEnemyHealthbar.setAttribute("value", enemy.health);
                }
            }
        }
    }
}