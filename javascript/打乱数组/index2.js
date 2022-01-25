const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.shuffle = function () {
  const self = this
  let len = self.length - 1

  while (len >= 0) {
    const end = len
    const i = (Math.random() * len--) | 0
    ;[self[i], self[end]] = [self[end], self[i]]
  }

  return self
}

console.log(arr.shuffle())
