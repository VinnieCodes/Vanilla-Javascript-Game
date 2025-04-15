export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Metal Mania";
    this.livesImage = document.getElementById("lives");
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;
    context.shadowColor = "white";
    context.shadowBlur = 3;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    // score
    context.fillText("Score: " + this.game.score, 20, 50);
    // timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);

    // Energy
    context.fillText("Energy: " + Math.floor(this.game.energy), 20, 110);
    // lives
    for (let i = 0; i < this.game.lives; i++) {
      context.drawImage(this.livesImage, 30 * i + 20, 120, 25, 25);
    }

    // game over messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score >= this.game.winningScore) {
        context.fillText(
          "Boo-yah",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
        context.font = this.fontSize * 0.65 + "px " + this.fontFamily;
        context.fillText(
          "What are creatures of the night afraid of? Yo hot breath",
          this.game.width * 0.5,
          this.game.height * 0.5 + 25
        );
        context.fillText(
          "Press space to restart",
          this.game.width * 0.5,
          this.game.height * 0.5 + 50
        );
      } else {
        context.fillText(
          "Love at first bite?",
          this.game.width * 0.5,
          this.game.height * 0.5
        );
        context.font = this.fontSize * 0.65 + "px " + this.fontFamily;
        context.fillText(
          "Nope, didn't think so",
          this.game.width * 0.5,
          this.game.height * 0.5 + 25
        );
        context.fillText(
          "Press space to restart",
          this.game.width * 0.5,
          this.game.height * 0.5 + 50
        );
      }
    }
    context.restore();
  }
}
