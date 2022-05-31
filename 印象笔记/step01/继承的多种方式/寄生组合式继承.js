function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}

function Son(name, age) {
  Parent.call(this, name)
  this.age = age
}

Son.prototype = Object.create(Parent.prototype)
Son.prototype.Constructor = Son

Son.prototype.getAge = function () {
  return this.age
}
