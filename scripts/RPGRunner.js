// RPGRunner.js

const canvas = document.getElementById('game-canvas');
const game = new Game(canvas);

// Initialize game objects
setInterval(() => {
  game.enemies.push(new Enemy(game));
}, 2000);

setInterval(() => {
  game.obstacles.push(new Obstacle(game));
}, 3000);

// Touch controls
canvas.addEventListener('touchstart', (e) => {
  game.player.jump();
});

// Start game loop
game.update();
