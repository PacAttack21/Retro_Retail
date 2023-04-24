// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the starting position and size of Pacman
let x = canvas.width / 2;
let y = canvas.height / 2;
let size = 50;

// Set the speed and direction of Pacman's movement
let speed = 2;
let direction = -1;

// Set the angle and size of Pacman's mouth opening
let angle = Math.PI / 7;
let mouthSize = 0;

// Draw Pacman on the canvas
function drawPacman() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save the canvas state and rotate the context
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);

    // Draw the Pacman shape
    ctx.beginPath();
    ctx.arc(0, 0, size, angle + mouthSize, -angle - mouthSize);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();

    // Restore the canvas state
    ctx.restore();

    // Update the angle and size of Pacman's mouth opening
    mouthSize += direction * 0.02;
    if (mouthSize > angle || mouthSize < 0) {
        direction = -direction;
    }

    // Move Pacman up and down on the canvas
    y += speed;
    if (y + size > canvas.height || y - size < 0) {
        speed = -speed;
    }

    // Request the next animation frame
    requestAnimationFrame(drawPacman);
}

// Start the animation
drawPacman();

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
let yPos = canvas2.height - 70;
let speed2 = 5;

function drawShip(xPos, yPos) {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.beginPath();
  ctx2.moveTo(xPos - 25, yPos + 50);
  ctx2.quadraticCurveTo(xPos, yPos + 35, xPos + 25, yPos + 50);
  ctx2.lineTo(xPos + 20, yPos + 25);
  ctx2.quadraticCurveTo(xPos, yPos + 10, xPos - 20, yPos + 25);
  ctx2.lineTo(xPos - 25, yPos + 50);
  ctx2.closePath();
  ctx2.fillStyle = 'gray';
  ctx2.fill();
  ctx2.strokeStyle = 'white';
  ctx2.lineWidth = 2;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.arc(xPos - 15, yPos + 50, 10, 0, 2 * Math.PI);
  ctx2.arc(xPos + 15, yPos + 50, 10, 0, 2 * Math.PI);
  ctx2.fillStyle = 'orange';
  ctx2.fill();
  ctx2.strokeStyle = 'yellow';
  ctx2.lineWidth = 3;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(xPos - 15, yPos + 50);
  ctx2.lineTo(xPos - 25, yPos + 60);
  ctx2.lineTo(xPos - 15, yPos + 70);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.moveTo(xPos + 15, yPos + 50);
  ctx2.lineTo(xPos + 25, yPos + 60);
  ctx2.lineTo(xPos + 15, yPos + 70);
  ctx2.stroke();
}

function update() {
  yPos -= speed2;
  if (yPos < -70) {
    yPos = canvas2.height - 70;
  }
  drawShip(50, yPos);
}

setInterval(update, 50);