let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

const transform = (arr = []) => {
  const map = {}
  arr.forEach(item => {
    const {pid} = item
    ;(map[pid] || (map[pid] = [])).push(item)
  })

  for (const item of arr) {
    let {id} = item
    id = `${id}`
    if (map[id]) {
      item.children = map[id]
    }
  }
  return arr[0]
}
