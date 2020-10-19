var paper
var dustbin1
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	
	

	engine = Engine.create();
	world = engine.world;
    ground=new Ground(800,670,1600,20)
	paper=new Paper(200,450,40);
	dustbin1=new dustbin(1200,650)
	//Create the Bodies Here.


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin1.display();
  paper.display();
  
}

function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); } }

