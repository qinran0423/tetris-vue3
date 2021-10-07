
export function getBottomPoints(matrix) {

  const points: any = []
  const row = matrix.length
  matrix[row - 1].forEach((v, j) => {
    if (matrix[row - 1][j] > 0) {
      points.push({
        x: j,
        y: row - 1
      })
    }
  })

  return points
}


export function rotate(matrix) {
  // 旋转公式
  let temp: any = []
  const row = matrix.length

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const newRow = row - 1 - j

      if (!temp[newRow]) {
        temp[newRow] = []
      }


      temp[newRow][i] = matrix[i][j]
    }
  }

  return temp
}