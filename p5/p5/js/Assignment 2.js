var radius = 9 / 2;
var x = 650 / 2;
var y = 500 / 2;
var ballx = x;
var bally = y;
var xdir = 1;
var ydir = 1;
var startSpeed = 1/2;
var xspeed = startSpeed;
var yspeed = startSpeed;
var bricksHeight = 30 / 2;
var bricksWidth = 105 / 2;
var startX = 330 - bricksWidth / 2;
var startY = 350 - bricksHeight - 5;
var pX = startX;
var pY = startY;
var bricks;
var bounced = false;
var score = 0;
var start = false;
var end = false


function setup(){
	createCanvas(625, 500);
	ellipseMode(RADIUS);
	fill(72, 127, 214);
	makeBricks();
	start = true;
	

}

function draw(){
	if(start == true){
		game();
	}
	if (end== true){
		win();
	}
}

function game(){
	score = 0;
	background(0);
	ball();
	drawBricks();
	drawPaddle();
}

function makeBricks(){
	bricks = [9];
	for(var i = 0; i < 10; i++){
		bricks[i] = [9];
		for (var j = 0; j < 10; j++){
			bricks[i][j] = [2];
			bricks[i][j][0] = bricksWidth * (1+i)+(i+5)-5;
			bricks[i][j][1] = bricksHeight * (1+j)+(j*5)+10;
			bricks[i][j][2] = true

		}
	}
}

function drawBricks(){
	for(var i = 0; i < 10; i++){
		for (var j = 0; j < 10; j++){
			check(i, j, bricks[i][j][0], bricks[i][j][1]);
			if(bricks[i][j][2]){
				rect(bricks[i][j][0], bricks[i][j][1], bricksWidth, bricksHeight);
			}
		}
	}
}

function check(i, j, bx, by){
  if(((ballx > bx)&&(ballx < bx+bricksWidth)) && (bally+radius == by || bally-radius == by + bricksHeight)){
    if(bricks[i][j][2]){
      bricks[i][j][2]=false;
      xdir = -xdir;
      score += 1;
    }
  }
  if(((bally > by)&&(bally < by+bricksHeight)) && (ballx+radius >= bx && ballx-radius <= bx + bricksWidth)){
    if(bricks[i][j][2]){
      bricks[i][j][2]=false;
      ydir = -ydir;
      score += 1;
    }
  if(score == 100){
	start = false;
	end = true;
}
  }
}


function drawPaddle(){
  rect(pX,pY,bricksWidth,bricksHeight);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW && (pX > 0)){
      pX-=5/2;
    }
    else if(keyCode == RIGHT_ARROW && (pX < width-bricksWidth)){
      pX+=5/2;
    }
  }
}

function ball(){
	ellipse(ballx, bally, radius, radius);
	bally += yspeed * ydir;
  if(bounced){
	   ballx += xspeed * xdir;
  }
  bounce();
  if((ballx + radius > width)||(ballx - radius < 0)){
		xdir = -xdir;
	}
	if(bally - radius < 0){
		ydir = -ydir;
	}
  if (bally + radius > pY + bricksHeight){
  	reset();
  }
}

function bounce(){
	if((ballx > pX) && (ballx < pX + bricksWidth)){
		if(bally + radius == pY){
      if (!bounced){
        xspeed = 2.5 / 2;
        yspeed = 2.5 / 2;
        bounced = true;
      }
      speed();
	  ydir = -ydir;
	}
  }
}

function speed(){
  if (ballx < (pX + bricksWidth / 2)){
    xdir = -1;
  } 
  else {
    xdir = 1;
  }
  xspeed = (1 + asin(((pX + bricksWidth / 2) - ballx) / (pX + (bricksWidth / 2) - pX))) / 2;
  yspeed = (1 + acos(((pX + bricksWidth / 2) - ballx) / (pX + (bricksWidth / 2) - pX))) / 2;
}

function reset(){
  background(0);
  ballx = x;
  bally = y;
  pX = startX;
  pY = startY;
  xspeed = startSpeed;
  yspeed = startSpeed;
  bounced = false;
}

function win(){
	background(200);
	textSize(40);
	text('You Win!!!', 10, 50);
	text('Click to play again!', 10, 90);
	if (mouseIsPressed){
		mouseClicked();
	}
}

function mouseClicked(){
		makeBricks();
		game();
	}
