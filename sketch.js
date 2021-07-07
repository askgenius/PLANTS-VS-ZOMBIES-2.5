var field, fieldImage;
var peashooter, peashooterImage;
var zombiehead, zombieheadImage;
var sunflower, sunflowerImage;
var wallnut, wallnutImage;
var zombie, zombieImage;
var sun, sunImage;
var pea, peaImage;

function preload() {
  fieldImage = loadImage("field.png")
  peashooterImage = loadImage("peashooter.png")
  zombieheadImage = loadImage("zombiehead.png")
  sunflowerImage = loadImage("sunflower.png")
  wallnutImage = loadImage("wallnut.png")
  zombieImage = loadImage("zombie.png")
  sunImage = loadImage("sun.png")
  peaImage = loadImage("pea.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  field = createSprite(width / 2, height / 2)
  field.addImage(fieldImage)
  field.scale = 0.9

  peashooter = createSprite(300, height / 2)
  peashooter.addImage(peashooterImage)
  peashooter.scale = 0.5

  peashooter = createSprite(300, height / 4 - 200)
  peashooter.addImage(peashooterImage)
  peashooter.scale = 0.5

  peashooter = createSprite(300, height - 350)
  peashooter.addImage(peashooterImage)
  peashooter.scale = 0.5

  pea = createSprite(300, height / 2)
  pea.addImage(peaImage)
  pea.scale = 0.5

  pea = createSprite(300, height / 4 - 200)
  pea.addImage(peaImage)
  pea.scale = 0.5

  pea = createSprite(300, height - 350)
  pea.addImage(peaImage)
  pea.scale = 0.5
}

function draw() {
  background("lightblue")
  drawSprites();
}