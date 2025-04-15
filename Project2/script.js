const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;

const BGLayer1 = new Image();
BGLayer1.src = "img/layer-1.png";
const BGLayer2 = new Image();
BGLayer2.src = "img/layer-2.png";
const BGLayer3 = new Image();
BGLayer3.src = "img/layer-3.png";
const BGLayer4 = new Image();
BGLayer4.src = "img/layer-4.png";
const BGLayer5 = new Image();
BGLayer5.src = "img/layer-5.png";

window.addEventListener("load", function () {
  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("change", function (e) {
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = gameSpeed;
  });

  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }
    update() {
      this.speed = gameSpeed * this.speedModifier;
      if (this.x <= -this.width) {
        this.x = 0;
      }
      this.x = this.x - this.speed;
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }

  const layer1 = new Layer(BGLayer1, 0.2);
  const layer2 = new Layer(BGLayer2, 0.4);
  const layer3 = new Layer(BGLayer3, 0.6);
  const layer4 = new Layer(BGLayer4, 0.8);
  const layer5 = new Layer(BGLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
});
