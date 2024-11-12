// Player.Class.js

class Player {
    constructor(game) {
        this.game = game;
        this.x = 50;
        this.y = this.game.height / 2;
        this.width = 30;
        this.height = 30;
        this.speed = 5;
        this.jumpSpeed = 10;
        this.gravity = 0.5;
        this.vy = 0;
        this.score = 0;
    }

    update() {
        this.y += this.vy;
        this.vy += this.gravity;
        if (this.y + this.height > this.game.height) {
            this.y = this.game.height - this.height;
            this.vy = 0;
        }
    }

    draw() {
        this.game.ctx.fillStyle = 'blue';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    jump() {
        this.vy = -this.jumpSpeed;
    }

    collidesWith(other) {
        return (
            this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y
        );
    }
}
