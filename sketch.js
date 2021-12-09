
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball
let ground1, ground2
let button1, button2

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

button1=createImg("right.png")
button1.position(220,30)
button1.size(50,50)
button1.mouseClicked(hforce)

button1=createImg("up.png")
button1.position(20,30)
button1.size(50,50)
button1.mouseClicked(vforce)

ground1=new Ground(200,370,350,10)
ground2=new Ground(200,30,350,10)
ground3=new Ground(30,200,10,350)
ground4=new Ground(370,200,10,350)

var balloptions={
  restitution:0.5
}
ball=Bodies.circle(200,200,20,balloptions)
World.add(world,ball)
}

function draw() 
{
  Engine.update(engine)
  background(51);
 ground1.show()
 ground2.show()
 ground3.show()
 ground4.show()

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

