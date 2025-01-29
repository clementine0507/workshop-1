function setup() {
  createCanvas(900, 900);
  noStroke();
  colorMode(HSB); 
}

function draw() {
  background(220);
  
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let balloonsize = random(30, 70);
    let colorBalloon = color(random(255), random(100, 255), random(100, 255));
    let satValue = saturation(colorBalloon);
    
    fill(colorBalloon); 
    ellipse(x, y, balloonsize, balloonsize);
  }
}
