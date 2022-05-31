function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}

const p = new Person('张三', 29)
const p1 = new Person('李四', 29)
