"use strict";
const TILE_SIZE = 85;

class Pacman {
  constructor() {
    this.xpos = 0;
    this.ypos = 0
    this.mouth = 0;
    this.facing = 0;
  }

  render() {
    const elm = document.createElement('div');
    elm.className = "entity entity--pac pacboy-active-light";
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowRight") {
        this.moveRight()
      }
      if (event.code === "ArrowLeft") {
        this.moveLeft()
      }
      if (event.code === "ArrowDown") {
        this.moveDown()
      }
      if (event.code === "ArrowUp") {
        this.moveUp()
      }
    });
    return elm;
    
  }

  mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);  
  }

  update() {
    //this.element.classList.toggle('pacboy-active-light--mouth')
    this.element.style.backgroundPositionY = this.facing+'%'
    if (this.mouth === 0) {
      this.mouth = 100
    }
    else {
      this.mouth = 0
    }
    this.element.style.backgroundPositionX = this.mouth+'%'
  }

  moveRight() {
    this.xpos += TILE_SIZE;
    this.element.style.left = this.xpos + "px";
    this.facing = 0
    this.update()
  }
  moveLeft() {
    this.xpos -= TILE_SIZE;
    this.element.style.left = this.xpos + "px";
    this.facing = 33
    this.update()
  }
  moveUp() {
    this.ypos -= TILE_SIZE;
    this.element.style.top = this.ypos + "px";
    this.facing = 100
    this.update()
  }
  moveDown() {
    this.ypos += TILE_SIZE;
    this.element.style.top = this.ypos + "px";
    this.facing = 66
    this.update()
  }
}

const app = document.querySelector('#app');
const pacMan1 = new Pacman;

pacMan1.mount(app)


console.log("it works!");
