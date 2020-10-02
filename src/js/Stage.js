'use strict'

const TILE_SIZE = 85
const WIDTH_STAGE = 12
const HEIGHT_STAGE = 6 

class Stage {
    constructor(xTiles, yTiles) {
        this.xTiles = xTiles;
        this.yTiles = yTiles;
        this.entities = []
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

    collisionDetection(x,y) {
        console.log(x+','+y)
        for (let i=0 ; i< this.entities.length; i++) {
            if (this.entities[i].x === x && this.entities[i].y === y) {
                return this.entities[i]
            }
        }
        return null
    }

    addEntity(entity) {
        this.entities.push(entity)
    }
    

}