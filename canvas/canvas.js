var drawing = document.getElementById("drawing");

//确定浏览器支持<canvas>元素
if(drawing.getContext){
    var ctx = drawing.getContext("2d");
    ctx.strokeStyle = "red";
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(10,10,50,50);

    //绘制半透明的蓝色矩形
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.fillRect(30,30,50,50);
    ctx.strokeRect(0,0,100,100);
    //清除重叠
    ctx.clearRect(30,30,30,30);

    //中心矩形
    ctx.fillStyle = "red";
    ctx.fillRect(35,35,20,20);
    
}