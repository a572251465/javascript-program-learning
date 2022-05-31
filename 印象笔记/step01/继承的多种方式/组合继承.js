function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function () {
  return this.name
}

function Son() {
  Parent.call(this, 'lihh')
  this.age = 20
}

Son.prototype = new Parent()

Son.prototype.getAge = function () {
  return this.age
}

const s = new Son()
console.log(s.getAge())
console.log(s.getName())