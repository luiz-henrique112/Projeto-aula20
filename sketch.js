var block1, block2, circle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	 var plane_options={
isStatic : true
  }

   var  block1_options = {

restution : 0.7,
friction: 0.01,
frictionAir : 0

  }
  
  var  block2_options = {

    restution : 0.5,
    friction: 0.02,
    frictionAir : 0
    
      }

      var  circle_options = {

        restution : 0.5,
        friction: 0.02,
        frictionAir : 0.03
        
          }
          
      block1 = Bodies.rectangle(110,50,95,72, block1_options)
      block2 = Bodies.rectangle(350,60,50,50, block2_options)
      circle = Bodies.circle(230,20,20, circle_options)
      plane = Bodies.rectangle(300,599, 599,1,plane_options)

       World.add(world,block1)
       World.add(world,block2)
       World.add(world,circle)
       World.add(world,plane)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(222);

  Engine.update(engine);

 
  rect(block1.position.x, block1.position.y, 95,72);
  rect(block2.position.x, block2.position.y,50,50);
  rect(plane.position.x, plane.position.y, 599,1)

  ellipse(circle.position.x,circle.position.y,20)

  
  drawSprites();
 
}



