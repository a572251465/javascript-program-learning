function Parent() {
  this.name = 'lihh'
}

Parent.prototype.getName = function () {
  return this.name
}

function Son() {
  this.age = 22
}
Son.prototype = new Parent()
Son.prototype.getAge = function () {
  return this.age
}

const s = new Son()
console.log(s.getName())
console.log(s.getAge())