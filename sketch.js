var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obstacle1Img,obstacle2Img,obstacle3Img,obstacle4Img,obstacle5Img;
var gameOverImg,restartImg,dieSound,jumpSound;
var gameOver, restart;

function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obstacle1Img = loadImage("assets/obsBottom1.png");
obstacle2Img = loadImage("assets/obsBottom2.png");
obstacle3Img = loadImage("assets/obsBottom3.png");
obstacle4Img = loadImage("assets/obsTop1.png");
obstacle5Img = loadImage("assets/obsTop2.png");
}

function setup(){
createCanvas(1200,500);

//background image
bg = createSprite(165,485,1000,400);
bg.addImage(bgImg);
bg.scale = 2;

//creating top and bottom grounds
bottomGround = createSprite(200,490,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;




}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -10 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
           balloon.collide(bottomGround);
           balloon.collide(topGround);
       
        bottomObstacle();
        topObstacle();
        drawSprites();
        
}

function bottomObstacle(){
  if(frameCount % 100 === 0){
    var obstacle = createSprite(1150,405,50,50);
    obstacle.velocityX = -3;
    
    var rand = Math.round(random(1,3))
    switch(rand){
      case 1: obstacle.addImage(obstacle1Img);
      break;
      case 2: obstacle.addImage(obstacle2Img);
      break;
      case 3: obstacle.addImage(obstacle3Img);
      break;
      default: break;
    }
    obstacle.lifetime = 400;
    obstacle.scale = 0.1;
  }
}

function topObstacle(){
  if(frameCount % 150 === 0){
    var obstacle = createSprite(1150,100,50,50);
    obstacle.velocityX = -5;
    obstacle.y = Math.round(random(50,200))
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1: obstacle.addImage(obstacle4Img);
      break;
      case 2: obstacle.addImage(obstacle5Img);
      break;
      default: break;
    }
    
    obstacle.lifetime = 400;
    obstacle.scale = 0.1;
  }
}