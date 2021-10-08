export * from './config'

import { createBox } from './box'
import { Game } from './Game'
import { initmap } from './map'


let game
export function initGame(map) {
  const box = createBox()
  game = new Game(box, initmap(map))
}


export function startGame() {
  game.start()
}

