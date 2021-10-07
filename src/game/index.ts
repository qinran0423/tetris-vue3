export * from './config'

import { createBox } from './box'
import { hitBottomBoundary, hitBottomBox } from './hit'
import { addboxToMap, eliminateLine, initmap } from './map'
import { render } from './renderer'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'


let activeBox;
export function startGame(map) {
  initmap(map)
  activeBox = createBox()

  activeBox.x = 0;
  activeBox.y = 0;

  // 1秒执行一次
  let timeInterval = 1000;

  const isDown = intervalTimer(timeInterval)
  function handlerTicker(n) {
    if (isDown(n)) {
      moveDown(activeBox, map)
    }
    render(activeBox, map)
  }

  addTicker(handlerTicker)

  window.addEventListener('keydown', (e) => {
    // box.y++
    switch (e.code) {
      case "ArrowLeft":
        activeBox.x--;
        break;

      case "ArrowRight":
        activeBox.x++;
        break;

      case "ArrowUp":
        activeBox.rotate()
        break;
      default:
        break;
    }
  })

}


export function moveDown(box, map) {


  // 2.检测是不是🈶某个点超出了游戏范围 

  if (hitBottomBoundary(box, map) || hitBottomBox(box, map)) {
    addboxToMap(box, map)

    eliminateLine(map)
    // 碰撞了底部需要一个新的box
    activeBox = createBox()

    return
  }

  box.y++

}