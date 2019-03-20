var turtle;

var ellipseBrush = false;
var turtleBrush = false;

function preload(){
	turtle = loadImage("images/Turtle.jpg");

}

function setup(){
	createCanvas(windowsWidth, windowsHeight);
	imageMode(CENTER);
	background(0);

}

function draw(){
	if(turtleBrush == true){
		turtle();
	}
	if(ellipseBrush == true){
		ellip();
	}
}

function keyTyped(){
	if(key === 'q'){
		turtleBrush = true;
		ellipseBrush = false;
	}
	if(key === 'w'){
		turtleBrush = false;
		ellipseBrush = true;
	}
}

function turtleBrush(){
	image(turtle, mouseX, mouseY, 50, 50);
}

function ellip(){
	ellipse(mouseX,mouseY,50,50);
}


