export * from './config'

import { Box } from './box'
import { hitBottomBoundary, hitBottomBox } from './hit'
import { addboxToMap, initmap } from './map'
import { render } from './renderer'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'


let activeBox;
export function startGame(map) {
  initmap(map)
  activeBox = new Box()

  activeBox.x = 1;
  activeBox.y = 1;

  // 1秒执行一次
  let t = 0;
  let timeInterval = 1000;

  const isDown = intervalTimer(timeInterval)
  function handlerTicker(n) {
    if (isDown(n)) {
      moveDown(activeBox, map)
    }
    render(activeBox, map)
  }

  addTicker(handlerTicker)

  window.addEventListener('keydown', () => {
    // box.y++
    console.log('keydown');
  })

}


export function moveDown(box, map) {


  // 2.检测是不是🈶某个点超出了游戏范围 

  if (hitBottomBoundary(box, map) || hitBottomBox(box, map)) {
    addboxToMap(box, map)

    // 碰撞了底部需要一个新的box
    activeBox = new Box()

    return
  }

  box.y++

}