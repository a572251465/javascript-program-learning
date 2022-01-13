function Person(name, age) {
  this.age = age
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}

function createFactory() {
  const params = [].slice.call(arguments)
  const self = params.shift()

  const obj = {}
  const res = self.call(obj, ...params)

  obj.__proto__ = Object.create(self.prototype)

  return res && typeof res === 'object' ? res : obj
}

const person = createFactory(Person, 'lihh', 26)
console.log(person.getName())