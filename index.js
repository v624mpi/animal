
let scribble;

function setup() {
  createCanvas(900, 900);
  background("#FDF7EB");
  ellipseMode(CENTER);
  rectMode(CENTER);
  strokeWeight(2);
  scribble = new Scribble();

  for (var x = 0; x < width; x += width / 40) {
    for (var y = 0; y < height; y += height / 40) {
      stroke("#E0D4BF");

      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
  noLoop();
}


function draw() {
  frameRate(5);



  stroke(0);
  scribble.scribbleLine(320, 550, 400, 550);


  stroke(0);
  scribble.scribbleLine(500, 550, 580, 550);

  patternColors([color("#95B946"), color("#7B9F2C"), color(200)]);
  pattern(PTN.noiseGrad(0.3));

  stroke(0);
  rectPattern(370, 530, 60, 40, 20);



  noFill()
  stroke(0)
  scribble.scribbleRoundedRect(370, 530, 60, 40, 20);


  patternColors([color("#95B946"), color("#7B9F2C"), color(200)]);
  pattern(PTN.noiseGrad(0.3));

  stroke(0);
  rectPattern(530, 530, 60, 40, 20);


  noFill()
  stroke(0)
  scribble.scribbleRoundedRect(530, 530, 60, 40, 20);

  push();
  patternColors([color("#95B946"), color("#7B9F2C"), color(200)]);
  pattern(PTN.noiseGrad(0.3));
  stroke(0)

  rectPattern(width / 2, height / 2, 200, 200, 50);



  stroke(0)
  noFill(0);
  scribble.scribbleRoundedRect(width / 2, height / 2, 200, 200, 50);
  // глаз белый правый
  stroke(0)
  fill(250);
  scribble.scribbleEllipse(550, 390, 80, 80);
  // глаз черный правый
  stroke(0)
  fill(0);
  scribble.scribbleEllipse(550, 390, 20, 20);

  // глаз белый левый
  stroke(0)
  fill(250);
  scribble.scribbleEllipse(350, 390, 80, 80);
  // глаз черный левый
  stroke(0)
  fill(0);
  scribble.scribbleEllipse(350, 390, 20, 20);


  fill("#FC985A");
  scribble.scribbleEllipse(350, 460, 40, 15);




  fill("#FC985A");
  scribble.scribbleEllipse(550, 460, 40, 15);


  stroke(0)

  fill("#95B946");


  //hand
  fill("#95B946");
  // arc(460,533,15,40, radians(360), radians(170) );
  scribble.scribbleCurve(430, 410, 440, 420, 460, 410, 470, 420);
  scribble.scribbleCurve(430, 420, 440, 430, 460, 420, 470, 430);
  //hair
  noFill()
  scribble.scribbleCurve(430, 300, 440, 320, 440, 310, 450, 320);

  pop();

  stroke(251)

  scribble.scribbleFilling(0, 400, 4, 180);
  redraw();

}
