var canvas;
var music;
var box1, box2, box3, box4;
var mainbox;
var Edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(110,580,200,20);//create 4 different surfaces
    box1.shapeColor = "green";
    box2 = createSprite(320,580,200,20);
    box2.shapeColor = "red";
    box3 = createSprite(540,580,200,20);
    box3.shapeColor = "yellow";
    box4 = createSprite(750,580,200,20);
    box4.shapeColor = "blue";
    mainbox = createSprite((20,750),300,20,20);
    mainbox.shapeColor = "white";
    mainbox.velocityX = 4;
    mainbox.velocityY = -4;
    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    Edges = createEdgeSprites();
    mainbox.bounceOff(Edges);
 if(mainbox.isTouching(box1)){
     mainbox.shapeColor = "green";
 }
 if(mainbox.isTouching(box2)){
    mainbox.shapeColor = "red";
}
if(mainbox.isTouching(box3)){
    mainbox.shapeColor = "yellow";
}
if(mainbox.isTouching(box4)){
    mainbox.shapeColor = "blue";
}

    drawSprites();//create edgeSprite
    


    //add condition to check if box touching surface and make it box
}
