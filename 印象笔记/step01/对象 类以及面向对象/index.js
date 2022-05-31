const person = {}

Object.defineProperty(person, 'name', {
  // 表示包含属性实际的值
  value: '张三',
  // 表示属性的值是否可以被修改
  writable: true,
  // 表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性
  configurable: true,
  // 表示属性是否可以通过 for-in 循环返回
  enumerable: true
})

const student = {}
Object.defineProperty(student, 'name', {
  get() {
    return '李四'
  },
  set(value) {
    student.name = value
  },
  configurable: true,
  enumerable: true
})
