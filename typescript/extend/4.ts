const person = { name: 'lihh', age: 20 }

type Person = typeof person
const getKey = function (this: Person, key: keyof Person) {
  return this[key]
}
getKey.call(person, 'name')

function sum(a: string, b: string): string
function sum(a: number, b: number): number
function sum(a: string | number, b: string | number): string | number {
  if (typeof a === 'string') return a + b
  if (typeof b === 'number') return a + b
  return "";
}

class User {
  say() {}
}

const u = new User()
const u1 = new User()
console.log(u.say === u1.say)

// User.prototype.setName();
const user = new User()
user.say()

export default {}
