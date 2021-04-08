const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);


    Engine.update(engine);

    noStroke();
        textSize(35)
        fill("white")
        if(hour>=12){
            text("Time : "+ hour%12 + " PM", 50,100);
           }else if(hour==0){
             text("Time : 12 AM",100,100);
           }else{
            text("Time : "+ hour%12 + " AM", 50,100);
           }

}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<06){
        debugger;
        bg = "sunrise1.png"
    }
    else if(hour>=07 && hour<08){
        debugger;
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<09){
        debugger;
        bg = "sunrise3.png";
    }
    else if(hour>=09 && hour<10){
        debugger;
        bg = "sunrise4.png";
    }
    else if(hour>=10 && hour<11){
        debugger;
        bg = "sunrise5.png";
    }
    else if(hour>=11 && hour<14){
        debugger;
        bg = "sunrise6.png";
    }
    else if(hour>=14 && hour<15){
        debugger;
        bg = "sunset7.png";
    }
    else if(hour>=15 && hour<16){
        debugger;
        bg = "sunset8.png";
    }
    else if(hour>=16 && hour<17){
        debugger;
        bg = "sunset9.png";
    }
    else if(hour>=17 && hour<18){
        debugger;
        bg = "sunset10.png";
    }
    else if(hour>=18 && hour<19){
        debugger;
        bg = "sunset11.png";
    }
    else{
        debugger;
        bg = "sunset12.png";
    }

    

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


