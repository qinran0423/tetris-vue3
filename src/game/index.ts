export * from './config'

import { createBox } from './box'
import { Game } from './Game'
import { initmap } from './map'
import { initMessage } from './message';
import { Player } from './Play';
import { Rival } from './Rival'

let selfGame: Game;
let player: Player
export function initSelfGame(map) {
  const box = createBox()
  selfGame = new Game(box, initmap(map))
  player = new Player(selfGame)
}


let rivalGame: Game
export function initRivalGame(map) {
  const box = createBox()
  rivalGame = new Game(box, initmap(map))
  const rival = new Rival(rivalGame)
}

export function startGame() {
  selfGame.start()
  rivalGame.start()
  player.start()
}


export function initGame() {
  initMessage()
}
