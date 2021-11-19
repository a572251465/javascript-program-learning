var a = {
  i: 0,
  [Symbol.toPrimitive]() {
    return ++this.i
  }
}

// 原理：对象跟非对象进行比较的时候，对象首先会调用toPrimitive进行转换，所以可以在这里做手脚
if (a == 1 && a == 2 && a == 3) {
  console.log('相等了')
}
