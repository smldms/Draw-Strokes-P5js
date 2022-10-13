let imgs = [];
let imgIndex = -1;
let img;
let paint;
let subStep = 100;
let z = 0;
let isStop = false;
let count = 0;

let totalFrame = 1500;
let cnv;
let myTitle = "Brassens"

function preload() {
    imgs[0] = loadImage("b4.png");
    //   imgs[1] = loadImage("b2.png");
//      imgs[2] = loadImage("b3.png");
//      imgs[3] = loadImage("b4.png");
}

function setup() {
    cnv = createCanvas(600, 600, SVG);
    cnv.parent('fullScreen');
    img = createImage(width, height);
    nextImage();
    paint = new Paint(createVector(width / 2, height / 2));
    background(255, 255, 255);
    colorMode(RGB, 255, 255, 255, 255);
}

function draw() {

    if (!isStop) {
        for (let i = 0; i < subStep; i++) {
            paint.update();
            paint.show();
            z += 0.01;
        }
    }

    if (count > totalFrame) {
        isStop = true;
        noLoop();
    }

    count++;
}

function fget(i, j) {
    let index = j * img.width + i;
    index *= 4;
    return color(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2], img.pixels[index + 3]);
}

function fset(i, j, c) {
    let index = j * img.width + i;
    index *= 4;
    img.pixels[index] = red(c);
    img.pixels[index + 1] = green(c);
    img.pixels[index + 2] = blue(c);
    img.pixels[index + 3] = alpha(c);
}

function keyPressed() {
    console.log(key);
    if (key === 's' || key === 'S') {
        isStop = !isStop;
    }
}

function mouseClicked() {
    nextImage();
    isStop = false;
    count = 0;
}

function touchStarted() {
   nextImage();
   isStop = false;
   count = 0;
}

function nextImage() {
  
    if (!img) return;
    imgIndex = (++imgIndex) % imgs.length;
    let targetImg = imgs[imgIndex];
    img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
    //img.resize(width, height);
    img.loadPixels();
    // clear();
}
