

function gameStart() {
	
	var game = new Phaser.Game(600, 600, Phaser.CANVAS, '', {preload: preload, create: create, update: update});
	
	var ship;
	//var fireButton;
	var weapon;
	
	// preload our assets such as images/sounds
	function preload() {
		game.load.image('spaceship', 'assets/images/spaceship.png');
		game.load.image('laser', '../images/laser.png');
		
		
	} // end preload()
	
	// create our assets
	function create() {
		
		
		//ship = createSpaceship(game.world.centerX, 400); // start point for spaceship
		ship = game.add.sprite(game.world.centerX, game.world.height - 100, 'spaceship'); // 
		ship.anchor.setTo(0.5, 0.5);
		ship.scale.setTo(0.5, 0.5);
		//ship.body.collideWorldBounds = true;
		
		
		weapon = game.add.weapon(10, 'laser');
		weapon.fireRate = 400;
		weapon.bullets.setAll('scael.x', 0.5);
		weapon.bullets.setAll('scael.y', 0.5);
		
		//weapon.bullets.scale.setTo(0.2, 0.2);
		weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
		weapon.bulletSpeed = 500;
		weapon.bulletAngleOffset = 90;
		weapon.trackSprite(ship, 0, 0);
		
	} // end create()
	
	
	function update() {
		
		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			
			ship.x -= 4;
			
		} if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			
			ship.x += 4;
			
		} if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			
			ship.y -= 4;
			
		} if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			
			ship.y += 4;
			
		} if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			
			
			weapon.fire();
		
		}
		
	} // end update()
	
	
	
	function createBullet() {
	  // weapon is a built in method
	  // http://phaser.io/docs/2.4.9/Phaser.Weapon.html
		weapon = game.add.weapon(10, 'laser');
		weapon.fireFrom.set(this.ship.x, this.ship.y);
		// these methods won't work for weapon, they should for sprites
		//weapon.anchor.setTo(0.5, 0.5);
		//weapon.scale.setTo(0.5, 0.5);
		weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS; // deletes the bullet after it goes out of bounds
		weapon.bulletSpeed = 400;
		weapon.bulletAngleOffset = 90; // rotates the image of the bullet
		weapon.trackSprite(this.ship, 14, 0); // position bullet fires from
		
	}
	
	
	// methods we will use for our game
	
	
	
} // end of gameStart()