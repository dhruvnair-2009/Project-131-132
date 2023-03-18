img = "";
status = "";

function preload() {
    img = loadImage('bikee.jpg');

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill(66, 135, 245);
    text("Bike", 45, 75);
    noFill();
    stroke(66, 135, 245);
    rect(30, 60, 250, 350);

    fill("#FF0000");
    text("Car", 320, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 325, 320)
}