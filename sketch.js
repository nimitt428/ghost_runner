var tower , towerImg;
var door , doorImg,doorGroup;
var climber , climberImg,climberGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleGroup;
var gameState = "Play";
var spooky ;

function preload(){
 towerImg = loadImage("tower.png") 
  doorImg = loadImage("door.png")
  climberImg = loadImage("climber.png")
  ghostImg = loadImage("ghost-standing.png")
  spooky = loadSound("spooky.wav")
}
function setup(){
createCanvas(600,600);  
 spooky.loop();
  
 tower = createSprite(300,300,50,70) ;
  tower.addImage("tower",towerImg)
  tower.velocityY = 3;
  
  ghost = createSprite(300,300,30,30);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5;
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleGroup = new Group();
}

function draw(){
  if(gameState === "Play"){
  
  
 if(keyDown("space")){
  ghost.velocityY  = -8; 
    
 }
 
  ghost.velocityY = ghost.velocityY + 0.5;
  
 if(keyDown("RIGHT_ARROW")){
   ghost.x = ghost.x+2;
   
 }
 if(keyDown("LEFT_ARROW")){
   ghost.x = ghost.x-2;
   
 }
    if(tower.y>400){ 
  tower.y = 150; 
   
 } 
  spawndoors();
  
 if(climberGroup.isTouching(ghost)) {
   
   ghost.velocityY =0;
  
   
   
 }
if (climberGroup .isTouching(ghost)||ghost.y > 600){
  ghost.destroy();
  gameState = "End";
}   
  
  
  
  
  
drawSprites(); 
  }
  if(gameState === "End"){
    text("gameOver",300,300)
    
  }
}

function spawndoors(){
 if(frameCount  %   100 === 0 ){
  
  
  
  door = createSprite(200,200,10,10);
 door.addImage("door",doorImg);
  door.velocityY = 3;
  door.lifetime = 150;
  
  
climber = createSprite(200,270,10,10);
climber.addImage("climber",climberImg)
 climber.velocityY = 3; 
   climber.lifetime = 150;
  
  door.x = Math.round(random(150,450)) 
   climber.x =  door.x;
   
   climberGroup.add(climber);
   ghost.depth = door.depth;
   ghost.depth =  ghost.depth + 1 
   invisibleBlock = createSprite(200,240);
   invisibleBlock.Width = climber.width;
   invisibleBlock.height = 2;
   invisibleBlock.velocityY = 3;           
    invisibleBlock.x = door.x ;
  // invisibleBlock.x = door.x;
    doorGroup.add(door);
   invisibleBlock.debug = true;
   invisibleGroup.add(invisibleBlock)
   
   invisibleGroup.collide(ghost)
   invisibleBlock.lifetime = 150;
 } 
}





