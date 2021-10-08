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

    // activeBox.x = 0;
    // activeBox.y = 0;



    addTicker(this.handlerTicker.bind(this))

    window.addEventListener('keydown', this.handleKeydown.bind(this))
  }
  handleKeydown(e) {
    switch (e.code) {
      case "ArrowLeft":
        this._activeBox.x--;
        break;

      case "ArrowRight":
        this._activeBox.x++;
        break;

      case "ArrowUp":
        this._activeBox.rotate()
        break;
      default:
        break;
    }
  }

  // 1秒执行一次
  timeInterval = 1000;
  _isDown = intervalTimer(this.timeInterval)
  handlerTicker(n) {
    if (this._isDown(n)) {
      this.moveDown()
    }
    render(this._activeBox, this._map)
  }

  moveDown() {


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