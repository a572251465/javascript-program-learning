type Union<T = boolean> = T | number

type a = Union<string>

type b<T extends keyof any, P> = P extends T ? P : never
type lb = b<'name' | 'age', 'name'>

// type IGetLen = <T extends { length: number }>(obj: T) => number
//
// const getLen: IGetLen = (obj) => {
//   return obj.length
// }

// function getLen<T extends { length: number }>(value: T) {
//   return value.length
// }

type ICommmon<T extends Record<string, any>> = {
  data: T
  code: number
} & { message?: string }

const getLen = <T extends { length: number }>(value: T) => {
  return value.length
}
getLen({ length: 5 })

type Person = {
  name: string
  age: number
}
let p: Person
let p1: Person & { address: string } = {
  name: 'chendd',
  age: 20,
  address: ''
}
p = p1

type Conditional<T, U> = T extends U ? 'success' : 'fail'
type test = Conditional<string, String>

export default {}
