let game;

function setup() {
  createCanvas(CAN_W, CAN_H);
  frameRate(FRAMERATE);
  game = new Game();
  strokeWeight(2);
}

function draw() {
  background(0);
  game.show();
  game.update();
}

function keyReleased() {
  switch(keyCode) {
	case vkLEFT:
  	case vkUP:
	case vkRIGHT:
  	case vkDOWN:
	  game.snake.turn(keyCode);
	  break;
  }  
}

function mousePressed() {
	if (!game.isStarted)
	  game.restart();
}