const a = {
  i: 0,
  [Symbol.toPrimitive]() {
    return ++this.i
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log('相等了')
}
