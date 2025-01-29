# workshop-1
function
## URL
https://clementine0507.github.io/workshop-1/
### Notes
![c4a9594cfee94c5e89779ba743e06a7](https://github.com/user-attachments/assets/24c0b281-5cee-40f5-bbd4-82ab4da177a3)

![b2f549f1cc0ca1c9cd9d2fb47a47392](https://github.com/user-attachments/assets/608c42d5-02dd-4d61-8dbd-fe7e39032d16)

#### Processing

function setup() {

  createCanvas(900, 900);

  noStroke();

}


function draw() {

  background(220);

  
  for (let i = 0; i < 10; i++) {
  
    let x = random(width);
    
    let y = random(height);
    
    let balloonsize = random(30, 70);
    
    let colorBalloon = color(random(255), random(255), random(255));

    
    fill(colorBalloon);
    
    ellipse(x, y, balloonsize, balloonsize);
  
  }

}
