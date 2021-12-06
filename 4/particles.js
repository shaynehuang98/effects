const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let img
let particle

function preload(){
   img = loadImage("4.jpg")
}

function setup (){
    createCanvas(canvasWidth, canvasHeight);
    //img = loadImage("4.jpg");
    //particles = new Particle [200];
    for (let i = 1; i <particle; i++){
        particle [i] = new particle();
    }

}


let Particle = function(position){
    x = width/2;
    y = height/2;
    a = random(TWO_PI);
    speed = random(1,2);
    vx = cos(a)*speed
    vy = sin(a)*speed;
    c = img.get(x,y);
    fill (c);
    ellipse(x,y,5,5);

}

function draw(){
    background(20)
    //image(img, 0, 0);
    for (let i = 1; i <particle; i++){
    particle()
    }
    noStroke();

}