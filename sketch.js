
var box1;

function setup() {
  createCanvas(600, 400);
  box1=new Box();
}

function draw() {
  background(220);
  box1.setWidth(25);
  box1.show()
}

