type IsAny<T> = 0 extends 1 & T ? true : false

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false

export default {}
