// character x and y coordinates
var characterX = 50;
var characterY = 50;

// Key Functions
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


//Mouse Shape when mouse is pressed
var mouseShapex;
var mouseShapey;

// Setup
function setup()
{
   createCanvas(500,600);
   // Random Speed for Array when Started
   for (var i = 0; i < 10; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(800);
    diameters[i] = getRandomNumber(50);
}
}

  function draw()
{

  //background
  background(134,206,203);
  stroke(0);
  fill(24,200,29);

  //Call CreateBoarders function
  CreateBorders(10);

  //Call Character Movement Keys
  createCharacterMovement();

   // potential enemy
   fill(13, 145, 14);
   
   // draw the shape
   for (var i = 0; i < shapeXs.length; i++)
   {
    fill(getRandomNumber(250),getRandomNumber(250),getRandomNumber(250));
    circle(shapeXs[i], shapeYs[i], diameters[i]);
       shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
       shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

       // move the shape
       shapeXs[i] += shapeXSpeeds[i];
       shapeYs[i] += shapeYSpeeds[i];
       // check to see if the shape has gone out of bounds
       if (shapeXs[i] > width) {
           shapeXs[i] = 0;
       }
       if (shapeXs[i] < 0) {
           shapeXs[i] = width;
       }
       if (shapeYs[i] > height) {
           shapeYs[i] = 0;
       }
       if (shapeYs[i] < 0) {
           shapeYs[i] = height;
   }
   }

  //call CreateExit
  CreateExit();
  
  //Call Create MC
  createMainCharacter();

  //Call Exit Message
  createWinningMessage();

  //Call MouseShape
  createMouseShape();

}

//Creating Functions
function CreateBorders(thickness)
{
  //top border
  fill(55,59,62);
  rect(0,0,width,thickness);
  //left border
  fill(55,59,62);
  rect(0,0,thickness,height);
  //bottom
  fill(55,59,62);
  rect(0,height-thickness,width,thickness);
  //upper right
  fill(55,59,62);
  rect(width-thickness,0,thickness,height-45);
}

function createMainCharacter()
{
  //Main Character
  fill(225,40,133);
  circle(characterX,characterY,30)
}

function createCharacterMovement()
{
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
}

function CreateExit()
{
  //exit sign
  textSize(15);
  text("EXIT", width-50,height-50)
}

//exit Message
function createWinningMessage()
{
  //If MC reaches exit
  if(characterX > width && characterY > width-50)
  {
    fill(getRandomNumber(250),getRandomNumber(250),getRandomNumber(250));;
    stroke(5);
    textSize(30);
    text("!!You Escaped!!",width/2-50,height/2-65);
  }
}

function createMouseShape()
{
  //Mouse Click Shape
  fill(190,200,209);
  circle(mouseShapex,mouseShapey,15);
}

function mousePressed()
{
  mouseShapex = mouseX;
  mouseShapey = mouseY;
}

function getRandomNumber(number)
{
  return Math.floor(Math.random() * number) + 10;
}
