var body = document.getElementsByTagName("body")[0];
body.style.background = "radial-gradient(#FFFFFF 50%, #00ffcc 80%, #e4b6f7  40%)";
var div = document.createElement("div");
div.style.backgroundColor = "white";
div.style.display = "block";
div.id = "bigBoy";
div.addEventListener('click',function tileClick(event) {
  event.target.style.backgroundColor = crayon.currentColor;
});
// div.addEventListener("mousedown", function flowyBrush (event){
//   event.target.style.backgroundColor = crayon.currentColor}
var audio = document.createElement("audio");
body.appendChild(audio);
audio.src = "superMario.mp3";
audio.loop = true;
audio.play();

var palette = document.getElementById("palette");


body.appendChild(div);
function createTiles () {
  for (var i = 0; i < 2700; i++) {
    var tile = document.createElement("div");
    tile.classList.add('tile');
    div.appendChild(tile);
  }
}
createTiles();


var crayon = {
  currentColor: '#000000'
};

palette.addEventListener("click", colorClick);


function colorClick(event) {
  crayon.currentColor = window.getComputedStyle(event.target).backgroundColor;
  var box = document.getElementById("colorBox");
  box.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
}
