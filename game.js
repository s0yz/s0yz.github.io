class Game {
  constructor(w, h) {
    this.snake = new Snake(X_START, Y_START);
		this.froot = new Froot();
    this.score = 0;
  }
}

Game.prototype.update = function() {
	this.snake.update();
  if (!this.snake.alive)
  	this.restart();
	else if (this.snake.isAt(this.froot.pos)) {
  	this.score += 5;
    this.snake.grow();
  	this.moveFroot();
  }
}

Game.prototype.show = function() {
  this.froot.show();
	this.snake.show();
  this.showScore();
}

Game.prototype.showScore = function() {
  textSize(SCORE_SIZE);
  textFont(SCORE_FONT);
  fill(255, 255, 255);
  text(this.score, SCORE_X, SCORE_Y);
}

Game.prototype.restart = function() {
  textSize(SCORE_SIZE);
  fill(255, 255, 255);
  this.snake = new Snake(X_START, Y_START);
  this.moveFroot();
  this.score = 0;
}

Game.prototype.moveFroot = function() {
  do this.froot.randomPos();
  while (this.snake.isThere(this.froot.pos));
}
  