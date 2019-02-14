let gameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPrefight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 10, 50);
                break;
            case "Mage":
                player = new Player(classType, 100, 100, 250, 0, 100);
                break;
            case "Ranger":
                player = new Player(classType, 120, 0, 120, 15, 150);
                break;
            case "Rogue":
                player = new Player(classType, 80, 0, 100, 30, 150);
                break;
        }
        // player.health;
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<div class="player-stats"><h3>' + classType +
            '<h3><p><progress id="health-player" max="200" value="player.health" class="playerhealthbar">' + player.health +
            '</progress></p><p class="health-player"> Health: ' + player.health +
            '</p><p>Mana: ' + player.mana +
            '</p><p>Strength: ' + player.strength +
            '</p><p>Agility: ' + player.agility +
            '</p><p>Speed: ' + player.speed + '</p></div><img src="img/char/' +
            classType.toLowerCase() + '.png" id="playerimg" class="img-avatar">';

        // Works for max player health?
        let getPlayerHealthbar = document.querySelector(".playerhealthbar");
        getPlayerHealthbar.innerHTML = player.health;

    },
    setPrefight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an Enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setBattlefield()">Search for enemy!</a>';
        getArena.innerHTML = '<h3>Battle</h3>';
        getArena.style.visibility = "visible";
    },

    setBattlefield: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        // Create enemy!
        let enemy00 = new Enemy("Geonus", 150, 0, 100, 10, 50);
        let enemy01 = new Enemy("Death", 200, 0, 150, 20, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }

        // enemy.health;
        getHeader.innerHTML = '<p>Task: Get Ready!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Preparing Battlefield! Click When Ready...</a>';
        getEnemy.innerHTML = '<img src="img/enemy/' +
            enemy.enemyType.toLowerCase() + '.png" id="enemyimg" class="img-avatar"><div class="enemy-stats"><h3 class="classtype">' + enemy.enemyType +
            '<h3><p><progress id="health-enemy" max="200" value="enemy.health" class="enemyhealthbar"> Health: ' + enemy.health +
            '</progress></p><p class="health-enemy">Health: ' + enemy.health +
            '</p><p>Mana: ' + enemy.mana +
            '</p><p>Strength: ' + enemy.strength +
            '</p><p>Agility: ' + enemy.agility +
            '</p><p>Speed: ' + enemy.speed + '</p></div>';

        $(".interface .img-avatar").appendTo(".arena").show('slow').animate({
            marginRight: '290px',
            marginTop: '-50px',
            height: '190px',
            width: '190px',
        }, 3000);

        $(".interface .player-stats").appendTo(".enemy").show('slow').animate({
            bottom: '0px',
            marginRight: '250px'
        }, 3000);

        // $(getEnemy).animate({ opacity: 5 }, 5000);

        $(".enemy .img-avatar").appendTo(".arena").show('slow').animate({
            marginLeft: '290px',
            marginTop: '-190px',
            height: '190px',
            width: '190px'
        }, 5000);

        $(".enemy .enemy-stats").appendTo(".enemy").show('slow').animate({
            bottom: '0px',
            marginLeft: '250px'
        }, 3000);
    },

    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        getHeader.innerHTML = '<p>Task: Attack When Ready!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    },
}