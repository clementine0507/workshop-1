# workshop-1
function
## URL
https://clementine0507.github.io/workshop-1/
### Notes
![c4a9594cfee94c5e89779ba743e06a7](https://github.com/user-attachments/assets/24c0b281-5cee-40f5-bbd4-82ab4da177a3)

![b2f549f1cc0ca1c9cd9d2fb47a47392](https://github.com/user-attachments/assets/608c42d5-02dd-4d61-8dbd-fe7e39032d16)

#### Processing

![image](https://github.com/user-attachments/assets/f7cd29b4-764d-4136-8f4a-93884da6ac22)

· Use createCanvas(900, 900) to create a 900x900 canvas for drawing.
· Apply noStroke() to remove the outline of shapes, which results in smoother edges.
· Use setInterval(colorBalloons, 1000) to call the colorBalloons function every second, controlling the speed of balloon generation.
· Use background(220) to set a background color. This ensures that every frame of the drawing has a clean background, preventing the old balloons from lingering.
· In a for loop, generate balloons based on the current balloonCount. The position (x and y), size (balloonsize), and color (balloonColor) of each balloon are randomized. Balloons are drawn using ellipse().
· If balloonCount reaches or exceeds 10, stop generating new balloons by clearing the interval. A console.log is used to inform that the balloon count has reached its limit.

New item
