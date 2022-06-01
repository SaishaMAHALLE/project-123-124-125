function setup() {
    video=createCapture(VIDEO);
    video.size(600, 650);
    video.position(100, 100);

    canvas=createCanvas(600, 450);
    canvas.position(800, 200);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose" , gotposes);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotposes(results) {
if(results.length > 0){
    console.log(results);
}
}

function draw() {
    background("#ef71bb");
}