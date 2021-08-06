var ship;
var sea;

var shipImage;
var seaImage;

function preload(){
 seaImage = loadImage("sea.png");
 shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,100,100,20);
  sea.addImage("sea",seaImage);
  sea.scale = 0.5;

  ship = createSprite(200,200,40,40);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.3;


 

}

function draw() {
  background("blue");

  
  sea.velocityX = -5;

  if(sea.x<0){
    sea.x = sea.width/10;
  }
  

  drawSprites();
 
}