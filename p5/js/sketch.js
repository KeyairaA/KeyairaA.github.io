

function setup() {
  createCanvas(800,600);
  background(255,120,180);
  rectMode(CENTER);
}

function draw() {

    strokeWeight(10);
    stroke(255, 0, 0);
   //line requires 4 arguments
   //x1, y1, x2, y2
   line(20, 60, 700, 500);

   fill(66,244, 140);
  // ellipse expecting 4 arguments
  ellipse(200, 400, mouseX, mouseY);

   noStroke();
  fill(0, 20, 140);
  rect(width/2, height/2, 100, 300);

  //6 arguments
  //x1, y1, x2, y2, x3, y3
  //connects the dor ro form triangle
  triangle(600, 100, 700, 50, 750, 150);
}

function keyTyped(){
  if(key == 's'){
    save('sketch.jpg')
  }
}