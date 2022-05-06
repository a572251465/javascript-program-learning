type IsEmptyType<T> = any

type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false

type a = {} extends object ? 1 : 2
type a1 =  object extends {} ? 1 : 2
type b = {} extends { a: 3 } ? 1 : 2
type c = {} extends string ? 1 : 2
type d = {} extends unknown ? 1 : 2
type d1 = unknown extends {} ? 1 : 2
type e = {} extends never ? 1 : 2
type h = {} extends Object ? 1 : 2
type g = Object extends {} ? 1 : 2

export default {}

type isUnknown<T> = keyof { [P in keyof T]: T[P] } extends never ? true : false
type f = isUnknown<object>