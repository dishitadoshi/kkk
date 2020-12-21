
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;
var dustbin,dustbinImg;

function preload(){
dustbinImg=loadImage("dustbin.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	
	//Create the Bodies Here.
    box1 = new Box(650,680,150,20);
	box2 = new Box(730,650,20,100);
	box3 = new Box(570,650,20,100);
	dustbin.addImage(dustbinImg);
	dustbin = new Box(650,500,100,20);
    
	ground = new Ground(400,700,800,30);
	
	paper = new Paper(200,697,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  dustbin.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-250},PI/2);
	   
	 }
   }
   

