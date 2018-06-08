var cv = document.createElement("canvas");
cv.id = "draw";
cv.width = "400";
cv.height = "400";
document.body.insertBefore(cv,document.getElementsByTagName("img")[0]);
var ctx = cv.getContext("2d");
var image = document.images[0];

ctx.drawImage(image,10,10);

