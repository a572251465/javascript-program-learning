type add = 'add'
type total = `total ${add}` // total add

type AddState<T> = `code-${T & string}`
type state = 'success' | 'error' | 'loading'
type res = AddState<state> // code-success | code-error | code-loading

interface Person {
  name: string,
  age: number,
  address: string
}
type WrapperPerson<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K]
}
type res1 = WrapperPerson<Person> // { getName: () => string, getAge: () => number, getAddress: () => string }

export default {}
