
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1 = new roof(620,90,370,20);
	bob1 = new bob(500,400);
  bob2 = new bob(560,400);
	bob3 = new bob(620,400);
	bob4 = new bob(680,400);
	bob5 = new bob(740,400);
  rope1 = new rope (bob1.body,roof1.body,-60*2,0);
  rope2 = new rope (bob2.body,roof1.body,-30*2,0);
  rope3 = new rope (bob3.body,roof1.body,-1*2,0);
  rope4 = new rope (bob4.body,roof1.body,+30*2,0);
  rope5 = new rope (bob5.body,roof1.body,+60*2,0);

 // keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



function keyPressed() 
{
  if (keyCode === UP_ARROW)
   {
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
  }
}
