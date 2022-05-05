type IsNever<T> = any

type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false

type a = never & any

export default {}
