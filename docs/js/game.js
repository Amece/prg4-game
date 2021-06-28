import { Ninja } from "./ninja.js";
import { Samurai } from "./samurai.js";
import { Money } from "./money.js";
class Game {
    constructor() {
        this.samurai = [];
        this.moneybag = [];
        this.counter = 0;
        console.log("Game was created!");
        this.samurai.push(new Samurai("samurai"));
        this.samurai.push(new Samurai("samurai"));
        this.samurai.push(new Samurai("samurai"));
        this.samurai.push(new Samurai("samurai"));
        this.samurai.push(new Samurai("samurai"));
        this.samurai.push(new Samurai("samurai"));
        this.moneybag.push(new Money("moneybag"));
        this.moneybag.push(new Money("moneybag"));
        this.player = new Ninja("ninja");
        this.gameLoop();
    }
    gameLoop() {
        for (const samurai of this.samurai) {
            samurai.update();
            if (this.checkCollision(samurai.getBoundingRect(), this.player.getBoundingRect())) {
                samurai.killSamurai();
                this.player.loseLife();
            }
        }
        for (const moneybag of this.moneybag) {
            moneybag.update();
            if (this.checkCollision(moneybag.getBoundingRect(), this.player.getBoundingRect())) {
                moneybag.killMoneybag();
                this.player.gainCash();
                this.moneybag.push(new Money("moneybag"));
            }
        }
        this.player.update();
        this.checkLives();
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    checkLives() {
        if (this.player.lives < 1) {
            let gameover = document.getElementById("gameover");
            gameover.classList.add("show");
            this.counter++;
            if (this.counter > 240) {
                this.counter = 0;
                window.location.reload();
            }
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map