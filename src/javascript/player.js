import { Rectangle2D } from "./rectangle-2d";

export class Player {  
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.color = '#ff0000'
        this.velocity_x = 0;
        this.velocity_y = 0;
    }

    getBottom() {
        return this.y + this.height
    }

    setBottom(y) {
        this.y = y - this.height;
    }

};
