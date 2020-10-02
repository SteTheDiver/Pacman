"use strict";

const app = document.querySelector('#app');
const stage1 = new Stage(WIDTH_STAGE, HEIGHT_STAGE);
const pacMan1 = new Pacman(1, 3)


stage1.mount(app);
const stage = document.querySelector('.stage');
pacMan1.mount(stage);


console.log("it works!");
