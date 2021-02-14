const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var monkey , monkey_running
var banana,obstacle;
var ground,launcher,stone;
var back,backImage;
var score=0;
var otp=0;
var world,engine;

function preload(){
  backImage=loadImage("Images/jungle.jpg")
  
  monkey_running=loadAnimation("Images/sprite_0.png","Images/sprite_1.png","Images/sprite_2.png","Images/sprite_3.png","Images/sprite_4.png","Images/sprite_5.png","Images/sprite_6.png","Images/sprite_7.png","Images/sprite_8.png")
}


function setup() {
createCanvas(400,400);

engine = Engine.create();
world = engine.world;

stone=new Stone(40,140,20);

launcher=new Launcher(stone.body,{x:40,y:140});

obstacle=new Obstacle(200,230,80,70);

banana=new Banana(60,50,80,70);

ground = createSprite(400,267,900,10); 

back=createSprite(200,30,50,50);  
back.velocityX=-8;  
back.addImage("back",backImage);
back.scale=1.1;

monkey=createSprite(60,230,10,10);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

monkey.setCollider("circle",0,0,100);
monkey.debug=false;   

Engine.run(engine);
}


function draw() {  

Engine.update(engine);

if (back.x < 0){
back.x = back.width/2;
} 
  
if (ground.x < 0){
ground.x = ground.width/2;
}
  
if(keyDown("UP_ARROW")){
  monkey.velocityY=-12
}  

drawSprites();
  
monkey.velocityY = monkey.velocityY + 0.8
  
monkey.collide(ground); 

stone.display();

launcher.display();

obstacle.display();
obstacle.Point();

banana.display();
banana.Score();

stroke("black");
textSize(20);
fill("black");
text("Point:"+ otp,30,40); 
  
stroke("black");
textSize(20);
fill("black");
text("Score:"+ score,300,40); 
  
}

function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();  
}

function keyPressed(){
  if(keyCode===32){
      launcher.attach(stone.body);
  }
}