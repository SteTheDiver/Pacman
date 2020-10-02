"use strict";

class Pacman {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = 0;
    this.facing = 0;
  }

  render() {
    const elm = document.createElement("div");
    elm.className = "entity entity--pac pacboy-active-light";
    elm.style.left = this.xpos * TILE_SIZE + "px";
    elm.style.top = this.ypos * TILE_SIZE + "PX";
    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowRight") {
        this.moveRight();
      }
      if (event.code === "ArrowLeft") {
        this.moveLeft();
      }
      if (event.code === "ArrowDown") {
        this.moveDown();
      }
      if (event.code === "ArrowUp") {
        this.moveUp();
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
    this.element.style.backgroundPositionY = this.facing + "%";
    if (this.mouth === 0) {
      this.mouth = 100;
    } else {
      this.mouth = 0;
    }
    this.element.style.backgroundPositionX = this.mouth + "%";
  }

  moveRight() {
    if (this.xpos < WIDTH_STAGE - 1) {
      this.xpos += 1;
      this.element.style.left = this.xpos * TILE_SIZE + "px";
      this.facing = 0;
      this.update();
    }
  }
  moveLeft() {
    if (this.xpos > 0 ) {
      this.xpos -= 1;
      this.element.style.left = this.xpos * TILE_SIZE + "px";
      this.facing = 33;
      this.update();
    }
  }
  moveUp() {
    if (this.ypos > 0) {
      this.ypos -= 1;
      this.element.style.top = this.ypos * TILE_SIZE + "px";
      this.facing = 100;
      this.update();
    }
  }
  moveDown() {
    if (this.ypos < HEIGHT_STAGE - 1) {
      this.ypos += 1;
      this.element.style.top = this.ypos * TILE_SIZE + "px";
      this.facing = 66;
      this.update();
    }
  }
}
