class PrimitiveNumber {
  // Symbol.hasInstance 用一个符号表示一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例
  static [Symbol.hasInstance](x) {
    return typeof x === 'number'
  }
}

console.log(11 instanceof PrimitiveNumber) // true
