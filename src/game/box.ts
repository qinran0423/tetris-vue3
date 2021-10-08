import { rotate } from "./matrix";

export class Box {
  shape: number[][];
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.shape = [
      [1, 1],
      [1, 1]
    ]
  }
  _rotates = []
  _rotateIndex = 0
  rotate() {
    const rotateHandler: Function = this._rotates[this._rotateIndex]
    if (!rotateHandler) return
    this.shape = rotateHandler(this.shape)
    this._rotateIndex++
    if (this._rotateIndex >= this._rotates.length) {
      this._rotateIndex = 0
    }
  }
  setRotates(v) {
    if (!v) return
    this._rotates = v
  }
};


// 继承

// 组合的开发思想
const boxInfos = {
  1: {
    type: 1,
    shape: [
      [1, 1],
      [1, 1]
    ],
  },
  2: {
    type: 2,
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
  },
  3: {
    type: 3,
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
    rotateStrategy: [rotate, rotate, rotate, rotate],
  },
}


export function createBox() {
  const box = new Box()

  const max = Object.keys(boxInfos).length
  const type = Math.floor(Math.random() * max) + 1 // 随机
  // const type = 3// 随机

  const { shape, rotateStrategy } = boxInfos[type]
  box.shape = shape
  box.setRotates(rotateStrategy)
  return box
}
