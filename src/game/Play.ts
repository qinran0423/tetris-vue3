import { Game } from "./Game";
import { message } from "./message";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";


// 自己的
export class Player {
  private _game: Game;
  constructor(game) {
    this._game = game
    window.addEventListener('keydown', this.handleKeydown.bind(this))
  }

  start() {
    addTicker(this.handlerTicker.bind(this))
  }
  // 1秒执行一次
  timeInterval = 1000;
  _isDown = intervalTimer(this.timeInterval)
  handlerTicker(n) {
    if (this._isDown(n)) {
      this._game.moveBoxToDown()
      message.emit('down')
    }
  }
  handleKeydown(e) {
    switch (e.code) {
      case "ArrowLeft":
        this._game.moveBoxToLeft()
        message.emit('left')
        break;
      case "ArrowRight":
        this._game.moveBoxToRight()
        message.emit('right')
        break;
      case "ArrowUp":
        this._game.rotateBox()
        message.emit('rotate ')
        break;
      default:
        break;
    }
  }

}