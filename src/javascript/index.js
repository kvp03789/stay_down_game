import '../css/style.css'

(() => {
  const world_width = 480;
  const world_height = 480;
  const document_element = document.documentElement
  const display = document.querySelector("#canvas").getContext('2d', { alpha: false });

  function render() {

    display.fillStyle = '#303840';
    display.fillRect(0, 0, world_width, world_height)

  }

  function cycle() {
    window.requestAnimationFrame(cycle)
    
    render()
  }

  display.canvas.width = world_width;
  display.canvas.height = world_height;

  window.requestAnimationFrame(cycle)

})()

console.log("hello webpack")
