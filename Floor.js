class Floor {
    constructor(floorHeight) {
        this.floorWidth = width;
        this.floorHeight = floorHeight;
        this.x = 0;
        this.y = height - floorHeight;        
    }

    show() {
        noStroke();
        fill(200);        
        rect(this.x, this.y, this.floorWidth, this.floorHeight);
    }
}