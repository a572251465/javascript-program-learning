Array.prototype.shuffle = function () {
  const self = this
  let len = self.length,
    i
  while (len) {
    i = Math.floor(Math.random() * len--);
    [self[len], self[i]] = [self[i], self[len]]
  }
  return self
}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())
