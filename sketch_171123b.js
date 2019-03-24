var x=mouseX;
var x=250;
var y=mouseY;
var y=250;
var imag=[20];

function setup()
{
  createCanvas(1500,800)
  background(0)
   img=loadImage("unnamed.jpg")
    }

function draw() {
 
if( mouseIsPressed)
{
  stroke(random(100),random(200),mouseX)
  fill(random(200),random(150),random(100))
  ellipse( mouseX,mouseY,30,30)

}


image(img,0,0,500,50)


}