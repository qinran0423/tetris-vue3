import { gameRow, gameCol } from "../game";



export function initmap(map) {

  for (let i = 0; i < gameRow; i++) {
    const arr: Array<number> = [];
    for (let j = 0; j < gameCol; j++) {
      arr.push(0);
    }
    map.push(arr);
  }

}


export function addboxToMap(box, map) {
  for (let i = 0; i < box.shape.length; i++) {
    for (let j = 0; j < box.shape[0].length; j++) {
      const row = i + box.y;
      const col = j + box.x;

      map[row][col] = -1
    }
  }
}