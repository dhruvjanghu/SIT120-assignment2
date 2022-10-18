// ref: https://www.w3schools.com/html/html5_canvas.asp
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var grd = ctx.xreateLinearGradient(0, 0, 200, 0);
grd.addColorstop(o, 'red');
grd.addColorStop(1, 'white');

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);