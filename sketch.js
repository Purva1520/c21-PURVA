var bullet,wall,thickness;
var speed,weight,;

function setup()

speed= random(55,90)
weight= random(400,1500)
thickness=random(22,83)

car=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);

car.velocityX=speed;

if (wall.x=car.x< (car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 *weight*speed*speed/22509;
if (deformation>180)
{
car.shapeColor=color(255,0,0);
}
if (deformation>180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if (deformation>100)
{
  car.shapeColor=color(0,255,0);
}
}

function hasCollided(lwall,lbullet)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
 if (hasCollided(wall,bullet))
 {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
   
   if (damage>10)
   {
     wall.shapeColor=color(255,0,0);

   }
   if (damage>10)
   {
    wall.shapeColor=color(0,255,0);
   }
 }

drawSprites()