"use strict";

const app = document.querySelector('#app');
const stage1 = new Stage(WIDTH_STAGE, HEIGHT_STAGE);
stage1.mount(app);

const pacMan1 = new Pacman(1, 3, stage1)
const stage = document.querySelector('.stage');
pacMan1.mount(stage);

const ent1 = new Entity(3,4,'wall')
ent1.mount(stage)
stage1.addEntity(ent1)

const ent2 = new Entity(3,3,'wall')
ent2.mount(stage)
stage1.addEntity(ent2)

const ent3 = new Entity(1,2,'apple')
ent3.mount(stage)
stage1.addEntity(ent3)

const ent4 = new Entity(2,3,'bomb')
ent4.mount(stage)
stage1.addEntity(ent4)


