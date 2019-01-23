var lander;         // moonlander object
var floor;          // the floor of the moon
var gravity = -0.02; // gravity
var uiFont;
var uiFontSize = 32;

function preload() {
    uiFont = loadFont("trench100free.otf");
}

function setup() {
    createCanvas(1280, 720);    
    floor = new Floor(128);
    lander = new Lander();

    // set text characteristics
    textFont(uiFont);
    textSize(uiFontSize);    
}

function showUI() {
    fill(0);    
    textAlign(LEFT);    
    text("Fuel: " + Math.round(lander.fuel), 10, 28);
    if (lander.succeeded) {
        text("You won!", 10, 58);
    } else if (!lander.alive) {
        text("You lost.", 10, 58);
    } else {
        text("Velocity: " + lander.velY, 10, 58);
    }
}

function draw() {
    background(128);
    
    if (keyIsPressed) {
        if (key == ' ') {   // as we hold space, the moon lander adds throttle            
            lander.throttle();
        }
    }
        
    floor.show();
    lander.update();
    lander.show();
    
    showUI();
}