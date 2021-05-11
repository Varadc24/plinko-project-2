const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var divisions = [];
var plinko = [];
var particle = [];
var divisionHeight = 300;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //for (var k = 0; k<=width; k = k+80){
    //divisions.push(new Divisions(k, 150, 10,150));
 // }
 //  for (var j = 40; j <=width; j=j=50)
  // {
     //plinko.push(new plinko(j,75));
  // }
   //for (var j = 15; j <=width-10; j=j+50)
  // {
   //  plinko.push(new plinko(j,175 ))
  // }  
}


function draw() {
  background(255,255,255);
 // for (var k = 0; k<divisions.length; k++){
    console.log(divisions);
  //divisions[k].display();
  }

 
