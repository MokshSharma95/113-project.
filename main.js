function preload(){

}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(75,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 100, 70, 300, 250);
    stroke(170, 10, 10);
    fill(170, 10, 10);

    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 360, 50);
    circle(460, 360, 50);

    stroke(0, 0, 0);
    fill(51, 164,255);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}
function take_snapshot(){
    save("frame.png");
}