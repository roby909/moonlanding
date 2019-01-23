class Lander {        
    constructor() {
        this.alive = true;
        this.succeeded = false;
        this.x = width / 2;
        this.y = 0;
        this.width = 32;
        this.height = 32;
        this.velX = 0;
        this.velY = 0;
        this.fuel = 100;
        this.throttleStrength = 0.03;
        this.floor = floor;
        this.heightFromBottom = this.calculateHeightFromBottom();
        
    }

    calculateHeightFromBottom() {
        let result = floor.y - this.y - this.height;
        if (result >= 0)
            return(result);
        else
            return(0);
    }

    show() {
        if (this.alive) {
            stroke(0);
            fill(255);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    throttle() {        
        if (this.fuel > 0) {
            this.velY -= this.throttleStrength;
            this.fuel -= this.throttleStrength * 10;
        } else {
            this.fuel = 0;
        }
    }

    update() {
        this.heightFromBottom = this.calculateHeightFromBottom();        
        
        if (this.alive) {                        
            if (this.y + this.height < floor.y)     // if we are above the floor
                this.velY -= gravity;
            else {                                  // when we land
                if (this.velY > 1) {                // we only win, if the Y velocity is below this value when landing
                    this.alive = false;
                    this.succeeded = false;
                } else {
                    this.alive = true;
                    this.succeeded = true;
                }
                
                this.velY = 0;
                this.y = floor.y - this.height;
            }

            this.x += this.velX;
            this.y += this.velY;
        }
    }
}