
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    stone = new Stone(350,320,100,100)
    ground = new Ground(600,height ,1200,20)
    hammer = new Hammer(300,100)
    rubberball = new RubberBall(800,300,20)
   
    iron = new Iron(500,320,100,50)

   sand1 = new Sand(420,374)
   sand2 = new Sand(410,384)
   sand3 = new Sand(420,374)
   sand4 = new Sand(430,364)
   sand5 = new Sand(440,354)
   sand6 = new Sand(450,344)
   sand7 = new Sand(460,324)
   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");


  stone.display();
  ground.display();
  hammer.display();
 rubberball.display();
  iron.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();

  drawSprites();
 
}



