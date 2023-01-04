export class Rectangle2D {
    
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getBottom() {
        return this.y + this.height
    }

    setBottom(y) {
        this.y = y - this.height;
    }
}

