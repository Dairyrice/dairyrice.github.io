// declare variables here
let dogs= 0 ;

function setup() {
  createCanvas(500, 500);

  // set background color in grayscale:
  background(150);


}

function draw() {

dogs++
// draw ellipse
ellipse(dogs, 100, 80, 80);

// draw rectangle
rect(dogs, 50, 80, 80);

}

console.log("inside draw")
// write custom functions here
