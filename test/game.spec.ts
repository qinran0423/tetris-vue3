import { Box } from '../src/game/box'
import { Game } from '../src/game/Game'

test('moveBoxToDown', () => {
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

  const game = new Game(box, map)

  game.moveBoxToDown()
  expect(box.y).toBe(1)

  game.moveBoxToDown()
  expect(box.y).toBe(2)

  game.moveBoxToDown()
  expect(box.y).toBe(2)

  expect(map).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0]
  ])
})

test('moveBoxToDown when hit other box', () => {
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
  const game = new Game(box, map)
  game.moveBoxToDown()
  expect(box.y).toBe(0)
  expect(map).toEqual([
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0]
  ])
})

test('消除', () => {
  const map = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, -1, -1]
  ]

  const box = new Box()

  box.shape = [
    [1, 1],
    [1, 1]
  ]
  box.y = 2
  const game = new Game(box, map)
  game.moveBoxToDown()
  expect(box.y).toBe(2)
  expect(map).toEqual([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [-1, -1, 0, 0]
  ])
})

test('z 形状的box渲染', () => {
  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]

  const box = new Box()

  box.shape = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]
  ]
  box.y = 1
  const game = new Game(box, map)
  game.moveBoxToDown()
  expect(box.y).toBe(1)

  expect(map).toEqual([
    [0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0]
  ])
})


test('z 形状的box碰撞到了z形状的box', () => {
  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0]
  ]

  const box = new Box()

  box.shape = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0]
  ]
  box.y = 0
  const game = new Game(box, map)
  game.moveBoxToDown()
  expect(box.y).toBe(1)

  // expect(map).toEqual([
  //   [-1, 0, 0, 0, 0],
  //   [-1, -1, 0, 0, 0],
  //   [-1, -1, 0, 0, 0],
  //   [-1, -1, 0, 0, 0],
  //   [0, -1, 0, 0, 0]
  // ])
})


