var trex, trexRunning;
var edges;
var solo, imagemSolo;


function preload(){
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png"); 
  imagemSolo = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  edges= createEdgeSprites();

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trexRunning);
  trex.scale= 0.5;


  solo= createSprite(300,170,600,2);
  solo.addImage("solo",imagemSolo);
 
   
}

function draw(){
  background("gray");
  
  
  solo.velocityX = -10;

  if(solo.x<0){
    solo.x = solo.width/2;
  }

  if(keyDown("space")&& trex.y>164){
    trex.velocityY =-10;
}
  
  gravity();
  trex.collide(solo);
  // coordenadas do mouse na tela
  text("X: "+mouseX+" /Y:"+mouseY,mouseX,mouseY);
  
  createClouds();

  drawSprites();
  console.log(trex.y);
}
function gravity(){
  trex.velocityY += 0.5;

}

  