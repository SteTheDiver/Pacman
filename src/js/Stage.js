'use strict'

const TILE_SIZE = 85
const WIDTH_STAGE = 12
const HEIGHT_STAGE = 6 

class Stage {
    constructor(xTiles, yTiles) {
        this.xTiles = xTiles;
        this.yTiles = yTiles;

    }

    render() {
        const elm = document.createElement('div')
        elm.className = "stage";
        elm.style.width = this.xTiles * TILE_SIZE + 'px';
        elm.style.height = this.yTiles * TILE_SIZE + 'px';
        
        return elm;


    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);  
    }
    

}