const flag = document.getElementById('flag');
const context = flag.getContext('2d');

// Drawing the flag
context.fillStyle = '#046A38';
context.fillRect(0, 0, 900, 200);
context.fillStyle = '#FFFFFF';
context.fillRect(0, 200, 900, 200);
context.fillStyle = "#FF671F";
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
context.beginPath();
context.moveTo(450, 210);
context.lineTo(450, 390);
context.stroke();

context.beginPath();
context.moveTo(363.06, 276.706);
context.lineTo(536.93, 323.29);
context.stroke();

context.beginPath();
context.moveTo(363.06, 323.29);
context.lineTo(536.93, 276.706);
context.stroke();

context.beginPath();
context.moveTo(372.057, 255);
context.lineTo(527.942, 345);
context.stroke();

context.beginPath();
context.moveTo(372.057, 345);
context.lineTo(527.942, 255);
context.stroke();

context.beginPath();
context.moveTo(360, 300);
context.lineTo(540, 300);
context.stroke();

context.beginPath();
context.moveTo(513.639, 363.63);
context.lineTo(386.360, 236.360);
context.stroke();

context.beginPath();
context.moveTo(513.639, 236.360);
context.lineTo(386.360, 363.63);
context.stroke();

context.beginPath();
context.moveTo(495, 377.942);
context.lineTo(405, 222.057);
context.stroke();

context.beginPath();
context.moveTo(495, 222.057);
context.lineTo(405, 377.942);
context.stroke();

context.beginPath();
context.moveTo(473.293, 386.933);
context.lineTo(426.707, 213.067);
context.stroke();

context.beginPath();
context.moveTo(473.293, 213.067);
context.lineTo(426.707, 386.933);
context.stroke();

// Drawing the small circles on Ashok Chakra's boundary 
context.beginPath();
context.arc(534.27, 311.09, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(528.529, 332.528, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(517.435, 351.744, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(501.09, 368.09, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(482.52, 378.529, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(461.094, 384.27, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(439.656, 384.27, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(418.28, 378.529, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(399.87, 368.09, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(383.53, 351.744, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(372.435, 332.528, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(366.69, 311.09, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(366.69, 288.91, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(372.435, 267.472, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(383.53, 248.256, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(399.87, 231.91, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(418.28, 221.471, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(439.656, 215.73, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(461.094, 215.73, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(482.52, 221.471, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(501.09, 231.91, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(517.435, 248.256, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(528.529, 267.472, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.arc(534.27, 288.91, 1.4, 0, 2 * Math.PI);
context.fill();
context.stroke();