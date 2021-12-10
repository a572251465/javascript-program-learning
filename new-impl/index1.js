function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getName = function () {
  console.log(this.name)
}

const person = new Person('lihh', 23)
person.getName()

function createNew(Constr) {
  const params = Array.prototype.slice.call(arguments, 1)
  const obj = {}
  const result = Constr.call(obj, ...params)
  obj.__proto__ = Object.create(Constr.prototype)
  return result && typeof result === 'object' ? result : obj
}
const person1 = createNew(Person, 'lihh', 24)
person1.getName()
