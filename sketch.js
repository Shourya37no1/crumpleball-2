
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var paperBall,paperObject,pap,dustbin0;
var ground;

function preload(){
  paperObject=loadImage("Images/paper.png");
  dustbin=loadImage("Images/dustbingreen.png")
}

function setup() {
	createCanvas(800,700);




	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,680,800,10);
dustbin1=new Dustbin(550,580,20,180)
dustbin2=new Dustbin(635,660,150,20)
dustbin3=new Dustbin(720,580,20,180)
	//Create the Bodies Here.
	paperBall = new Paper(150,600,60);
  dustbin0=createSprite(635,580,50,180);
  dustbin0.addImage(dustbin);
  dustbin0.scale=0.65;

Engine.run(engine);

	
  
}


function draw() {
   background("white");
  
   rectMode(CENTER);



  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  Engine.update(engine);
  
  console.log(paperBall.y);
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
}

};
