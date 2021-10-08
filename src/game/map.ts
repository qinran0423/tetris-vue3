import { gameRow, gameCol } from "../game";



export function initmap(map) {

  for (let i = 0; i < gameRow; i++) {
    const arr: Array<number> = [];
    for (let j = 0; j < gameCol; j++) {
      arr.push(0);
    }
    map.push(arr);
  }
  return map
}


export function addboxToMap(box, map) {
  for (let i = 0; i < box.shape.length; i++) {
    for (let j = 0; j < box.shape[0].length; j++) {
      const row = i + box.y;
      const col = j + box.x;

      if (box.shape[i][j] > 0) {
        map[row][col] = -1
      }
    }
  }
}
export function eliminateLine(map) {
  // 检测是不是可以消除行
  // 1. 先获取到所有满行的 索引
  _eliminateLine(getEliminateLine(map), map);


}

function _eliminateLine(lines, map) {
  const mapCol = map[0].length;
  // 2. 基于索引做删除 在对应的增加行
  lines.forEach(n => {
    map.splice(n, 1);
    map.unshift(new Array(mapCol).fill(0));
  });
}

function getEliminateLine(map) {
  return map.reduce((r, arr, i) => {
    const boo = arr.every((v) => v === -1)
    if (boo) {
      r.push(i)
    }
    return r
  }, [])
}


