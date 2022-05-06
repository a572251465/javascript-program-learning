type IsNever<T> = [T] extends [never] ? true : false

type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false

type a = number extends never ? 1 : 2 // 2
type b = never extends number ? 1 : 2 // 1
type c = [any] extends [never] ? 1 : 2 // 2
type d = never extends any ? 1 : 2 // 1

export default {}
