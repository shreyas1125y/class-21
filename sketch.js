var fixedRect;
var movingRect;
var o1;
var o2;


function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(200, 200, 50, 80);
 movingRect=createSprite(400, 200, 80, 50);
 o1 =createSprite(100,100,50,50);
 o2= createSprite(300,100,50,50);
 o1.shapeColor="green";
o2.shapeColor="green";
 fixedRect.shapeColor="green";
movingRect.shapeColor="green";
}
3
function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;
 
 if(isTouching(movingRect,o1)){
  movingRect.shapeColor="red";
  o1.shapeColor="red";
 
}
else{
  movingRect.shapeColor="green";
    o1.shapeColor="green";
}
  drawSprites();
}

function isTouching(p1,p2){
if(p1.x-p2.x<p2.width/2+p1.width/2&&p2.y-p1.y<p2.height/2+p1.width/2&&p2.y-p1.y<p2.height/2+p1.width/2&&p1.y-p2.y<p2.height/2+p1.height/2){
return true  
}
  else{
    return false
  }
}
