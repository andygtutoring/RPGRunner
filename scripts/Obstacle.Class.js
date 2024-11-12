// Obstacle.Class.js

class Obstacle {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.y = this.game.height - 20;
    this.width = 20;
    this.height = 20;
    this.speed = 5;
  }

  update() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.game.obstacles.splice(this.game.obstacles.indexOf(this), 1);
    }
  }

  draw() {
    this.game.ctx.fillStyle = 'green';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
