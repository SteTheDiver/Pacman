"use strict";

const app = document.querySelector('#app');
const stage1 = new Stage(WIDTH_STAGE, HEIGHT_STAGE);
stage1.mount(app);

const pacMan1 = new Pacman(0, 0, stage1)
const stage = document.querySelector('.stage');
pacMan1.mount(stage);


fetch(`http://bootcamp.podlomar.org/api/pacman?width=12&height=8`)
  .then((resp) => resp.json())
  .then((json) => {

    console.log(json.apples.length)
    for (let i=0; i<json.apples.length; i++) {
    const entity = new Entity(json.apples[i].x, json.apples[i].y, 'apple')
    entity.mount(stage)
    stage1.addEntity(entity)
    }
    for (let i=0; i<json.walls.length; i++) {
      const entity = new Entity(json.walls[i].x, json.walls[i].y, 'wall')
      entity.mount(stage)
      stage1.addEntity(entity)
      }
    for (let i=0; i<json.bombs.length; i++) {
      const entity = new Entity(json.bombs[i].x, json.bombs[i].y, 'bomb')
      entity.mount(stage)
      stage1.addEntity(entity)
      }  
  });


