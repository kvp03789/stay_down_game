export const collideTop = (rectangle, top) => {
  if (rectangle.getBottom() > top){
    rectangle.setBottom(top)
    return true;
  }
  return false;
}

export const controller = {

  left: false,
  right: false,
  up: false

}

export const handleKeyDownUp = (e) => {
  let state = e.type == 'keydown'

  switch(e.keyCode){
    case 65: controller.left = state; console.log('left'); break;
    case 68: controller.right = state; console.log('right'); break;
    case 87: controller.up = state; console.log('up'); 
  }
}


