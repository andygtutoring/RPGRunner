// Enemy.Class.js

class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.y = Math.random() * (this.game.height - 50);
    this.width = 30;
    this.height = 30;
    this.speed = 5;
  }

  update() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.game.enemies.splice(this.game.enemies.indexOf(this), 1);
    }
  }

  draw() {
    this.game.ctx.fillStyle = 'red';
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
