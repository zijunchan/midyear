let bgImag;//let background
let soilImag;//let soil
let lifeImag;//let groundhog life
let groundhogImag;//let groundhog
let robotImag;//let robot
let soldierImag;//let soldier
let x = 0;//the soldier walk and go back use
let lightPos = 240;//the lightpos shoot and go back

function setup() {
  createCanvas(600,480,P2D);
  bgImag = loadImage("bg.jpg");
  soilImag = loadImage("soil.png");
  lifeImag = loadImage("assets1/life.png");
  groundhogImag = loadImage("assets1/groundhog.png");
  robotImag = loadImage("assets1/robot.png");
  soldierImag = loadImage("assets1/soldier.png");
  //Every variable is used to import image
}

function draw() {
  
  image(bgImag, 0, 0);
  strokeWeight(15.0);//The above is the code for the grass. I put it here because it will block the groundhog's feet.
  strokeCap(SQUARE);
  stroke(124,204,25);
    line(0, 152, 800, 152);
  
  image(soilImag,0,160);
  image(lifeImag,10,10);
  image(lifeImag,80,10);
  image(lifeImag,150,10);
  image(groundhogImag,250,80);
  image(robotImag,240,240);
  image(soldierImag,x,160);
  
  strokeWeight(10.0);//There code are used to let the lightPos can be action
    strokeCap(ROUND);
    stroke(255,0,0);//color
    line(lightPos -40, 240+37, lightPos, 240+37);//Let the lightPos in the correct seat
       lightPos = lightPos-2;//Let the lightPos turn left
     if(lightPos<-500){//let lightPos go back
       lightPos = 240+30;
     }
     x=x+2  ;//let the soldier action
    if(x>640){//let the soldier go back to the original location
     x = -80;
  }
    stroke(255,255,0);//the sun outside color
    fill(253,184,19);//the sun inside color
    circle(520, 30, 160);//the sun createCanvas and location
}
