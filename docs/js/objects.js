export class Objects {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=objects.js.map