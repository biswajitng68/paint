var paintcanvas=document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 5;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {
if(isNumeric(value)){
 paintcanvas.width=value;
}    
}
function setheight (value) {
if(isNumeric(value)){
 paintcanvas.height=value;
}    
}
function startpaint(){
    isPainting=true;
}
function endpaint(){
    isPainting=false;
}
function dopaint(x,y){
    if(isPainting){
        paintCircle(x,y);
    }
}
function setcolor(newcolor){
    color=newcolor;
}
function resizebrush(newsize){
    radius=newsize;
    document.getElementById("sizeout").value=newsize;
}
function clearCanvas () {
 context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
 // make sure to start a new circle each time
 context.beginPath();
 // draw circle using a complete (2*PI) arc around given point
 context.arc(x, y, radius, 0, Math.PI * 2, true);
 context.fillStyle = color;
 context.fill();
}

// verify the given value is actually a number
function isNumeric (value) {
 // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
 return !isNaN(value);
}
 