var gameProperties = {
    screenWidth: 640,
    screenHeight: 360,
};

var states = {
    game: "game",
};


var gameState = function(game){
	
	

};

gameState.prototype = {

	
    preload: function () {
		game.load.image("space", 'images/space.png');
		
    game.load.spritesheet('ship', 'images/spaceShip.png', 110, 170);
		game.load.spritesheet('laser', 'images/lazer.png');
		game.load.spritesheet('asteroid', 'images/asteroid.png', 64 , 64);
    },
	
	
    
    create: function () {
    	game.physics.startSystem(Phaser.Physics.ARCADE)
		game.add.sprite(0, 0, 'space');


        ship = game.add.sprite(32,game.world.height - 150 ,'ship');

		ship.scale.setTo(.3,.3);

		

		asteroid = game.add.sprite(64, game.world.height - 150, 'asteroid');


		game.physics.startSystem(Phaser.Physics.P2JS);

		game.physics.p2.defaultRestitution = 0.8;
		game.physics.p2.enable(ship);
		ship.body.setZeroDamping();
		ship.body.fixedRotation = true;
		ship.anchor.setTo(0.5, 0.5)


    	cursors = game.input.keyboard.createCursorKeys();
		
		spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);
	
    
	},


    update: function () {
		
	//SHIP MOVEMENT
	ship.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
    	ship.body.moveLeft(400);
    }
    else if (cursors.right.isDown)
    {
    	ship.body.moveRight(400);
    }

    if (cursors.up.isDown)
    {
    	ship.body.moveUp(400);
    }
    else if (cursors.down.isDown)
    {
    	ship.body.moveDown(400);
    }
		
	if (spaceKey.isDown)
    {
		
	game.add.text(0, 0, 'Hello World', {fill : 'white'});
    }
	else 
	{
		game.add.text(0, 0, 'No', {fill : 'white'});
	}
	

	},




};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);