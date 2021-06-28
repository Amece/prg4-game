import { Objects } from "./objects.js"

export class Samurai extends Objects{


    constructor(tagName: string)  {
        super(tagName)
        
        // Generate a random x and y value within de width and height of the viewport
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    public update() : void {
        // Move the samurai (x-value) to the left. 
        this.x -= 3

        // Check if the samurai is completely outside the screen (left side)
        if(this.x + this.div.clientWidth < 0) {
            // Place the samurai on the right side outside the screen
            this.x = window.innerWidth
            // Generate a random y-value
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        }

        super.update()
    }

    public killSamurai() : void {
        // remove samurai from the game
        this.div.remove();
    }
}