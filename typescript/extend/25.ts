interface Person {
  name: string
  age: number
  sex: boolean
}

type a = Person[keyof Person]

export default {}
