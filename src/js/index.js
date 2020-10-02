"use strict";


class Pacman {
    constructor() {
this.xpos = 0;
this.mouth = 0;
    }
}


let xpos = 100;
const TILE_SIZE = 85;

document.addEventListener("keydown", (event) => {
  const entity = document.querySelector(".entity");
  if (event.code === "ArrowRight") {
    xpos += TILE_SIZE;
    entity.style.left = xpos + 'px';
  }
});

console.log("it works!");
