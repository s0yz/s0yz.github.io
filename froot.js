class Froot {
	constructor() {
    this.pos = createVector(0, 0);
  	this.randomPos();
  }
}

Froot.prototype.cpos = function() {
  return p5.Vector.mult(this.pos, SCALE);
}

Froot.prototype.show = function() {
  fill(200, 25, 25);
  stroke(50, 0, 0);
  strokeWeight(2);
	rect(this.cpos().x, this.cpos().y, SCALE, SCALE); 
}

Froot.prototype.randomPos = function(snake) {
	this.pos.set(
    floor(random(X_MIN, X_MAX)),
    floor(random(Y_MIN, Y_MAX))
  );
}
