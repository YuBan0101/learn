var dw = document.createElement("canvas");
dw.id = "dw";
dw.width = 300;
dw.height = 300;
document.body.insertBefore(dw,document.getElementById("drawing"));
var ctx = dw.getContext("2d");
//开始路径
ctx.beginPath();
//绘制外圈
ctx.arc(100,100,99,0,2*Math.PI,false);
//ctx.arcTo(0,0,200,200,500);
//绘制内圈
ctx.moveTo(194,100);
ctx.arc(100,100,94,0,2*Math.PI,false);
//绘制分针
//描边路径

//ctx.moveTo(100,100);
//ctx.bezierCurveTo(50,50,120,100,150,150);
ctx.font = "bold 14px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("12",100,20);

//变换原点
ctx.translate(100,100);

//旋转
ctx.rotate(2);

ctx.moveTo(0,0);
ctx.lineTo(0,-85);
//绘制时针
ctx.moveTo(0,0);
ctx.lineTo(-65,0);

ctx.stroke();