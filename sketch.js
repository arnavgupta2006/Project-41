var boy, umbrella ;
var maxDrops = 100;

function preload(){
    boy = loadImage("boy.js");
}

function setup(){
  createCanvas(400,600); 
    Umbrella = new umbrella(x,y,100,200);
    
    for(var i=0, i<maxDrops; i++){
        drops.push(new createDrop(random,0,400),random(0,400)));
    }
}

function draw(){
    
    drawSprites();
}   

