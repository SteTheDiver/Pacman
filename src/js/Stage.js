'use strict'

const TILE_SIZE = 85
const WIDTH_STAGE = 12
const HEIGHT_STAGE = 8 

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
        for (let i=0 ; i < this.entities.length; i++) {
            if (this.entities[i].x === x && this.entities[i].y === y) {
                console.log(this.entities[i].type)
                if (this.entities[i].type === "apple" ) {
                    this.removeEntity(this.entities[i],i)
                    pacMan1.score += 1;
                }
                if (this.entities[i].type === "bomb" ) {
                    this.removeEntity(this.entities[i],i)
                    const entity = new Entity(x, y, 'tomb')
                    entity.mount(stage)
                    stage1.addEntity(entity)
                    this.removePacman(pacMan1)

                }
                return this.entities[i].type;
            } 
        }
        return null
    }

    addEntity(entity) {
        this.entities.push(entity)
    }

    removeEntity(entity,index) {
        entity.unmount();
        this.entities.splice(index, 1)
        console.log('ok')
    }

    removePacman(pacman) {
        pacman.unmount();
        console.log('ok')
    }
    

}