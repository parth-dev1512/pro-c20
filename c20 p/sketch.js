
var car,wall;
var speed, weight;
var deformation, final;

function setup() {

 

  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
}



function draw() {
  background(0);  

  wall.shapeColor="80,80,80";


  car.velocityX=speed;

 
  
  if(car.width/2+wall.width/2>wall.x-car.x)
  {
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
  
    if(deformation<100)
    {
      car.shapeColor="green";
    }

    if(deformation>=100&&deformation<180)
    {
      car.shapeColor="yellow";
    }

    else
    {
      car.shapeColor="red";
    }
  }



  drawSprites();
}