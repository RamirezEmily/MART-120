// character x and y coordinates
var characterX = 50;
var characterY = 50;

// Key Functions
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//enemy 1 coordinates
var enemy1X = 100;
var enemy1Y = 100;
var shapeXSpeed1;
var shapeYSpeed1;

//enemy 2 coordinates
var enemy2X = 300;
var enemy2Y = 200;
var shapeXSpeed2;
var shapeYSpeed2;

//Mouse Shape when mouse is pressed
var mouseShapex;
var mouseShapey;

// Setup
function setup()
{
   createCanvas(500,600);
}

  function draw()
{

  //background
  background(224,255,255);
  stroke(0);
  fill(24,200,29);

  //Call CreateBoarders function
  CreateBorders(10);

  //call CreateExit
  CreateExit();
  

  //Main Character
  fill(0,206,209);
  circle(characterX,characterY,30);

  //keys
  if(keyIsDown(w))
  {
    characterY -= 5;
  }
  if(keyIsDown(s))
  {
    characterY += 5;
  }
  if(keyIsDown(a))
  {
    characterX -= 5;
  }
  if(keyIsDown(d))
  {
    characterX += 5;
  }

  //Enemy 1
  fill(255,17,0);
  square(enemy1X, enemy1Y,25);

  //Random Speed Enemy 1
  shapeXSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed1 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  //move enemy 1
  enemy1X += shapeXSpeed1;
  enemy1Y += shapeYSpeed1;
  // check for shape out of bounds
  if(enemy1X > width)
  {
      enemy1X = 0;
  }
  if(enemy1X < 0)
  {
      enemy1X = width;
  }
  if(enemy1Y > height)
  {
      enemy1Y = 0;
  }
  if(enemy1Y < 0)
  {
      enemy1Y = height;
  }

  //Enemy 2
  fill(119,21,21);
  square(enemy2X, enemy2Y,35);

  //Random Speed Enemy 2
  shapeXSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  //move enemy 1
  enemy2X += shapeXSpeed2;
  enemy2Y += shapeYSpeed2;
  // check for shape out of bounds
  if(enemy2X > width)
  {
      enemy2X = 0;
  }
  if(enemy2X < 0)
  {
      enemy2X = width;
  }
  if(enemy2Y > height)
  {
      enemy2Y = 0;
  }
  if(enemy2Y < 0)
  {
      enemy2Y = height;
  }

  //If MC reaches exit
  if(characterX > width && characterY > width-50)
  {
    fill(25,25,112);
    stroke(5);
    textSize(30);
    text("!!You Escaped!!",width/2-50,height/2-65);
  }

  //Mouse Click Shape
  fill(120,130,140);
  circle(mouseShapex,mouseShapey,15);
}

function CreateBorders(thickness)
{
  //top border
  fill(72,209,204);
  rect(0,0,width,thickness);
  //left border
  fill(72,209,204);
  rect(0,0,thickness,height);
  //bottom
  fill(72,209,204);
  rect(0,height-thickness,width,thickness);
  //upper right
  fill(72,209,204);
  rect(width-thickness,0,thickness,height-45);
}

function CreateExit()
{
  textSize(15);
  text("EXIT", width-50,height-50)
}

function mousePressed()
{
  mouseShapex = mouseX;
  mouseShapey = mouseY;
}
