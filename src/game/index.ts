export * from './config'

import { Box } from './box'
import { initmap } from './map'
import { render } from './renderer'
import { addTicker } from './ticker'

export function startGame(map) {
  initmap(map)
  const box = new Box()

  box.x = 3;
  box.y = 3;


  function handlerTicker() {
    render(box, map)
  }

  addTicker(handlerTicker)

  window.addEventListener('keydown', () => {
    box.y++
    console.log('keydown');
  })

}
