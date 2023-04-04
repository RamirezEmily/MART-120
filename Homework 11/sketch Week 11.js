var handX = 250;
var handY = 100;
var handDirection = 3;

var headX = 200;
var headY = 185;
var headDirection = 4;

var bodyX = 199;
var bodyY = 200;
var bodyDirection = 1;

var mouthX = 199;
var mouthY = 200;
var mouthDirection = 3;

var textY = 30;
var textX = 300;
var textDirection = 2;

var size = 22;
var count = 0;
var sizeDirection = 2;

var x = 100;
var y = 200;
var diameter = 50;

var movement;
function setup() {
    createCanvas(400,400);
    movement = floor(random() * 10) + 1;
  }
  
  function draw() {
    background(242,207,199);

    //note for fun
    fill(197,164,162);
    textSize(20);
    text('Chaos',textX,textY, 10, 30);
    textX += textDirection;
    if(textX <= 10 || textX >= 400 )
    {
        textDirection *= -1;
    }



    //Legs
    line(220, 390, 220, 320);
    line(290, 390, 290, 320);

    //Neck
    fill(197,164,162);
    rect(236,205,30,50);

    //Torso
    fill(97,34,66);
    rect(199,bodyY,190,110,115);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 400 )
    {
        bodyDirection *= -1;
    }

    //Head
    fill(197,164,162);
    circle(headX,headY,190,120,175);
    headX += headDirection;
    if(headX <= 0 || headX >= 400 )
    {
        headDirection *= -1;
    }

    //Eyes
    fill(242,207,199);
    ellipse(185,120,60,40);
    ellipse(285,120,65,45);

    //Pupil
    fill(82,17,49);
    ellipse(297,120,40,30,);
    ellipse(194,120,40,30,);

    //Right Arm
    line(100,120,198,226);

    //Hoodie (hood)
    fill(97,34,66);
    triangle(245, 225, 190, 225, 180, 190);
    triangle(320, 190, 320, 235, 241, 224);

    //Acne/Spots
    point(215,140);
    point(195,155);
    point(245,145);
    point(290,155);

    //Left Arm
    line(350, 270, 310, 234);
    line(350, 270, 309, 300);

    //Right Hand
    fill(197,164,162);
    square(71,handY,60,30);
    handY += handDirection;
    if(handY <= 0 || handY >= 150 )
    {
        handDirection *= -1;
    }

    //Left Hand
    {
      fill(197,164,162);
    square(handX,260,50,30);
    handX += handDirection;
    if(handX <= 0 || handX >= 400 )
    {
        handDirection *= 1;
    }

    x += movement;
  }

    //Mouth
    line(mouthX,mouthY,220, 170, 266, 150);
    mouthX += mouthDirection;
    mouthY += mouthDirection;
    if(mouthX <= 0 || mouthX >= 400 )
    if(mouthY >= 0 || mouthX <= 400 )
    {
        mouthDirection *= -1;
        mouthDirection *= 1;
    }

    //Hair
    line(310, 15, 302, 50);
    line(320, 35, 302, 50);

    //Signature
    fill(97,34,66);
    textSize(size);
    size+=sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *=-1;
      count = 0;
    }
    text('Emily Ramirez', 10, 375);


  }