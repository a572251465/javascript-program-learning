function User() {
  this.name = 'xxx1'
}

const u = new User()
console.log(u.name) // xxx1

function User1() {}

User1.prototype.name = 'xxx2'
const u1 = new User1()
console.log(u1.name) // xxx2

function User2() {}
// User2.prototype.name = 'xxx3'
const u2 = new User2()
// 最起码保证u2.__proto__ 没有被重写
u2.__proto__.__proto__ = u
console.log(u2.name) // xxx1

function User3() {}
const u3 = new User3()
u3.__proto__.__proto__ = u1
console.log(u3.name) // xxx2
