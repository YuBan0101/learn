var cv = document.createElement("canvas");
cv.id = "draw";
cv.width = "400";
cv.height = "400";
document.body.insertBefore(cv,document.getElementsByTagName("img")[0]);
var ctx = cv.getContext("2d");
var image = document.images[0];

ctx.drawImage(image,10,10);

ctx.strokeStyle = "#0000ff";
ctx.fillStyle = "rgba(45,45,45,0.2)";
ctx.moveTo(100,100);
ctx.lineTo(200,100);
//ctx.stroke();
ctx.lineTo(150,165);
ctx.lineTo(100,100);
ctx.moveTo(100,135);
ctx.lineTo(200,135);
ctx.lineTo(150,65);
ctx.lineTo(100,135);
ctx.stroke();