const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let img

function preload(){
   img = loadImage("4.jpg")
}

function setup (){
    createCanvas(canvasWidth, canvasHeight);
    //img = loadImage("4.jpg");
    background(20);
    img.loadPixels()
}


function draw(){
    //image(img, 0, 0);
    for (let i = 1; i < 2000; i++){
    x = random(width);
    y = random(height);
    c = img.get(x,y)
    fill (c)
    ellipse(x,y,5,5);
    }
}