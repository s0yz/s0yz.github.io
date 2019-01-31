class Game {
  constructor(w, h) {
    this.snake = new Snake(X_START, Y_START);
		this.froot = new Froot();
    this.score = 0;
    this.isStarted = false;
    this.first = true;
  }
}

Game.prototype.update = function() {
  if (this.isStarted) {
    if (frameCount % 4 == 0) {
      this.snake.update();
      if (!this.snake.alive)      
        this.isStarted = this.first = false;
      else if (this.snake.isAt(this.froot.pos)) {
        this.score += 5;
        this.snake.grow();
        this.moveFroot();
      }
    }
  }
}

Game.prototype.show = function() {
  this.froot.show();
	this.snake.show();
  this.showScore();
  if (!this.isStarted) {
    this.showMessage();
  }
}

Game.prototype.showScore = function() {
  textSize(SCORE_SIZE);
  textFont(SCORE_FONT);
  textAlign(LEFT);
  stroke(0, 1024, 0, 512);
  strokeWeight(1);
  fill(0, 0, 1024, 702);
  text(this.score, SCORE_X, SCORE_Y);
}

Game.prototype.restart = function() {
  this.isStarted = true;
  this.snake = new Snake(X_START, Y_START);
  this.moveFroot();
  this.score = 0;
}

Game.prototype.moveFroot = function() {
  do this.froot.randomPos();
  while (this.snake.isThere(this.froot.pos));
}

Game.prototype.showMessage = function() {
  textSize(40);
  textFont(40);
  textAlign(CENTER, CENTER);
  stroke(0, 1024, 0, 512);
  strokeWeight(1);
  fill(0, 0, 1024, 992);
  let action = this.first ? "start" : "restart";
  text("Click to " + action, CAN_W * 0.5, CAN_H * 0.5);
}
