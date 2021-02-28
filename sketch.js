const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world
var myobject;
var ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
var options ={
  restitution:1.5

}


  myobject =Bodies.rectangle(200,100,50,50,options)
  World.add(world,myobject)

  console.log(myobject)
  console.log(myobject.position.x)
  console.log(myobject.position.y)

var ground_options={
   isStatic:true
}
  ground =Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground)
}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(myobject.position.x,myobject.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
}
