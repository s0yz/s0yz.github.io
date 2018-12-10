class Snake {
	constructor(x, y) {
    this.dir = createVector(0, -1);
    this.head = createVector(x, y);
    this.body = [ this.head ];
    this.alive = true;
  }
}

Snake.prototype.pos = function(i) {
  return p5.Vector.mult(this.body[i], SCALE);
}

Snake.prototype.show = function() {
  fill(75, 255, 75);
  stroke(0, 50, 0);
  strokeWeight(2);
  for (i = 0; i < this.body.length; i++) {
    rect(this.pos(i).x, this.pos(i).y, SCALE, SCALE);
  }
}

Snake.prototype.update = function() {
  let head = p5.Vector.add(this.head, this.dir);
  for (i = this.body.length - 1; i > 0 ; i--) {
    this.body[i].set(this.body[i - 1]);
    if (head.equals(this.body[i]))
      this.alive = false;
  }
  this.head.add(this.dir);
  if (this.isOut())
    this.alive = false;
}

Snake.prototype.grow = function() {
  this.body.push(createVector(this.dir));
}

Snake.prototype.turn = function(dir) {
  let next_dir = createVector(0, 0);
  switch(keyCode) {
    case vkLEFT:
      next_dir.x = -1;
      break;
  	case vkUP:
      next_dir.y = -1;
      break;
    case vkRIGHT:
      next_dir.x = 1;
      break;
    case vkDOWN:
      next_dir.y = 1;
      break;
  }
  if (next_dir != 0 && this.canTurn(next_dir)) {
    this.dir.set(next_dir);
  }
}

Snake.prototype.canTurn = function(dir) {
  return !p5.Vector.add(this.dir, dir).equals(VECTOR00);
}

Snake.prototype.isAt = function(pos) {
  return this.head.equals(pos);
}

Snake.prototype.isThere = function(pos) {
  let there = false;
  for (i = 0; i < this.body.length && !there; i++) {
    there = pos.equals(this.body[i]);
  }
  return there;
}

Snake.prototype.isOut = function() {
 return this.head.x < X_MIN || this.head.x >= X_MAX ||
        this.head.y < Y_MIN || this.head.y >= Y_MAX;
}