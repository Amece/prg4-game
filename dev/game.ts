import { Ninja } from "./ninja.js"
import { Samurai } from "./samurai.js"
import { Money } from "./money.js"

class Game {
      
    private samurai : Samurai[] = []
    private player : Ninja
    private moneybag : Money[] = []

    private counter:number = 0

    constructor() {
        console.log("Game was created!")
        
        // Create the samurai's enemies and moneybags
        this.samurai.push(new Samurai("samurai"))
        this.samurai.push(new Samurai("samurai"))
        this.samurai.push(new Samurai("samurai"))
        this.samurai.push(new Samurai("samurai"))
        this.samurai.push(new Samurai("samurai"))
        this.samurai.push(new Samurai("samurai"))
        this.moneybag.push(new Money("moneybag"))
        this.moneybag.push(new Money("moneybag"))

        // Create the player Ninja
        this.player = new Ninja("ninja")
        
        this.gameLoop()
        
    }

    private gameLoop() : void {
        // Constant update
        for (const samurai of this.samurai) {
            samurai.update()

            if(this.checkCollision(samurai.getBoundingRect(), this.player.getBoundingRect())) {
                // If you collide with the player, destroy samurai and player loses a life
                samurai.killSamurai()
                this.player.loseLife()

            }
        }

        for (const moneybag of this.moneybag) {
            moneybag.update()

            if(this.checkCollision(moneybag.getBoundingRect(), this.player.getBoundingRect())) {
                // If you collide with moneybag, destroy moneybag and give the player money
                moneybag.killMoneybag()
                this.player.gainCash()
                // Spawn a new money bag
                this.moneybag.push(new Money("moneybag"))
            }
        }
        this.player.update()

        this.checkLives();

        requestAnimationFrame(() => this.gameLoop())

        
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        // Check the collision
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     private checkLives() : void {
         // Check if players still has any lives
        if (this.player.lives < 1)
        {
            // Fade in the game over text
            let gameover:HTMLElement = document.getElementById("gameover") as HTMLElement;
            gameover.classList.add("show");
            // Refresh the page in 4 seconds
            this.counter++
            if(this.counter > 240) {
                //console.log("u died")
                this.counter = 0
                // Reload the page and start the game up again
                window.location.reload();
            }
        }
     }

} 

new Game()