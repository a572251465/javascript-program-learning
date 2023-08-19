// type Person = {
//   name: string
//   age: number
// } & { xxx: string }

interface Person {
  name: string
  age: number
  [key: string]: string | number
}

const person: Person = {
  name: 'lihh',
  age: 10,
  xxx: 'xxx'
}
console.log(person.xxx)

export default {}
