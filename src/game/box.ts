
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
};


// 继承

// 组合的开发思想
const boxInfos = {
  1: {
    type: 1,
    shape: [
      [1, 1],
      [1, 1]
    ]
  },
  2: {
    type: 2,
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]
  }
}


export function createBox() {
  const box = new Box()

  const max = Object.keys(boxInfos).length
  // const type = Math.floor(Math.random() * max) + 1 // 随机
  const type = 2 // 随机

  const { shape } = boxInfos[type]
  box.shape = shape

  return box
}
