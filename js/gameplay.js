var pixiePatrol = new Phaser.Game(768, 640, Phaser.AUTO, '', {preload: preload, create: create, update: update, render: render});

function preload() {
  pixiePatrol.load.image('background', 'img/background.jpg');
  pixiePatrol.load.image('ground-tile', 'img/ground.png');
  pixiePatrol.load.image('character', 'img/character.png');
  pixiePatrol.load.tilemap('map', 'js/test.json', null, Phaser.Tilemap.TILED_JSON);

}

var map, layer, player, cursors;

function create() {
  map = pixiePatrol.add.tilemap('map');
  map.addTilesetImage('ground', 'ground-tile');
  layer = map.createLayer('ground');
  map.setCollisionBetween(1, 12);


  player = pixiePatrol.add.sprite (50, 50, 'character');
  pixiePatrol.physics.enable(player);
  player.body.bounce.set(0.6);
  player.body.tilePadding.set(64);

  pixiePatrol.camera.follow(player);
  pixiePatrol.physics.arcade.gravity.y = 200;

  cursors = pixiePatrol.input.keyboard.createCursorKeys();

}

function update() {
  pixiePatrol.physics.arcade.collide(player, layer);

    if (cursors.up.isDown) {
     player.body.velocity.y = -150;
   } else if (cursors.down.isDown) {
     player.body.velocity.y = 150;
   } else if (cursors.left.isDown) {
     player.body.velocity.x = -150;
   } else if (cursors.right.isDown) {
     player.body.velocity.x = 150;
   }
}

function render() {
  pixiePatrol.debug.bodyInfo(player, 32, 32);
}
