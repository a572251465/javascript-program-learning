type IsEmptyType<T> = [keyof T] extends [never]
  ? [unknown] extends [T]
    ? false
    : number extends T
    ? true
    : false
  : false

type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type D = IsEmptyType<any> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown>

type E = IsEmptyType<object> // false
type C = IsEmptyType<{}> // true

export default {}
