export * from './config'

import { Box } from './box'
import { gameRow } from './config'
import { initmap } from './map'
import { getBottomPoints } from './matrix'
import { render } from './renderer'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'

export function startGame(map) {
  initmap(map)
  const box = new Box()

  box.x = 3;
  box.y = 3;

  // 1秒执行一次
  let t = 0;
  let timeInterval = 1000;

  const isDown = intervalTimer(timeInterval)
  function handlerTicker(n) {
    if (isDown(n)) {
      moveDown(box, map)
    }
    render(box, map)
  }

  addTicker(handlerTicker)

  window.addEventListener('keydown', () => {
    box.y++
    console.log('keydown');
  })

}


export function moveDown(box, map) {
  const mapRow = map.length

  // 1.获取box底部的所有的点
  const points = getBottomPoints(box.shape)

  const boo = points.some((point) => point.y + box.y + 1 >= mapRow)
  // 2.检测是不是🈶某个点超出了游戏范围 

  if (boo) return

  box.y++

}