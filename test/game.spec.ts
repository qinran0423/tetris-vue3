import { Box } from '../src/game/box'
import { moveDown } from '../src/game/index'

test('moveDown', () => {
  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  const box = new Box()

  box.shape = [
    [1, 1],
    [1, 1]
  ]
  box.y = 0
  moveDown(box, map)
  expect(box.y).toBe(1)

  moveDown(box, map)
  expect(box.y).toBe(2)

  moveDown(box, map)
  expect(box.y).toBe(2)

  expect(map).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0]
  ])
})

test('moveDown when hit other box', () => {
  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0]
  ]

  const box = new Box()

  box.shape = [
    [1, 1],
    [1, 1]
  ]
  box.y = 0
  moveDown(box, map)
  expect(box.y).toBe(0)
  expect(map).toEqual([
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0]
  ])
})