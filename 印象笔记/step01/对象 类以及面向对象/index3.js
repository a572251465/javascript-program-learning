function createObject(Ctor, ...args) {
  const obj = Object.create(Ctor.prototype)
  const result = Ctor.apply(obj, args)
  return typeof result === 'object' ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function () {
  return this.name
}

const p = new Person('张三', 29)
console.log(p.getName())

const p1 = createObject(Person, '李四', 29)
console.log(p1.getName())
