interface Person {
  name: string
  age: number
}

type Person1 = Person & { address: string }
let A!: Person
let B!: Person1
A = B

const person: Person = {
  name: '',
  age: 0
}

export default {}
