interface Person {
  name: string
  age: number
}
type tupleArr = [string, number]
const enum menu {
  add,
  reduce
}

type KeyOf = keyof Person
type tuple = keyof tupleArr
type StringStr = keyof string
type Menu = keyof menu

export default {}
