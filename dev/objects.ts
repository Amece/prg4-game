export class Objects {
    protected x : number = 0
    protected y : number = 0
    protected div: HTMLElement

    constructor(tagName : string){
        this.div = document.createElement(tagName)
        document.body.appendChild(this.div)   
    }

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    public update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}