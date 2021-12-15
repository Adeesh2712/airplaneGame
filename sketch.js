var canvas, backGroundImage;
var gameState = 0;
var playerCount=0;
var database;


var form,player,game;
var plane1,plane2;

function preload(){

    plane1Img = loadImage("images/airplane1.png");
    plane2Img = loadImage("images/airplane2.png");
    skyImage  = loadImage("images/sky.jpg");

}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-20);
    database = firebase.database();

    game=new Game
    game.start();
   

}
function draw(){

    if(playerCount === 2){
     game.update(1);
   }

   if(gameState === 1){
     clear();
    game.play();
  }
  console.log(gameState);
  
}