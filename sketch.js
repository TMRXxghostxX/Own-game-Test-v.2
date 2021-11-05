const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var sword1;
var world, knight;
var ground1;
var castle1;
var enemy1, enemy2;

var launcherObject;
//var launchForce = 100;

function preload(){
  knight = loadImage("Knight_Pixel_Art-removebg.png");
}

function setup() {
  createCanvas(1300,650);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine); 
  castle1 = new castle(1050, 627);
  sword1 = new Sword(235, 320, 40); 
  launcherObject = new launcher(sword1.body, { x: 235, y: 420 });
  ground1 = new ground(850, 580, 1100, 100);
  enemy1 = new Enemy(850,470);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  image(knight, 200, 340, 200, 200);
  launcherObject.display();
  sword1.display();
  ground1.display();
  castle1.display();
  enemy1.display();
}

function mouseDragged() {
  Matter.Body.setPosition(sword1.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcherObject.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(sword1.body, { x: 235, y: 300 });
    launcherObject.attach(sword1.body);
  }
}

