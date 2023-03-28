function setup() {
    createCanvas(400,400);
  }
  
  function draw() {
    background(242,207,199);
    //Legs
    line(220, 390, 220, 320);
    line(290, 390, 290, 320);

    //Torso
    fill(197,164,162);
    rect(236,205,30,50);

    //Necl
    fill(97,34,66);
    rect(199,210,110,115);

    //Head
    fill(197,164,162);
    circle(250,120,175);

    //Eyes
    fill(242,207,199);
    ellipse(185,120,60,40);
    ellipse(285,120,65,45);
    fill(82,17,49);
    ellipse(297,120,40,30);
    ellipse(194,120,40,30);

    //Right Arm
    line(100, 120, 198, 226);

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

    //Hands
    fill(197,164,162);
    square(71,90,30)
    square(292,290,30)

    //Mouth
    line(220, 170, 266, 150);

    //Hair
    line(310, 15, 302, 50);
    line(320, 35, 302, 50);

    //Signature
    fill(97,34,66);
    textSize(25);
    text('Emily Ramirez', 10, 375);

  }