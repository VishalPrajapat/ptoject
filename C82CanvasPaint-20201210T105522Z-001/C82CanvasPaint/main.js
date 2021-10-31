 var mouseEvent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color=black;
widthofline=1;
canvas.addEventlistener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
widthofline=document.getElementById("widthofline").value;
mouseEvent="mouseDown";
} 
canvas.addEventlistener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventlistener("moseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
}
function cleararea(){
 ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);   
}
canvas.addEventlistener("mousemove",my_mousemove);
function my_mousemove(e){
currentpositionofmousex=e.clientX-canvas.offsetleft;
currentpositionofmousey=e.clientY-canvas.offsettop;
if (mouseEvent="mouseDown"){
ctx.beginPath();
ctx.strokestyle=color;
ctx.lineWidth=widthofline;
console.log("lastpositionof x and Y coordinates= ");
console.log("x= "+ lastpositionofx+"y="+lastpositionofy);
ctx.moveTo(lastpositionofx,lastpositionofy);
console.log("currentpositionof x and Y coordinates= ");
console.log("x= "+ currentpositionofmouesex+"y="+currentpositionofmousey);
ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
ctx.stroke();
}
lastpositionofx=currentpositionofmousex;
lastpositionofy=currentpositionofmousey
}








