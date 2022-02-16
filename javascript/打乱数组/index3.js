Array.prototype.shuffle = function () {
  const arr = this

  let len = arr.length
  while (len--) {
    const randomIndex = (Math.random() * len) | 0
    ;[arr[randomIndex], arr[len]] = [arr[len], arr[randomIndex]]
  }

  return arr
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())
