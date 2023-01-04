import { Rectangle2D } from "./rectangle-2d";

export class Player {  
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.move_force = 1;
        this.jump_force = 24;

        this.color = '#ff0000'
        this.velocity_x = 0;
        this.velocity_y = 0;
        this.grounded = false;
    }

    moveLeft() {
        this.velocity_x -= this.move_force
    }

    moveRight(){
        this.velocity_x += this.move_force
    }

    jump(){
        if(this.grounded){
            this.velocity_y -= this.jump_force
            this.grounded = false
        }
    }

    ground(){
      this.grounded = true;
      this.velocity_y = 0;
    }

    updatePosition(gravity, friction){
        this.velocity_y += gravity;
        this.velocity_y *= friction;

        this.velocity_x *= friction;

        this.y += this.velocity_y;
        this.x += this.velocity_x;
    }

    getBottom() {
        return this.y + this.height
    }

    setBottom(y) {
        this.y = y - this.height;
    }

};
