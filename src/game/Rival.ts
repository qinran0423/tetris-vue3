import { Game } from "./Game";
import { message } from "./message";



export class Rival {
  private _game: Game;
  constructor(game) {
    this._game = game

    message.on('left', this.handleLeft.bind(this))
    message.on('right', this.handleRight.bind(this))
    message.on('rotate', this.handleRotate.bind(this))
    message.on('down', this.handleDown.bind(this))
  }

  handleLeft() {
    this._game.moveBoxToLeft()
  }

  handleRight() {
    this._game.moveBoxToRight()
  }

  handleRotate() {
    this._game.rotateBox()
  }

  handleDown() {
    this._game.moveBoxToDown()
  }

}

