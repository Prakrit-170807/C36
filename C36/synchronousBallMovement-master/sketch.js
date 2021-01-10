var database;
var form , player , game
var GameMode=0
var Players = 0
 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new g_status()
  game.getStates()
  game.START
}

function draw(){
  background("white")
}

