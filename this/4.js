function User() {
  this.name = 'lihh'
}

const u = new User()
console.log(u.name) // lihh

function Person() {
  this.name = 'lihh1'
  return {
    name: 'lihh2'
  }
}

const p = new Person()
console.log(p.name) // lihh2
