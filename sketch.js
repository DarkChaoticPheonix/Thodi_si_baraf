const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var snow = [];

function preload(){
 bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  for (var i = 75; i <=width; i=i+50) { 
    snow.push(new Snow(i,275));
  }
}

function draw() {
  background(bg);  
Engine.update(engine);

for (var i = 0; i < snow.length; i++) {
  snow[i].display();   
}
  drawSprites();
}