var img = "";
function preload() {
    img = loadImage("tiger.jpg");
}

function setup() {
    canvas = createCanvas(800, 400);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 250, 100, 250, 250);
}

function take_snapshot(){
    save("download.png");
}