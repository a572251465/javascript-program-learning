function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

const person = {
  name: 'lihh',
  friends: ['11', '22', '33']
}

const p1 = createObject(person)
const p2 = createObject(person)

p1.friends.push('44')
console.log(p2.friends)
