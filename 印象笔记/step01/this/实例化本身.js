function Person() {
  this.name = 'lixx'
  this.age = 20
}

Person.prototype.getName = function () {
  return this.name
}

const p = new Person()
console.log(p.getName()) // lixx

function Person1() {
  this.name = 'xxx'
  return {
    name: 'yyy'
  }
}

const p1 = new Person1
console.log(p1.name) // yyy
