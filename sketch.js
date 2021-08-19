const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car1 ;
var car2 ;
var maxCar1=5;
var maxCar2=5;
var car3; 
var backgroundImg;
var invisibleGround;
var PLAY=1
var END=0
var gameState="PLAY";
var score=0;

var gameState = "onSling";
var bkgImage="bg.png"
var trackk;
var safety1,safetyImg;
var gameover,gameoverImg
var carr1,carr2;

function preload() {
   backgroundImg = loadImage("track1.jpg");
   carr1=loadImage("car1.png");
   carr2=loadImage("car2.png");
   carr3=loadImage("car3.png")
   trackk=loadImage("track1.jpg")
   safetyImg=loadImage("safety1.png")
   gameoverImg=loadImage("restart.png")
}

function setup(){
    var canvas = createCanvas(1300,600);
    
   // track1=createSprite(600,height-200,1200,20)
   // track1.addImage(trackk)
   // trackk.scale=5
   car1 = createSprite(1100,110,110,50);
   car2 = createSprite(1100,490,110,50);
    
 car1.addImage(carr1)
 car2.addImage(carr2)
 car1.scale=0.2;
 car2.scale=0.2;
    engine = Engine.create();
    world = engine.world;

    //ground = createSprite(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
   // ground.addImage(trackk)
   // ground.x=ground.width/7;
   // ground.velocityX=0;
   
    car3=createSprite(100,310,110,50)
    car3.addImage(carr3)
    car3.scale=0.2
    car3.setCollider("rectangle",0,0,car3.width,car3.height);
  car3.debug = true
  
 safety1=createSprite(600,250)
 safety1.addImage(safetyImg)
  safety1.scale=0.50
   safety1.visible=false;

   gameover=createSprite(590,500)
  gameover.addImage(gameoverImg)
   gameover.scale=0.50
   gameover.visible=false;
}

function draw(){
    
    Engine.update(engine);
    background(backgroundImg);
   
    textSize(20);
    fill("red");
    text("Score = "+score,width-200,30);
    
   if(gameState="PLAY"){

 car1.velocityX=-30
 car2.velocityX=-35
   // score = score + Math.round(getFrameRate()/100)
    
       if(car1.x<0&&car2.x<0)
        {
            car1.x=1100
            car1.y=110
            car2.x=1100
            car2.y=490
        }
        if(car3.x>1200)
        {
            car3.x=100
            car3.y=310
        }
        
        if(keyDown(UP_ARROW)){
        
            car3.y=car3.y-8
                    
       }
       if(keyDown(DOWN_ARROW)){
           
           car3.y=car3.y+8
           
      }
      if(keyDown(RIGHT_ARROW)){
           
       car3.x=car3.x+8
       score=score+2
   }

if(car3.isTouching(car1)||car3.isTouching(car2)){
    gameState="END"
    
}
          
   }
   if(gameState==="END"){
car1.velocityX=0
car2.velocityX=0
car3.velocityX=0
car3.velocityY=0 
safety1.visible=true;
gameover.visible=true
   }


if(mousePressedOver(gameover)) {
  reset();
  }
   
         drawSprites(); 
}

function reset(){
    gameState="PLAY"
    gameover.visible=false
  safety1.visible=false
    
   car3.x=100
   car3.y=310


         score=0 
   
   }


