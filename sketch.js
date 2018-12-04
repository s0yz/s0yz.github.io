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
  game.snake.turn(keyCode);
}