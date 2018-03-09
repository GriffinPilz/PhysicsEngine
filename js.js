let dots = 5;

//square
let x2 = 10;
let y2 = 20;

//tested
let angleArray = [];
let dotArray = [];

function makeDots() {
    for (i=0; i<dots; i++) {
        let dotCoords = {xCoordinate: Math.floor(Math.random()*window.innerWidth), yCoordinate: Math.floor(Math.random()*window.innerHeight), xVel: 0, yVel: 0};
        dotArray.push(dotCoords);
    }
}


function calcVelocities() {
    for (i=0; i<dotArray.length; i++) {
        if (angleArray[i] >= 345 || angleArray[i] < 15){
            dotArray[i].xVel = dotArray[i].xVel + 0;
            dotArray[i].yVel = dotArray[i].yVel - 1;
        } else if (angleArray[i] >= 15 && angleArray[i] < 37){
            dotArray[i].xVel = dotArray[i].xVel + .5;
            dotArray[i].yVel = dotArray[i].yVel - .866;
        } else if (angleArray[i] >= 37 && angleArray[i] < 52){
            dotArray[i].xVel = dotArray[i].xVel + .707;
            dotArray[i].yVel = dotArray[i].yVel - .707;
        } else if (angleArray[i] >= 52 && angleArray[i] < 75){
            dotArray[i].xVel = dotArray[i].xVel + .866;
            dotArray[i].yVel = dotArray[i].yVel - .5;
        } else if (angleArray[i] >= 75 && angleArray[i] < 105){
            dotArray[i].xVel = dotArray[i].xVel + 1;
            dotArray[i].yVel = dotArray[i].yVel - 0;
        } else if (angleArray[i] >= 105 && angleArray[i] < 127){
            dotArray[i].xVel = dotArray[i].xVel + .866;
            dotArray[i].yVel = dotArray[i].yVel + .5;
        } else if (angleArray[i] >= 127 && angleArray[i] < 143){
            dotArray[i].xVel = dotArray[i].xVel + .707;
            dotArray[i].yVel = dotArray[i].yVel + .707;
        } else if (angleArray[i] >= 143 && angleArray[i] < 170){
            dotArray[i].xVel = dotArray[i].xVel + .5;
            dotArray[i].yVel = dotArray[i].yVel + .866;
        } else if (angleArray[i] >= 170 && angleArray[i] < 195){
            dotArray[i].xVel = dotArray[i].xVel + 0;
            dotArray[i].yVel = dotArray[i].yVel + 1;
        } else if (angleArray[i] >= 195 && angleArray[i] < 217){
            dotArray[i].xVel = dotArray[i].xVel - .5;
            dotArray[i].yVel = dotArray[i].yVel + .866;
        } else if (angleArray[i] >= 217 && angleArray[i] < 237){
            dotArray[i].xVel = dotArray[i].xVel - .707;
            dotArray[i].yVel = dotArray[i].yVel + .707;
        } else if (angleArray[i] >= 237 && angleArray[i] < 260){
            dotArray[i].xVel = dotArray[i].xVel - .866;
            dotArray[i].yVel = dotArray[i].yVel + .5;
        } else if (angleArray[i] >= 260 && angleArray[i] < 290){
            dotArray[i].xVel = dotArray[i].xVel - 1;
            dotArray[i].yVel = dotArray[i].yVel - 0;
        } else if (angleArray[i] >= 290 && angleArray[i] < 307){
            dotArray[i].xVel = dotArray[i].xVel - .866;
            dotArray[i].yVel = dotArray[i].yVel - .5;
        } else if (angleArray[i] >= 307 && angleArray[i] < 323){
            dotArray[i].xVel = dotArray[i].xVel - .707;
            dotArray[i].yVel = dotArray[i].yVel - .707;
        } else if (angleArray[i] >= 323 && angleArray[i] < 345){
            dotArray[i].xVel = dotArray[i].xVel - .5;
            dotArray[i].yVel = dotArray[i].yVel - .866;
        }
    }
}




//tested
function findAngle(y, x, a){
    temp1 = 90-(Math.atan2(y, x) * 180 / Math.PI);

    if (a === 0) {
        angleArray.push(Math.atan2(y, x) * 180 / Math.PI);
    } else if (a === 1) {
        angleArray.push(temp1+90);
    } else if (a === 2) {
        angleArray.push((Math.atan2(y, x) * 180 / Math.PI)+180);
    } else if (a === 3) {
        angleArray.push(temp1+270);
    }
}

function findTriangle(xC, yC) {
    let x3 = x2;
    let y3 = yC;

    let a = 0;

    if (xC <= x2 && yC >= y2) {
        a = 0;
    } else if (xC < x2 && yC < y2 ) {
        a = 1;
    } else if (xC >= x2 && yC < y2){
        a = 2;
    } else if (xC > x2 && yC >= y2) {
        a = 3;
    }

    x = Math.sqrt(Math.pow((x2 - x3), 2) + Math.pow((y2 - y3), 2));
    y = Math.sqrt(Math.pow((xC - x3), 2) + Math.pow((yC - y3), 2));

    findAngle(y, x, a);
}

(function () {
    makeDots();
    for (i=0; i<dotArray.length; i++){
        xC = dotArray[i].xCoordinate;
        yC = dotArray[i].yCoordinate;
        findTriangle(xC, yC);
    }
    calcVelocities();
})();

console.log(angleArray[0]);
console.log(dotArray);