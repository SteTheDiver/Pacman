"use strict";

class Pacman {
  constructor() {
    this.xpos = 0;
    this.mouth = 0;
  }

  render() {
    const elm = document.createElement('div');
    elm.className = "entity entity--pac pacboy-active-light";

    return elm;
    
  }

  mount(parent) {
      this.element = this.render();
      parent.appendChild(this.element);  
  }

  update() {}
}

const app = document.querySelector('#app');
const pacMan1 = new Pacman;

pacMan1.mount(app)


let xpos = 100;
const TILE_SIZE = 85;

document.addEventListener("keydown", (event) => {
  const entity = document.querySelector(".entity");
  if (event.code === "ArrowRight") {
    xpos += TILE_SIZE;
    entity.style.left = xpos + "px";
  }
});

console.log("it works!");
