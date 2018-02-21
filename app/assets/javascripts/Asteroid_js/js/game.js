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
		game.load.image("space", 'assets/space.png');
		
      game.load.spritesheet('ship', 'assets/spaceShip.png', 110, 170);
		game.load.spritesheet('laser', 'assets/lazer.png');
		game.load.spritesheet('asteroid', 'assets/asteroid.png', 64 , 64);
    },
	
	
    
    create: function () {
		//  We're going to be using physics, so enable the Arcade Physics system
    	game.physics.startSystem(Phaser.Physics.ARCADE);
		
		//background
		game.add.sprite(0, 0, 'space');
		
		//SHIP*
		//adding ship
        ship = game.add.sprite(32,game.world.height - 150 ,'ship');
		//scaling ship
		ship.scale.setTo(.3,.3);
		//SHIP* 
		
		//ASTEROID*
		asteroid = game.add.sprite(64, game.world.height - 150, 'asteroid');
		//asteroidGroup = game.add.group();
		
		//bullets
		
		//SHIP PHYSICS*
		//game.physics.add.enable(ship);
	   //Enable it for physics. This creates a default   rectangular body.
		game.physics.startSystem(Phaser.Physics.P2JS);

    	//  Bounce
		game.physics.p2.defaultRestitution = 0.8;
		game.physics.p2.enable(ship);
		ship.body.setZeroDamping();
		ship.body.fixedRotation = true;
		ship.anchor.setTo(0.5, 0.5)

		//designating arrow key input and space
    	cursors = game.input.keyboard.createCursorKeys();
		
		spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //  Stop the following keys from propagating up to the browser
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
       /*bullet = game.add.sprite(ship.body.width, ship.body.height, 'bullet');
		
		bullet.scale.setTo(.3,.3);
		
		bullet.body*/
		
		//fireLaser();
	game.add.text(0, 0, 'Hello World', {fill : 'white'});
    }
	else 
	{
		game.add.text(0, 0, 'No', {fill : 'white'});
	}
	

	},



/*  Called if the bullet goes out of the screen
resetBullet: function (bullet) {

    bullet.kill();

}*/
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
//var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
game.state.add(states.game, gameState);
game.state.start(states.game);