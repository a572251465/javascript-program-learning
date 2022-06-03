const arr = [1, 2, [3, [4, 5, [6, 7, [8, 9]]]]]

// console.log(`${arr}`.split(','))

function flat(arr = []) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}

// console.log(arr.flat(Infinity))
// console.log(flat(arr))

function flag1(arr = []) {
  return arr.reduce((memo, cur) => {
    if (!Array.isArray(cur)) {
      memo.push(cur)
      return memo
    }
    return memo.concat(flag1(cur))
  }, [])
}
console.log(flag1(arr))
