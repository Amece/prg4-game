import { Objects } from "./objects.js";
export class Ninja extends Objects {
    constructor(tagName) {
        super(tagName);
        this.lives = 3;
        this.money = 0;
        this.verticalSpeed = 0;
        console.log("Ninja was created!");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    update() {
        this.y += this.verticalSpeed;
        super.update();
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
    }
    gainCash() {
        this.money++;
        let moneyAmount = document.getElementById("money");
        moneyAmount.innerText = this.money.toString() + ' $';
    }
    loseLife() {
        this.lives--;
        let livesAmount = document.getElementById("lives");
        livesAmount.innerText = 'Lives: ' + this.lives.toString();
    }
}
//# sourceMappingURL=ninja.js.map