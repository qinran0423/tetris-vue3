import { createBox } from "./box";
import { hitBottomBoundary, hitBottomBox } from "./hit";
import { addboxToMap, eliminateLine } from "./map";
import { render } from "./renderer";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";


export class Game {
  private _map: any;
  private _activeBox: any;
  constructor(box, map) {
    this._map = map
    this._activeBox = box
  }

  start() {
    this._activeBox = createBox()
    addTicker(this.handlerTicker.bind(this))
  }
  // 1秒执行一次
  handlerTicker(n) {
    render(this._activeBox, this._map)
  }

  moveBoxToLeft() {
    this._activeBox.x--
  }

  moveBoxToRight() {
    this._activeBox.x++
  }

  rotateBox() {
    this._activeBox.rotate()
  }

  moveBoxToDown() {

    // 2.检测是不是🈶某个点超出了游戏范围 

    if (hitBottomBoundary(this._activeBox, this._map) || hitBottomBox(this._activeBox, this._map)) {
      addboxToMap(this._activeBox, this._map)

      eliminateLine(this._map)
      // 碰撞了底部需要一个新的box
      this._activeBox = createBox()

      return
    }

    this._activeBox.y++

  }
}