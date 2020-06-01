let mobileNet;
let video;

function setup() {
    createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);
}
  
function draw() {
    background(220);
    image(video, 0, 0);
}

function modelReady() {
    console.log('Model is ready!');
    mobileNet.predict(video, getResults);
}

//In ML5, the first argument is always an error
function getResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("classify").innerHTML = results[0].label;
        mobileNet.predict(video, getResults);
    }
}
