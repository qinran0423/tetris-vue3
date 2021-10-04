import { getBottomPoints } from "./matrix"


export function hitBottomBoundary(box, map) {
  // 1.获取box底部的所有的点
  const points = getBottomPoints(box.shape)

  const mapRow = map.length

  return points.some((point) => point.y + box.y + 1 >= mapRow)
}


export function hitBottomBox(box, map) {
  const points = getBottomPoints(box.shape)

  return points.some((point) => {
    const row = point.y + box.y + 1
    const col = point.x + box.x

    return map[row][col] === -1
  })
}