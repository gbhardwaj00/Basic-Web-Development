const flag = document.getElementById('flag');
const context = flag.getContext('2d');

// Drawing the flag and filling colors
context.fillStyle = "#FF671F";
context.fillRect(0, 0, 900, 200);
context.fillStyle = '#FFFFFF';
context.fillRect(0, 200, 900, 200);
context.fillStyle = '#046A38';
context.fillRect(0, 400, 900, 200);

// Drawing the Ashok Chakra
context.strokeStyle = '#06038D';
context.lineWidth = 10;
context.beginPath();
context.arc(450, 300, 90, 0, 2 * Math.PI);
context.stroke();

context.fillStyle = '#06038D';
context.beginPath();
context.arc(450, 300, 15, 0, 2 * Math.PI);
context.fill();
context.stroke();

// Drawing the lines in Ashok Chakra
context.lineWidth = 5;
var firstAngle = 0
var secondAngle = 180
const radius = 90
const xAtCenter = 450
const yAtCenter = 300
while(firstAngle != 180) {
  context.beginPath();
  context.moveTo(xAtCenter + radius * Math.cos(firstAngle * Math.PI/180), yAtCenter + radius * Math.sin(firstAngle * Math.PI/180));
  context.lineTo(xAtCenter + radius * Math.cos(secondAngle * Math.PI/180), yAtCenter + radius * Math.sin(secondAngle * Math.PI/180));
  context.stroke();
  firstAngle += 15
  secondAngle +=15
}


// Drawing the small circles on Ashok Chakra's boundary
var angle = 7.5
const radiusDots = 85
while(angle < 360) {
  context.beginPath();
  context.arc(xAtCenter + radiusDots * Math.cos(angle * Math.PI/180), yAtCenter + radiusDots * Math.sin(angle * Math.PI/180), 1.4, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  angle += 15
}