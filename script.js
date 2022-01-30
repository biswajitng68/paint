var paintcanvas=document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 5;
alert("Here you can change your photos and also draw your own paintings");
alert("just right click on your canvas and save images");
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;
paintcanvas.style.backgroundColor="white";
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
function bgcolor(value){
    
   paintcanvas.style.backgroundColor=value;
}
let imgInput = document.getElementById('finput');
  imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0]; //here we get the image file
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); // Creates image object
        myImage.src = e.target.result; // Assigns converted image to image object
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("canvas1"); // Creates a canvas object
          var myContext = myCanvas.getContext("2d"); // Creates a contect object
          myCanvas.width = myImage.width; // Assigns image's width to canvas
          myCanvas.height = myImage.height; // Assigns image's height to canvas
          myContext.drawImage(myImage,0,0); // Draws the image on canvas
          let imgData = myCanvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
        }
      }
    }
  });