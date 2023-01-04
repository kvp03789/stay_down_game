export function collideTop(rectangle, top){
  if (rectangle.getBottom() > top){
    rectangle.setBottom(top)
  }
}


