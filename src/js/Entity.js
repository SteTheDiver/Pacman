
class Entity {
    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type
    }
    render() {
        const elm = document.createElement('div')
        elm.className = 'entity entity--'+this.type
        elm.style.left = this.x * TILE_SIZE + "px";
        elm.style.top = this.y * TILE_SIZE + "px";
        return elm

    }
    mount(parent) {
        this.element = this.render()
        parent.appendChild(this.element)
    }
}