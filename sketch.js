var SpiderMan , SpiderManImg;
var Electro , ElectroImg;

function preload(){
  SpiderManImg = loadImage("IMAGES/SPIDER-MAN.png");
  ElectroImg = loadImage("IMAGES/ELECTRO.png");
}

function setup() {
  createCanvas(800,400);
  SpiderMan = createSprite(200, 100, 50, 50);
  SpiderMan.addImage(SpiderManImg);
  SpiderMan.scale = 0.1;

  Electro = createSprite(400 , 200, 50 , 50);
  Electro.addImage(ElectroImg);
  Electro.scale = 0.04;
}

function draw() {
  background("blue"); 
  if(keyDown("RIGHT_ARROW")){
    SpiderMan.velocityX = 2;
  }
  if(keyDown("LEFT_ARROW")){
    SpiderMan.velocityX = -2;
  }
  if(keyDown("UP_ARROW")){
    SpiderMan.velocityY = - 2;
  }
  if(keyDown("DOWN_ARROW")){
    SpiderMan.velocityY =  2;
  }  

  if(SpiderMan.isTouching(Electro)){
    stroke("black");
    strokeWeight(6, 6);
    text("GAME OVER" , 400 , 400);
  }
  drawSprites();
}