import '../css/style.css'
import { Player } from './player';
import {collideTop, controller, handleKeyDownUp} from './utils.js'

(() => {
  const world_width = 480;
  const world_height = 480;

  const gravity = 1;
  const friction = 0.9;

  const document_element = document.documentElement;

  const display = document.querySelector("#canvas").getContext('2d', { alpha: false });

  const player = new Player(100, 100, 32, 32);

  const ground = {
    top: world_height - 32

  }

  

  function update() {

    if(controller.left) player.moveLeft()
    if(controller.right) player.moveRight()
    if(controller.up) player.jump()

    player.updatePosition(gravity, friction);

    if(collideTop(player, ground.top)){
      player.ground()
    }

  }

  function render() {

    display.fillStyle = '#303840';
    display.fillRect(0, 0, world_width, world_height)

    //draw ground
    display.strokeStyle = '#202830'
    display.beginPath();
    display.moveTo(0, ground.top);
    display.lineTo(world_width, ground.top);
    display.lineWidth = 4;
    display.stroke();

    display.fillStyle = player.color;
    display.fillRect(player.x, player.y, player.width, player.height)



  }

  function cycle() {
    window.requestAnimationFrame(cycle)
    update();
    render()
  }

  display.canvas.width = world_width;
  display.canvas.height = world_height;


  window.addEventListener('keydown', handleKeyDownUp);
  window.addEventListener('keyup', handleKeyDownUp)

  window.requestAnimationFrame(cycle)
})()


