// Game.Class.js

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this);
        this.enemies = [];
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.player.update();
        this.enemies.forEach(enemy => enemy.update());
        this.obstacles.forEach(obstacle => obstacle.update());
        this.checkCollisions();
        this.drawEverything();
        if (!this.gameOver) requestAnimationFrame(() => this.update());
    }

    drawEverything() {
        this.player.draw();
        this.enemies.forEach(enemy => enemy.draw());
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.ctx.font = '24px Arial';
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`Score: ${this.score}`, 10, 10);
    }

    checkCollisions() {
        this.enemies.forEach(enemy => {
            if (this.player.collidesWith(enemy)) {
                this.gameOver = true;
            }
        });
        this.obstacles.forEach(obstacle => {
            if (this.player.collidesWith(obstacle)) {
                this.player.jump();
            }
        });
    }
}
