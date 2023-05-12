
var Ballx = 30;
var Bally = 370;
var Diameter = 25;

var BallSpeed = 1;

function setup()
{
    createCanvas(500,400);
}

function draw()
{
    background(255,249,194);

    noStroke();
    
    //Sun
    fill(74,214,189);
    circle(455,80,300);

    fill(180,246,198);
    circle(440,80,210);

    // white circle
    fill(255,255,255);
    circle(440,70,90);

    //stars
    fill(255,248,231);
    square(30,40,10);

    fill(255,248,231);
    square(110,70,10);

    fill(255,248,231);
    square(200,30,10);

    fill(255,248,231);
    square(280,80,10);

    //Hills
    fill(253,231,177);
    circle(70,270,300);

    fill(253,231,177);
    circle(255,260,300);

    fill(253,231,177);
    circle(450,280,300);

    //Very Back City
    fill(255,213,179);
    rect(20,180,40,200);

    fill(255,213,179);
    rect(40,189,150,200);

    fill(255,213,179);
    rect(200,200,100,200);

    fill(255,213,179);
    rect(200,170,70,200);

    fill(255,213,179);
    rect(300,180,60,200);

    fill(255,213,179);
    rect(370,160,90,200);

    fill(255,213,179);
    rect(420,160,90,200);

    //city Back
    
    fill(255,182,158);
    rect(1,200,70,200);

    fill(255,182,158);
    rect(80,180,20,200);

    fill(255,182,158);
    rect(1,158,45,200);

    fill(255,182,158);
    rect(106,228,28,200);

    fill(255,182,158);
    rect(70,260,70,300);

    fill(255,182,158);
    rect(130,170,70,300);

    fill(255,182,158);
    rect(200,230,90,300);

    fill(255,182,158);
    rect(250,210,30,300);

    
    fill(255,182,158);
    rect(280,135,30,300);

    fill(255,182,158);
    rect(320,200,48,300);

    fill(255,182,158);
    rect(190,145,45,300);

    fill(255,182,158);
    rect(250,300,100,300);

    fill(255,182,158);
    rect(350,220,80,300);

    fill(255,182,158);
    rect(300,280,100,300);

    fill(255,182,158);
    rect(400,125,60,300);

    fill(255,182,158);
    rect(450,185,60,300);

    //City Front

    fill(265,167,145);
    rect(450,205,60,300);

    fill(265,167,145);
    rect(390,150,60,300);

    fill(265,167,145);
    rect(340,190,70,300);

    fill(265,167,145);
    rect(260,310,90,300);

    fill(265,167,145);
    rect(260,300,60,300);

    fill(265,167,145);
    rect(220,230,40,300);

    fill(265,167,145);
    rect(158,250,63,300);

    fill(265,167,145);
    rect(125,190,35,300);

    fill(265,167,145);
    rect(90,255,40,300);

    fill(265,167,145);
    rect(90,235,20,300);

    fill(265,167,145);
    rect(40,305,50,300);

    fill(265,167,145);
    rect(30,210,50,300);

    fill(265,167,145);
    rect(1,230,50,300);

    //fog

    fill(255,218,148);
    rect(1,340,800,45);

    fill(255,218,148);
    rect(1,329,800,8);

    fill(255,218,148);
    rect(1,315,300,5);

    fill(255,218,148);
    rect(300,307,300,3);

    fill(255,218,148);
    rect(1,300,400,2);

    fill(255,218,148);
    rect(1,290,230,1);

    fill(255,218,148);
    rect(300,285,230,1);


    //Front Hill

    fill(237,255,167);
    ellipse(260,450,690,240);

    //Lil Man
    fill(getRandomNumber(250),getRandomNumber(250),getRandomNumber(250));
    rect(60,321,20,30);

    rect(60,330,5,30);

    rect(75,330,5,30);
    
    rect(75,330,5,30);

    circle(70,312,18);

    //ball
    fill(180,246,198);
    circle(Ballx,Bally,25);
    Ballx += BallSpeed;
    if(Ballx <= 0 || Ballx >= 500)
    {
        BallSpeed *= -1;
    }

    Ballx += BallSpeed;

     //Functions

     function getRandomNumber(number)
     {
       return Math.floor(Math.random() * number) + 10;
     }

}