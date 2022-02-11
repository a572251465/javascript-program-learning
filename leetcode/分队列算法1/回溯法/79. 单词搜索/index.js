var exist = function (board, word) {
  const h = board.length,
    w = board[0].length
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const visited = new Array(h)
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(w).fill(false)
  }

  // 表示网格的x，y坐标，以及匹配字符串s，以及匹配字符串元素k
  const check = (i, j, s, k) => {
    if (board[i][j] != s.charAt(k)) {
      return false
    } else if (k == s.length - 1) {
      return true
    }
    visited[i][j] = true
    let result = false
    for (const [dx, dy] of directions) {
      let newi = i + dx,
        newj = j + dy
      if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
        if (!visited[newi][newj]) {
          const flag = check(newi, newj, s, k + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visited[i][j] = false
    return result
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const flag = check(i, j, word, 0)
      if (flag) {
        return true
      }
    }
  }
  return false
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABCCED'
  )
)
