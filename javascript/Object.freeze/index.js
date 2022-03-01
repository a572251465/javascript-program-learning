// Object.freeze 是浅冻结/ 但是可以修改深层的属性 除非递归冻结

const obj = {
  age: 10,
  a: {
    age1: 12,
    b: {
      c: 2
    }
  }
}

const objCopy = Object.freeze(obj)
obj.a.age1 = 12
obj.a.b = {}

console.log(obj, objCopy)
