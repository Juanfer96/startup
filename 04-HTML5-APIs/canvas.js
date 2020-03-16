let c = document.getElementById("canvas-geometric");
let ctx = c.getContext("2d");
window.onload =drawAll(ctx);

function drawLine(ctx){
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.strokeStyle = "green";
  ctx.stroke();
}

function drawCircle(ctx){
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.strokeStyle = "yellow";
  ctx.stroke();
}

function drawText(ctx){
  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("My canvas", 10, 50);
}

function  drawStrokeText(ctx){
  ctx.font = "30px Arial";
  ctx.strokeStyle = 'magenta';
  ctx.strokeText("My Stroke", 10, 90);

}

function drawGradient(ctx){
  let grd = ctx.createLinearGradient(160, 0, 200, 100);
  grd.addColorStop(1, "blue");
  grd.addColorStop(0, "yellow");
  ctx.fillStyle = grd;
  ctx.fillRect(160, 0, 200, 100);
}

function drawAll(ctx) {
  drawLine(ctx);
  drawCircle(ctx);
  drawText(ctx);
  drawStrokeText(ctx);
  drawGradient(ctx);
}

let canvas = document.getElementById("rectangle");
let context = canvas.getContext("2d");
let  x = 0;
let  y = 0;
let  vel = 5;
let UpDown= true;
canvas.heigth=400;
canvas.width=400;

function drawBackground(){
  context.fillStyle = "white";
  context.fillRect(0, 0, 400, 400);
}
function drawRectangle(){
  let grd = ctx.createLinearGradient(x, y, 400, 100);
  grd.addColorStop(1, "blue");
  grd.addColorStop(0, "yellow");
  context.fillStyle = grd;
  context.fillRect(x, y, 400, 100);
}

function moveRectangleUpDown (){
  y = y + vel;
  if ( 100 + y > canvas.heigth || y < 0) {
    vel *= -1;
  }
  drawBackground();
  drawRectangle();
}

const moveRectangle = () =>  setInterval(moveRectangleUpDown,50);
moveRectangle();



